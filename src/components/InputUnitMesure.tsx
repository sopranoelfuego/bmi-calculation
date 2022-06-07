import { IonCol, IonLabel, IonRow,  IonSegment, IonSegmentButton } from '@ionic/react'
import React from 'react'

interface InputUnitMesureProps{
    selectedValue:'mkg'| 'ftlbs',
    onSelectedValue:(selectValue:'mkg' | 'ftlbs' )=>void
}
const InputUnitMesure:React.FC<InputUnitMesureProps>=(props)=>{
    const costumEventHandler=(e:CustomEvent)=>props.onSelectedValue(e.detail.value)

    return (
            <IonRow>
            <IonCol>
                <IonSegment value={props.selectedValue} onIonChange={costumEventHandler}>
                    <IonSegmentButton value="mkg"><IonLabel>metter/kg</IonLabel></IonSegmentButton>
                    <IonSegmentButton value="ftlbs"><IonLabel>feet/lbs</IonLabel></IonSegmentButton>
                </IonSegment>
            </IonCol>
            </IonRow>
         )
}
export default InputUnitMesure