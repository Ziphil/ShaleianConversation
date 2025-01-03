//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const manager = new VivliostyleTemplateManager();

manager.registerElementRule("shconv", "lesson", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("ol", (self) => {
    self.addClassName("shaleian-conversation");
    self.appendChild(transformer.apply(element, "shconv"));
  });
  return self;
});

manager.registerElementRule("li", "shconv", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("shaleian-conversation-item");
    self.appendChild(transformer.apply(element, "shconv.li"));
  });
  return self;
});

manager.registerElementRule("name", "shconv.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("div", (self) => {
    self.addClassName("shaleian-conversation-name");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

manager.registerElementRule("sen", "shconv.li", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("p", (self) => {
    self.addClassName("shaleian-conversation-sentence");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

manager.registerElementRule("jaconv", "lesson", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("ol", (self) => {
    self.addClassName("japanese-conversation");
    self.appendChild(transformer.apply(element, "jaconv"));
  });
  return self;
});

export default manager;