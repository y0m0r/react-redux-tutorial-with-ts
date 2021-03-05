import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";


type Props = {
    addTodo: (input: string) => void
}

type State = {
    input: string
}

class AddTodo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = (input: string) => {
        this.setState({input});
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
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

export default connect(
    null,
    {addTodo}
)(AddTodo);
// export default AddTodo;
