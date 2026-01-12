import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-screen-xl w-full lg:min-h-screen pt-[3vw] px-4 mx-auto">
            {children}
        </div>
    )
}

export default MainLayout
