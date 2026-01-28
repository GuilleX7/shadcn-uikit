#!/usr/bin/env node

import { readFileSync } from 'fs';
import { execSync } from 'child_process';

const packageJsonPath = './packages/ui/package.json';
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

const allDeps = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies
};

const DAYS_THRESHOLD = 21;
const MS_PER_DAY = 24 * 60 * 60 * 1000;
const now = Date.now();
const thresholdDate = new Date(now - DAYS_THRESHOLD * MS_PER_DAY);

console.log(`Checking if all dependencies are older than ${DAYS_THRESHOLD} days (published before ${thresholdDate.toISOString().split('T')[0]})\n`);

const results = [];
let recentPackages = [];

for (const [pkg, version] of Object.entries(allDeps)) {
  try {
    // Get the package info from npm
    const versionToCheck = version.replace(/^[\^~]/, '');
    const cmd = `npm view ${pkg}@${versionToCheck} time --json`;
    const output = execSync(cmd, { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] });
    const timeData = JSON.parse(output);
    
    // The time object contains all versions and their publication dates
    const publishDateStr = timeData[versionToCheck];
    
    if (!publishDateStr) {
      console.error(`No publish date found for ${pkg}@${versionToCheck}`);
      continue;
    }
    
    const publishDate = new Date(publishDateStr);
    const ageInDays = Math.floor((now - publishDate.getTime()) / MS_PER_DAY);
    const isOld = publishDate < thresholdDate;
    
    results.push({
      package: pkg,
      version: versionToCheck,
      publishDate: publishDate.toISOString().split('T')[0],
      ageInDays,
      isOld
    });
    
    if (!isOld) {
      recentPackages.push({ pkg, version: versionToCheck, publishDate: publishDate.toISOString().split('T')[0], ageInDays });
    }
    
  } catch (error) {
    console.error(`Error checking ${pkg}@${version}: ${error.message}`);
  }
}

// Sort by age
results.sort((a, b) => a.ageInDays - b.ageInDays);

console.log('\n=== SUMMARY ===');
console.log(`Total packages checked: ${results.length}`);
console.log(`Packages older than ${DAYS_THRESHOLD} days: ${results.filter(r => r.isOld).length}`);
console.log(`Packages newer than ${DAYS_THRESHOLD} days: ${recentPackages.length}\n`);

if (recentPackages.length > 0) {
  console.log(`❌ Found ${recentPackages.length} package(s) published within the last ${DAYS_THRESHOLD} days:\n`);
  recentPackages.forEach(({ pkg, version, publishDate, ageInDays }) => {
    console.log(`  - ${pkg}@${version}`);
    console.log(`    Published: ${publishDate} (${ageInDays} days ago)`);
  });
  console.log('\n');
} else {
  console.log(`✅ All dependencies are older than ${DAYS_THRESHOLD} days!\n`);
}

// Show the 10 newest packages
console.log('\n=== 10 NEWEST PACKAGES ===');
results.slice(0, 10).forEach(({ package: pkg, version, publishDate, ageInDays }) => {
  console.log(`${pkg}@${version}: ${publishDate} (${ageInDays} days ago)`);
});
