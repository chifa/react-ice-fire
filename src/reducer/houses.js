import { Record } from "immutable";
import {
  ERROR,
  FETCH_HOUSES,
  FETCH_HOUSE,
  START,
  SUCCESS
} from "../constants";
import { arrToMap } from "../utils";

const HouseModel = Record({
  url: null,
  name: "",
  region: "",
  coatOfArms: "",
  words: "",
  titles: [],
  seats: [],
  currentLord: "",
  heir: "",
  overlord: "",
  founded: "",
  founder: "",
  diedOut: "",
  ancestralWeapons: [],
  cadetBranches: [],
  loading: false,
  swornMembers: []
});

const ReducerModel = Record({
  entities: arrToMap([], HouseModel),
  isLoading: false,
  isLoaded: false,
  error: null
});

export default (houses = new ReducerModel(), action) => {
  const { type, payload, id, response, error } = action;

  switch (type) {
    case FETCH_HOUSES + START:
      return houses.set("isLoading", true);

    case FETCH_HOUSES + ERROR:
      return houses
        .set("isLoading", false)
        .set("isLoaded", false)
        .set("error", error);

    case FETCH_HOUSES + SUCCESS:
      return houses
        .set("entities", arrToMap(response, HouseModel))
        .set("isLoading", false)
        .set("isLoaded", true)
        .set("error", null);

    case FETCH_HOUSE + START:
      return houses.setIn(["entities", payload.id, "loading"], true);

    case FETCH_HOUSE + SUCCESS:
      return houses.setIn(
        ["entities", payload.id],
        new HouseModel(response)
      );

    default:
      return houses;
  }
};
