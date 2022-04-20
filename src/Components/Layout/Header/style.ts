import { LightenDarkenColor } from "Core/Helpers/style/darkenOrLighter";
import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: max-content;
  background: black;
  display:flex;
  flex-direction:column;

  .header-layer{
    width:100%;
    max-width:1250px;
    margin:0 auto;
    
    .header-navigation{
      padding:20px 0;

      display:flex;
      align-items:center;
      justify-content:space-between;

      .header-links{
        display:flex;

        .logo{
          display:flex;
          align-items:center;
          color:white;
          span{
            font-family: 'Bangers', cursive;
            font-size:26px;
          }

          &:after{
            content:"";
            width:2px;
            height:50%;
            background:#494949;
            margin-left:40px;
            margin-right:40px;

          }
      }

      nav{
        display:flex;
        align-items:center;
        
        a{
          margin-right:20px;
          text-decoration:none;
          color:white;
        }
      }

      }

    


      .login-button{
        button{
          padding:15px 30px;
          color:black;
          background:white;
          border:none;
          border-radius:5px;
          font-size:16px;
          cursor:pointer;
          transition:background .2s;

          &:hover{
            background:${LightenDarkenColor("#ffffff", -20)}
          }
        }
      }
    }

  }

  .
`;
