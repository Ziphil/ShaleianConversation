//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("root", "", (transformer, document, element) => {
  const headerNode = document.createDocumentFragment();
  const mainNode = document.createDocumentFragment();
  const variables = transformer.variables as any;
  variables.headerNode = headerNode;
  variables.wordNodes = new Map();
  mainNode.appendElement("main", (self) => {
    self.addClassName("root");
    self.appendChild(transformer.apply(element, "root"));
  });
  return mainNode;
});

export default manager;