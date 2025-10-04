'use client'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRef } from 'react'
import MagneticGSAP from '@/components/GSAP/MagneticGSAP'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const TitleScroll = dynamic(() => import('@/components/TitleScroll'), {
    ssr: false,
})
const CircleText = dynamic(() => import('@/components/CircleText'), {
    ssr: false,
})

export default function Home() {
    const mainRef = useRef()
    const section1Timeline = useRef()

    useGSAP(
        () => {
            gsap.registerPlugin(ScrollTrigger)

            section1Timeline.current = gsap.timeline()

            section1Timeline.current.from(
                mainRef.current.querySelectorAll(
                    '#section1 .left h1, h6, .button'
                ),
                {
                    x: -1000,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: 'power4.out',
                },
                'a'
            )

            section1Timeline.current.fromTo(
                mainRef.current.querySelector('#section1 .right'),
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'power4.out',
                },
                'a'
            )

            gsap.fromTo(
                '#section2',
                { opacity: 0, y: 400 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 2,
                    scrollTrigger: {
                        trigger: '#section2',
                        start: 'top 80%',
                        end: 'top 60%',
                        scrub: 1.5,
                        ease: 'power4.out',
                    },
                }
            )
        },
        { scope: mainRef }
    )

    return (
        <div ref={mainRef} className={'snap-x snap-mandatory'}>
            <section
                id="section1"
                className="max-w-screen-xl w-full lg:min-h-screen pt-[3vw] px-4 mx-auto flex flex-col lg:flex-row justify-between"
            >
                <div className="left text-center lg:text-left">
                    <h1 className="text-[8vw] md:text-[6vw] lg:text-[5vw] font-exo2_bold mt-16 lg:mt-32 leading-[1]">
                        Hi, my <br />{' '}
                        <span className="whitespace-nowrap">
                            name is Nahid.
                        </span>
                    </h1>

                    <h6 className="text-[3vw] md:text-[1.5vw] lg:text-[1vw] font-fira_regular mt-4">
                        A passionate full stack web developer from Bangladesh.
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
                                width="900"
                                height="900"
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
    )
}
