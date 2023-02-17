function Products({items = []}) {
    if (items.length <= 0) {
        return <div>No items found.</div>
    } else {
        return <ol>
            {items.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ol>
    }
}

export default Products;