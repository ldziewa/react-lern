import React from "react";
import ListItem from "./ListItem";

const List = ({ numbers }) => {
    const listItems = numbers.map(number => <ListItem key={number.key} value={number.value}/>);

    return <ul>{listItems}</ul>;
};

export default List;
