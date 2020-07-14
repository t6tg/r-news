import React from "react"

interface Props {
  status: string
}

const Load = (props: Props) => {
  if (props.status === "load") {
    return (
      <main className="bg-green-700 bg-opacity-25 border-4 border-green-800 p-2 rounded-full font-bold">
        <span className="bg-green-400 p-1 px-2 rounded-full">Status</span>
        <span className="px-2">Loading . . . </span>
      </main>
    )
  } else if (props.status === "error") {
    return (
      <main className="bg-red-700 bg-opacity-25 border-4 border-red-800 p-2 rounded-full font-xl font-bold">
        <span className="bg-red-400 p-1 px-2 rounded-full">Status</span>
        <span className="px-2">Error , Please try again later.</span>
      </main>
    )
  }
}

export default Load
