export default function QuestionCard({ node, onOptionClick }) {
  return (
    <div className="question-card">
      {node.stageLabel && <p className="stage-label">{node.stageLabel}</p>}

      <h2 className="question-title">{node.title}</h2>
      <p className="question-text">{node.text}</p>

      <div className="options-container">
        {node.options.map((opt, index) => (
          <button
            key={index}
            className="option-btn"
            onClick={() => onOptionClick(opt)}
          >
            <span className="option-text">{opt.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
