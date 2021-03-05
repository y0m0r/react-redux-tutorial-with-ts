import React from "react";
import {connect} from "react-redux";
import Todo, {TodoType} from "./Todo";
import {getTodosByVisibilityFilter} from "../redux/selectors";
//import { VISIBILITY_FILTERS } from "../constants";


type Props = {
    todos: TodoType[]
}

const TodoList = (props: Props) => (
    <ul className="todo-list">
        {props.todos && props.todos.length
            ? props.todos.map((todo, index) => {
                return <Todo key={`todo-${todo.id}`} todo={todo}/>;
            })
            : "No todos, yay!"}
    </ul>
);

// const mapStateToProps = state => {
//   const { byIds, allIds } = state.todos || {};
//   const todos =h
//     allIds && state.todos.allIds.length
//       ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
//       : null;
//   return { todos };
// };

const mapStateToProps = (state: any) => {
    const {visibilityFilter} = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    return {todos};
    //   const allTodos = getTodos(state);
    //   return {
    //     todos:
    //       visibilityFilter === VISIBILITY_FILTERS.ALL
    //         ? allTodos
    //         : visibilityFilter === VISIBILITY_FILTERS.COMPLETED
    //           ? allTodos.filter(todo => todo.completed)
    //           : allTodos.filter(todo => !todo.completed)
    //   };
};
// export default TodoList;
export default connect(mapStateToProps)(TodoList);
