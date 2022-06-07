import { IonCard, IonCardContent, IonCol, IonRow } from '@ionic/react'
import React from 'react'


interface ResultInteface{
    indice:number,
    description:{class:string,constant:string}
}
const BmiResult:React.FC<ResultInteface>=(props)=>{
    return (
    <IonRow className="ion-text-center">
    <IonCol>
    <h2>Your indice is</h2>
   <h1>{props.indice.toFixed(2)}</h1>
    </IonCol>
   <IonRow>

  <IonCard>
    <IonCardContent>
   {props.description.class && props.description.constant?<p className={props.description.class}>{props.description.constant}</p>:""}
  </IonCardContent>
    </IonCard>
   </IonRow>
    </IonRow>)
}

export default BmiResult