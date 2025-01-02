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
    self.appendChild(transformer.apply(element, "lesson"));
  });
  return self;
});

manager.registerElementRule("title", "lesson", (transformer, document, element) => {
  const self = document.createDocumentFragment();
  const number = element.parentNode!.searchXpath("preceding-sibling::lesson").length + 1;
  self.appendElement("header", (self) => {
    self.addClassName("lesson-header");
    self.appendElement("div", (self) => {
      self.addClassName("lesson-header-ornament-top");
      self.setAttribute("data-number", number.toString());
    });
    self.appendElement("div", (self) => {
      self.addClassName("lesson-header-ornament-bottom");
    });
    self.appendElement("div", (self) => {
      self.addClassName("lesson-header-main-top");
      self.appendTextNode(`sávak ac'a${SHALEIAN_NUMBERS[number - 1]}`);
    });
    self.appendElement("h1", (self) => {
      self.addClassName("lesson-header-main-bottom");
      self.appendElement("span", (self) => {
        self.appendChild(transformer.apply(element, "section"));
      });
    });
  });
  self.appendElement("div", (self) => {
    self.addClassName("lesson-running");
    self.setAttribute("data-position", "left");
    self.appendElement("div", (self) => {
      self.addClassName("lesson-running-inner");
      self.setAttribute("data-position", "left");
      self.appendElement("span", (self) => {
        self.addClassName("lesson-running-text");
        self.setAttribute("data-position", "left");
        self.appendChild(transformer.apply(element, "section"));
      });
      self.appendElement("span", (self) => {
        self.addClassName("lesson-running-number");
        self.addClassName("number-box");
        self.setAttribute("data-position", "left");
        self.appendTextNode(number.toString());
      });
    });
  });
  self.appendElement("div", (self) => {
    self.addClassName("lesson-running");
    self.setAttribute("data-position", "right");
    self.appendElement("div", (self) => {
      self.addClassName("lesson-running-inner");
      self.setAttribute("data-position", "right");
      self.appendElement("span", (self) => {
        self.addClassName("lesson-running-text");
        self.setAttribute("data-position", "right");
        self.appendChild(transformer.apply(element, "section"));
      });
      self.appendElement("span", (self) => {
        self.addClassName("lesson-running-number");
        self.addClassName("number-box");
        self.setAttribute("data-position", "right");
        self.appendTextNode(number.toString());
      });
    });
  });
  return self;
});

export default manager;