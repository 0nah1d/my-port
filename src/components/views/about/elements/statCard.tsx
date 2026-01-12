interface Props {
    title: string
    description: string
}

const StatCard = ({ title, description }: Props) => {
    return (
        <div className="flex flex-col w-full gap-2.5 p-3.5 border rounded-xl border-gray-200 hover:border-gray-400 transition-all duration-700 ease-in-out">
            <h4 className="text-2xl font-bold text-gray-900 font-manrope leading-9">
                {title}
            </h4>
            <p className="text-base text-gray-500 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default StatCard
