import { useState } from 'react';

const useLanguage = () => {
    let [source, setSource] = useState('ko');
    let [target, setTarget] = useState('en');

    const sourceChange = (e) => {
        if(e.target.value === target)
            setTarget(source);
        
        setSource(e.target.value);
    }

    const targetChange = (e) => {
        if(e.target.value === source)
            setSource(target);

        setTarget(e.target.value);
    }
    
    return [source, target, sourceChange, targetChange];
};

export default useLanguage;
