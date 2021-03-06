import './ProductCard.css';

import { useHistory } from 'react-router-dom';

export default function ProductCard ({ product }) {
    const history = useHistory();

    const onViewProduct = () => {
        history.push('/items/12345');
    };

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
        <div className={'Product__card-container'} onClick={(e) => { onViewProduct() }}>
            <div className={'Product__card'}>
                <div className={'Product__card-image'}>
                    <img src={product.image} className={'Product__image'} alt={'Producto'} />
                </div>
                <div className={'Product__card-detail'}>
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
