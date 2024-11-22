// src/components/Welcome.js
import { motion } from "framer-motion";
import "../styles/Welcome.css";

function Welcome({ onNext }) {
  return (
    <motion.div
      className="welcome-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1>Welcome, Ati</h1>
      <p>This is a small token of appreciation for someone that means a lot to me.</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
      >
        Click to Continue
      </motion.button>
    </motion.div>
  );
}

export default Welcome;
