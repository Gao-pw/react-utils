import { DictionaryItem } from "@siroi/fe-utils";

const fetchData: () => Promise<{data?: any[]}> = async () => {
    return (await fetch('/react-utils/mockData.json')).json().then((res) => {
        return res;
    });
}
let dictEnum: DictionaryItem = new DictionaryItem('name', 5000, fetchData);

function show(){
    dictEnum.getValue().then((res) => {
        console.log(res);
    });
}

function init(){
    document.getElementById('demo-dictionary-1')?.addEventListener('click', show);
}

export default init;