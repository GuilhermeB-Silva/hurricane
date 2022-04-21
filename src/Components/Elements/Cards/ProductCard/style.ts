import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 200px;
    height: 200px;
    background: red;
  }

  .group-buttons {
    display: flex;
    flex-direction: column;

    button {
      width: 200px;
    }
  }
`;
