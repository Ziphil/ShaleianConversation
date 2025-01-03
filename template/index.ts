//

import articleLessonManager from "./article/lesson";
import blockConversationManager from "./block/conversation";
import blockWordListManager from "./block/word-list";
import fallbackManager from "./fallback";
import inlineBasicManager from "./inline/basic";
import inlineCommonManager from "./inline/common";
import rootManager from "./root";
import wordManager from "./word";


const managers = [
  rootManager,
  articleLessonManager,
  blockConversationManager,
  blockWordListManager,
  inlineCommonManager,
  inlineBasicManager,
  wordManager,
  fallbackManager
];

export default managers;