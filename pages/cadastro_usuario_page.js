const { I } = inject();
//var assert = require("assert");

module.exports = {
  fields: {
    firstName: "#user",
    email: "#email",
    password: "#password",
  },

  button: {
    registroUsuario: '//*[@id="login_area"]/div/div/div/div/div[1]',
    cadastrar: "#btnRegister",
  },

  messages: {},

  accessRegistroPage() {
    I.waitForElement(this.button.registroUsuario, 5);
    I.click(this.button.registroUsuario);
    I.see("Cadastro de usuário");
  },

  //async - antes de dadosRegistro se fosse usar o await
  dadosRegistro(firstName, email, password) {
    I.fillField(this.fields.firstName, firstName);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
  },

  criarUsuario() {
    I.waitForElement(this.button.cadastrar, 5);
    I.click(this.button.cadastrar);
  },
};
