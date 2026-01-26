import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const steps = [
    {
      img: '/images/why_choose_us/lane_appearance.jpg',
      title: 'Raw Trajectories',
      desc: 'We begin by capturing high-fidelity raw data, mapping the complete trajectories of every vehicle entering the frame to ensure no movement is missed, regardless of traffic density.',
      tag: 'Step 1'
    },
    {
      img: '/images/why_choose_us/short_tracks_vis.jpg',
      title: 'AI Filtering & Occlusion',
      desc: 'Our proprietary AI algorithms analyze the tracks to identify and correct breakout occlusions, automatically filtering noise to stitch fragmented paths into coherent segments.',
      tag: 'Step 2'
    },
    {
      img: '/images/why_choose_us/long_trajectories.jpg',
      title: 'Human Post-Processing',
      desc: 'Final verification is performed by expert human annotators who rigorously post-process the data, merging complex trajectories to guarantee 97%+ ground-truth accuracy.',
      tag: 'Final Result'
    }
  ];

  return (
    <section className="why-choose-us" id="why-choose-us">
      <div className="wcu-container">
        <div className="wcu-header">
          <span className="section-tag">Why Choose Us</span>
          <h2 className="wcu-title">
            Precision Through <span>AI + Human Expertise</span>
          </h2>
          <p className="wcu-subtitle">
            We don't just rely on algorithms. Our unique hybrid approach guarantees the highest quality data for your traffic analysis needs.
          </p>
        </div>

        <div className="wcu-steps">
          {steps.map((step, index) => (
            <div className="wcu-step" key={index}>
              <div className="step-image-container">
                <img src={step.img} alt={step.title} />
                <span className="step-tag">{step.tag}</span>
              </div>
              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>

        <div className="wcu-benefits-text">
          <h3>Efficiency Meets Accuracy</h3>
          <p>
            By combining state-of-the-art AI for rapid processing with human verification for edge cases,
            we deliver <span className="highlight">97%+ accurate data</span> at a fraction of the time and cost of manual surveys.
            Get actionable insights faster, without compromising on quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
