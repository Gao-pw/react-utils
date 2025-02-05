import { useEffect, useRef } from "react";
import { LocalStorage } from '@siroi/fe-utils';
function useLocalStorageEffect(fun, keys) {
    const ref = useRef();
    useEffect(() => {
        ref.current = fun;
        const callback = (v) => {
            var _a;
            console.log('useLocalStorageEffect', v);
            (_a = ref.current) === null || _a === void 0 ? void 0 : _a.call(ref, v);
        };
        keys.forEach(key => LocalStorage.listen(key, callback));
        return () => {
            keys.forEach(key => LocalStorage.removeListen(key, callback));
        };
    }, []);
}
export default useLocalStorageEffect;
