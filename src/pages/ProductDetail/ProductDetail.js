import {
    useParams
} from "react-router-dom";

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';

import './ProductDetail.css';

export default function ProductDetail () {
    const { id } = useParams();
    const categories = [
        'Electrónica, Audio y Video',
        'iPod',
        'Reproductores',
        'iPod touch',
        '32 GB'
    ];
    const product = {
        title: 'Deco Reverse Sombrero Oxford',
        image: '',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        price: '$ 1.980',
        decimal: '00',
        isNew: true,
        soldQuantity: 100
    };

    let productStat;

    if (product.isNew) {
        productStat = <>
            Nuevo - { product.soldQuantity } vendidos
        </>;
    } else {
        productStat = <>
            { product.soldQuantity } vendidos
        </>;
    }

    return(
    <>
        <Breadcrumb categories={categories} />
        <div className="Product">
            <div className={'Product__detail'}>
                <div className={'Product__detail-image'}>
                    <img src={'https://picsum.photos/680'} className={'Product__image'} alt={'Imagen del producto'} />
                </div>
                <div className={'Product__detail-info'}>
                    <div className={'Product__info-stats'}>
                        { productStat }
                    </div>
                    <div className={'Product__info-title'}>
                        { product.title }
                    </div>
                    <div className={'Product__info-price'}>
                        { product.price }
                        <span className="Product__price-decimal">
                            00
                        </span>
                    </div>
                    <div className={'Product__info-buy'}>
                        <button className={'Product__info-button'}>Comprar</button>
                    </div>
                </div>
            </div>
            <div className={'Product__description'}>
                <div className={'Product__description-title'}>
                    Descripción del producto
                </div>
                <div className={'Product__description-content'} dangerouslySetInnerHTML={{__html: product.description}}></div>
            </div>
        </div>
    </>
    );
};
