export class Router {
   constructor({ pageEl }) {
      this.pageEl = pageEl;
   }

   async loadPage(link , path) {
      history.pushState(null, "", link);
      const html = await fetch(path).then((response) => response.text());
      this.pageEl.innerHTML = html;
   }
}
