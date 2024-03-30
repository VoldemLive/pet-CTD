import React, { useState } from "react"

const Alphabet = ({ letterSelected, currentLetter }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  /**
   * Handles the button click event.
   *
   * @param {string} letter - The letter selected by the user.
   * @returns {void}
   */
  const buttonHandler = (letter) => {
    letterSelected(letter)
  }
  return (
    <div className="flex flex-row flex-wrap text-gray-500 content-center items-center justify-center">
      {alphabet.map((letter, index) => (
        <button
          key={index}
          className={`flex p-2 hover:bg-gray-200 ${
            currentLetter === letter
              ? "bg-gray-400 hover:bg-gray-400 font-semibold text-white"
              : "bg-transparent"
          }`}
          onClick={() => buttonHandler(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}

export default Alphabet
