'use client'

import Link from 'next/link'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Project', path: '/project' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const pathname = usePathname()
    const appName = useRef(null)
    const openButton = useRef(null)
    const navbarTimeline = useRef(null)
    const sideMenu = useRef(null)
    const menuTimeline = useRef(null)

    // AppName and Menu Icon
    useEffect(() => {
        const ctx = gsap.context(() => {
            const h2 = appName.current
            const textArray = h2.textContent.split('')
            const halfText = Math.floor(textArray.length / 2)
            let animatedText = ''

            textArray.forEach((char, index) => {
                if (char === ' ') {
                    animatedText += `<span style="display: inline-block">&nbsp;</span>`
                } else if (index < halfText) {
                    animatedText += `<span class="firstHalf" style="display: inline-block">${char}</span>`
                } else {
                    animatedText += `<span class="secondHalf" style="display: inline-block">${char}</span>`
                }
            })
            h2.innerHTML = animatedText

            navbarTimeline.current = gsap
                .timeline()
                .from(
                    '.firstHalf',
                    {
                        y: 50,
                        duration: 0.3,
                        delay: 1,
                        stagger: 0.15,
                        opacity: 0,
                    },
                    'a'
                )

                .from(
                    '.secondHalf',
                    {
                        y: 50,
                        duration: 0.3,
                        delay: 1,
                        stagger: -0.15,
                        opacity: 0,
                    },
                    'a'
                )

                .from(
                    openButton.current,
                    {
                        y: 50,
                        opacity: 0,
                        duration: 0.5,
                    },
                    '-=1'
                )
        }, [appName, openButton])

        return () => ctx.revert()
    }, [])

    // Sidebar
    useEffect(() => {
        const ctx = gsap.context(() => {
            menuTimeline.current = gsap
                .timeline({ paused: true })
                .to(sideMenu.current, {
                    right: 0,
                    duration: 0.5,
                    ease: 'power3.out',
                })
                .from(sideMenu.current.querySelectorAll('.link'), {
                    x: 200,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.2,
                    ease: 'power3.out',
                })
                .from(sideMenu.current.querySelector('#closeButton'), {
                    opacity: 0,
                    duration: 0.2,
                })
        }, sideMenu)

        return () => ctx.revert()
    }, [])

    const handleOpen = () => {
        menuTimeline.current.play()
    }

    const handleClose = () => {
        menuTimeline.current.reverse()
    }

    return (
        <div className="w-full sticky top-0" style={{ zIndex: '9999' }}>
            <div className="mx-auto w-full max-w-screen-xl px-4 py-6 flex justify-between items-center">
                <Link href="/">
                    <h2
                        className="uppercase text-4xl font-anton_regular text-[#178573]"
                        ref={appName}
                    >
                        Nahid Port.
                    </h2>
                </Link>
                <div
                    onClick={handleOpen}
                    className="flex flex-col justify-between w-14 h-12 bg-primary p-3 rounded-xl cursor-pointer"
                    ref={openButton}
                >
                    <div className="w-full h-1 bg-white rounded"></div>
                    <div className="w-full h-1 bg-white rounded"></div>
                    <div className="w-full h-1 bg-white rounded"></div>
                </div>
            </div>

            <div
                ref={sideMenu}
                className="flex flex-col gap-8 bg-[rgba(23,133,115,0.17)] backdrop-blur-2xl w-2/3 h-screen md:w-1/3 px-24 pt-32 fixed top-0 -right-2/3 md:-right-1/3 z-50"
            >
                {links.map((link, index) => (
                    <Link href={link.path} key={index} onClick={handleClose}>
                        <h2
                            className={`link uppercase text-xl ${
                                pathname === link.path
                                    ? 'font-exo2_bold'
                                    : 'font-exo2_regular'
                            } text-black hover:font-exo2_bold`}
                        >
                            {link.name}
                        </h2>
                    </Link>
                ))}
                <FontAwesomeIcon
                    icon={faXmark}
                    id="closeButton"
                    onClick={handleClose}
                    className="w-6 h-6 text-white absolute top-6 right-6 bg-primary p-2 rounded-xl cursor-pointer"
                />
            </div>
        </div>
    )
}
