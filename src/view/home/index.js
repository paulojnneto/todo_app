import React from "react";

import { useGetTodos } from "../../hooks";
import { CardList } from "../components";

export const Home = () => {
    const [todos = []] = useGetTodos();
    
    return (
        <div className="bg-blue-200">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                <div className="max-w-xl mx-auto text-center">
                    <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                        <p className="text-4xl font-semibold tracking-widest text-g uppercase">Industries:</p>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit..</p>
                </div>
                <CardList items={todos} />
            </div>
        </div>
    )
}