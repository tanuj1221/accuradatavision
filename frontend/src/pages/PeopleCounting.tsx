import ProductPage from './ProductPage';

const PeopleCounting = () => {
    return (
        <ProductPage
            title="People Counting"
            metaTitle="People Counting & Footfall Analytics | US, UK, Europe, Australia | Accura Datavision"
            metaDescription="AI Machine Vision based people counting, pedestrian counting, and visitor analytics for retail and public spaces in US, UK, Europe, Australia. Real-time footfall tracking, crowd intelligence, occupancy monitoring. Also offering TMC, AADT, vehicle classification, and comprehensive traffic survey services."
            subtitle="Footfall Analytics & Crowd Intelligence"
            image="/images/people_counting_detect.png"
            description="Understand visitor behavior with our non-intrusive People Counting solution. Perfect for retail, events, and public spaces, we help you optimize staffing, measure conversion rates, and ensure safety through density monitoring."
            pageCategory="people-counting"
            features={[
                "Bidirectional Entry/Exit Counting",
                "Zone Occupancy & Dwell Time Analysis",
                "Heatmap Visualization of High-Traffic Areas",
                "Queue Management & Waiting Time Tracking",
                "Social Distancing Compliance Checks",
                "Demographic Estimation (Age/Gender)"
            ]}
            benefits={[
                "Optimize Staff Deployment",
                "Maximize Retail Store Layouts",
                "Real-time Occupancy Alerts",
                "Historical Trends for Forecasting"
            ]}
            specs={[
                { label: "Privacy", value: "GDPR Compliant (Blurring)" },
                { label: "View Angle", value: "Overhead / 45-degree" },
                { label: "Reporting", value: "Real-time Dashboard" },
                { label: "Integration", value: "API / Webhook" }
            ]}
        />
    );
};

export default PeopleCounting;
