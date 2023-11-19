import React from 'react'
import HomeServicesItem from './HomeServicesItem'


const HomeServices = () => {
    return (
        <div className="home-services page-container py-4">
            <div className="row justify-content-center" >
                <HomeServicesItem
                    image='https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/certificate-icon-p3wgqj83iftdfzntt865n2pg6gyhr6ui9h6ri1cwns.png'
                    title='10 Years Experts in sales Industry'
                />
                <HomeServicesItem
                    image='https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/truck-p3wgmo3zeyixpp9wdk1de1t89g063zi8ecmwh3368o.png'
                    title='Free Delivery'
                />
               
                <HomeServicesItem
                    image='https://websitedemos.net/furniture-store-04/wp-content/uploads/sites/155/elementor/thumbs/support-p3wgt0irjp7m2y24bsrppy68m2qd2fp09r5w3boi8o.png'
                    title='Generate Sales Support'
                />
                
            </div>
        </div>
    )
}

export default HomeServices