import "../../style/hangman-word.css"

type WordProps = {
  guessedLetters: string[];
  wordToGuess: string;
};
export default function Word(
  { guessedLetters, wordToGuess }: WordProps
) {
  // const guessedLetters = ["w", "o", "r"];
  return (<p className="word-container">{
    wordToGuess.split("").map((letter, index) => (
      <span key={index} className="letter">
        <span style={{
          opacity: guessedLetters.includes(letter) ? 1 : 0,
          transition: "opacity 0.5s",
        }} >{letter}</span>
      </span>
    ))
  }
  </p>);
}
