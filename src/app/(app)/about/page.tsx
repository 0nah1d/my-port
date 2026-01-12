import AboutView from '@/components/views/about/aboutView'
import { appDescription, appName } from '@/config/app'

export const metadata = {
    title: `${appName} | About`,
    description: appDescription,
}

const AboutPage = () => {
    return <AboutView />
}

export default AboutPage
