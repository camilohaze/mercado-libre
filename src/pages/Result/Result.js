import React, { useEffect } from 'react';
import {
    useLocation,
    useHistory
} from "react-router-dom";

import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import ProductCard from '../../components/ProductCard/ProductCard';

import './Result.css';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Result () {
    const query = useQuery();
    const history = useHistory();

    useEffect(() => {
        return () => {
          history.goForward();
        };
    });
    const categories = [
        'Electrónica, Audio y Video',
        'iPod',
        'Reproductores',
        'iPod touch',
        '32 GB'
    ];
    const products = [
        {
            description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo <br> Completo Unico!',
            image: 'https://picsum.photos/180',
            price: '$ 1.980',
            shipping: true,
            location: 'Capital Federal'
        },
        {
            description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo <br> Completo Unico!',
            image: 'https://picsum.photos/180',
            price: '$ 1.980',
            shipping: false,
            location: 'Mendoza'
        },
        {
            description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo <br> Completo Unico!',
            image: 'https://picsum.photos/180',
            price: '$ 1.980',
            shipping: true,
            location: 'Capital Federal'
        },
        {
            description: 'Apple Ipod Touch 5g 16gb Negro Igual A Nuevo <br> Completo Unico!',
            image: 'https://picsum.photos/180',
            price: '$ 1.980',
            shipping: false,
            location: 'Capital Federal'
        }
    ];

    return(
        <div className={'Result'}>
            <Breadcrumb categories={categories} />
            <div className={'Result__items'}>
                {
                    products.map((product, index) => { return(<ProductCard key={index} product={product} />) })
                }
            </div>
        </div>
    );
};
