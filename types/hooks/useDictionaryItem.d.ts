import { DictionaryItem } from '@siroi/fe-utils';
/**
 * 获取并缓存数据字典的 react hooks。
 *
 * @param name 字典仓库名称
 * @param request 发起请求的异步函数
 * @param preReload 预重载选项，包含响应和回调两个可选参数
 * @returns 返回包含字典数据和当前字典项的元组 DictionaryItem
 */
declare const useGetStore: (name: string, request: () => Promise<any>, cachedTime?: number, preReload?: {
    res?: (value: any) => void;
    callback?: () => void;
}) => readonly [{
    label: string;
    value: string;
}[], DictionaryItem | undefined];
export default useGetStore;
