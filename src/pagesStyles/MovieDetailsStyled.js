import styled from 'styled-components';

export const MovieDetailsStyled = styled.div`
  .MovieDetailsThumb {
    /* margin-left: auto;
    margin-right: auto; */
    padding: 20px;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
    }
    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: center;
    }
  }
  .MovieDetailsImage {
    margin-right: auto;
    margin-left: auto;
    display: block;
    width: 300px;
    height: 450px;
    border: 3px solid teal;
    border-radius: 10px;
    @media screen and (min-width: 768px) {
      margin-right: 20px;
      margin-left: 0px;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 50px;
      /* margin-left: 200px; */
    }
  }
  .MovieDetailsWrapper {
    border-radius: 10px;
    padding: 15px 15px;
    background-color: rgba(0, 0, 0, 0.25);
  }
  .MovieDetailsTitle {
    font-size: 40px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 30px;
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
  }
  .MovieDetailsText,
  .MovieDetailsList,
  .MovieDetailsListItem {
    color: white;
    font-size: 24px;
    font-weight: 700;
    margin-left: 20px;
    margin-bottom: 30px;
    letter-spacing: 3px;
  }
  .MovieDetailsList {
    margin-bottom: 30px;
  }
  .MovieDetailsListItem {
    font-size: 22px;
    font-weight: 700;
    margin-left: 20px;
    margin-bottom: 30px;
    letter-spacing: 3px;
  }
`;
