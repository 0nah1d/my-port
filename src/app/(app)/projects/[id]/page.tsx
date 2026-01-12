import ProjectDetailsView from '@/components/views/projects/projectDetailsView'
import { appDescription, appName } from '@/config/app'

export const metadata = {
    title: `${appName} | Project Details`,
    description: appDescription,
}

const ProjectDetailsPage = () => {
    return <ProjectDetailsView />
}

export default ProjectDetailsPage
