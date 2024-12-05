var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { DictionaryItem } from '@siroi/fe-utils';
import { useState, useEffect } from 'react';
/**
 * 获取并缓存数据字典的 react hooks。
 *
 * @param name 字典仓库名称
 * @param request 发起请求的异步函数
 * @param preReload 预重载选项，包含响应和回调两个可选参数
 * @returns 返回包含字典数据和当前字典项的元组 DictionaryItem
 */
const useGetStore = (name, request, cachedTime, preReload) => {
    const _cachedTime = cachedTime || 0;
    const [data, setData] = useState([]);
    const [currentDict, setCurrentDict] = useState();
    useEffect(() => {
        const getStoreData = () => __awaiter(void 0, void 0, void 0, function* () {
            if (name !== '') {
                const current = DictionaryItem.getInstance(name, _cachedTime, request);
                const _data = yield current.getValue();
                setData(_data);
                setCurrentDict(current);
                setTimeout(() => {
                    var _a, _b;
                    (_a = preReload === null || preReload === void 0 ? void 0 : preReload.res) === null || _a === void 0 ? void 0 : _a.call(preReload, true);
                    (_b = preReload === null || preReload === void 0 ? void 0 : preReload.callback) === null || _b === void 0 ? void 0 : _b.call(preReload);
                }, 200);
            }
        });
        getStoreData();
    }, []);
    return [data, currentDict];
};
export default useGetStore;
