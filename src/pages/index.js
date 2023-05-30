import { FirebaseProvider } from "../FirebaseContext";
import Chat from "../components/Chat";

const HomePage = () => {
  return (
    <FirebaseProvider>
      <Chat />
    </FirebaseProvider>
  );
};

export default HomePage;
