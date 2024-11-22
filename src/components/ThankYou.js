// src/components/ThankYouNote.js
import Typewriter from "typewriter-effect";
import "../styles/ThankYou.css";

function ThankYouNote() {
  return (
    <div className="thank-you">
      <Typewriter
        options={{
          strings: [
            "Thank you for being you.",
            "You make the world brighter.",
            "This is my way of saying you're amazing.",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export default ThankYouNote;
