import React from "react"
import Card from "./card"

interface Props {}

const Feed = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default Feed
