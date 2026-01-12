import ContactView from '@/components/views/contact/contactView'
import { appDescription, appName } from '@/config/app'

export const metadata = {
    title: `${appName} | Contact`,
    description: appDescription,
}

const ContactPage = () => {
    return <ContactView />
}

export default ContactPage
