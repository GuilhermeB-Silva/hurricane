import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .left-side {
    display: flex;
    justify-content: center;
    align-items: flex-end;

    font-size: 50px;
    font-family: "Bebas Neue", cursive;
    position: relative;
    width: 100%;
    height: 50%;
    background: black;
    color: white;
    animation-name: open_one;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    overflow: hidden;

    img {
      position: relative;
      top: 200px;

      width: 100%;
      max-width: 481px;
    }
  }

  .right-side {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-family: "Bebas Neue", cursive;
    position: relative;
    text-align: center;
    font-size: 50px;
    width: 100%;
    height: 50%;
    background: black;
    color: white;
    animation-name: open_two;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    overflow: hidden;

    img {
      position: relative;
      bottom: 212px;
      width: 100%;
      max-width: 481px;
    }
  }

  @keyframes open_one {
    from {
      bottom: 0%;
    }

    to {
      bottom: 100%;
    }
  }

  @keyframes open_two {
    from {
      top: 0%;
    }

    to {
      top: 100%;
    }
  }
`;
