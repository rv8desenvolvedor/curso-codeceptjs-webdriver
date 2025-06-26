const { faker } = require("@faker-js/faker");
const {
  I,
  home_page,
  cadastro_usuario_page,
  minha_conta_page,
  validacao_usuario_page,
} = inject();

Feature("Criação do Usuário");

Scenario("Auto Login com Sucesso", async ({ autoLogin }) => {
  await autoLogin("user");
});

Scenario("Auto Deslogin com Sucesso", async ({ autoLogin }) => {
  await autoLogin("admin");
});

Scenario("Criar Novo Usuário", ({}) => {
  var firstName = faker.person.firstName("male");
  var email = faker.internet.email();
  var password = faker.internet.password({ length: 6 });

  I.amOnPage("/");

  // Página Inicial
  home_page.accessCadastroPage();

  // Acesso ao cadastro
  cadastro_usuario_page.accessRegistroPage();

  // Preenchimento do cadastro
  cadastro_usuario_page.dadosRegistro(firstName, email, password);

  // Cadastrar
  cadastro_usuario_page.criarUsuario();

  // Confirmação do Cadastro
  minha_conta_page.confirmacaoPopUp();

  // Validacao Usuário
  validacao_usuario_page.validacaoUsuario(firstName);
});
