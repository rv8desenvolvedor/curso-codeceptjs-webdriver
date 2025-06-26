const { I } = inject();

module.exports = {
  fields: {},

  button: {
    cadastro: "//*[@id='top_header']/div/div/div[2]/div/ul/li[2]/a",
  },

  messages: {},

  accessCadastroPage() {
    I.waitForElement(this.button.cadastro, 10);
    I.click(this.button.cadastro);
  },
};
