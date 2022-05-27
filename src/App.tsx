import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { AppContainer, StyledDioImage, StyledLampImage } from "./styles";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";

import lightLogoDio from "./assets/icons/logo-dio.png";
import darkLogoDio from "./assets/icons/logo-dio-white.png";
import lightLamp from "./assets/icons/eco-light.png";
import darkLamp from "./assets/icons/eco-light-off.png";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [lampImg, setLampImg] = useState(darkLamp);
  const [dio, setDio] = useState(darkLogoDio);

  const handleChangeToggleTheme = () => {
    if (toggle) {
      setLampImg(darkLamp);
      setDio(darkLogoDio);
      setToggle((oldToggle) => !oldToggle);
    } else {
      setLampImg(lightLamp);
      setDio(lightLogoDio);
      setToggle((oldToggle) => !oldToggle);
    }
  };

  useEffect(() => {
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(() => {
    const subscription = RNShake.addListener(() => {
      setToggle((oldToggle) => !oldToggle);
    });

    return () => subscription.remove();
  }, [toggle]);

  return (
    <AppContainer theme={toggle ? "light" : "dark"}>
      <TouchableOpacity onPress={handleChangeToggleTheme}>
        <StyledLampImage source={lampImg} />
        <StyledDioImage source={dio} />
      </TouchableOpacity>
    </AppContainer>
  );
};

export default App;
