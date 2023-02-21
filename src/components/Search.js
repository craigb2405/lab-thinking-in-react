function Search (props) {
    
    
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
  
  export default Search