import React from "react";
import {connect} from "react-redux";
import cx from "classnames";
import {toggleTodo} from "../redux/actions";


export type TodoType = {
    id: number
    completed: boolean
    content: string
}

interface StateProps {

}

interface DispatchProps {
    toggleTodo: (id: number) => void
}

interface OwnProps {
    todo: TodoType
}

type Props = StateProps & DispatchProps & OwnProps


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
export default connect<StateProps, DispatchProps, OwnProps>(
    null,
    {toggleTodo}
)(Todo);
