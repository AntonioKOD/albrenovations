
import type {ReactNode} from 'react'
import { ImageComparison, ImageComparisonImage, ImageComparisonSlider } from './motion-primitives/image-comparison'

interface ProjectProps {
    title: string,
    description: string,
    content: string,
    icon: ReactNode,
    imagePosition: 'left' | 'right',
    firstImage: {
        src: string
        alt: string
    },
    secondImage: {
        src: string
        alt: string
    }
}

export default function ProjectSection({
    title,
    description,
    content,
    icon,
    imagePosition,
    firstImage,
    secondImage
}: ProjectProps) {
    const textContent = (
        <div className='space-y-6'>
            <div className='flex items-center gap-4'>
                <div className='bg-primary/30 p-4 rounded-md'>
                    {icon}
                </div>
                <h3 className='text-3xl font-bold'>{title}</h3>
            </div>
            <p className='text-gray-700 leading-relaxed'>{description}</p>
            <p className='text-gray-700 leading-relaxed'>{content}</p>
        </div>
    )
    const imageContent = (
        <ImageComparison className='aspect-16/10 w-full rounded-lg border border-zinc-200'>
            <ImageComparisonImage
                src={firstImage.src}
                alt={firstImage.alt}
                position='left'/>
            <ImageComparisonImage
            src={secondImage.src}
            alt={secondImage.alt}
            position='right'/>
            <ImageComparisonSlider className='w-2 bg-white/50 backdrop-blur-xs transition-colors hover:bg-white/80'>
                <div className='bg-primary w-1/2 h-full rounded-lg'></div>
            </ImageComparisonSlider>
        </ImageComparison>
    )

    return (
        <section className='py-16 bg-white'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {imagePosition === 'left' ? (
                        <>
                            <div className=' md:block'>
                                {imageContent}
                            </div>
                            <div>
                                {textContent}
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                {textContent}
                            </div>
                            <div className=' md:block'>
                                {imageContent}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}