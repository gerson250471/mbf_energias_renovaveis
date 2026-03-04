function doGet(e) {
  try{
    var html = HtmlService.createTemplateFromFile(e.parameter.page)
    html.ug = e.parameter.ug
    return html.evaluate();
  }catch(err){
    var html = HtmlService.createTemplateFromFile("templates/index")
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
