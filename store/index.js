import { reduzirTempo, incrementarTempo, modificarEmail } from './aluno.js'
import { completarAula, completarCurso, resetarCurso } from './aulas.js'
import store from './configureStore.js'

console.log(store.getState());



function render() {
  const { redAluno, redAulas } = store.getState()
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const tempoRestante = document.getElementById('tempoRestante');
  const totalAulasCompletas = document.getElementById('totalAulasCompletas');

  nome.innerText = redAluno.nome
  email.innerText = redAluno.email
  tempoRestante.innerText = redAluno.diasRestantes
  totalAulasCompletas.innerText = `${redAulas.filter(i => i.completa).length}`
}
render()

const subscribe = store.subscribe(render)

store.dispatch(modificarEmail('novo1email@gmail.com'))
store.dispatch(completarAula(2))
store.dispatch(completarCurso())
store.dispatch(resetarCurso())
store.dispatch(reduzirTempo())
store.dispatch(incrementarTempo())
store.dispatch(reduzirTempo())
store.dispatch(incrementarTempo())
