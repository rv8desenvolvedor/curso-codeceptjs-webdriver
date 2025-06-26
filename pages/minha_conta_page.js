const { I } = inject();

module.exports = {
  fields: {},

  button: {
    validacaoOk: ".swal2-confirm",
  },

  messages: {},

  labels: {
    cadastroRealizado: '//*[@id="swal2-title"]',
  },

  confirmacaoPopUp() {
    I.waitForElement(this.labels.cadastroRealizado, 5);
    I.see("Cadastro realizado!");
    I.click(this.button.validacaoOk);
    I.waitForInvisible(this.labels.cadastroRealizado, 5);
  },
};
