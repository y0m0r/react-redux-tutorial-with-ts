import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {addTodo, setFilter} from "../redux/actions";
import {RootState} from "../redux/reducers";


interface StateProps {
}

interface DispatchProps {
    addTodo: (input: string) => void
}

interface OwnProps {
}

type Props = StateProps & DispatchProps & OwnProps


const mapDispatch = {addTodo}

// local state
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

export default connect<StateProps, DispatchProps, OwnProps>(
    null,
    mapDispatch
)(AddTodo);
// export default AddTodo;
