'use client'

import {
    faDiscord,
    faFacebookF,
    faGithub,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="font-exo2_regular mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 mt-24">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="/">
                        <h2 className="uppercase text-4xl font-anton_regular text-[#178573]">
                            Nahid Port.
                        </h2>
                    </Link>
                </div>

                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Resources
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link
                                    target="_blank"
                                    href="https://nextjs.org/"
                                    className="hover:underline"
                                >
                                    Next.js
                                </Link>
                            </li>
                            <li className="mb-4">
                                <Link
                                    target="_blank"
                                    href="https://tailwindcss.com/"
                                    className="hover:underline"
                                >
                                    Tailwind CSS
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target="_blank"
                                    href="https://gsap.com/"
                                    className="hover:underline"
                                >
                                    GSAP
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Follow us
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link
                                    target="_blank"
                                    href="https://github.com/nahidthedeveloper"
                                    className="hover:underline"
                                >
                                    Github
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target="_blank"
                                    href="https://discord.gg/4eeurUVvTy"
                                    className="hover:underline"
                                >
                                    Discord
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                            Legal
                        </h2>
                        <ul className="text-gray-500 font-medium">
                            <li className="mb-4">
                                <Link
                                    target="_blank"
                                    href="#"
                                    className="hover:underline"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    target="_blank"
                                    href="#"
                                    className="hover:underline"
                                >
                                    Terms &amp; Conditions
                                </Link>
                            </li>
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
                        href="https://github.com/nahidthedeveloper"
                        className="hover:underline"
                    >
                        Nahid™
                    </Link>
                    . All Rights Reserved.
                </span>

                <div className="flex mt-4 sm:justify-center items-center sm:mt-0">
                    <Link
                        target="_blank"
                        href="#"
                        className="text-gray-500 hover:text-gray-900"
                    >
                        <FontAwesomeIcon
                            icon={faFacebookF}
                            className="h-4 w-4"
                        />
                    </Link>
                    <Link
                        target="_blank"
                        href="#"
                        className="text-gray-500 hover:text-gray-900 ms-5"
                    >
                        <FontAwesomeIcon icon={faDiscord} className="h-4 w-4" />
                    </Link>
                    <Link
                        target="_blank"
                        href="#"
                        className="text-gray-500 hover:text-gray-900 ms-5"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="h-4 w-4"
                        />
                    </Link>
                    <Link
                        target="_blank"
                        href="#"
                        className="text-gray-500 hover:text-gray-900 ms-5"
                    >
                        <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
