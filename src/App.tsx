import { useRef, useState } from "react";
import type { CSSProperties } from "react";

import { findCodeClue, isFinalCode } from "./components/clues";

const confettiPieces = Array.from({ length: 24 }, (_, index) => index);
const fireworkBursts = [
  { left: "18%", top: "18%", delay: "0s" },
  { left: "50%", top: "10%", delay: "0.28s" },
  { left: "78%", top: "22%", delay: "0.52s" },
];

function App() {
  const [enteredCode, setEnteredCode] = useState("");
  const [revealedClue, setRevealedClue] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);
  const [confettiBurstKey, setConfettiBurstKey] = useState(0);
  const confettiTimeoutRef = useRef<number | null>(null);
  const fireworksTimeoutRef = useRef<number | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextClue = findCodeClue(enteredCode);
    const shouldCelebrate = isFinalCode(enteredCode);
    const hasValidClue = nextClue !== "";

    setHasSubmitted(true);
    setRevealedClue(nextClue);

    if (confettiTimeoutRef.current !== null) {
      window.clearTimeout(confettiTimeoutRef.current);
    }

    if (fireworksTimeoutRef.current !== null) {
      window.clearTimeout(fireworksTimeoutRef.current);
    }

    if (hasValidClue) {
      setConfettiBurstKey((currentKey) => currentKey + 1);
      setShowConfetti(true);
      confettiTimeoutRef.current = window.setTimeout(() => {
        setShowConfetti(false);
        confettiTimeoutRef.current = null;
      }, 3200);
    } else {
      setShowConfetti(false);
      confettiTimeoutRef.current = null;
    }

    if (shouldCelebrate) {
      setShowFireworks(true);
      fireworksTimeoutRef.current = window.setTimeout(() => {
        setShowFireworks(false);
        fireworksTimeoutRef.current = null;
      }, 2600);
    } else {
      setShowFireworks(false);
      fireworksTimeoutRef.current = null;
    }
  };

  return (
    <main className="app-shell">
      {/* <BunnyBackground /> */}
      {showConfetti ? (
        <div
          key={confettiBurstKey}
          className="confetti-layer"
          aria-hidden="true"
        >
          {confettiPieces.map((piece) => (
            <span
              key={piece}
              className="confetti-piece"
              style={
                {
                  left: `${4 + piece * 4}%`,
                  "--confetti-drift": `${(piece % 2 === 0 ? 1 : -1) * (18 + (piece % 5) * 14)}px`,
                  animationDelay: `${(piece % 6) * 0.08}s`,
                  animationDuration: `${2.4 + (piece % 5) * 0.18}s`,
                } as CSSProperties & Record<"--confetti-drift", string>
              }
            />
          ))}
        </div>
      ) : null}
      {showFireworks ? (
        <div className="fireworks-layer" aria-hidden="true">
          {fireworkBursts.map((burst) => (
            <span
              key={`${burst.left}-${burst.top}-${burst.delay}`}
              className="firework-burst"
              style={{
                left: burst.left,
                top: burst.top,
                animationDelay: burst.delay,
              }}
            />
          ))}
        </div>
      ) : null}
      <div className="app-card">
        <p className="eyebrow">Äntligen påsk!</p>
        <h1>Jakten på kungaägget</h1>

        <form className="code-entry" action="#" onSubmit={handleSubmit}>
          <label className="code-entry-label" htmlFor="egg-code">
            Ange din kod
          </label>
          <p className="code-entry-help">
            Skriv in koden du hittat för att gå vidare.
          </p>
          <div className="code-entry-row">
            <input
              id="egg-code"
              name="egg-code"
              type="text"
              className="code-entry-input"
              value={enteredCode}
              onChange={(event) => setEnteredCode(event.target.value)}
              autoComplete="off"
            />
            <button type="submit" className="code-entry-button">
              Skicka
            </button>
          </div>
        </form>

        {hasSubmitted ? (
          revealedClue ? (
            <section className="clue-result" aria-live="polite">
              <p className="clue-result-label">Nästa ledtråd</p>
              <p className="clue-result-text">{revealedClue}</p>
            </section>
          ) : (
            <p className="clue-result clue-result-error" aria-live="polite">
              Ingen ledtråd hittades för den koden.
            </p>
          )
        ) : null}
      </div>
    </main>
  );
}

export default App;
