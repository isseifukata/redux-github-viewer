import { createStore } from "redux";

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

const initialState = {
  index: Object.keys(initialData).length,
  data: initialData,
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default store;
