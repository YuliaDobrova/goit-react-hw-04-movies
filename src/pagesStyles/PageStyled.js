import styled from "styled-components";

export const PageStyled = styled.div`
  .HomePageTitle {
    font-size: 26px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: white;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em rgba(33, 229, 243, 0.45),
      0 0 0.5em rgba(33, 229, 243, 0.45), 0 0 0.1em rgba(33, 229, 243, 0.45),
      5px 9px 5px rgba(33, 229, 243, 0.45);
    animation-name: changeColor;
    animation-duration: 3000ms;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    &:hover {
      animation-play-state: paused;
    }

    @media screen and (min-width: 768px) {
      font-size: 50px;
      margin-bottom: 30px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 70px;
      margin-bottom: 40px;
    }
  }

  @keyframes changeColor {
    0% {
      color: white;
    }

    50% {
      color: rgba(139, 221, 221, 0.767);
    }

    100% {
      color: white;
    }
  }

  .PageList {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 768px) {
      margin-top: -20px;
      margin-left: -20px;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      margin-bottom: 30px;
    }
    @media screen and (min-width: 1280px) {
      margin-top: -30px;
      margin-left: -30px;
      flex-direction: row;
      justify-content: center;
    }
  }
  .PageItem {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 280px;
    height: 480px;
    overflow: hidden;
    transition: translate 350ms linear, opacity 350ms linear;
    &:hover .PageItemWrapperOverlay {
      transform: translateY(0);
      opacity: 1;
    }

    &:not(:last-child) {
      margin-bottom: 17px;
    }
    @media screen and (max-width: 767px) {
      padding-left: 42px;
      padding-right: 42px;
      min-width: 220px;
      height: 480px;
    }

    @media screen and (min-width: 768px) {
      min-width: 220px;
      height: 350px;
      margin-top: 20px;
      margin-left: 20px;
      flex-basis: calc((100% / 3) - 20px);
      &:not(:last-child) {
        margin-bottom: 0;
      }
    }
    @media screen and (min-width: 1280px) {
      width: 335px;
      height: 480px;
      margin-top: 30px;
      margin-left: 30px;
      flex-basis: calc((100% / 5) - 30px);
    }
  }

  .PageItemWrapper {
    width: 300px;
    height: 390px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: transparent;
    position: relative;

    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(0.95);
    }
    @media screen and (min-width: 768px) {
      width: 220px;
      height: 300px;
    }

    @media screen and (min-width: 1280px) {
      width: 300px;
      height: 400px;
    }
  }

  .PageImage {
    display: block;
    width: 100%;
    height: 100%;
    border: 3px solid teal;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom: 0;
  }

  .PageItemWrapperOverlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 35px;
    width: 100%;
    opacity: 0;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: translateY(80%);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    /* overflow-y: scroll; */
    padding: 2px 3px;
    background-color: rgba(33, 229, 243, 0.45);
  }

  .PageItemWrapperOverlayText {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.75;
    color: white;
    text-align: center;
  }
  .PageItemWrapperOverlayText:hover {
    color: black;
    font-size: 18px;
    font-weight: 700;
    transform: translateY(0);
  }

  .PageItemName {
    text-align: center;
    hyphens: auto;
    width: 290px;
    height: 50px;
    background-color: black;
    border: 2px solid teal;
    border-top: 0;
    padding-top: 3px;
    padding-bottom: 10px;

    color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover,
    &:focus {
      color: teal;
    }
    @media screen and (min-width: 768px) {
      width: 220px;
    }
    @media screen and (min-width: 1280px) {
      width: 300px;
    }
  }
`;
