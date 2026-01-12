'use client'
import {
    faFacebookF,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import {
    faEnvelope,
    faLocationDot,
    faPaperPlane,
    faPhone,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { useRef } from 'react'

const Contact = () => {
    const contactLeftRef = useRef<HTMLDivElement | null>(null)
    const contactRightRef = useRef<HTMLDivElement | null>(null)

    useGSAP(
        () => {
            const contactTimeline = gsap.timeline()

            if (contactLeftRef.current) {
                const leftElements = contactLeftRef.current.querySelectorAll<
                    | HTMLHeadingElement
                    | HTMLParagraphElement
                    | HTMLButtonElement
                    | HTMLLIElement
                >('h1, p, button, li')

                contactTimeline.from(
                    leftElements,
                    {
                        y: 300,
                        opacity: 0,
                        stagger: 0.2,
                        ease: 'power4.out',
                        duration: 1,
                    },
                    'a'
                )
            }

            if (contactRightRef.current) {
                const rightElements = contactRightRef.current.querySelectorAll<
                    HTMLInputElement | HTMLTextAreaElement | HTMLButtonElement
                >('input, textarea, button')

                contactTimeline.from(
                    rightElements,
                    {
                        y: 300,
                        opacity: 0,
                        stagger: 0.2,
                        ease: 'power4.out',
                        duration: 1,
                    },
                    'a'
                )
            }
        },
        { scope: contactLeftRef }
    )

    return (
        <>
            <div className="grid lg:grid-cols-2 gap-14">
                <div ref={contactLeftRef}>
                    <h1 className="text-5xl font-bold font-exo2_bold">
                        Get in Touch
                    </h1>
                    <p className="text-base mt-4 leading-relaxed font-exo2_regular">
                        Have some big idea or brand to develop and need help?
                        Then reach out! We&apos;d love to hear about your
                        project and provide help.
                    </p>

                    <ul className="mt-12 space-y-6">
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                className="h-4 w-4"
                            />
                            <h6 className="text-base ml-4 font-exo2_regular">
                                nahidthedeveloper@gmail.com
                            </h6>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faPhone}
                                className="h-4 w-4"
                            />
                            <h6 className="text-base ml-4 font-exo2_regular">
                                +88 01750423751
                            </h6>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faLocationDot}
                                className="h-4 w-4"
                            />
                            <h6 className="text-base ml-4 font-exo2_regular">
                                Rangpur 5680, Bangladesh.
                            </h6>
                        </li>
                    </ul>

                    <ul className="flex mt-12 space-x-4">
                        <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="">
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    className="h-4 w-4 text-white"
                                />
                            </Link>
                        </li>
                        <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="">
                                <FontAwesomeIcon
                                    icon={faLinkedin}
                                    className="h-4 w-4 text-white"
                                />
                            </Link>
                        </li>
                        <li className="bg-primary h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <Link href="">
                                <FontAwesomeIcon
                                    icon={faGithub}
                                    className="h-4 w-4 text-white"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div
                    className="p-6 rounded-lg font-fira_regular shadow-xl"
                    ref={contactRightRef}
                >
                    <form className="mt-8 space-y-4">
                        <div className="w-full h-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#178573]"
                            />
                        </div>
                        <div className="w-full h-full overflow-hidden">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#178573]"
                            />
                        </div>
                        <div className="w-full h-full overflow-hidden">
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full rounded-lg py-3 px-4 text-gray-800 text-sm outline-[#178573]"
                            />
                        </div>
                        <div className="w-full h-full overflow-hidden">
                            <textarea
                                placeholder="Message"
                                rows={6}
                                className="w-full rounded-lg px-4 text-gray-800 text-sm pt-3 outline-[#178573]"
                            ></textarea>
                        </div>
                        <div className="w-full h-full overflow-hidden">
                            <button
                                type="button"
                                className="text-white bg-primary tracking-wide rounded-lg text-sm px-4 py-3 flex items-center justify-center w-full !mt-6"
                            >
                                <FontAwesomeIcon
                                    icon={faPaperPlane}
                                    className="h-4 w-4 text-white mr-2"
                                />
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
