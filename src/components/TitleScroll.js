'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default function TitleScroll() {
    const titleScrollRef = useRef(null)
    useEffect(() => {
        let xPercent = -100
        let direction = -1
        let speed = 0.1

        const ctx = gsap.context(() => {
            const titleScroll = titleScrollRef.current
            const text1 = titleScroll.querySelector('.firstTitle')
            const text2 = titleScroll.querySelector('.secondTitle')
            const icons = titleScroll.querySelectorAll('.titleIcon')

            gsap.set(text1, { xPercent: xPercent })
            gsap.set(text2, { xPercent: xPercent })
            gsap.set(icons, { rotation: 0 })

            const animate = () => {
                if (xPercent < -100) {
                    xPercent = 0
                } else if (xPercent > 0) {
                    xPercent = -100
                }

                gsap.set(text1, { xPercent: xPercent })
                gsap.set(text2, { xPercent: xPercent })

                gsap.to(icons, {
                    rotation: direction === -1 ? 180 : 0,
                    duration: 0.3,
                    ease: 'power1.out',
                    overwrite: true, // Ensure overwrite of previous animations
                })

                xPercent += speed * direction

                requestAnimationFrame(animate)
            }
            requestAnimationFrame(animate)

            const handleWheel = (event) => {
                direction = event.deltaY > 0 ? -1 : 1
            }

            window.addEventListener('wheel', handleWheel)

            return () => {
                window.removeEventListener('wheel', handleWheel)
            }
        }, titleScrollRef)

        return () => ctx.revert()
    }, [])
    return (
        <div
            className="w-full absolute bottom-10 left-0"
            ref={titleScrollRef}
            id="titleScroll"
        >
            <div className="flex items-center text-white">
                <div className="firstTitle flex items-center">
                    <h1 className="name text-[10vw] font-exo2_bold text-nowrap">
                        Nahid Hasan
                    </h1>
                    <FontAwesomeIcon
                        icon={faLocationArrow}
                        className="titleIcon h-[8vw] w-[8vw] mt-[2vw] mx-[3vw]"
                    />
                    <h1 className="name text-[10vw] font-exo2_bold text-nowrap">
                        Nahid Hasan
                    </h1>
                    <FontAwesomeIcon
                        icon={faLocationArrow}
                        className="titleIcon h-[8vw] w-[8vw] mt-[2vw] mx-[3vw]"
                    />
                </div>
                <div className="secondTitle flex items-center">
                    <h1 className="name text-[10vw] font-exo2_bold text-nowrap">
                        Nahid Hasan
                    </h1>
                    <FontAwesomeIcon
                        icon={faLocationArrow}
                        className="titleIcon h-[8vw] w-[8vw] mt-[2vw] mx-[3vw]"
                    />
                    <h1 className="name text-[10vw] font-exo2_bold text-nowrap">
                        Nahid Hasan
                    </h1>
                    <FontAwesomeIcon
                        icon={faLocationArrow}
                        className="titleIcon h-[8vw] w-[8vw] mt-[2vw] mx-[3vw]"
                    />
                </div>
            </div>
        </div>
    )
}
