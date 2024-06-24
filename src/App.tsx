import { useCallback, useEffect, useState } from "react";
import { ArrowPathIcon, ForwardIcon } from "@heroicons/react/20/solid";
import words from "./words.json";
import Hangman from "./components/hangman";
import Word from "./components/word";
import Keyboard from "./components/keyboard";
import PopUp from "./components/pop-up";

export default function App() {
  function getWrod() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const [wordToGuess, setWordToGuess] = useState<string>(
    getWrod().toLowerCase()
  );

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter)) {
        return;
      }
      setGuessedLetters((prev) => [...prev, letter]);
    },
    [guessedLetters]
  );

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey && event.key === "r") ||
        (event.ctrlKey && event.key === "r")
      )
        return;
      const { key } = event;
      if (!key.match(/[a-z]/)) {
        return;
      }
      event.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [guessedLetters]);

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  console.log(wordToGuess);

  return (
    <main>
      {isLoser && (
        <PopUp>
          <div className="pop-up-content">
            <h2>Game Over!</h2>
            <p>
              The word was <span>{wordToGuess}</span>.
            </p>
            <button
              onClick={() => {
                setGuessedLetters([]);
                setWordToGuess(getWrod());
              }}
            >
              <span style={{ display: "flex" }}>
                <ArrowPathIcon
                  style={{
                    color: "white",
                    width: "16px",
                    height: "16px",
                    rotate: "30deg",
                  }}
                />
              </span>
              Play Again
            </button>
          </div>
        </PopUp>
      )}
      {isWinner && (
        <PopUp>
          <div className="pop-up-content">
            <h2>Congradulations</h2>
            <p>You Won!</p>
            <button
              onClick={() => {
                setGuessedLetters([]);
                setWordToGuess(getWrod());
              }}
            >
              <span style={{ display: "flex" }}>
                <ArrowPathIcon
                  className="icon"
                  style={{
                    color: "white",
                    width: "16px",
                    height: "16px",
                    rotate: "30deg",
                  }}
                />
              </span>
              Play Again
            </button>
          </div>
        </PopUp>
      )}
      <div className="wrapper">
        <div className="container">
          <Hangman numberOfGuesses={inCorrectLetters.length} />
          <Word guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
          <Keyboard
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={inCorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />

          <button
            onClick={() => {
              setGuessedLetters([]);
              setWordToGuess(getWrod());
            }}
          >
            <span style={{ display: "flex", gap: "8px" }}>
              <ForwardIcon
                style={{
                  width: "16px",
                  height: "16px",
                }}
              />
              Next Word
            </span>
          </button>
        </div>
      </div>
      <footer>
        <p>
          Imagine by <a>Nuwan Perera</a>
        </p>
      </footer>
    </main>
  );
}
