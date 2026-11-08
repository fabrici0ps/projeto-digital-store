function CollectionItem({ items }) {
    return (
        <div className="flex gap-12 justify-center">
            {items.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                    <div className="bg-white flex justify-center items-center rounded-full w-28 h-28">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <p className="text-darkgray-2 font-bold text-sm">{item.title}</p>
                </div>
            ))}
        </div>
    )
}

export default CollectionItem