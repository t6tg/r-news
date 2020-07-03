import React from "react"

interface Props {}

const Header = (props: Props) => {
  return (
    <div>
      <h1 className="bg-gray-200 dark:bg-gray-100 p-3 rounded-lg text-gray-900 mb-8">
        This site is under development. If you encounter a problem, please open
        the issue on
        {"  "}
        <a
          href="http://github.com/thanawatgulati/r-news/issues"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-800 hover:text-red-700"
        >
          @r-news
        </a>
        .
      </h1>
    </div>
  )
}

export default Header
