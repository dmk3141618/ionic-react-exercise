import {IonContent, IonHeader, IonInput, IonItem, IonLabel, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import FilteredTextInput, {FilteredTextInputValueType} from '../components/FilteredTextInput/FilteredTextInput';
import './Tab3.css';
import {useState} from 'react';

const Tab3: React.FC = () => {

  const [value, setValue] = useState<FilteredTextInputValueType>({
    value: "",
    minlength: 1
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>FilteredTextInput</IonLabel>
          <FilteredTextInput value={value} setValue={setValue} maxlength={10} regExp={new RegExp(/^[0-9]*$/)} />
        </IonItem>
        <ExploreContainer name="Tab 3 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
