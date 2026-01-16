import type { Message } from '../../types'
import { MessageAvatar } from './MessageAvatar'
import { formatMessageTime } from '../../utils/dateUtils'

interface UserMessageProps {
  message: Message
}

export function UserMessage({ message }: UserMessageProps) {
  return (
    <div className="flex gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <MessageAvatar type="user" />
      <div className="flex-1">
        <p className="text-sm whitespace-pre-wrap">{message.content as string}</p>
        <p className="text-xs text-muted-foreground mt-1">
          {formatMessageTime(message.timestamp)}
        </p>
      </div>
    </div>
  )
}
