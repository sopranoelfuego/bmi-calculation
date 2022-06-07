import { IonButton, IonCol, IonIcon, IonInput, IonItem, IonLabel, IonRow } from '@ionic/react'
import { calculatorOutline, refreshCircleOutline } from 'ionicons/icons'
import React, { RefObject } from 'react'

interface BmiRefsProps{
    weightInputRef:RefObject<HTMLIonInputElement>,
    heightInputRef:RefObject<HTMLIonInputElement>,
    selectedValue:'mkg' | 'ftlbs',
    reset:()=> void,
    calculateBMI:()=>void

}
const BmiForm:React.FC<BmiRefsProps>= (props) =>{
  return <>
  
        <IonRow>
          <IonCol>
          <IonItem>
          <IonLabel position="floating">Your weight({props.selectedValue === 'ftlbs'?'lbs':'kg'}) </IonLabel>
            <IonInput type='number' ref={props.weightInputRef} placeholder={props.selectedValue==='ftlbs'?'in pounds':'in kg'} required></IonInput>
          </IonItem>
          </IonCol>
          
        </IonRow>
        <IonRow>
          <IonCol>
            <IonItem>
            <IonLabel position='floating'>your height({props.selectedValue==='ftlbs'?'feet':'metter'})</IonLabel>
              <IonInput type='number' ref={props.heightInputRef} placeholder={props.selectedValue==='ftlbs'?'in feets':'in kg'} required></IonInput>
            </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol>
            <IonButton color="primary" onClick={props.calculateBMI}><IonIcon icon={calculatorOutline}/> calculate</IonButton>
          </IonCol>
          <IonCol>
          <IonButton color="danger" onClick={props.reset}><IonIcon icon={refreshCircleOutline}/>reset</IonButton>
          </IonCol>
        </IonRow>

  </>
}
export default BmiForm