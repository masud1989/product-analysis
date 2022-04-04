import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import phone from './banar-img.jpg';

const Home = () => {
    const [reviews, setReviews] = useReviews([]);
    const firstThreeReview = reviews.slice(0, 3);
    return (
        <div className='hn'>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="block">
                        <h1 className='text-6xl text-black font-bold mt-5'>My Samsung Phone</h1>
                        <h2 className='text-6xl text-violet-600 font-bold mt-5'>My Best Phone</h2>
                        <p className='mt-5 text-2xl text-left p-10'>Samsung Galaxy S21 is one of the best Phones. Unpacking 2021 with a bang, we have the Samsung Galaxy S21 for you today. Samsung has rearranged its yearly release schedule to pull its high-end S-series reveal for January, and could there be a better way to kick off the year?</p>
                        <p className='text-left px-10'><button className='bg-violet-100 mt-5 p-5 text-2xl text-violet-800 rounded'>Live Demo</button></p>
                    </div>
                </div>
                <div>
                    <img className='mt-10 px-10' src={phone} alt="" />
                </div>
            </div>
            <h1 className='text-4xl text-center mt-20 font-bold'>Customer Reviews ({reviews.length})</h1>
            <div className='.grid grid-cols-3 gap-4'>
                <div className='grid grid-cols-3 gap-6 mt-10 mx-10' >
                    {
                        firstThreeReview.map(review =>
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
                <div className='mt-10 mb-10'>
                    <p className='text-center px-10'> <Link className='text-white  mt-5 text-lg link p-5 bg-red-600 text-xl' to="/reviews">Show All Reviews</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Home;