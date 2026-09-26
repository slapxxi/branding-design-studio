import ResizeIcon from '@/assets/resize-icon.svg'
import FrameIcon from '@/assets/frame-icon.svg'
import ShapesIcon from '@/assets/shapes-icon.svg'

type Card = {
  id: number
  title: string
  description: string
  icon: HTMLElement
}

export const title = 'We Build Experiences'

export const cards: Card[] = [
  {
    id: 1,
    title: 'Prototyping',
    description: "Make sure you're building the right product.",
    icon: ResizeIcon as unknown as HTMLElement,
  },
  {
    id: 2,
    title: 'Web Design',
    description: 'Attract and engage your customers with a website.',
    icon: FrameIcon as unknown as HTMLElement,
  },
  {
    id: 3,
    title: 'Development',
    description: 'Ensure your site performs up to your users’ standards.',
    icon: ShapesIcon as unknown as HTMLElement,
  },
]
