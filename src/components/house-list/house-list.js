import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import House from "../house";
import {
    housesLoadingSelector,
    housesListSelector
} from "../../selectors";
import { fetchHouses } from "../../action_creators";
import Loader from "../loader";
import house from "../house/house";

@connect(
  state => ({
    houses: housesListSelector(state),
    isLoading: housesLoadingSelector(state)
  }),
  { fetchHouses }
)

class HouseList extends Component {
  static propTypes = {
    houses: PropTypes.array.isRequired,
    fetchHouses: PropTypes.func,
    page: PropTypes.number,
    toggleOpenItem: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchHouses();
  }

  render() {

    const {
      houses,
      isLoading
    } = this.props;

    if (isLoading) return <Loader />;


    return (
      <div>
        {houses.map(house => (
          <House
            key={house.url}
            house={house}
          />
        ))}
      </div>
    );
  }

}


export default HouseList;
