'use client'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

interface BlogCard {
    id: number
    image: string
    title: string
    description: string
    category: string
    date: { day: string; month: string }
    time: string
}

const blogData: BlogCard[] = [
    {
        id: 1,
        image: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Best View in New York City',
        description: 'The city that never sleeps',
        category: 'Photos',
        date: { day: '27', month: 'March' },
        time: '6 mins ago',
    },
    {
        id: 2,
        image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Best Pizza in Town',
        description: 'The collection of best pizza images in New York City',
        category: 'Photos',
        date: { day: '20', month: 'March' },
        time: '3 mins read',
    },
    {
        id: 3,
        image: 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Best Salad Images ever',
        description: 'The collection of best salads of town in pictures',
        category: 'Photos',
        date: { day: '15', month: 'April' },
        time: '6 mins read',
    },
    {
        id: 4,
        image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Amazing Beaches in Hawaii',
        description: 'A look at the most stunning beaches',
        category: 'Photos',
        date: { day: '10', month: 'February' },
        time: '4 mins ago',
    },
    {
        id: 5,
        image: 'https://images.pexels.com/photos/4171749/pexels-photo-4171749.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Street Food Adventures',
        description: 'Exploring the best street food around the world',
        category: 'Food',
        date: { day: '5', month: 'June' },
        time: '5 mins read',
    },
    {
        id: 6,
        image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        title: 'Urban Photography',
        description: 'Capturing the essence of city life',
        category: 'Photography',
        date: { day: '12', month: 'August' },
        time: '8 mins ago',
    },
]

const BlogView = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
                {blogData.map((card) => (
                    <div
                        key={card.id}
                        className="rounded overflow-hidden shadow-lg"
                    >
                        <div className="relative">
                            <a href="#">
                                <Image
                                    width={500}
                                    height={500}
                                    className="w-full"
                                    src={card.image}
                                    alt={card.title}
                                />
                                <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                            </a>
                            <a href="#!">
                                <div className="absolute bottom-0 left-0 bg-primary px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    {card.category}
                                </div>
                            </a>
                            <a href="#!">
                                <div className="text-sm absolute top-0 right-0 bg-primary px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                                    <span className="font-bold">
                                        {card.date.day}
                                    </span>
                                    <small>{card.date.month}</small>
                                </div>
                            </a>
                        </div>
                        <div className="px-6 py-4">
                            <a
                                href="#"
                                className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                            >
                                {card.title}
                            </a>
                            <p className="text-gray-500 text-sm">
                                {card.description}
                            </p>
                        </div>
                        <div className="px-6 py-4 flex flex-row items-center">
                            <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="w-3 h-3"
                                />
                                <span className="ml-1">{card.time}</span>
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogView
