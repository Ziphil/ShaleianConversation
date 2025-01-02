//

import articleLessonManager from "./article/lesson";
import fallbackManager from "./fallback";
import inlineBasicManager from "./inline/basic";
import inlineCommonManager from "./inline/common";
import rootManager from "./root";
import wordManager from "./word";


const managers = [
  rootManager,
  articleLessonManager,
  inlineCommonManager,
  inlineBasicManager,
  wordManager,
  fallbackManager
];

export default managers;