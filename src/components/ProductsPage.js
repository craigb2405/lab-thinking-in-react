import { useState } from 'react';
import jsonData from '../data.json';
import ProductRow from './ProductRow';




function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [search, setSearch] = useState('')
  const [checkbox, setCheckbox] = useState('false')

  




  
  return(


      <div>
    
        <h1>IronStore</h1>
        <form>
        <input type="search" id='search' name='search' value={search} onChange={(e)=>setSearch(e.target.value)}></input>

        </form>
        <ProductRow products={products} searchInput={search} filterBox ={checkbox}/>
      </div>    
  )
}

export default ProductsPage

