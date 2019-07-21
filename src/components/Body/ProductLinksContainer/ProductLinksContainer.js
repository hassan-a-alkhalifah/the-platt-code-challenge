import React from 'react';
import './ProductLinksContainer.css';
import ProductLink from './ProductLink';
import dataCommImg from '../../../assets/img/datacomm.png';
import hvacImg from '../../../assets/img/hvac.png';
import industrialImg from '../../../assets/img/industrial.png';
import lightingImg from '../../../assets/img/lighting.png';
import energyImg from '../../../assets/img/energy.png';
import utilityImg from '../../../assets/img/utility.png';

function ProductLinksContainer() {
    const links = [
        {
            title: 'DataComm',
            img: `${dataCommImg}`
            
        },
        {
            title: 'HVAC',
            img: `${hvacImg}`
        },
        {
            title: 'Industrial',
            img: `${industrialImg}`
        },
        {
            title: 'Lighting',
            img: `${lightingImg}`
        },
        {
            title: 'Energy Efficiency',
            img: `${energyImg}`
        },
        {
            title: 'Utility',
            img: `${utilityImg}`
        }
    ];

    return (
        <div className='product-links-container'>
            <h3>Product Markets</h3>
            <div>
            {
                links.map((link, index) => {
                    return (
                        <ProductLink 
                            key={index}
                            title={link.title}
                            img={link.img}
                        />
                    );
                })
            }
            </div>
        </div>
    );
}

export default ProductLinksContainer;