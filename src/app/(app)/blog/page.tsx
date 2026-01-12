import BlogView from '@/components/views/blog/blogView'
import { appDescription, appName } from '@/config/app'

export const metadata = {
    title: `${appName} | Blog`,
    description: appDescription,
}

const BlogPage = () => {
    return <BlogView />
}

export default BlogPage
