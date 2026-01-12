'use client'
import gsap from 'gsap'
import React, { createContext, useState } from 'react'

type TransitionContextType = {
    timeline: gsap.core.Timeline
    setTimeline: React.Dispatch<React.SetStateAction<gsap.core.Timeline>>
}

const TransitionContext = createContext<TransitionContextType | null>(null)

interface Props {
    children: React.ReactNode
}

const TransitionProvider = ({ children }: Props) => {
    const [timeline, setTimeline] = useState<gsap.core.Timeline>(() =>
        gsap.timeline({ paused: true })
    )

    return (
        <TransitionContext.Provider
            value={{
                timeline,
                setTimeline,
            }}
        >
            {children}
        </TransitionContext.Provider>
    )
}

export { TransitionContext, TransitionProvider }
