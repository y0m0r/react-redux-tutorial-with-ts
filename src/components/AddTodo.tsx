import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {addTodo} from "../redux/actions";


const mapDispatch = {addTodo}


const connector = connect(
    null,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>


// local state
type State = {
    input: string
}

class AddTodo extends React.Component<PropsFromRedux, State> {
    constructor(props: PropsFromRedux) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = (input: string) => {
        this.setState({input});
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input); // dispatch action!!!!
        this.setState({input: ""});
    };

    render() {
        return (
            <div>
                <input
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connector(AddTodo);

