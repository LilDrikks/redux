const REDUZIR_TEMPO = "redAluno/REDUZIR_TEMPO";
const INCREMENTAR_TEMPO = "redAluno/INCREMENTAR_TEMPO";
const MODIFICAR_EMAIL = "redAluno/MODIFICAR_EMAIL"; //(email)

export const reduzirTempo = () => ({ type: REDUZIR_TEMPO });
export const incrementarTempo = () => ({ type: INCREMENTAR_TEMPO });
export const modificarEmail = (payload) => ({ type: MODIFICAR_EMAIL, payload });

const aluno = {
  email: "emaildoaluno@gmail.com",
  diasRestantes: 120,
  nome: "Rodrigo Santana",
};

const redAluno = immer.produce((state, action) => {
  switch (action.type) {
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.payload;
      break;
    default:
      return state;
  }
}, aluno);

export default redAluno;
