// import React, { useEffect, useState } from 'react';

// import useReviews from "../hooks/useReviews";
import useReviews from '../hooks/useReviews';


const Reviews = () => {
    // const [reviews, setReviews] = useState([]);
    // const [reviews, useReviews] = useReviews([]);
    const [reviews, setReviews] = useReviews([]);

    // useEffect(() => {
    //     fetch('fakedb.json')
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [])

    return (
        <div className='grid grid-cols-3 gap-6 mt-10'>
            {
                reviews.map(review =>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                        {/* <img src={product.image} alt="" /> */}
                        <img style={{ width: "250px", height: "300px", display: "block", margin: "auto", borderRadius: "150px" }} className="w-full" key={review.id} src={review.img} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{review.name}</div>
                            <p className="text-gray-700 text-base">
                                {review.body.length > 100 ? review.body.slice(0, 100) : review.body}
                                {review.body}
                            </p>
                            <p >
                                <h1 className='bg-green-200 p-3 mx-10 text-green-600 text-xl mt-10'>Ratings: {review.rating}</h1>
                            </p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Reviews;