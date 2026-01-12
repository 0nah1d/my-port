'use client'
import Footer from '@/components/footer'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { ReactNode, useRef, useState } from 'react'

gsap.registerPlugin(useGSAP)

interface TemplateProps {
    children: ReactNode
}

const Template: React.FC<TemplateProps> = ({ children }) => {
    const [isRendered, setIsRendered] = useState(false)
    const overlayRef = useRef<HTMLDivElement>(null)

    useGSAP(
        () => {
            if (!overlayRef.current) return

            gsap.fromTo(
                overlayRef.current,
                {
                    top: '100%',
                    duration: 1.5,
                    ease: 'power2.inOut',
                },
                {
                    top: '-320%',
                    duration: 2,
                    ease: 'power2.inOut',
                }
            ).eventCallback('onComplete', () => {
                setIsRendered(true)
            })
        },
        { scope: overlayRef }
    )

    return (
        <div>
            <div
                className="h-[100vh] w-[130vw] bg-primary fixed"
                style={{
                    left: '50%',
                    top: '100%',
                    transform: 'translate(-50%)',
                    zIndex: 100000,
                    borderTopLeftRadius: '50%',
                    borderTopRightRadius: '50%',
                    borderBottomLeftRadius: '30%',
                    borderBottomRightRadius: '30%',
                }}
                ref={overlayRef}
            />

            {isRendered && (
                <div>
                    {children}
                    <Footer />
                </div>
            )}
        </div>
    )
}

export default Template
