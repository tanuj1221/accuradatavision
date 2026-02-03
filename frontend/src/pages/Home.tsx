import Hero from '../components/Hero';
import About from '../components/About';
import WhyChooseUs from '../components/WhyChooseUs';
import Products from '../components/Products';

import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>TMC, AADT, Vehicle Classification & Traffic Survey Services | US, UK, Europe, Australia</title>
                <meta name="description" content="Leading provider of TMC (Turning Movement Count), AADT, traffic volume studies, vehicle classification, pedestrian counting in US, UK, Europe, Australia, Germany. AI-powered traffic data collection, intersection analysis, origin-destination surveys, peak hour studies with 97%+ accuracy. Professional CCTV traffic surveys and transportation planning services." />
                <meta name="keywords" content="TMC, turning movement count, AADT, traffic volume studies, vehicle classification, pedestrian counting, cyclist counting, intersection survey, origin destination study, peak hour analysis, gap analysis, speed studies, traffic data collection, automated counting, video traffic survey, traffic engineering, transportation planning, highway survey, roundabout analysis, USA traffic counting, UK traffic survey, Europe traffic analysis, Australia TMC, Germany AADT, CCTV traffic counting, AI traffic survey, manual traffic counts, junction analysis" />
                <link rel="canonical" href={window.location.href} />
                <meta property="og:title" content="Accura Datavision - TMC, AADT & Traffic Survey Services" />
                <meta property="og:description" content="Professional TMC, AADT, vehicle classification, and comprehensive traffic survey services in US, UK, Europe, Australia, Germany with 97%+ accuracy using AI-powered video analytics." />
            </Helmet>
            <Hero />
            <WhyChooseUs />
            <About />
            <Products />
        </>
    );
};

export default Home;
