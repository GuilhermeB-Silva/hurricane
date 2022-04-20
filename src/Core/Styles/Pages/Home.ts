import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100%;

  .banner-wrapper {
    width: 100%;
    height: 300px;
    background: black;
    margin: 0 auto;

    .banner {
      max-width: 1250px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;

      .banner-text {
        color: white;
        font-size: 40px;
        text-align: center;
        font-family: var(--hurricane);

        img {
          width: 50px;
          height: 50px;
          position: relative;
          top: 20px;
          left: 10px;
        }
      }

      img {
        width: 400px;
        height: 300px;
      }
    }
  }

  main {
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    padding: 50px 0;
    gap: 20px;

    display: flex;

    aside {
      height: 500px;
      width: 200px;
      background: white;
      border-radius: 10px;
      box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);
    }

    .content {
      width: 100%;
      height: 700px;
      background: white;

      .content-filter {
        width: 100%;
        height: 30px;
        background: white;
        border-radius: 10px;

        box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);
      }
      .content-products {
        width: 100%;
        height: 500px;
        background: white;
        margin-top: 20px;
        border-radius: 10px;

        box-shadow: 0px 1px 10px 1px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
