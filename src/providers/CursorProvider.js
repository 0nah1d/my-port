'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function CursorProvider() {
    const cursorRef = useRef(null)

    useEffect(() => {
        const container = document.body
        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
        const mouse = { x: pos.x, y: pos.y } // Mouse position
        let lastSpeed = 0 // Speed at the last frame
        let skewX = 0 // Current skew value

        // GSAP Ticker for continuous updates
        const ticker = gsap.ticker.add(() => {
            const prevX = pos.x
            const prevY = pos.y

            pos.x += (mouse.x - pos.x) * 0.15 // Smooth following
            pos.y += (mouse.y - pos.y) * 0.15

            const dx = mouse.x - pos.x
            const dy = mouse.y - pos.y
            const distance = Math.sqrt(dx * dx + dy * dy) // Distance between cursor and mouse
            const speed = Math.sqrt((pos.x - prevX) ** 2 + (pos.y - prevY) ** 2) // Current speed
            const reverse = speed < lastSpeed // Reverse motion check

            // Smooth skew transition
            const targetSkew = reverse ? -distance * 0.2 : distance * 0.2
            skewX += (targetSkew - skewX) * 0.1 // Eased skew transition

            gsap.set(cursorRef.current, {
                x: pos.x,
                y: pos.y,
                skewX: skewX,
                scale: 1, // Uniform scale
            })

            // Update last speed
            lastSpeed = speed
        })

        // Add mousemove and mouseleave listeners
        const handleMouseMove = (event) => {
            mouse.x = event.clientX
            mouse.y = event.clientY
            gsap.to(cursorRef.current, {
                autoAlpha: 1,
                duration: 0.5,
                ease: 'back.out',
            })
        }

        const handleMouseLeave = () => {
            gsap.to(cursorRef.current, {
                autoAlpha: 0,
                duration: 0.5,
                ease: 'back.out',
            })
        }

        const handleMouseClick = (event) => {
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

            // Animate the ripple effect
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

            // Animate cursor bounce
            gsap.from(cursorRef.current, {
                scale: 0.8,
                duration: 0.5,
                ease: 'back.out',
            })
        }

        if (container) {
            container.addEventListener('mousemove', handleMouseMove)
            container.addEventListener('mouseleave', handleMouseLeave)
            container.addEventListener('click', handleMouseClick)
        }

        // Cleanup on unmount
        return () => {
            gsap.ticker.remove(ticker)
            if (container) {
                container.removeEventListener('mousemove', handleMouseMove)
                container.removeEventListener('mouseleave', handleMouseLeave)
                container.removeEventListener('click', handleMouseClick)
            }
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
        ></div>
    )
}
