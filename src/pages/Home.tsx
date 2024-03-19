import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButtons, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color={'dark'}>
          <IonTitle>Spot</IonTitle>
          <IonButtons slot="end" className='header-nav-principal'>
          <IonButton>Inicio</IonButton>
          <IonButton>Conductores</IonButton>
          <IonButton>Pasajeros</IonButton>
          <IonButton fill='solid' color={'success'} className='btn-login'>Iniciar sesión</IonButton>
        </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent color={'dark'} fullscreen>
        <IonHeader collapse="condense" color={'light'}>
          <IonToolbar>
            <IonTitle size="large">Spot</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
