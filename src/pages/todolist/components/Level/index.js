import React, { useState, useEffect } from 'react'

function Level() {
  console.log('renderLevel01')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count + 1)
    }, 500)
    return () => {
      clearInterval(timer)
    }
  }, [count])

  return <div>count => {count}</div>
}

export default Level
