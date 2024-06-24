import "../../style/hangman.css";

const Head = () => <div className="head" />;

const Body = () => <div className="body" />;

const RightArm = () => <div className="right-arm" />;

const LeftArm = () => <div className="left-arm" />;

const RightLeg = () => <div className="right-leg" />;

const LeftLeg = () => <div className="left-leg" />;

type HangmanProps = {
  numberOfGuesses: number;
};

export default function Hangman({ numberOfGuesses }: HangmanProps) {
  const parts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

  return (
    <div style={{ width: "320px" }}>
      <div className="hangman-container">
        {parts.slice(0, numberOfGuesses).map((Part, index) => (
          <Part key={index} />
        ))}
        <div className="hangging-rope" />
        <div className="top-bar" />
        <div className="middle-bar" />
        <div className="bottom-bar" />
      </div>
    </div>
  );
}
