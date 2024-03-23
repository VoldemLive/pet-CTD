import React from "react"
import { LuLoader2 } from "react-icons/lu"
const Loading = () => {
  return (
    <div className="w-full p-20 h-10 flex content-center items-center justify-center">
      <div className="animate-spin text-gray-200">
        <LuLoader2 size={128} />
      </div>
    </div>
  )
}

export default Loading
