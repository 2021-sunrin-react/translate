import useLanguage from './useLanguage';
import useTranslate from './useTranslate';

const Translate = () => {
    let [source, target, sourceChange, targetChange] = useLanguage();
    let [sourceText, targetText, changeSourceText, requestTranslate] = useTranslate();

    return (
        <div style={{textAlign: 'center'}}>
            <textarea value={sourceText} onChange={changeSourceText}/>
            <button onClick={()=>requestTranslate(source, target)}>번역</button>
            <textarea readOnly={true} value={targetText}/>
        </div>
    )
};

export default Translate;