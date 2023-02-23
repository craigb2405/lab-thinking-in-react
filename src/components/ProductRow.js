import Search from './Search';

function ProductRow(props) {
  console.log(props.searchInput);
  // unsure how to pass this information to a filter to change the array being displayed.

  return (
    <div className="productTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products
            .filter((product) => {
              return props.searchInput.toLowerCase() === ''
                ? product
                : product.name.toLowerCase().includes(props.searchInput);
            })
            .map((product) => (
              <tr key={product.id}>
                <td className={product.inStock ? 'inStock' : 'outOfStock'}>
                  {product.name}
                </td>
                <td>{product.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductRow;
