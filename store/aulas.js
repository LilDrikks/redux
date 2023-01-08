const COMPLETAR_AULA = "redAulas/COMPLETAR_AULA"; // (id)
const COMPLETAR_CURSO = "redAulas/COMPLETAR_CURSO";
const RESETAR_CURSO = "redAulas/RESETAR_CURSO";

export const completarAula = (payload) => ({ type: COMPLETAR_AULA, payload });
export const completarCurso = () => ({ type: COMPLETAR_CURSO });
export const resetarCurso = () => ({ type: RESETAR_CURSO });

const aulas = [
  {
    id: 1,
    nome: "Design",
    completa: true,
  },
  {
    id: 2,
    nome: "HTML",
    completa: false,
  },
  {
    id: 3,
    nome: "CSS",
    completa: false,
  },
  {
    id: 4,
    nome: "JavaScript",
    completa: false,
  },
];

const redAulas = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      state.forEach((i) => (i.id === action.payload ? (i.completa = true) : false));
      break;
    case COMPLETAR_CURSO:
      state.forEach((i) => (i.completa = true));
      break;
    case RESETAR_CURSO:
      state.forEach((i) => (i.completa = false));
      break;
    default:
      return state;
  }
}, aulas);

export default redAulas;
