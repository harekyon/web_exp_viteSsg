export { render };

import { renderToString } from "react-dom/server";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";

async function render(pageContext) {
  const { Page } = pageContext;
  let pageHtml;
  if (Page) {
    pageHtml = renderToString(<Page />);
  } else {
    pageHtml = "";
  }

  return escapeInject`<!DOCTYPE html>
    <html lang="ja">
      <body>
        <div id="root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`;
}
