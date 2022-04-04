import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className='grid grid-cols-3 gap-6 mt-10'>
            {
                reviews.map(review =>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        {/* <img src={product.image} alt="" /> */}
                        <img style={{ width: "150px", height: "200px", display: "block", margin: "auto" }} className="w-full" src={review.img} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{review.name}</div>
                            <p className="text-gray-700 text-base">
                                {review.body.length > 100 ? review.body.slice(0, 100) : review.body}
                                {review.body}
                            </p>
                        </div>
                    </div>
                )
            }








        </div>
    );
};

export default Reviews;