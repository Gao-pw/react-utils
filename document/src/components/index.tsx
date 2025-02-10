import { useEffect , useState} from 'react';
import { log , LocalStorage, overrideLocalStorage, resetLocalStorage} from '@siroi/fe-utils';
import {useLocalStorageEffect} from '@siroi/react-utils';
export default () => {

    const [value, setValue] = useState<string>(LocalStorage.getItem('starlight-theme') || '-');

    useLocalStorageEffect((key: string)=>{
        setValue(key)
    }, ['key', 'name'])

    useEffect(() => {
        // LocalStorage.overrideLocalStorage();
        overrideLocalStorage();
        console.log(localStorage);
        log.success('haha', 'hello')
        setTimeout(()=>{
            localStorage.setItem('key', 'world2')
        }, 2000);
        setTimeout(()=>{
            localStorage.setItem('name', 'siroi')
        }, 4000);
        return () => {
            resetLocalStorage();
        }
    }, []);

    return <div>Hello,{value}</div>;
}