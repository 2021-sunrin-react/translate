import axios from 'axios';
import { useState } from 'react';

const useTranslate = () => {
    
    let [sourceText, setSourceText] = useState('');
    let [targetText, setTargetText] = useState('');

    const changeSourceText = (e) => {
        setSourceText(e.target.value);
    }

    const requestTranslate = (sourceLang, targetLang) => {
        if(sourceText === ''){
            alert('번역할 문장을 입력해주세요.');
            return ;
        }
        
        let headers = {
            'content-type': 'application/x-www-form-urlencoded',
            'X-Naver-Client-Id': '-',
            'X-Naver-Client-Secret': '-'
        }
        
        let params = new URLSearchParams();
        params.append('source', sourceLang);
        params.append('target', targetLang);
        params.append('text', sourceText);

        axios.post('/v1/papago/n2mt', params, {headers})
        .then(response => {
            setTargetText(response.data.message.result.translatedText)
        })
    }
    
    return [sourceText, targetText, changeSourceText, requestTranslate];
};

export default useTranslate;