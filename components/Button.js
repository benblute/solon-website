export default function Button({text, onClick, empty, style}) {
  return (
    <div className="button" onClick={onClick} style={style}>
      <strong>{text}</strong>

      <style jsx>{`
        .button {
          height: 56px;
          border-radius: 32px;
          background: ${empty ? "none" : "#b96215"};
          display: flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding-left: 32px;
          padding-right: 32px;
          cursor: pointer;
          transition: transform 250ms;
          border: ${empty ? "2px solid white" : "none"};
        }

        .button:hover {
          transform: scale(0.9);
        }
      `}</style>
    </div>
  )
}
