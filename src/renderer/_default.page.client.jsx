export { render };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

import { Root, createRoot, hydrateRoot } from "react-dom/client";

let root;
async function render(pageContext) {
  const { Page } = pageContext;

  const page = <Page />;

  const container = document.getElementById("root");
  if (container === null) return;

  // 初遷移でcsrページである or client side routingである
  if (container?.innerHTML === "" || !pageContext.isHydration) {
    if (!root) {
      root = createRoot(container);
    }
    root.render(page);
  } else {
    root = hydrateRoot(container, page);
  }
}
