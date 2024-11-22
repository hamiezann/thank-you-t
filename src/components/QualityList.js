// src/components/QualitiesList.js
import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/QualityList.css";

function QualitiesList() {
//   const qualities = [
//     { id: 1, text: "You have an amazing sense of humor! Walaupun terpaksa", revealed: false },
//     { id: 2, text: "Your kindness inspires me.", revealed: false },
//     { id: 3, text: "You make every moment special.", revealed: false },
//     { id: 4, text: "Coz u always help me in every task and moments.", revealed: false },
//     { id: 5, text: "Coz you willing to share a portion of your lifes memory with me", revealed: false },
//   ];
  const qualities = [
    { id: 1, text: "Thanks ajar aku dari awal intern.", revealed: false },
    { id: 2, text: "Teman aku borak bila boring", revealed: false },
    { id: 3, text: "Ajar bende tak sepatutnya", revealed: false },
    { id: 4, text: "Ajak mengumpat", revealed: false },
    { id: 5, text: "Support me throughout the intern whether seen or unseen things", revealed: false },
  ];
  
  const [items, setItems] = useState(qualities);
  const allRevealed = items.every((item) => item.revealed);

  const revealText = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, revealed: true } : item
      )
    );
  };

  return (
    <div className="qualities-list">
      {items.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => revealText(item.id)}
          initial={{ scale: 1, opacity: 0.8 }}
          whileHover={{ scale: 1.1, opacity: 1 }}
          whileTap={{ scale: 0.95 }}
          className={`quality-button ${item.revealed ? "revealed" : ""}`}
        >
          {item.revealed ? item.text : "Click to reveal"}
        </motion.button>
      ))}
      {allRevealed && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="final-message"
        >
          Thank you for being you. You're truly special to me. 💖
        </motion.div>
      )}
    </div>
  );
}

export default QualitiesList;
