module.exports = {
  antes: async () => {
    console.log("Isso executou ANTES de todo o projeto");
  },

  depois: async () => {
    console.log("Isso executou DEPOIS de todo o projeto");
  },
};

/*
module.exports = {
  antes: function() {
    console.log("Isso executou ANTES de todo o projeto");
  },

  depois: function() {
    console.log("Isso executou DEPOIS de todo o projeto");
  },
};*/
