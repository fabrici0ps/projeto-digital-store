import Button from "./Button"
import DiscountTag from "./DiscountTag"

function CollectionCard({image, title, discount}) {
    return (
        <div className="w-full h-64 rounded-lg relative overflow-hidden">
            <DiscountTag discount={discount} />
            <img 
                className="w-full h-full object-cover" 
                src={image} 
                alt={title} 
            />
            <Button 
                title="Comprar" 
                className="bg-lightgray-3 text-primary absolute left-4 bottom-4 md:left-8 md:bottom-9 w-32 md:w-36 shadow"
            />
        </div>
    )
}

export default CollectionCard