const CartList = ({list}) => {

    const disabled = { pointerEvent: "none"}

    return (
        <>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">Shopping Cart</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="cart-list">
                <li className="cart-article mt-auto">
                        <p className='article'>Article</p>
                        <div className='quantity'>Quantity</div>
                    </li>
                {list.map(element =>
                    <li className="cart-article mt-auto" key={'article'+element.id}>
                        <p className='article'>{element.nombre}</p>
                        <div className='quantity'>{element.cantidad}</div>
                    </li>
                )}

                </ul>
                
            <button type="button" className="btn btn-outline-info buy">Buy</button>
            </div>
        </div>
        </>
    )
  }

  export default CartList
