function doGet(e) {
  try {
    // Se não houver parâmetro 'page', define a index como padrão antes de tentar criar o template
    var destino = (e.parameter && e.parameter.page) ? e.parameter.page : "templates/index";
    
    var html = HtmlService.createTemplateFromFile(destino);
    
    html.url = ScriptApp.getService().getUrl(); 
    html.ug = e.parameter.ug || ""; 
    html.uc = e.parameter.uc || ""; 
    
    return html.evaluate()
      .setTitle('Sistema Solar MBF')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
      
  } catch(err) {
    // Log para você ver o erro no console do GAS se algo falhar
    Logger.log("Erro no doGet: " + err.toString());
    
    var html = HtmlService.createTemplateFromFile("templates/index");
    html.url = ScriptApp.getService().getUrl(); 
    return html.evaluate();
  }
}

function include(filename) {
  // Em vez de retornar apenas o conteúdo, criamos um template e avaliamos
  var template = HtmlService.createTemplateFromFile(filename);
  
  // Passamos a URL para dentro do componente incluído
  template.url = ScriptApp.getService().getUrl(); 
  
  return template.evaluate().getContent();
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