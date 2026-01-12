import MainLayout from '@/layout/mainLayout'
import React from 'react'

const AppLayout = ({ children }: { children: React.ReactNode }) => {
    return <MainLayout>{children}</MainLayout>
}

export default AppLayout
