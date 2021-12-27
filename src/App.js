import React from 'react';
// import Article from './components/article/Article';
// import Brand from './components/brand/Brand';
// import Cta from './components/cta/Cta';
// import Feature from './components/feature/Feature';
// import Navbar from './components/navbar/Navbar';

import {  Brand, Cta, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, Whatgpt3 } from './containers';

const App = () => {
    return (
        <div className='App'>
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whatgpt3 />
            <Features />
            <Possibility />
            <Cta />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
