import "../../style/keyboard.css";

type KeyboardProps = {
  activeLetters: string[];
  inactiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
};

export default function Keyboard({
  activeLetters,
  inactiveLetters,
  addGuessedLetter,
}: KeyboardProps) {
  const keySet1 = "qwertyuiop".split("");
  const keySet2 = "asdfghjkl".split("");
  const keySet3 = "zxcvbnm".split("");

  return (
    <div className="keyboard-container">
      <div className="keyboard-row">
        {keySet1.map((key) => {
          const isActive = activeLetters.includes(key);
          const isDisabled = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`key-button ${isActive ? "active" : ""} ${
                isDisabled ? "disabled" : ""
              }`}
              key={key}
              disabled={isActive || isDisabled}
            >
              <span className={`key`}>{key}</span>
            </button>
          );
        })}
      </div>
      <div className="keyboard-row">
        {keySet2.map((key) => {
          const isActive = activeLetters.includes(key);
          const isDisabled = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`key-button ${isActive ? "active" : ""} ${
                isDisabled ? "disabled" : ""
              }`}
              key={key}
              disabled={isActive || isDisabled}
            >
              <span className={`key`}>{key}</span>
            </button>
          );
        })}
      </div>
      <div className="keyboard-row ">
        {keySet3.map((key) => {
          const isActive = activeLetters.includes(key);
          const isDisabled = inactiveLetters.includes(key);
          return (
            <button
              onClick={() => addGuessedLetter(key)}
              className={`key-button ${isActive ? "active" : ""} ${
                isDisabled ? "disabled" : ""
              }`}
              key={key}
              disabled={isActive || isDisabled}
            >
              <span className={`key`}>{key}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
