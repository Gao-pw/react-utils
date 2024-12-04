var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { useAsyncEffect } from 'ahooks';
import { useState } from 'react';
/**
 * 获取请求的数据和更新数据
 *
 * @author siroi
 * @template T 请求返回的数据类型，必须包含 data 和 code 属性
 * @param request 异步请求函数，返回 Promise<T>
 * @param handle 可选的处理函数，用于处理请求返回的数据
 * @returns 返回一个包含当前状态和更新状态的元组
 */
function useRequestState(request, handle) {
    const [state, setState] = useState(undefined);
    const update = () => __awaiter(this, void 0, void 0, function* () {
        const { code, data } = yield request();
        if (code === 0) {
            const handleData = handle ? handle(data) : data;
            setState(handleData);
        }
    });
    useAsyncEffect(() => __awaiter(this, void 0, void 0, function* () {
        update();
    }), []);
    return [state, update];
}
export default useRequestState;
