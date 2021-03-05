import React from "react";
import {connect, ConnectedProps} from "react-redux";
import cx from "classnames";
import {toggleTodo} from "../redux/actions";


export type TodoType = {
    id: number
    completed: boolean
    content: string
}


const mapDispatch = {toggleTodo}


const connector = connect(
    null,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>


interface Props extends PropsFromRedux {
    todo: TodoType
}


const Todo = (props: Props) => (
    <li className="todo-item" onClick={() => props.toggleTodo(props.todo.id)}>
        {props.todo && props.todo.completed ? "👌" : "👋"}{" "}
        <span
            className={cx(
                "todo-item__text",
                props.todo && props.todo.completed && "todo-item__text--completed"
            )}
        >
      {props.todo.content}
    </span>
    </li>
);

export default connector(Todo);
