import React from "react";
import firebase from "../firebaseConfig";

const FirebaseContext = React.createContext(null);

export const FirebaseProvider = ({ children }) => {
  return (
    <FirebaseContext.Provider value={firebase}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;
