import { copyText } from '@siroi/fe-utils';
import { useCallback, useState } from 'react';

/**
 * @description 复制粘贴版的功能
 * @author siroi
 *
 * @returns {readonly [Function, string]}
 */
function useCopy(){
    const [text, setText] = useState<string | null>();

    const copy = useCallback(async (text: string)=>{
        const _bol = await copyText(text);
        if(_bol){
            setText(text);
        }
    }, []);

    return [copy, text] as const;
}

export default useCopy;