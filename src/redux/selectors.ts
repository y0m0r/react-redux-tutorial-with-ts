import {VISIBILITY_FILTERS} from "../constants";
import {TodoType} from "../components/Todo";

type Store = {
    todos: any

}

export const getTodosState = (store: Store) => store.todos;

export const getTodoList = (store: Store) =>
    getTodosState(store) ? getTodosState(store).allIds : [];

export const getTodoById = (store: Store, id: number) =>
    getTodosState(store) ? {...getTodosState(store).byIds[id], id} : {};

/**
 * example of a slightly more complex selector
 * select from store combining information from multiple reducers
 */
export const getTodos = (store: Store) =>
    getTodoList(store).map((id: number) => getTodoById(store, id));

export const getTodosByVisibilityFilter = (store: Store, visibilityFilter: string) => {
    const allTodos = getTodos(store);
    switch (visibilityFilter) {
        case VISIBILITY_FILTERS.COMPLETED:
            return allTodos.filter((todo: TodoType) => todo.completed);
        case VISIBILITY_FILTERS.INCOMPLETE:
            return allTodos.filter((todo: TodoType) => !todo.completed);
        case VISIBILITY_FILTERS.ALL:
        default:
            return allTodos;
    }
};
