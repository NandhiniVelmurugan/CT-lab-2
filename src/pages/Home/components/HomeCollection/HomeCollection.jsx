import React from 'react'
import HomeCollectionItem from '../HomeCollectionItem/HomeCollectionItem'

const HomeCollection = () => {
    return (
        <div className="home-collection">
            <div className="page-container-1">
                <HomeCollectionItem
                    image='https://www.katyayaniorganics.com/wp-content/uploads/2022/06/istockphoto-606230424-612x612-1.jpg'
                    title='Fertilizers and Pesticides'
                    comment='Launch Offer 15% Off!'
                    reverse={false}
                />
                <HomeCollectionItem
                    image='https://agriculturalmachinery.weebly.com/uploads/1/3/2/2/132264880/published/farm-mechanization-1.jpg?1611397441'
                    title='Agriculture Machines'
                    comment='New Season Stock'
                    reverse={true}
                />
            </div>
        </div>
    )
}

export default HomeCollection