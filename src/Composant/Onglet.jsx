import React,{useState} from 'react'
import './Onglet.css'
export default function Onglet() {
const [toggleState,setTogleState] = useState(1);

const goFr =() => {
    setTogleState(1);
}
const goEn =() => {
    setTogleState(2);
}
    return (
        <div>
            <div className="contBtn">

                <div
                onClick={goFr}
                className={`onglets ${toggleState ===1 ?"active":""}`}>Francais</div>
                <div 
                              onClick={goEn}

                className={`onglets ${toggleState ===2 ?"active":""}`}>العربية</div>
            </div>
            <div 
            className="container">
                {toggleState === 1? 
                <p className="contenu fr">
                FR   Lorem ipsum dolor
           sit amet consectetur adipisicing elit. Modi iste totam ipsum
            porro dolor, ipsam aut 
           veritatis ab id nisi impedit? Adipisci facere aliquid,
                  numquam autem beatae incidun
                  t corrupti dignissimos?
              </p> : <p className="contenu en">
              اللُّغَة العَرَبِيّة هي أكثر اللغات السامية تحدثاً وإحدى أكثر اللغات انتشاراً في العالم، يتحدثها أكثر من 467 مليون نسمة،(1) ويتوزع متحدثوها في الوطن العربي، بالإضافة إلى العديد من المناطق الأخرى المجاورة كالأهواز وتركيا وتشاد ومالي والسنغال وإرتيريا وإثيوبيا وجنوب السودان وإيران. وبذلك فهي تحتل المركز الرابع أو الخامس من حيث اللغات الأكثر انتشاراً في العالم، واللغة الرابعة من حيث عدد المستخدمين على الإنترنت.
                </p>}
                
                </div>
         
        </div>
    )
}
