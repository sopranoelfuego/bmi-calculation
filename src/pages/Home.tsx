import {useEffect, useRef, useState} from 'react'
import { IonContent, IonHeader, IonPage, 
  IonTitle, IonToolbar,
  IonGrid,
  IonAlert} from '@ionic/react';
 
import BmiResult from '../components/Result';
import BmiForm from '../components/BmiForm';
import InputUnitMesure from '../components/InputUnitMesure';


const Home: React.FC = () => {
  const [indice, setIndice] = useState(0)
  const [description, setDescription] = useState({class:'',constant:''})
  const [error, setError] = useState<string>()
  const [selectedValue, setSelectedValue] = useState<'mkg' | 'ftlbs'>('mkg')
  const weightInputRef=useRef<HTMLIonInputElement>(null)
  const heightInputRef=useRef<HTMLIonInputElement>(null)
  const calculateBMI=()=>{
    const enteredHeight=heightInputRef.current?.value
    const enteredWeight=weightInputRef.current?.value
    if(Number(enteredHeight)<=0 || Number(enteredWeight)<=0){
      setError('Only a valid number and non negative(zero includes) number ')
      return
    }
    const heightConversionFactor=selectedValue ==='ftlbs'?3.28:1
    const weightConversionFactor=selectedValue === 'ftlbs'?2.2:1
     const weight=+enteredWeight!/weightConversionFactor
     const height=+enteredHeight!/heightConversionFactor
     
    const bmi=weight/Math.pow(height,2)
    
     setIndice(bmi)
  }
  const onSelectedValue=(value:'mkg'| 'ftlbs')=>{
    setSelectedValue(value)
    console.log("value selected",selectedValue)
  }
  const reset=()=>{
    heightInputRef.current!.value=''
    weightInputRef.current!.value=''
    setIndice(0)
    setDescription ({class:'',constant:''})
  }
    useEffect(() => {
    let subscriber=true
      if(subscriber){
        if( indice<18.5)
        setDescription({class:'danger',constant:'Underweight and may cause certain health risks'})
    else if (indice > 18.5 && indice<=24.9)
        setDescription ({class:'primary',constant:'Healthy weight that does not increase health risks.'})   
    else if (indice  > 25 && indice< 29.9)
        setDescription ({class:'warning',constant:'Excess weight that can cause certain health risks.'})
    else if( indice  > 30)
         setDescription ({class:'danger',constant:'Obesity, increased risk of developing certain diseases.'})
      }
     subscriber=false
  },[indice])
  
  return (
    <IonPage>
      <IonAlert isOpen={!!error} message={error} buttons={[{text:'ok',handler:()=>setError('')}]}></IonAlert>
      <IonHeader>
        <IonToolbar color='primary'>
        <IonTitle>BMI Calculator..</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
      <IonGrid >
       <InputUnitMesure selectedValue={selectedValue} onSelectedValue={onSelectedValue}/>
       <BmiForm selectedValue={selectedValue} weightInputRef={weightInputRef} heightInputRef={heightInputRef} reset={reset} calculateBMI={calculateBMI}/>
       {indice && indice>0  && <BmiResult indice={indice} description={description}/>}
        
        
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
