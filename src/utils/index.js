import { OrderedMap } from "immutable";

export const arrToMap = (arr, DataModel) =>
  arr.reduce(
    (acc, el) => acc.set(el.id, DataModel ? new DataModel(el) : el),
    new OrderedMap({})
  );
