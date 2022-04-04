import React from 'react';
import phone from './banar-img.jpg';

const Home = () => {
    return (
        <div className='hn'>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="block">
                        <h1 className='text-6xl text-black font-bold mt-5'>Your Next Phone</h1>
                        <h2 className='text-6xl text-violet-600 font-bold mt-5'>Your Best Phone</h2>
                        <p className='mt-5 text-2xl text-left p-10'>Samsung Galaxy S21 is one of the best Phones. Unpacking 2021 with a bang, we have the Samsung Galaxy S21 for you today. Samsung has rearranged its yearly release schedule to pull its high-end S-series reveal for January, and could there be a better way to kick off the year?</p>
                        <p className='text-left px-10'><button className='bg-violet-100 mt-5 p-5 text-2xl text-violet-800 rounded'>Live Demo</button></p>
                    </div>
                </div>
                <div>
                    <img className='mt-10 px-10' src={phone} alt="" />
                </div>
            </div>
            <h1 className='text-4xl text-center mt-20 font-bold'>Customer Reviews</h1>
            <div className='.grid grid-cols-3 gap-4 bg-green-300'>
                <button className='bg-blue-300'>Reviews</button>
<h1>asa</h1>
<h1>asa</h1>
<h1>asa</h1>
<h1>asa</h1>
            </div>
        </div>
    );
};

export default Home;