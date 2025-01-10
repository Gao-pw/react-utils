var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { copyText } from '@siroi/fe-utils';
import { useCallback, useState } from 'react';
/**
 * @description 复制粘贴版的功能
 * @author siroi
 *
 * @returns {readonly [Function, string]}
 */
function useCopy() {
    const [text, setText] = useState();
    const copy = useCallback((text) => __awaiter(this, void 0, void 0, function* () {
        const _bol = yield copyText(text);
        if (_bol) {
            setText(text);
        }
    }), []);
    return [copy, text];
}
export default useCopy;
