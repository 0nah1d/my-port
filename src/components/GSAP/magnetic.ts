'use client'

import gsap from 'gsap'
import React, { ReactElement, useEffect, useRef } from 'react'

type MagneticGSAPProps = {
    children: ReactElement
}

const MagneticGSAP = ({ children }: MagneticGSAPProps) => {
    const magneticRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const element = magneticRef.current
        if (!element) return

        const xTo = gsap.quickTo(element, 'x', {
            duration: 1,
            ease: 'elastic.out(1, 0.3)',
        })
        const yTo = gsap.quickTo(element, 'y', {
            duration: 1,
            ease: 'elastic.out(1, 0.3)',
        })

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event
            const { left, top, width, height } = element.getBoundingClientRect()
            const x = clientX - (left + width / 2)
            const y = clientY - (top + height / 2)
            xTo(x)
            yTo(y)
        }

        const handleMouseLeave = () => {
            gsap.to(element, {
                x: 0,
                y: 0,
                duration: 1,
                ease: 'elastic.out(1, 0.3)',
            })
        }

        element.addEventListener('mousemove', handleMouseMove)
        element.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            element.removeEventListener('mousemove', handleMouseMove)
            element.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return React.cloneElement(
        children as React.ReactElement,
        { ref: magneticRef } as React.RefAttributes<HTMLDivElement>
    )
}

export default MagneticGSAP
