import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {toggleTodo} from "../redux/actions";

export type TodoType = {
    id: number
    completed: boolean
    content: string
}
type Props = {
    todo: TodoType
    toggleTodo: (id: number) => void
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

// export default Todo;
export default connect(
    null,
    {toggleTodo}
)(Todo);
