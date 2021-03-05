import React from "react";
import cx from "classnames";
import {connect} from "react-redux";
import {setFilter} from "../redux/actions";
import {VISIBILITY_FILTERS} from "../constants";

type Props = {
    setFilter: (filter: string) => void
    activeFilter: string
}


class VisibilityFilters extends React.Component<Props> {

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

const mapStateToProps = (state: any) => {
    return {activeFilter: state.visibilityFilter};
};


export default connect(
    mapStateToProps,
    {setFilter}
)(VisibilityFilters);
// export default VisibilityFilters;