import React from "react";

export const Card = ({ id, content }) => {
  return (
    <a href="#"
      className="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  ">
      <div
        className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  ">
      </div>
      <div className="py-2 px-9 relative  ">

        <svg className="w-16 h-16 fill-gray-400 group-hover:fill-white"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="polo-tshirt">
          <path d="m16.962 5.841 3.582.717-.716-4.115zM12.172 2.443l-.716 4.115 3.582-.717z">
          </path>
          <path
            d="M28.488 7.301a5.354 5.354 0 0 0-2.743-3.305c-.112-.056-2.96-1.2-4.942-1.996l.87 4.987a.52.52 0 0 1-.488.746.535.535 0 0 1-.101-.01L16.5 6.806V12a.5.5 0 1 1-1 0V6.806l-4.583.917a.518.518 0 0 1-.613-.598L11.196 2c-1.982.796-4.828 1.94-4.94 1.996a5.36 5.36 0 0 0-2.75 3.328l-1.492 6.26c-.042.175.01.359.138.486l.608.608a5.487 5.487 0 0 0 3.907 1.618c.196 0 .375-.111.464-.287l1.072-2.145c.013.292.02.584.02.876V28.48c0 .231.153.435.375.499A27.03 27.03 0 0 0 16 30c2.508 0 5.015-.34 7.402-1.022a.52.52 0 0 0 .376-.5V14.74c0-.292.006-.584.019-.876l1.073 2.145a.519.519 0 0 0 .463.287 5.487 5.487 0 0 0 3.907-1.618l.608-.608a.518.518 0 0 0 .138-.487l-1.498-6.282zM17.03 11.5c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1zm0-2c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1z">
          </path>
        </svg>
        <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">{id}
        </h3>
        <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">{content}</p>
      </div>
    </a>
  )
}