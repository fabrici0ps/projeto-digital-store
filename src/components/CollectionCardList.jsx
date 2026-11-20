import { cn } from "../utils/tailwind"
import CollectionCard from "./CollectionCard"

function CollectionCardList({ collections, className }) {
    return (
        <div className={cn(className, "grid gap-3 w-full")}>
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