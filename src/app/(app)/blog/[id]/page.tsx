import BlogDetailsView from '@/components/views/blog/blogDetailsView'
import { appDescription, appName } from '@/config/app'

export const metadata = {
    title: `${appName} | Blog Details`,
    description: appDescription,
}

const BlogDetailsPage = () => {
    return <BlogDetailsView />
}

export default BlogDetailsPage
