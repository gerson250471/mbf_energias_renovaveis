function doGet(e) {
  try {
    var html = HtmlService.createTemplateFromFile(e.parameter.page);
    
    // Variável do módulo de Geradoras
    html.ug = e.parameter.ug; 
    
    // Variável do módulo de Beneficiárias (NOVA LINHA)
    html.uc = e.parameter.uc; 
    
    return html.evaluate();
  } catch(err) {
    var html = HtmlService.createTemplateFromFile("templates/index");
    return html.evaluate();
  }
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

// ACESSA O BACKEND
function backend(func,args){
  return back_Usinas_MBF[func](args)
}

function testar_conexao_biblioteca() {
  // Vamos tentar chamar a função diretamente para ver se ela existe na biblioteca
  var resultado = back_Usinas_MBF.ler_todas_geradoras();
  Logger.log(resultado);
}