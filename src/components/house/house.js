import React, { useEffect, useContext } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./styles.css";

import { fetchHouse } from "../../action_creators";
import Loader from "../loader";

export function House({ house, isOpen, onBtnClick, fetchHouse }) {
  useEffect(() => {
    if (isOpen) {
      fetchHouse(house.id);
    }
  }, [house.id, isOpen]);

  const body = isOpen && (
    <section>
      {house.loading && <Loader />}
      <p>{house.region}</p>
        <p>"{house.coatOfArms}"</p>
      <PeopleList house={house} />
    </section>
  );

  return (
    <div>
      <h3 className={styles.header}>{house.name}</h3>
      {body}
      <button onClick={onBtnClick}>{isOpen ? "hide" : "open"} house</button>
    </div>
  );
}

House.propTypes = {
  house: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    region: PropTypes.string,
    coatOfArms: PropTypes.string
  })
};

export default connect(
  null,
  { fetchHouse }
)(House);
