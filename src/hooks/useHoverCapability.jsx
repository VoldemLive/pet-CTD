import React, { useState, useEffect } from "react"

const useHoverCapability = () => {
  const [canHover, setCanHover] = useState(false)

  useEffect(() => {
    const match = window.matchMedia("(hover: hover)").matches
    setCanHover(match)
  }, [])

  return canHover
}

export default useHoverCapability
