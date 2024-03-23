import React, { useState } from "react"

const Alphabet = ({ letterSelected, currentLetter }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

  const buttonHandler = (letter) => {
    letterSelected(letter)
  }
  return (
    <div className="flex flex-row flex-wrap text-gray-500 content-center items-center justify-center">
      {alphabet.map((letter, index) => (
        <button
          key={index}
          className={`flex p-2 hover:bg-slate-200 ${
            currentLetter === letter
              ? "bg-slate-400 hover:bg-slate-400 font-semibold text-white"
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
