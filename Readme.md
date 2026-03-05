# ☀️ Sistema MBF - Gestão de Energia Solar

## Sistema de gestão para rateio de créditos de energia solar, integrado ao Google Drive e Google Sheets.

### 📌 Status do Projeto

[x] Arquitetura Base (Google Apps Script + Bootstrap)

[x] Mapeamento Dinâmico de Colunas (ID Mapping)

[x] Módulo de Cadastro de Geradoras (UG)

[x] Módulo de Cadastro de Beneficiárias (UC) + Automação de Pastas

[x] Módulo de Lançamento de Geração + Upload PDF

[x] Módulo de Lançamento de Consumo + Upload PDF

[ ] Módulo de Automação de Rateio (Cálculos automáticos)

[ ] Dashboard de Saldo e Dashboard de Gráficos

### 🏗️ Arquitetura de Dados

1. Banco de Dados (Sheets)
   bd_Geradoras: Cadastro técnico das usinas.

bd_Beneficiarias: Cadastro dos clientes e seus respectivos percentuais de rateio.

bd_Historico_Geracao: Logs mensais de produção das usinas (Colunas A-H).

bd_Historico_Consumo: Logs detalhados de faturamento dos clientes (Colunas A-T).

2. Estrutura de Arquivos (Drive)
   Pasta Raiz: ID 17TtUh3EaCueOgvnGMl9hRBlL4HIB1CzT

Pastas Clientes: Criadas automaticamente com padrão UC - Nome Cliente.

### 🚀 Fluxo de Operação (Passo a Passo)

Passo 1: Configuração Inicial
[ ] Verificar IDs das pastas no Código.gs.

[ ] Validar se as abas do Sheets possuem os cabeçalhos corretos.

Passo 2: Cadastros
Cadastrar a Usina (UG) no módulo Geradoras.

Cadastrar o Cliente (UC) no módulo Beneficiárias (isso criará a pasta no Drive automaticamente).

Passo 3: Rotina Mensal
Lançar Geração: Ao receber o relatório da Enel ou da Usina, preencher o formulário e anexar o PDF.

Lançar Consumo: Ao receber a fatura do cliente, lançar os kWh consumidos e anexar o PDF (o sistema salvará o arquivo na pasta correta do cliente).

### 🛠️ Tecnologias Utilizadas

Backend: Google Apps Script (Clasp para versionamento).

Frontend: HTML5, Bootstrap 5 (Icons), jQuery.

Storage: Google Drive API & Google Sheets API.

### 📝 Próximas Implementações

[ ] Script de Rateio Automático: Função que lê a Geração do mês e distribui proporcionalmente para os clientes daquela UG na aba de Consumo.

[ ] Tela de Relatórios: Visualização em tabela com filtro de data e busca por UC.
