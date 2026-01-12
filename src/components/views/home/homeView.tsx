'use client'
import MagneticGSAP from '@/components/GSAP/magnetic'
import CircleText from '@/components/views/home/elements/circleText'
import TitleScroll from '@/components/views/home/elements/titleScroll'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const HomeView = () => {
    const mainRef = useRef<HTMLDivElement | null>(null)
    const section1Timeline = useRef<gsap.core.Timeline | null>(null)

    useGSAP(
        () => {
            if (!mainRef.current) return

            gsap.registerPlugin(ScrollTrigger)

            section1Timeline.current = gsap.timeline()

            const leftElements = mainRef.current.querySelectorAll<
                HTMLHeadingElement | HTMLDivElement
            >('#section1 .left h1, #section1 .left h6, #section1 .left .button')

            section1Timeline.current.from(
                leftElements,
                {
                    x: -1000,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power4.out',
                },
                'a'
            )

            const rightElement =
                mainRef.current.querySelector<HTMLDivElement>(
                    '#section1 .right'
                )

            if (rightElement) {
                section1Timeline.current.fromTo(
                    rightElement,
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1.5,
                        ease: 'power4.out',
                    },
                    'a'
                )
            }

            gsap.fromTo(
                '#section2',
                { opacity: 0, y: 400 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: '#section2',
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: 1.5,
                    },
                }
            )
        },
        { scope: mainRef }
    )

    return (
        <>
            <div ref={mainRef} className="snap-x snap-mandatory">
                <section
                    id="section1"
                    className="max-w-screen-xl w-full lg:min-h-screen pt-[3vw] px-4 mx-auto flex flex-col lg:flex-row justify-between"
                >
                    <div className="left text-center lg:text-left">
                        <h1 className="text-[8vw] md:text-[6vw] lg:text-[5vw] font-exo2 mt-16 lg:mt-32 leading-[1]">
                            Hi, my <br />{' '}
                            <span className="whitespace-nowrap">
                                name is Nahid.
                            </span>
                        </h1>

                        <h6 className="text-[3vw] md:text-[1.5vw] lg:text-[1vw] font-fira_code mt-4">
                            A passionate full stack web developer from
                            Bangladesh.
                        </h6>
                        <div className="my-16 lg:mt-36 button">
                            <Link
                                href={'/contact'}
                                className="px-8 py-3 text-[4vw] md:text-[2vw] lg:text-[1.2vw] bg-primary text-white rounded-full font-fira_regular"
                            >
                                Get in touch
                            </Link>
                        </div>
                    </div>
                    <div className="right mt-8 lg:mt-0 flex justify-center lg:justify-end">
                        <div className="relative w-full md:w-[50vw] lg:w-[40vw]">
                            <MagneticGSAP>
                                <Image
                                    src="images/men.svg"
                                    alt="Image"
                                    width={900}
                                    height={900}
                                    priority
                                    className="w-[80vw] lg:w-[50vw] lg:absolute lg:left-0 lg:top-0"
                                />
                            </MagneticGSAP>
                        </div>
                    </div>
                </section>

                <section
                    id="section2"
                    className="snap-start min-h-screen w-full flex justify-center items-center relative bg-men bg-cover bg-center bg-no-repeat"
                >
                    <TitleScroll />
                </section>

                <section
                    id="section3"
                    className="min-h-screen w-full h-full flex justify-center items-center"
                >
                    <CircleText />
                </section>
            </div>
        </>
    )
}

export default HomeView
