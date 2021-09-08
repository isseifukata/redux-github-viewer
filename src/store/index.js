import { createStore, combineReducers } from "redux";

const initialData = {
  1: {
    id: 1,
    title: "A bug in Top Page",
    status: 0,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    createdBy: "",
  },
  2: {
    id: 2,
    title: "A problem of performance in Top Page",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: 0,
    createdBy: "",
  },
  3: {
    id: 3,
    title: "fix layout",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    status: 1,
    createdBy: "",
  },
};

const issueInitialState = {
  index: Object.keys(initialData).length,
  data: initialData,
};

const modalInitialState = {
  isModalOpen: false,
  newIssue: false,
  issueId: null,
};

const issueReducer = (state = issueInitialState, action) => {
  const { index } = state;
  const id = index + 1;
  switch (action.type) {
    case "UPDATE_ISSUE":
      return {
        data: {
          ...state.data,
          [action.payload.id]: {
            title: action.payload.title,
            description: action.payload.description,
          },
        },
      };
    case "ADD_ISSUE":
      return {
        index: id,
        data: {
          ...state.data,
          id: {
            id: [id],
            title: action.payload.title,
            description: action.payload.description,
            status: 1,
            createdBy: "",
          },
        },
      };
  }
  return state;
};

const modalReducer = (state = modalInitialState, action) => {
  switch (action.type) {
    case "OPEN_MODAL_NEW_ISSUE":
      return {
        isModalOpen: true,
        newIssue: true,
      };
    case "OPEN_MODAL_EXISTING_ISSUE":
      return {
        isModalOpen: true,
        newIssue: false,
        issueId: action.payload.issueId,
      };
    case "CLOSE_MODAL":
      return {
        isModalOpen: false,
        newIssue: true,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  issueReducer,
  modalReducer,
});

const store = createStore(rootReducer);

export default store;
