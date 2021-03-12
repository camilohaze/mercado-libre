import './ProductCard.css';

export default function ProductCard ({ product }) {
    let productHeader;

    if (product.shipping) {
        productHeader = (
            <>
                {product.price}
                <div className={'Product__detail-shipping'}>
                    <img src={'/Assets/ic_shipping.png'} alt="ic_shipping" />
                </div>
            </>
        );
    } else {
        productHeader = (
            <>
                {product.price}
            </>
        );
    }

    return(
        <div className={'Product__card-container'}>
            <div className={'Product__card'}>
                <div className={'Product__image-container'}>
                    <img src={product.image} className={'Product__image'} alt={'Producto'} />
                </div>
                <div className={'Product__detail'}>
                    <div className="Product__detail-header">
                        <div className={'Product__detail-price'}>
                            {productHeader}
                        </div>
                        <div className={'Product__detail-location'}>
                            { product.location }
                        </div>
                    </div>
                    <div className="Product__detail-body">
                        <div className={'Product__detail-description'} dangerouslySetInnerHTML={{__html: product.description}}></div>
                    </div>
                </div>
            </div>
            <hr className={'Product__separator'} />
        </div>
    );
};
