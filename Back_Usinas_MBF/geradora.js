var bd_geradora = SpreadsheetApp.openById("13gVifwOuY_J9P-3_TLMqPzo561cDCeRwanxmt_HjEzk")

// SALVAR GERADORA
function salvar_geradora(obj_para_lancar){ 
  var aba_geradora = bd_geradora.getSheetByName("Unidade_Geracao")
  var qt = 0

  var ult_l = aba_geradora.getLastRow()
  var ult_c = aba_geradora.getLastColumn()

  var todos_dados = aba_geradora.getRange(1,1,ult_l,ult_c).getValues()
  
  // VERIFICAR SE UG EXISTE 
  for( var i=0;i<todos_dados.length;i++){
    if (todos_dados[i][0]==obj_para_lancar["ug"]){
      qt=qt+1
    }
  }

  if (qt==0){
    incluir_geradora(obj_para_lancar)
  }else{
    atualizar_geradora(obj_para_lancar)
  }
}

// Obter lista de Geradoras
function ler_todas_geradoras(){
  var aba_geradora = bd_geradora.getSheetByName("Unidade_Geracao")
  var ult_l = aba_geradora.getLastRow()
  var ult_c = aba_geradora.getLastColumn()
  var todos_dados = aba_geradora.getRange(1,1,ult_l,ult_c).getValues()

  todos_dados = JSON.stringify(todos_dados)
  return todos_dados
}

// Consulta Geradora Específica
function ler_geradora_especifica(ug){
  var aba_geradora = bd_geradora.getSheetByName("Unidade_Geracao")
  var ult_l = aba_geradora.getLastRow()
  var ult_c = aba_geradora.getLastColumn()
  var todos_dados = aba_geradora.getRange(1,1,ult_l,ult_c).getValues()

  for (var i=0; i<todos_dados.length;i++){
    if(todos_dados[i][0]==ug){
      return todos_dados[i]
    }
  }

  todos_dados = JSON.stringify(todos_dados)
  return todos_dados
}

// INCLUIR GERADORA
function incluir_geradora(obj_para_lancar){
  var aba_geradora = bd_geradora.getSheetByName("Unidade_Geracao")

  var ult_l = aba_geradora.getLastRow()+1
  var ult_c = aba_geradora.getLastColumn()

  var cabecalho = aba_geradora.getRange(1,1,1,aba_geradora.getLastColumn()).getValues()[0]
  var dados_organizados = organizar_acordo_cabecalho(cabecalho,obj_para_lancar)
  aba_geradora.getRange(ult_l,1,1,ult_c).setValues([dados_organizados])
}

// ATUALIZAR DADOS DA GERADORA
function atualizar_geradora(obj_para_lancar){
  var aba_geradora = bd_geradora.getSheetByName("Unidade_Geracao")
  var ult_l = aba_geradora.getLastRow()
  var ult_c = aba_geradora.getLastColumn()
  var todos_dados = aba_geradora.getRange(1,1,ult_l,ult_c).getValues()

  var cabecalho = aba_geradora.getRange(1,1,1,aba_geradora.getLastColumn()).getValues()[0]
  var dados_organizados = organizar_acordo_cabecalho(cabecalho,obj_para_lancar)

  for (i=0;i< todos_dados.length;i++){
    if(todos_dados[i][0]==obj_para_lancar['ug']){
      aba_geradora.getRange(i+1,1,1,todos_dados[i].length).setValues([dados_organizados])
    }
  }
}