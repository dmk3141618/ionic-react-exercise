import {
  IonBackButton, IonButton,
  IonButtons, IonCheckbox,
  IonContent,
  IonHeader, IonInput,
  IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
  IonList, IonListHeader,
  IonPage, IonRadio,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>My Navigation Bar</IonTitle>
        </IonToolbar>

        <IonToolbar>
          <IonTitle>Subheader</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />

        {/*-- Default List Header --*/}
        <IonListHeader>
          <IonLabel>List Header</IonLabel>
        </IonListHeader>

        {/*-- List Header with Button --*/}
        <IonListHeader>
          <IonLabel>New This Week</IonLabel>
          <IonButton>See All</IonButton>
        </IonListHeader>

        {/*-- List Header with Outline Button --*/}
        <IonListHeader>
          <IonLabel>New This Week</IonLabel>
          <IonButton fill="outline">See All</IonButton>
        </IonListHeader>

        {/*-- List Header Full Lines --*/}
        <IonListHeader lines="full">
          <IonLabel>New This Week</IonLabel>
          <IonButton>See All</IonButton>
        </IonListHeader>

        {/*-- List Header Inset Lines --*/}
        <IonListHeader lines="inset">
          <IonLabel>New This Week</IonLabel>
          <IonButton>See All</IonButton>
        </IonListHeader>



        {/*-- List Headers in Lists --*/}
        <IonList>
          <IonListHeader lines="inset">
            <IonLabel>Recent</IonLabel>
            <IonButton>Clear</IonButton>
          </IonListHeader>
          <IonItem lines="none">
            <IonLabel color="primary">
              <h1>I got you babe</h1>
            </IonLabel>
          </IonItem>
        </IonList>

        <IonList>
          <IonListHeader lines="inset">
            <IonLabel>Trending</IonLabel>
          </IonListHeader>
          <IonItem>
            <IonLabel color="primary">
              <h1>harry styles</h1>
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel color="primary">
              <h1>christmas</h1>
            </IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel color="primary">
              <h1>falling</h1>
            </IonLabel>
          </IonItem>
        </IonList>




        {/*-- List of Text Items --*/}
        <IonList>
          <IonItem>
            <IonLabel>Pokémon Yellow</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Mega Man X</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>The Legend of Zelda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Pac-Man</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Super Mario World</IonLabel>
          </IonItem>
        </IonList>

        {/*-- List of Input Items --*/}
        <IonList>
          <IonItem>
            <IonLabel>Input</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Toggle</IonLabel>
            <IonToggle slot="end"></IonToggle>
          </IonItem>
          <IonItem>
            <IonLabel>Radio</IonLabel>
            <IonRadio slot="end"></IonRadio>
          </IonItem>
          <IonItem>
            <IonLabel>Checkbox</IonLabel>
            <IonCheckbox slot="start" />
          </IonItem>
        </IonList>

        {/*-- List of Sliding Items --*/}
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItem>
              <IonLabel>Item</IonLabel>
            </IonItem>
            <IonItemOptions side="end">
              <IonItemOption onClick={() => {}}>Unread</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
