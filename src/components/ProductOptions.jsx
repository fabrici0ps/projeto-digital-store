import { useState } from "react"

function ProductsOptions({title, options=[], radius="0px", shape="square", type="text" }) {
    const [selectedIdx, setSelectedIdx] = useState(0)

    if(!options || options.length === 0) return null

    return (
        <div className="flex flex-col gap-3">
            <h6 className="text-lightgray-1 font-bold text-base">{title}</h6>
            <div className="flex flex-wrap gap-3 items-center">
                {options.map((option, index) => {
                    const isSelected = selectedIdx === index
                    const isCircle = shape === "circle"

                    const shapeStyles = isCircle
                        ? "w-[31px] h-[31px] roundend-full"
                        : "w-[46px] h-[46px] border border-light-gray-2"

                    const dynamicRadius = isCircle ? "50%" : radius

                    const backgroundStyle = type === "color" ? { backgroundColor: option } : {}
                
                    const borderSelection = isSelected
                        ? "border-2 border-primary"
                        : (type === "color" ? "border-2 border-transparent" : "")

                        return (
                            <button
                                key={index}
                                onClick={() => setSelectedIdx(index)}
                                style={{
                                    ...backgroundStyle,
                                    borderRadius: dynamicRadius
                                }}
                                className={`flex items-center justify-center cursor-pointer transition-all ${shapeStyles} ${borderSelection}`}
                            >
                                {type === "text" && (
                                    <span className="text-darkgray-2 text-2xl font-bold">
                                        {option}
                                    </span>
                                )}
                            </button>
                        )
                })}
            </div>
        </div>
    )
}
export default ProductsOptions