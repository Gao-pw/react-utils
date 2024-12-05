import { DictionaryItem } from '@siroi/fe-utils'
import {useState, useEffect} from 'react';

/**
 * 获取并缓存数据字典的 react hooks。
 *
 * @param name 字典仓库名称
 * @param request 发起请求的异步函数
 * @param preReload 预重载选项，包含响应和回调两个可选参数
 * @returns 返回包含字典数据和当前字典项的元组 DictionaryItem
 */
const useGetStore = (
    name: string,
    request: () => Promise<any>,
    cachedTime?: number,
    preReload?: {
      res?: (value: any) => void;
      callback?: () => void;
    },
  ) => {
    const _cachedTime = cachedTime || 0;
    const [data, setData] = useState<{ label: string; value: string }[]>([]);
    const [currentDict, setCurrentDict] = useState<DictionaryItem>();
    useEffect(() => {
      const getStoreData = async () => {
        if (name !== '') {
          const current = DictionaryItem.getInstance(name, _cachedTime, request);
          const _data = await current.getValue();
          setData(_data);
          setCurrentDict(current);
          setTimeout(()=>{
            preReload?.res?.(true);
            preReload?.callback?.();
          }, 200)
        }
      };
      getStoreData();
    }, []);
  
    return [data, currentDict] as const;
  };

  export default useGetStore;