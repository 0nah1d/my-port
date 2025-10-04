import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CircleText() {
    const imageRef = useRef(null)

    useEffect(() => {
        const section3 = document.querySelector('#section3')

        gsap.to(imageRef.current, {
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
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        }
    }, [])

    return (
        <div className="flex items-center justify-center">
            <img
                src="/images/circleTitle.svg"
                alt="circleTitle"
                className="w-[50vw] h-[50vw]"
                ref={imageRef}
            />
        </div>
    )
}
