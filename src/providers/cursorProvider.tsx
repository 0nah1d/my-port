'use client'

import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

type Point = {
    x: number
    y: number
}

const CursorProvider = () => {
    const cursorRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const container = document.body
        const pos: Point = {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        }
        const mouse: Point = { x: pos.x, y: pos.y }

        let lastSpeed = 0
        let skewX = 0

        const ticker = gsap.ticker.add(() => {
            if (!cursorRef.current) return

            const prevX = pos.x
            const prevY = pos.y

            pos.x += (mouse.x - pos.x) * 0.15
            pos.y += (mouse.y - pos.y) * 0.15

            const dx = mouse.x - pos.x
            const dy = mouse.y - pos.y
            const distance = Math.sqrt(dx * dx + dy * dy)
            const speed = Math.sqrt((pos.x - prevX) ** 2 + (pos.y - prevY) ** 2)
            const reverse = speed < lastSpeed

            const targetSkew = reverse ? -distance * 0.2 : distance * 0.2
            skewX += (targetSkew - skewX) * 0.1

            gsap.set(cursorRef.current, {
                x: pos.x,
                y: pos.y,
                skewX,
                scale: 1,
            })

            lastSpeed = speed
        })

        const handleMouseMove = (event: MouseEvent) => {
            if (!cursorRef.current) return

            mouse.x = event.clientX
            mouse.y = event.clientY

            gsap.to(cursorRef.current, {
                autoAlpha: 1,
                duration: 0.5,
                ease: 'back.out',
            })
        }

        const handleMouseLeave = () => {
            if (!cursorRef.current) return

            gsap.to(cursorRef.current, {
                autoAlpha: 0,
                duration: 0.5,
                ease: 'back.out',
            })
        }

        const handleMouseClick = (event: MouseEvent) => {
            if (!cursorRef.current) return

            const ripple = document.createElement('div')
            ripple.style.position = 'fixed'
            ripple.style.width = '20px'
            ripple.style.height = '20px'
            ripple.style.borderRadius = '50%'
            ripple.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
            ripple.style.pointerEvents = 'none'
            ripple.style.left = `${event.clientX}px`
            ripple.style.top = `${event.clientY}px`
            ripple.style.transform = 'translate(-50%, -50%)'

            document.body.appendChild(ripple)

            gsap.fromTo(
                ripple,
                { scale: 0, opacity: 1 },
                {
                    scale: 10,
                    opacity: 0,
                    duration: 1,
                    ease: 'power3.out',
                    onComplete: () => {
                        ripple.remove()
                    },
                }
            )

            gsap.from(cursorRef.current, {
                scale: 0.8,
                duration: 0.5,
                ease: 'back.out',
            })
        }

        container.addEventListener('mousemove', handleMouseMove)
        container.addEventListener('mouseleave', handleMouseLeave)
        container.addEventListener('click', handleMouseClick)

        return () => {
            gsap.ticker.remove(ticker)
            container.removeEventListener('mousemove', handleMouseMove)
            container.removeEventListener('mouseleave', handleMouseLeave)
            container.removeEventListener('click', handleMouseClick)
        }
    }, [])

    return (
        <div
            ref={cursorRef}
            style={{
                width: '50px',
                height: '50px',
                border: '1px solid black',
                borderRadius: '50%',
                position: 'fixed',
                top: 0,
                zIndex: 10000,
                opacity: 0,
                transform: 'translate(-50%, -50%)',
                transformOrigin: 'center',
                pointerEvents: 'none',
            }}
        />
    )
}

export default CursorProvider
