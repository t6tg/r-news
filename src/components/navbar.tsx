import React, { useState } from "react"
import { Link } from "gatsby"

interface Props {
  tag: string
}

const Navbar = (props: Props) => {
  const [isExpanded, toggleExpansion] = useState(false)
  return (
    <nav className="flex items-center justify-between flex-wrap ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          version="1.0"
          className="fill-current h-8 w-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="94.000000pt"
          height="95.000000pt"
          viewBox="0 0 94.000000 95.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,95.000000) scale(0.100000,-0.100000)"
            fill="#9B2C2C"
            stroke="none"
          >
            <path
              d="M373 939 c-53 -10 -115 -38 -108 -49 3 -5 136 -88 295 -185 160 -97
288 -180 285 -184 -2 -4 -121 -77 -265 -162 l-260 -153 0 -88 c0 -101 -1 -100
101 -112 77 -10 179 9 255 46 l65 32 -87 87 c-47 48 -84 91 -81 96 3 5 28 20
56 32 l50 24 78 -71 c43 -39 81 -68 86 -65 17 11 57 85 77 142 27 80 27 206 1
290 -71 227 -311 367 -548 320z"
            />
            <path
              d="M119 791 c-23 -25 -57 -79 -77 -119 -29 -61 -35 -87 -40 -161 -5
-103 8 -170 51 -256 28 -56 135 -175 157 -175 6 0 11 110 12 280 l3 281 47
-30 47 -30 3 -129 3 -129 170 98 c94 55 171 102 172 107 1 4 -112 75 -252 158
l-255 152 -41 -47z"
            />
          </g>
        </svg>
        <span className="font-semibold text-xl tracking-tight text-gray-900 dark:text-white">
          RedXAV{" "}
          <span className="text-sm bg-red-800 p-1 rounded-full px-2 text-white">
            {props.tag}
          </span>
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 border rounded dark:text-gray-100 dark:border-gray-100 border-gray-800  dark:hover:text-gray-100 hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow"></div>
        <div className="inline-block text-sm px-4 py-2 leading-none  lg:mt-0">
          <div className="text-sm">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 dark:text-gray-100 hover:text-red-800 mr-4"
            >
              Home
            </Link>
            <Link
              to="/c"
              className="block mt-4 lg:inline-block lg:mt-0 dark:text-gray-100 hover:text-red-800 mr-4"
            >
              Categories
            </Link>
            <Link
              to="/t"
              className="block mt-4 lg:inline-block lg:mt-0 dark:text-gray-100 hover:text-red-800"
            >
              Top AV
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
