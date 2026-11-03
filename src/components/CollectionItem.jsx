function CollectionItem({ image, title }) {
    return (
        <div className="flex flex-col items-center">
            <div className="bg-white flex justify-center items-center rounded-full w-28 h-28">
                <img src={image} alt={title} />
            </div>
            <p className="text-darkgray-2 font-bold text-sm">{title}</p>
        </div>
    )
}

export default CollectionItem