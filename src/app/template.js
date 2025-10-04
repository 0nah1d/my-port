'use client'
import React, { useState, useContext, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { TransitionContext } from '@/context/TransitionProvider'
import Footer from '@/components/Footer'

gsap.registerPlugin(useGSAP)

export default function Template({ children }) {
    const [isRendered, setIsRendered] = useState(false)
    const { timeline, setTimeline } = useContext(TransitionContext)
    const overlayRef = useRef()

    useGSAP(
        () => {
            gsap.fromTo(
                overlayRef.current,
                {
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
                className={'h-[100vh] w-[130vw] bg-primary fixed'}
                style={{
                    left: '50%',
                    top: '100%',
                    transform: 'translate(-50%)',
                    zIndex: '100000',
                    borderTopLeftRadius: '50%',
                    borderTopRightRadius: '50%',
                    borderBottomLeftRadius: '30%',
                    borderBottomRightRadius: '30%',
                }}
                ref={overlayRef}
            ></div>

            {isRendered && (
                <div>
                    {children}
                    <Footer />
                </div>
            )}
        </div>
    )
}
