import React from 'react';
import Card from './Card';
import img1 from '../imgs/gihwan.jpg'
import img2 from '../imgs/ahyung.jpg'
import img3 from '../imgs/jaehong.jpg'
import img4 from '../imgs/ohjingjang.jpeg'


const listings = [
    {
        id: 1,
        title : "서울의 아늑한 차기환",
        price : 150000,
        rating: 4.9,
        imageUrl: `${img1}`
    },
    {
        id: 2,
        title : "제주도 바다남 정아형",
        price : 150000,
        rating: 5.0,
        imageUrl: `${img2}`
    },
    {
        id: 3,
        title : "서울의 아늑한 김재홍",
        price : 150000,
        rating: 4.9,
        imageUrl: `${img3}`
    },
    {
        id: 4,
        title : "걍 벌레",
        price : 200000,
        rating: 4.1,
        imageUrl: `${img4}`
    },


];

function CardContainer() {
    return (
        <div className="card-container">
            {listings.map(Listing => (
                <Card key={Listing.id}{...Listing} />
            ))}
        </div>
    )
}

export default CardContainer;