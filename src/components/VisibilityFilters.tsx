import React from "react";
import cx from "classnames";
import {connect, ConnectedProps} from "react-redux";
import {setFilter} from "../redux/actions";
import {VISIBILITY_FILTERS} from "../constants";
import {RootState} from "../redux/reducers";


const mapState = (state: RootState) => ({
    activeFilter: state.visibilityFilter
})

const mapDispatch = {setFilter: setFilter}


const connector = connect(
    mapState,
    mapDispatch
)

type PropsFromRedux = ConnectedProps<typeof connector>


class VisibilityFilters extends React.Component<PropsFromRedux> {

    render() {
        return <div className="visibility-filters">
            {Object.keys(VISIBILITY_FILTERS).map((filterKey: string) => {
                const currentFilter = VISIBILITY_FILTERS[filterKey];
                return (
                    <span
                        key={`visibility-filter-${currentFilter}`}
                        className={cx(
                            "filter",
                            currentFilter === this.props.activeFilter && "filter--active"
                        )}

                        onClick={() => {
                            this.props.setFilter(currentFilter);
                        }}
                    >
                {currentFilter}
              </span>
                );
            })}

        </div>
    }

}


export default connector(VisibilityFilters)

