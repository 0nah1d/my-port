import ProjectsView from '@/components/views/projects/projectsView'
import { appDescription, appName } from '@/config/app'

export const metadata = {
    title: `${appName} | Projects`,
    description: appDescription,
}

const ProjectsPage = () => {
    return <ProjectsView />
}

export default ProjectsPage
