//

import {VivliostyleTemplateManager} from "@zenml/vivliostyle";


const SHALEIAN_NUMBERS = [
  "tis", "qec", "yos", "piv", "xaf", "ric", "sez", "kaq", "von", "tiset",
  "tisettis", "tisetqec", "tisetyos", "tisetpiv", "tisetxaf", "tisetric", "tisetsez", "tisetkaq", "tisetvon", "qecet",
  "qecettis", "qecetqec", "qecetyos", "qecetpiv", "qecetxaf", "qecetric", "qecetsez", "qecetkaq", "qecetvon", "yoset",
  "yosettis", "yosetqec", "yosetyos", "yosetpiv", "yosetxaf", "yosetric", "yosetsez", "yosetkaq", "yosetvon", "pivet"
];

const manager = new VivliostyleTemplateManager();

manager.registerElementRule("lesson", "root", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("article", (self) => {
    self.addClassName("lesson");
    if (element.hasAttribute("id")) {
      self.setAttribute("id", element.getAttribute("id")!);
    }
    self.appendChild(transformer.call("lesson-header-left", element));
    self.appendChild(transformer.call("lesson-header-right", element));
    self.appendChild(transformer.call("page"));
    self.appendChild(transformer.apply(element, "lesson"));
  });
  return self;
});

manager.registerElementFactory("lesson-header-left", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const number = element.parentNode!.searchXpath("preceding-sibling::lesson").length + 1;
  const titleElement = element.searchXpath("title")[0] as Element;
  self.appendElement("header", (self) => {
    self.addClassName("lesson-header");
    self.setAttribute("data-position", "left");
    self.appendElement("div", (self) => {
      self.addClassName("lesson-header-number");
      self.appendTextNode(number.toString());
    });
    self.appendElement("div", (self) => {
      self.addClassName("lesson-header-column");
      self.appendElement("div", (self) => {
        self.addClassName("lesson-header-column-top");
        self.appendTextNode(`sávak ac'a${SHALEIAN_NUMBERS[number - 1]}`);
      });
      self.appendElement("div", (self) => {
        self.addClassName("lesson-header-column-bottom");
        self.setAttribute("data-position", "left");
        self.appendElement("h1", (self) => {
          self.addClassName("lesson-header-title");
          self.appendChild(transformer.apply(titleElement, "section"));
        });
      });
    });
  });
  return self;
});

manager.registerElementFactory("lesson-header-right", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const goalElement = element.searchXpath("goal")[0] as Element;
  self.appendElement("header", (self) => {
    self.addClassName("lesson-header");
    self.setAttribute("data-position", "right");
    self.appendElement("div", (self) => {
      self.addClassName("lesson-header-column");
      self.appendElement("div", (self) => {
        self.addClassName("lesson-header-column-top");
      });
      self.appendElement("div", (self) => {
        self.addClassName("lesson-header-column-bottom");
        self.setAttribute("data-position", "right");
        self.appendElement("ul", (self) => {
          self.addClassName("lesson-header-goal");
          self.appendChild(transformer.apply(goalElement, "section.goal"));
        });
      });
    });
  });
  return self;
});

manager.registerElementRule("li", "section.goal", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  self.appendElement("li", (self) => {
    self.addClassName("lesson-header-goal-item");
    self.appendChild(transformer.apply(element, "common"));
  });
  return self;
});

export default manager;