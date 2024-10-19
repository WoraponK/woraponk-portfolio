// Lib
import React from 'react'

// Shadcn
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

type Props = {
  icon: React.ReactNode
  title: string
  description: string
}

const SkillCard: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer flex items-center justify-center space-x-2 p-4 bg-background border-2 border-background transition-colors hover:bg-foreground hover:text-primary hover:border-primary">
            <span className="text-5xl">{icon}</span>
            <h3 className="max-sm:hidden">{title}</h3>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="w-full grid place-items-center mb-2">
              <span className="text-9xl text-center text-primary">{icon}</span>
            </div>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SkillCard
