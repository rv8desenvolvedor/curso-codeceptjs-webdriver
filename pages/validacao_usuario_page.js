const { I } = inject();

module.exports = {
  fields: {},

  button: {},

  messages: {},

  labels: {
    nomeUsuario: '//*[@id="userLogged"]',
  },
  validacaoUsuario(firstName) {
    I.waitForElement(this.labels.nomeUsuario, 10);
    I.see(`${firstName}`);
    I.wait(10);
  },
};
