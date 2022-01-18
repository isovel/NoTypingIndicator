
/* ——————— Copyright (c) 2021-2022 toastythetoaster. All rights reserved. ———————
 *
 * NoTypingIndicator Plugin
 *
 * —————————————————————————————————————————————————————————————————————————————— */

import { UPlugin } from '@classes';
import { suppressErrors } from '@util';
import { instead, unpatchAll } from '@patcher';
import { getByProps } from '@webpack';

class NoTypingIndicator extends UPlugin {

  start(): void {
    suppressErrors(this._patchTypingEvent.bind(this))(this.promises);
  }

  stop(): void {
    unpatchAll('NoTypingIndicator');
  }

  _patchTypingEvent() {
    instead('NoTypingIndicator', getByProps('startTyping'), 'startTyping', (_original, _args) => false);
  }
}

module.exports = NoTypingIndicator;
