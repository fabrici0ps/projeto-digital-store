import CollectionCard from "./CollectionCard"

function CollectionCardList({ collections }) {
    return (
        <div className="grid grid-cols-3 gap-3 w-full">
            {collections.map((collection, index) => (
                <CollectionCard 
                    key={index}
                    image={collection.image}
                    title={collection.name}
                    discount={collection.discount}
                />
            ))}
        </div>
    )
}

export default CollectionCardList