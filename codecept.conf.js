const { setHeadlessWhen, setCommonPlugins } = require("@codeceptjs/configure");

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */

var server = require("./server/server.js");
//const Mochawesome = require("mochawesome");

exports.config = {
  name: "automacao-codeceptjs-web",
  tests: "./steps/*login_test.js",
  output: "./output",
  helpers: {
    WebDriver: {
      Mochawesome: {
        uniqueScreenshotNames: true,
      },
      url: "https://automationpratice.com.br/",
      browser: process.env.BROWSER || "chrome",
      waitForTimeout: 5000,
      desiredCapabilities: {
        chromeOptions: {
          args: ["--window-size=1920,1080"], // Rodar e abrir o tamanho do da janela do browser
          //--headless", -> Rodar o teste sem abrir o navegador
        },
      },
    },
  },
  include: {
    I: "./steps_file.js",

    home_page: "./pages/home_page.js",

    cadastro_usuario_page: "./pages/cadastro_usuario_page.js",

    minha_conta_page: "./pages/minha_conta_page.js",

    validacao_usuario_page: "./pages/validacao_usuario_page.js",
  },

  /* Os ganchos "bootstrap" e "teardown" são usados ​​para configurar cada navegador de teste: 
    para criar uma conexão exclusiva com o servidor de teste em nuvem ou para criar dados 
    de teste específicos relacionados ao navegador no banco de dados 
    (como usuários com nomes com browsername).
*/
  async bootstrap() {
    await server.antes();
  },

  async teardown() {
    await server.depois();
  },
  plugins: {
    allure: {
      enabled: true,
      require: "allure-codeceptjs",
      resultsDir: "allure-results",
    },
    mocha: {
      reporterOptions: {
        reportDir: "output",
      },
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      screenshotsForAllureReport: true,
    },
    auth: {
      enabled: true,
      saveToFile: true,
      inject: "autoLogin",
      users: {
        user: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage("/");
            I.click('//*[@id="top_header"]/div/div/div[2]/div/ul/li[1]/a');
            I.waitForElement('//*[@id="user"]', 10);
            I.fillField('//*[@id="user"]', "joao@teste.com");
            console.log("preencher email");
            I.waitForElement('//*[@id="password"]', 10);
            I.fillField('//*[@id="password"]', secret("123456"));
            console.log("preencher senha");
            I.waitForElement('//*[@id="btnLogin"]', 10);
            I.click('//*[@id="btnLogin"]');
            console.log("logado");
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
            I.amOnPage("/");
            I.see("Joao Silva");
          },
        },
        admin: {
          // loginAdmin function is defined in `steps_file.js`
          login: (I) => {
            I.amOnPage("/");
            I.click('//*[@id="top_header"]/div/div/div[2]/div/ul/li[1]/a');
            I.waitForElement('//*[@id="user"]', 10);
            I.fillField('//*[@id="user"]', "joao@teste.com");
            console.log("preencher email");
            I.waitForElement('//*[@id="password"]', 10);
            I.fillField('//*[@id="password"]', secret("123456"));
            console.log("preencher senha");
            I.waitForElement('//*[@id="btnLogin"]', 10);
            I.click('//*[@id="btnLogin"]');
            console.log("logado");
          },
          // if we see `Admin` on page, we assume we are logged in
          check: (I) => {
            I.amOnPage("/");
            I.see("admin");
          },
        },
      },
    },
  },
};
