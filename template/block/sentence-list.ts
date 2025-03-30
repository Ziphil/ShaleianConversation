//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("xl", "section", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dl", (self) => {
    self.addClassName("sentence-list");
    self.appendChild(transformer.apply(element, "section.xl"));
  });
  return self;
});

manager.registerElementRule("li", "section.xl", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("sentence-item");
    self.appendChild(transformer.apply(element, "section.xl.li"));
  });
  return self;
});

manager.registerElementRule("sh", "section.xl.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dt", (self) => {
    self.addClassName("sentence-item-shaleian");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

manager.registerElementRule("ja", "section.xl.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("dd", (self) => {
    self.addClassName("sentence-item-japanese");
    self.appendChild(transformer.apply(element, "section"));
  });
  return self;
});

export default manager;