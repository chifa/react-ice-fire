import { Record } from "immutable";
import {FETCH_CHARACTER} from "../constants";


const CharacterModel = Record({
  id: null,
  name: null,
  house: null
});



export default (characters = [], action) => {
  const { type, payload, id } = action;

  switch (type) {
    case FETCH_CHARACTER:
      return characters.set(
        id,
        new CharacterModel({
          ...payload.character,
          id
        })
      );

    default:
      return characters;
  }
};
