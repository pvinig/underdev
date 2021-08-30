import styled from "styled-components";
import TextImage from "./text.svg";
import BubbleImage from "./bubble.svg";

export const Wrapper = styled.hgroup`
  max-width: 508px;
  height: 237px;
  position: relative;
`;

const Text = styled.h1`
  position: relative;
  z-index: 2;
`;

const TextImg = styled.img`
  width: 100%;
`;

const Bubble = styled.span`
  position: absolute;
  top: -20px;
  right: 0;
`;

const BubbleImg = styled.img`
  width: 100%;
  max-width: 160px;

  @media (min-width: 992px) {
    max-width: 280px;
  }
`;

export const Logo = () => (
  <Wrapper>
    <Text>
      <TextImg src={TextImage.src} alt="Underdev" />
    </Text>
    <Bubble>
      <BubbleImg src={BubbleImage.src} alt="Underdev" />
    </Bubble>
  </Wrapper>
);
