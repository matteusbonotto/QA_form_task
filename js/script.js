//Campos do formulario
var campo_resumo = document.getElementById('resumo')
const campo_prioridade = document.getElementById('prioridade')
prioridade.value = "★★☆☆ Médio"
var campo_ambiente_teste = document.getElementById('ambiente_teste')
var campo_docUX = document.getElementById('docUX')
var campo_QAmotivo = document.getElementById('QAmotivo')
var campo_categoria = document.getElementById('categoria')
var campo_resolucao = document.getElementById('resolucao')
var campo_issue = document.getElementById('idissue')
var campo_precondicoes = document.getElementById('precondicoes')
var campo_passos = document.getElementById('passos')
var campo_resultados_obtidos = document.getElementById('resultados_obtidos')
var campo_resultados_esperados = document.getElementById('resultados_esperados')
var campo_resutado = document.getElementById('resultado')
var campo_evidencia = document.getElementById('print_evidencia')
var campo_print = document.getElementById('print_esperado')
var btn_gerar = document.getElementById('btn-gerar')
var btn_limpar = document.getElementById('btn_limpar')
var btn_thread =  document.getElementById('btn_thread')
var lblprioridade = document.getElementById('lblprioridade')

//Passando dados dos campos para variaveis locais

function formata_prioridade(cor){
  lblprioridade.style.color = cor
  lblprioridade.style.font = "bold"
}


btn_gerar.addEventListener("click", () => {
  campo_resutado.hidden = false
  gerar()
  campo_resutado.select();
  document.execCommand('copy');
})

btn_limpar.addEventListener("click", () => {
  campo_resutado.hidden = true
})

btn_thread.addEventListener("click", () => {
  campo_resutado.hidden = false
  gerar_thread()
  campo_resutado.select();
  document.execCommand('copy');
})

campo_prioridade.addEventListener("change", () => {
  prioridade = campo_prioridade.value
  switch (prioridade) {
    case '1':
      lblprioridade.innerHTML = "★☆☆☆ Baixo"
      formata_prioridade("blue")
      break
    case '2':
      lblprioridade.innerHTML = "★★☆☆ Médio"
      formata_prioridade("orange")
      break;
    case '3':
      lblprioridade.innerHTML = "★★★☆ Alto"
      formata_prioridade("tomato")
      break;
    case '4':
      lblprioridade.innerHTML = "★★★★ Altíssima"
      formata_prioridade("red")
      break;
    default:
      lblprioridade.innerHTML = ""
      break
    }
  })
  
function nivel_prioridade() {
  switch (prioridade) {
    case '1':
      prioridade = "★☆☆☆ Baixo"
      break;
    case '2':
      prioridade = "★★☆☆ Médio"
      break;
    case '3':
      prioridade = "★★★☆ Alto"
      break;
    case '4':
      prioridade = "★★★★ Altíssima"
      break;
    default:
      prioridade = "[Preencher este campo]"
      break
  }
}
function gerar() {
  nivel_prioridade()
  var resultado = ""
    + "## **Resumo:** " + campo_resumo.value + "\n"
    + " **Prioridade:** " + prioridade + "\n"
    + " **Ambiente de testes:** " + campo_ambiente_teste.value + "\n"
    + " **Documentação de UX:** " + campo_docUX.value + "\n"
    + " **QA Motivo:** " + campo_QAmotivo.value + "\n"
    + " **Categoria:** "  + campo_categoria.value + "\n"
    + " **Resolução:** "  + campo_resolucao.value + "\n\n"
    + "---" + "\n"
    + "## **Pré-condições:** " + "\n" 
    + campo_precondicoes.value + "\n"
    + "## **Passos:** " + "\n" 
    + campo_passos.value + "\n\n"
    + "---" + "\n"
    + "**Resultados obtidos** " + "\n"
    + campo_resultados_obtidos.value + "\n"  
 //   + evidencia + "\n"  
    + "**Resultados esperados** " + "\n"
    + campo_resultados_esperados.value + "\n"  
  //  + Print + "\n"

  campo_resutado.innerHTML = resultado
}

const greetingMessage = () => {
  var greetings = ['Boa madrugada', 'Bom dia', 'Boa tarde', 'Boa noite'];
  //let h = new Date().toLocaleTimeString('pt-BR', { hour: 'numeric', hour12: false });
  let h = new Date().getHours();
  return greetings[(h / 6) >> 0];   //Trunca o resultado da divisão obtendo sempre um inteiro.
}


function gerar_thread() {
  nivel_prioridade()
  var resultado = ""
    + greetingMessage() + "," + "\n"
    + "[STORES-" + campo_issue.value + " - " + campo_resumo.value + "]"+ "(https:/" + "/shippd.atlassian.net/browse/STORES-" + campo_issue.value + ")" + "\n"
    + " *Prioridade:* " + prioridade + "\n"
  campo_resutado.innerHTML = resultado
}