import { createSelector } from "reselect";

export const housesSelector = state => state.houses.entities;
export const housesListSelector = createSelector(
    housesSelector,
  houses => houses.valueSeq().toArray()
);
export const housesLoadingSelector = state => state.houses.isLoading;

export const selectedSelector = state => filtersSelector(state).selected;

export const characterSelector = ({ characters }, { id }) => characters.get(id);

