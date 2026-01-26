import ProductPage from './ProductPage';

const TrafficSurvey = () => {
    return (
        <ProductPage
            title="Traffic Survey"
            metaTitle="Traffic Survey Services & AI Vehicle Counting | Accura Datavision"
            metaDescription="High-precision traffic survey services using AI computer vision. Accurate vehicle classification, turning movement counts (TMC), and congestion analysis for urban planning."
            subtitle="High-Precision Vehicle Enumeration & Analysis"
            image="/images/analysis_detect.jpg"
            description="Our Traffic Survey solution leverages advanced computer vision to provide accurate, 24/7 analysis of road usage. Whether for urban planning, signal optimization, or infrastructure development, we deliver granular data on vehicle types, counts, and movement patterns."
            features={[
                "Multi-class Vehicle Classification (Car, Bus, Truck, Bike, etc.)",
                "Directional Flow & Turning Movement Counts (TMC)",
                "Peak Hour & Average Daily Traffic (ADT) Analysis",
                "Queue Length & Congestion Monitoring",
                "License Plate Recognition (Optional)",
                "Pedestrian & Cyclist Integration"
            ]}
            benefits={[
                "97%+ Accuracy with Human Verification",
                "Zero Hardware Installation Required",
                "Actionable Insights in < 24 Hours",
                "Cost-Effective compared to Manual Counts"
            ]}
            specs={[
                { label: "Video Input", value: "Any Standard CCTV / Drone" },
                { label: "Accuracy", value: "97%+" },
                { label: "Turnaround", value: "24-48 Hours" },
                { label: "Output Format", value: "Excel, PDF, Raw Data" }
            ]}
        />
    );
};

export default TrafficSurvey;
