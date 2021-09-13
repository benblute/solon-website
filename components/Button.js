export default function Button({text, onClick}) {
  return (
    <div className="button" onClick={onClick}>
      <strong>{text}</strong>

      <style jsx>{`
        .button {
          height: 56px;
          border-radius: 32px;
          background: #b96215;
          display: flex;
          align-items: center;
          white-space: nowrap;
          padding-left: 32px;
          padding-right: 32px;
          cursor: pointer;
          transition: transform 250ms;
        }

        .button:hover {
          transform: scale(0.9);
        }
      `}</style>
    </div>
  )
}
