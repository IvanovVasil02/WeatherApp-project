const mainState = {
  query: {
    content: " ",
  },

  meteoContainer: {
    content: [],
  },

  currentMeteo: {
    content: null,
  },

  currentCoord: {
    content: null,
  },
};

const mainReducer = (state = mainState, action) => {
  switch (action.type) {
    case "ADD_QUERY":
      return {
        ...state,
        query: {
          content: action.payload,
        },
      };

    case "ADD_CURRENT_COORD":
      return {
        ...state,
        currentCoord: {
          content: action.payload[0],
        },
      };

    case "SET_METEO_CONTAINER":
      return {
        ...state,
        meteoContainer: {
          content: action.payload,
        },
      };
    case "SET_CURRENT_METEO":
      return {
        ...state,
        currentMeteo: {
          content: action.payload,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
