import React from 'react';
import NewsBannar from './NewsBannar';
import AboutNews from './AboutNews';
import SecondNews from './SecondNews';

const NewsDetails = () => {
    return (
        <div className='w-full lg:w-[1320px] px-3 lg:px-0  mt-[108px] mx-auto'>
            <NewsBannar />
            <AboutNews />
            <SecondNews />
        </div>
    );
};

export default NewsDetails;