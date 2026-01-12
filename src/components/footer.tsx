'use client'

import { appName } from '@/config/app'
import {
    faDiscord,
    faFacebookF,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const followUsLinks = [
    {
        name: 'Github',
        icon: faGithub,
        href: 'https://github.com/0nah1d',
    },
    {
        name: 'Discord',
        icon: faDiscord,
        href: 'https://discord.gg/tJ5W2Cmy',
    },
]

const resourcesLinks = [
    {
        name: 'Next.js',
        href: 'https://nextjs.org/',
    },
    {
        name: 'Tailwind CSS',
        href: 'https://tailwindcss.com/',
    },
    {
        name: 'GSAP',
        href: 'https://gsap.com/',
    },
]

const legalLinks = [
    {
        name: 'Privacy Policy',
        href: 'https://www.example.com',
    },
    {
        name: 'Terms & Conditions',
        href: 'https://www.example.com',
    },
]

const socialLinks = [
    {
        icon: faFacebookF,
        href: 'https://www.facebook.com/0nah1d',
    },
    {
        icon: faDiscord,
        href: 'https://discord.gg/tJ5W2Cmy',
    },
    {
        icon: faLinkedin,
        href: 'https://www.linkedin.com/in/0nah1d',
    },
    {
        icon: faGithub,
        href: 'https://github.com/0nah1d',
    },
]

const Footer = () => {
    return (
        <footer className="font-exo2 mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-24">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="/">
                        <h2 className="uppercase text-4xl font-anton text-[#178573]">
                            {appName}
                        </h2>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Resources
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            {resourcesLinks.map((link, index) => (
                                <li className="mb-4" key={index}>
                                    <Link
                                        target="_blank"
                                        href={link.href}
                                        className="hover:underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Follow us
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            {followUsLinks.map((link, index) => (
                                <li className="mb-4" key={index}>
                                    <Link
                                        target="_blank"
                                        href={link.href}
                                        className="hover:underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Legal
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            {legalLinks.map((link, index) => (
                                <li className="mb-4" key={index}>
                                    <Link
                                        target="_blank"
                                        href={link.href}
                                        className="hover:underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">
                    © <span>{new Date().getFullYear()}</span>{' '}
                    <Link
                        target="_blank"
                        href="https://github.com/0nah1d"
                        className="hover:underline"
                    >
                        Nahid™
                    </Link>
                    . All Rights Reserved.
                </span>

                <div className="flex mt-4 sm:justify-center items-center sm:mt-0">
                    {socialLinks.map((link) => (
                        <Link
                            target="_blank"
                            href={link.href}
                            className="text-gray-500 hover:text-gray-900 ms-5"
                        >
                            <FontAwesomeIcon
                                icon={link.icon}
                                className="h-4 w-4"
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
