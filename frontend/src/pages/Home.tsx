import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Products from '../components/Products';

import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Accura Datavision - AI Video Analytics & Traffic Solutions</title>
                <meta name="description" content="Leading provider of AI-powered video analytics. Solutions for traffic surveys, people counting, parking management, and safety monitoring using computer vision." />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Accura Datavision - AI Video Analytics" />
                <meta property="og:description" content="Leading provider of AI-powered video analytics. Solutions for traffic surveys, people counting, parking management, and safety monitoring." />
            </Helmet>
            <Hero />
            <About />
            <WhyChooseUs />
            <Products />
        </>
    );
};

export default Home;
