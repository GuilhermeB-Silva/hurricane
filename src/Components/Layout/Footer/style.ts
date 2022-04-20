import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  background: black;
  margin-top: auto;
  padding: 50px 0;

  .footer {
    width: 100%;
    max-width: 1250px;
    margin: 0 auto;
    .logo {
      display: flex;
      align-items: center;
      color: white;
      span {
        font-family: "Bangers", cursive;
        font-size: 26px;
      }

      &:after {
        content: "";
        width: 2px;
        height: 50%;
        background: #494949;
        margin-left: 40px;
        margin-right: 40px;
      }
    }
  }
`;
