import { Loader2 } from 'lucide-react'

interface LoadingMessageProps {
  title?: string
  description?: string
}

export function LoadingMessage({ 
  title = 'Gathering info',
  description = "I'm processing your request..."
}: LoadingMessageProps) {
  return (
    <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="flex-shrink-0">
        <div className="h-6 w-6 rounded-md bg-primary/10 flex items-center justify-center">
          <Loader2 className="h-4 w-4 animate-spin text-primary" />
        </div>
      </div>
      <div className="flex-1 space-y-2">
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}
