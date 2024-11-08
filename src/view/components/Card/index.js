import React from "react";

export const Card = ({ id, content, completed = false }) => {

  const style = {
    false: {
      card: 'bg-white hover:bg-blue-500 hover:shadow-xl',
      header: 'bg-blue-500/50 left-0 w-[33%] group-hover:bg-white group-hover:w-[67%]',
      content: 'text-black group-hover:text-white'
    },
    true: {
      card: 'bg-blue-500 hover:bg-white shadow-xl',
      header: 'bg-white right-0 w-[67%] group-hover:bg-blue-500/50 group-hover:w-[33%]',
      content: 'text-white group-hover:text-black'
    }
  }

  return (
    <a href="#"
      className={`transition-all duration-1000 m-2 p-4 relative z-40 group rounded-lg ${style[completed].card}`}>
      <div
        className={`absolute top-0 bg-blue-500/50 left-0 w-[33%] h-1 z-30 transition-all duration-1000 ${style[completed].header}`}>
      </div>
      <div className={`py-2 px-9 relative ${style[completed].content}`}>

        <h3 className="transition-all duration-1000 mt-8 text-lg font-semibold">{id}
        </h3>
        <p className="transition-all duration-1000 mt-4 text-base">{content}</p>
      </div>
    </a>
  )
}