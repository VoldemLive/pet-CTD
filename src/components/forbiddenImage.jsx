import React, { useState, useEffect } from "react"

const ForbiddenImage = ({ alert }) => {
  const finalAlert = alert || "access denied"
  return (
    <div className="flex w-full aspect-square border">
      <div className="flex bg-gray-900 top-0 left-0 w-full h-full justify-center items-center">
        <p className="text-white p-5 text-xl sm:text-2xl lg:text-3xl text-center">
          {finalAlert}
        </p>
      </div>
    </div>
  )
}

export default ForbiddenImage
