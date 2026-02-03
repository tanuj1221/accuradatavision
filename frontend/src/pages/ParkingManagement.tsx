import ProductPage from './ProductPage';

const ParkingManagement = () => {
    return (
        <ProductPage
            title="Parking Management"
            metaTitle="Smart Parking Management & Occupancy Tracking | US, UK, Europe, Australia | Accura Datavision"
            metaDescription="AI-powered smart parking solution for real-time occupancy tracking in US, UK, Europe, Australia. Camera-based parking management, traffic flow optimization. Also offering TMC, AADT, vehicle classification, origin-destination surveys, and comprehensive traffic survey services."
            subtitle="Smart Occupancy & Utilization Tracking"
            image="/images/parking_detect.png"
            description="Transform any camera into a smart parking sensor. Our system monitors parking lots in real-time, guiding drivers to available spots and providing facility managers with crucial usage data—all without expensive ground sensors."
            features={[
                "Individual Spot Occupancy Detection",
                "Real-time Availability Signage Integration",
                "Illegal Parking Detection (Fire Zones, Handicapped)",
                "Overstay Detection & Alerts",
                "License Plate for Ticket Integration",
                "Multi-level Lot Aggregation"
            ]}
            benefits={[
                "Reduce Search Traffic by 30%",
                "Increase Parking Revenue",
                "No Ground Sensor Maintenance",
                "Seamless User Experience"
            ]}
            specs={[
                { label: "Coverage", value: "15-50 Spots per Camera" },
                { label: "Latency", value: "< 2 Seconds" },
                { label: "Night Vision", value: "Supported" },
                { label: "Connectivity", value: "4G / LAN / WiFi" }
            ]}
        />
    );
};

export default ParkingManagement;
