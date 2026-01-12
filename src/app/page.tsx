import HomeView from '@/components/views/home/homeView'
import { appDescription, appName } from '@/config/app'

export const metadata = {
    title: `${appName} | Home`,
    description: appDescription,
}

const HomePage = () => {
    return <HomeView />
}

export default HomePage
