import { useEffect, useRef } from "react";
import { LocalStorage } from '@siroi/fe-utils'

function useLocalStorageEffect(fun: Function, keys: string[]){
    const ref = useRef<Function>();

    useEffect(()=>{
        ref.current = fun;

        const callback = (v: string)=> {
            console.log('useLocalStorageEffect', v);
            ref.current?.(v);
        }

        keys.forEach(key => LocalStorage.listen(key, callback));

        return () => {
            keys.forEach(key => LocalStorage.removeListen(key, callback));
        }

    }, []);
}

export default useLocalStorageEffect;