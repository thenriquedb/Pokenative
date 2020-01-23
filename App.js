import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={"#FC6C6D"} />
      <Routes />
    </>
  );
}
