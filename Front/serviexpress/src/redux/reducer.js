import {AUTHENTICATE} from "./action";
const initialState = {
  rdcr_isAuth: window.sessionStorage.getItem("token"),
  rdcr_user: {}, 
  rdcr_categories: [],
  Publications: [],
  switchloading: false,

  detail: {},
  profileUser: [],
  categories: [],
  filteredCategories: [],
  publicationById: {},

  user: {},
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "JALZ_GET_CATEGORIES":
      return {
        ...state,
        rdcr_categories: payload,
      };
    case "GET_PUBLICATIONS":
      return {
        ...state,
        Publications: action.payload,
      };
    case "GET_PUBLICATIONS_NAME":
      return {
        ...state,
        Publications: action.payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_PUBLICATION_ID":
      return {
        ...state,
        publicationById: action.payload,
      };
    case "SWICH_LOADING":
      return {
        switchloading: true,
      };

    case "GET_BY_ID":
      let aux = action.payload;
      aux.date = aux.date.slice(0, 10);
      return {
        ...state,
        detail: aux,
      };
    case "POST_PROFILEUSER":
      return {
        ...state,
        profileUser: [...action.payload],
      };
    case "FILTER_CATEGORIES":
      let categoriesCopy = state.categories;
      let filtered =
        action.payload === "all"
          ? categoriesCopy
          : categoriesCopy.filter(
              (category) => category.name === action.payload,
            );
      if (filtered.length <= 0) {
        filtered = categoriesCopy;
      }
      return {
        ...state,
        filteredCategories: [...filtered],
      };
    case "GET_USER":
      return {
        ...state,
        user: payload,
      };
    case AUTHENTICATE:

      window.sessionStorage.setItem("token", payload.login);

      return {
        ...state,
        rdcr_user: payload,
        rdcr_isAuth: true
      };
    default:
      return state;
  }
};

export default rootReducer;


/* 


case AUTHENTICATE:
      return {
        ...state,
        user: payload,
        rdcr_isAuth: true,
      };
    case RELOAD_AUTH:
      console.log("FIRST", window.sessionStorage.getItem("token"));
      window.sessionStorage.setItem("token", payload);
      return {
        ...state,
        rdcr_isAuth: payload
      }

*/