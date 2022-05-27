import styled from "styled-components/native";

interface AppContainerProps {
  theme: "dark" | "light";
}

interface StyledImageProps {
  source: number;
}

const themes = {
  light: {
    backgroundColor: "#f0f0f0",
  },
  dark: {
    backgroundColor: "#131313",
  },
};

export const AppContainer = styled.View`
  background-color: ${({ theme }: AppContainerProps) =>
    themes[theme].backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const StyledLampImage = styled.Image<StyledImageProps>`
  width: 150px;
  height: 150px;
  margin-bottom: 80px;
  align-self: center;
  ${({ source }) => source === 4 && "tint-color: white;"}
`;
export const StyledDioImage = styled.Image<StyledImageProps>`
  height: 100px;
  width: 280px;
  align-self: center;
`;
