function FilterGroup({title, list, type="checkbox"}) {
    return (
        <div className="flex flex-col gap-3 text-sm text-darkgray-2 pt-5">
            <p className="font-bold">{title}</p>
            {list.map((item, index) => (
                <div key={index} className="flex gap-3">
                    <input type={type} id={item.name} name={type == "radio" ? `${title}` : `${item.name}`} className="accent-primary w-5" />
                    <label htmlFor={item.name} >
                        {item.name}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default FilterGroup