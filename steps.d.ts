/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type home_page = typeof import('./pages/home_page.js');
type cadastro_usuario_page = typeof import('./pages/cadastro_usuario_page.js');
type minha_conta_page = typeof import('./pages/minha_conta_page.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, home_page: home_page, cadastro_usuario_page: cadastro_usuario_page, minha_conta_page: minha_conta_page }
  interface Methods extends WebDriver {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
