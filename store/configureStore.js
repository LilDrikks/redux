import redAluno from "./aluno.js";
import redAulas from "./aulas.js";

const reducer = Redux.combineReducers({ redAluno, redAulas });

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;