var validacao = require("assert");
const { faker } = require("@faker-js/faker");
const { I } = inject(); // Só importou porque está utilizando fora do scenario.
const cpfNome = require("../utils/cpf_name");

Feature("login e registro");

BeforeSuite(() => {
  // Executa o(os) passo(os) "Antes de tudo" do(os) Scenario(os) de teste.
  //console.log("Antes de tudo");
  console.log(cpfNome.cpfNome());
  console.log(cpfNome.soma(3, 9));
});

Before(() => {
  // Executa passos em comum dos Scenario de teste.
  I.amOnPage("/"); // Como acessar o site em comum.
  I.click(
    // Como clicar no botão de cadastro.
    "#top_header > div > div > div:nth-child(2) > div > ul > li:nth-child(2) > a"
  );
});

After(() => {
  console.log("After");
});

AfterSuite(() => {
  // Executa o(os) passo(os) "Depois de tudo" do(os) Scenario(os) de teste.
  console.log("Depois de tudo");
});

// O.skip ou .only atrapalha a execução do After e AfterSuite.

Scenario("Registro Vazio", ({ I }) => {
  // esse "I" ai não precisaria pois colocamos ele no início sendo uma const.

  // I.amOnPage("/");
  // pause(); // Para fazer um debug interativo
  /* I.click(
    "#top_header > div > div > div:nth-child(2) > div > ul > li:nth-child(2) > a"
  );*/

  I.click("#btnRegister");
  I.see("O campo nome deve ser prenchido");
});

Scenario("Exemplo de Registro ", async ({ I }) => {
  I.click('//*[@id="login_area"]/div/div/div/div/div[2]/label/span');
  I.fillField("#user", "Rodrigo Pinto");
  I.fillField("#email", "rodrigo@gmail.com");
  I.fillField("#password", secret("123456"));
  I.click("#btnRegister");
  I.see("Cadastro realizado!");
  I.click(
    "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions"
  );

  var title = await I.grabTitle();
  validacao.equal(title, "QAZANDO Shop E-Commerce"); // Título referente ao nome da Aba da página do Browser

  var logado = await I.grabTextFrom('//*[@id="userLogged"]'); // Elemento da página é a prinmeira barra do Menu - Painel (DASHBOARD)
  validacao.equal(logado, "Rodrigo Pinto");

  //I.dontSee("O campo nome deve ser prenchido");
});

/* Para Scrollbar :
   I.scrollTo('#address1")
   I.selectOption('#days', '16') 

Feature("login e registro 2");

Scenario.skip("Login and Register Example 2", async ({ I }) => {
  I.amOnPage("/");
  I.click(
    "#top_header > div > div > div:nth-child(2) > div > ul > li:nth-child(2) > a"
  );
  I.click("#user");
  I.fillField("#user", "Rodrigo Pinto");
  I.click("#email");
  I.fillField("#email", "rodrigo@gmail.com");
  I.click("#password");
  I.fillField("#password", "123456");
  I.click("#btnRegister");
  I.see("Cadastro realizado!");
  I.click(
    "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions"
  );

  var title = await I.grabTitle();
  validacao.equal(title, "QAZANDO Shop E-Commerce");

  I.waitForElement('//*[@id="userLogged"]', 5);
  I.see("Rodrigo Pinto");

  I.dontSee("O campo nome deve ser prenchido");

  I.wait(5);
});

Feature("login e registro 3");

Scenario.skip("Criando uma Conta Nova", async ({ I }) => {
  var name = faker.person.firstName("male");
  var lastname = faker.person.lastName("male");
  var email = faker.internet.email();
  var password = faker.internet.password({ length: 6 });

  I.amOnPage("/");
  I.click(
    "#top_header > div > div > div:nth-child(2) > div > ul > li:nth-child(2) > a"
  );
  I.click('//*[@id="login_area"]/div/div/div/div/div[2]/label/span');
  I.fillField("#user", `${name} ${lastname}`); // Esta na documentação do faker
  I.fillField("#email", email); // Esta na documentação do faker
  I.fillField("#password", secret(password));
  I.click("#btnRegister");
  I.see("Cadastro realizado!");
  I.click(
    "body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions"
  );

  var title = await I.grabTitle();
  validacao.equal(title, "QAZANDO Shop E-Commerce"); // Título referente ao nome da Aba da página do Browser

  var logado = await I.grabTextFrom('//*[@id="userLogged"]'); // Elemento da página é a prinmeira barra do Menu - Painel (DASHBOARD)
  validacao.equal(logado, `${name} ${lastname}`);

  I.see(`${name} ${lastname}`);
  I.dontSee("O campo nome deve ser prenchido");

  I.wait(5);
}); */
