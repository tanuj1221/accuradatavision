import ProductPage from './ProductPage';

const SafetyMonitoring = () => {
    return (
        <ProductPage
            title="Safety Monitoring"
            metaTitle="AI Safety Monitoring & Video Analytics | Accura Datavision"
            metaDescription="Proactive AI safety monitoring for intrusion detection, PPE compliance, and hazard alerting. Enhance security with automated 24/7 intelligent video analytics."
            subtitle="Proactive Anomaly Detection & Security"
            image="/images/ppe_detect.png"
            description="Enhance security with proactive AI monitoring. Our system automatically detects anomalies, unauthorized access, and safety hazards, sending instant alerts to security personnel so they can react before incidents escalate."
            features={[
                "Intrusion Detection/Perimeter Protection",
                "Loitering & Suspicious Behavior Analysis",
                "Abandoned Object Detection",
                "Smoke & Fire Early Warning",
                "PPE Compliance (Helmet/Vest Detection)",
                "Slip & Fall Detection"
            ]}
            benefits={[
                "24/7 Automated Vigilance",
                "Reduce False Alarms via AI",
                "Faster Incident Response Times",
                "Lower Security Personnel Costs"
            ]}
            specs={[
                { label: "Alerts", value: "SMS, Email, App, VMS" },
                { label: "False Alarm", value: "< 1 per Week" },
                { label: "Video History", value: "Event-based Cloud Rec" },
                { label: "Scalability", value: "Unlimited Streams" }
            ]}
        />
    );
};

export default SafetyMonitoring;
