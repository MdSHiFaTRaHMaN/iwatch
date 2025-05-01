import React from 'react';
import Bannar from './Bannar';
import TopProduct from './TopProduct';
import LatestNews from './LatestNews';
import FeaturedSection from './FeaturedSection';
import NewsletterSubscription from './NewsletterSubscription ';
import SocialSection from './SocialSection';

// This is a functional component called Home
const Home = () => {
    // This returns a div containing several other components
    return (
        <div className='w-full lg:w-[1380px] mx-auto'>
            {/* This is a component called Bannar */}
            <Bannar />
            {/* This is a component called TopProduct */}
            <TopProduct />
            {/* This is a component called LatestNews */}
            <LatestNews />
            {/* This is a component called FeaturedSection */}
            <FeaturedSection />
            {/* This is a component called NewsletterSubscription */}
            <NewsletterSubscription />
            {/* This is a component called SocialSection */}
            <SocialSection />
        </div>
    );
};

export default Home;