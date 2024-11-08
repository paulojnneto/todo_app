import React from "react";
import { Card } from "../index";

export const CardList = ({items = []}) => {
    return (
        <div className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20 ">
            {items.map(({ id, content }) => {
                return (
                    <Card key={id} id={id} content={content} />
                )
            })}
        </div>
    )
}