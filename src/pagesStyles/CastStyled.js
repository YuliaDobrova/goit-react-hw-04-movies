import styled from 'styled-components';

export const CastStyled = styled.div`
  .CastList {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
    margin-top: -10px;
    margin-left: -10px;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: center;
    }
    @media screen and (min-width: 1280px) {
      /* width: 300px; */
    }
  }

  .CastListItem {
    margin-top: 20px;
    margin-left: 20px;

    @media screen and (min-width: 768px) {
      /* width: 220px; */
    }
    @media screen and (min-width: 1280px) {
      /* width: 300px; */
    }
  }

  .CastImage {
    min-height: 300px;
    border-radius: 10px;
  }
  .CastTitle {
    font-size: 16px;
    text-align: center;
  }
`;
