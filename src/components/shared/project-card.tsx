// Lib
import React from 'react'

// Firebase
import FirebaseImage from '../firebase/firebase-image'

// Shadcn
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'

// Include in project
import { TProject } from '@/lib/type'
import { formatEProject } from '@/lib/others'

const ProjectCard: React.FC<TProject> = ({ image, title, description, type, position }) => {
  return (
    <div className="bg-foreground w-full text-background">
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer relative group overflow-hidden">
            <div className="p-2 absolute bg-transparent w-full h-full grid place-items-center transition-all group-hover:bg-black/30 z-10">
              <h6 className="bg-foreground px-3 py-1 shadow-md shadow-primary transition-all group-hover:bg-primary group-hover:text-foreground group-hover:shadow-black line-clamp-1">
                {title}
              </h6>
            </div>
            <FirebaseImage
              imagePath={image}
              alt={`project-${title}`}
              className="aspect-video object-cover object-top w-full transition-transform group-hover:scale-110 grayscale"
            />
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="mt-4 mb-2">
              <FirebaseImage
                imagePath={image}
                alt={`project-${title}`}
                className="aspect-video object-contain object-top"
              />
            </div>
            <div className="flex flex-wrap gap-1 my-4">
              <Badge className="w-fit">{position}</Badge>
              <Badge variant="outline" className="text-background w-fit">
                {formatEProject(type)}
              </Badge>
            </div>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ProjectCard
