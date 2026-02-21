import './Results.css';

const Results = () => {
  const results = [
    {
      number: '95%+',
      label: 'Proven Accuracy',
      description: 'Consistently outperforming manual counting precision standards',
      icon: '🎯'
    },
    {
      number: 'Faster',
      label: 'Quick Turnaround',
      description: 'Deliver comprehensive traffic reports in hours instead of weeks',
      icon: '⚡'
    },
    {
      number: 'Cost',
      label: 'Effective Solutions',
      description: 'Significant savings on operational expenses and manpower',
      icon: '💰'
    }
  ];

  return (
    <section className="results-section">
      <div className="results-container">
        <div className="results-header">
          <span className="section-tag">Results That Matter</span>
          <h2 className="results-title">
            Proven Results That <span>Drive Success</span>
          </h2>
          <p className="results-subtitle">
            Our AI Machine Vision based approach delivers superior performance metrics compared to traditional traffic survey methods, ensuring faster turnaround times and cost-effective solutions.
          </p>
        </div>

        <div className="results-grid">
          {results.map((result, index) => (
            <div key={index} className="result-card">
              <div className="result-icon">{result.icon}</div>
              {result.number && <div className="result-number">{result.number}</div>}
              <div className="result-label">{result.label}</div>
              <div className="result-description">{result.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;

