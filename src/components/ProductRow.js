function ProductRow (props) {
    console.log(props.searchInput)
  // unsure how to pass this information to a filter to change the array being displayed.
    
  return(
    
      <div className="productTable">
        <table>
            <thead>
                <td>Name</td>
                <td>Price</td>
            </thead>
            {props.products.map((product) => 
                <tr>
                    <td className={product.inStock  
          ? "inStock"
          : "outOfStock"
        }>{product.name}</td>
                    <td>{product.price}</td>
                </tr>
             )}
           

             

        </table>
      </div>    
  )
}

export default ProductRow