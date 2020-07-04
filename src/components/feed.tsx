import React, { useState } from "react"
import Card from "./card"
import Load from "./loading"

interface Props {}

const Feed = (props: Props) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  setTimeout(() => {
    // setError(true)
    setLoading(false)
  }, 2000)
  if (error) {
    return <Load status="error" />
  } else if (loading) {
    return <Load status="load" />
  } else {
    return (
      <div>
        {loading ? (
          <Load status="load" />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {/* Mockup */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        )}
      </div>
    )
  }
}

export default Feed
