'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const CircleText = () => {
    const imageRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const section3 = document.querySelector<HTMLElement>('#section3')
        if (!section3 || !imageRef.current) return

        const animation = gsap.to(imageRef.current, {
            rotation: 360,
            scrollTrigger: {
                trigger: section3,
                scroller: document.body,
                start: 'top top',
                end: 'top -100%',
                scrub: 1,
                // markers: true,
                pin: true,
            },
        })

        return () => {
            animation.scrollTrigger?.kill()
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div className="flex items-center justify-center">
            <div ref={imageRef} className="w-[50vw] h-[50vw] relative">
                <Image
                    src="/images/circleTitle.svg"
                    alt="circleTitle"
                    fill
                    style={{ objectFit: 'contain' }}
                    priority
                />
            </div>
        </div>
    )
}

export default CircleText
