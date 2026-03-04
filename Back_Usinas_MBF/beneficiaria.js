var bd_beneficiaria = SpreadsheetApp.openById("13gVifwOuY_J9P-3_TLMqPzo561cDCeRwanxmt_HjEzk")

// SALVAR BENEFICIARIA
function salvar_beneficiaria(obj_para_lancar){
  var aba_beneficiaria = bd_beneficiaria.getSheetByName("Beneficiarias")
  var qt = 0

  var ult_l = aba_beneficiaria.getLastRow()
  var ult_c = 10

  var todos_dados = aba_beneficiaria.getRange(1,1,ult_l,ult_c).getValues()
  
  // VERIFICAR SE UC EXISTE 
  for( var i=0;i<todos_dados.length;i++){
    if (todos_dados[i][0]==obj_para_lancar["uc"]){
      qt=qt+1
    }
  }

  if (qt==0){
    console.log('incluir')
    // incluir_beneficiaria(obj_para_lancar)
  }else{
    console.log("alterar")
    // atualizar_beneficiaria(obj_para_lancar)
  }
}

// Obter lista de Beneficiarias
function ler_todas_beneficiarias(){
  var aba_beneficiaria = bd_beneficiaria.getSheetByName("Beneficiarias")
  var ult_l = aba_beneficiaria.getLastRow()
  var ult_c = 10
  var todos_dados = aba_beneficiaria.getRange(1,1,ult_l,ult_c).getValues()

  todos_dados = JSON.stringify(todos_dados)
  return todos_dados
}

// Consulta Beneficiaria Específica
function ler_beneficiaria_especifica(uc){
  var aba_beneficiaria = bd_beneficiaria.getSheetByName("Beneficiarias")
  var ult_l = aba_beneficiaria.getLastRow()
  var ult_c = 10
  var todos_dados = aba_beneficiaria.getRange(1,1,ult_l,ult_c).getValues()

  for (var i=0; i<todos_dados.length;i++){
    if(todos_dados[i][0]==uc){
      return todos_dados[i]
    }
  }

  todos_dados = JSON.stringify(todos_dados)
  return todos_dados
}

// INCLUIR BENEFICIARIA
function incluir_beneficiaria(obj_para_lancar){
  var aba_beneficiaria = bd_beneficiaria.getSheetByName("Beneficiarias")

  var ult_l = aba_beneficiaria.getLastRow()+1
  var ult_c = 10

  var cabecalho = aba_beneficiaria.getRange(1,1,1,aba_beneficiaria.getLastColumn()).getValues()[0]
  var dados_organizados = organizar_acordo_cabecalho(cabecalho,obj_para_lancar)
  aba_beneficiaria.getRange(ult_l,1,1,ult_c).setValues([dados_organizados])
}

// ATUALIZAR DADOS DA BENEFICIARIA
function atualizar_beneficiaria(obj_para_lancar){
  var aba_beneficiaria = bd_beneficiaria.getSheetByName("Beneficiarias")
  var ult_l = aba_beneficiaria.getLastRow()
  var ult_c = 10
  var todos_dados = aba_beneficiaria.getRange(1,1,ult_l,ult_c).getValues()

  var cabecalho = aba_beneficiaria.getRange(1,1,1,aba_beneficiaria.getLastColumn()).getValues()[0]
  var dados_organizados = organizar_acordo_cabecalho(cabecalho,obj_para_lancar)

  for (i=0;i< todos_dados.length;i++){
    if(todos_dados[i][0]==obj_para_lancar['uc']){
      aba_beneficiaria.getRange(i+1,1,1,todos_dados[i].length).setValues([dados_organizados])
    }
  }
}