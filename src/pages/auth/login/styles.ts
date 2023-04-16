import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 1rem;
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.ultraViolet};
    padding: ${theme.spacings.small};
    border-radius: ${theme.borderRadius};
    box-shadow: ${theme.boxShadow};
    width: 32rem;
    min-height: 49rem;

    h2 {
      font-size: ${theme.font.sizes.large};
      margin: 0 auto ${theme.spacings.medium};
      text-align: center;

      @media ${theme.media.medium} {
        font-size: ${theme.font.sizes.large};
      }
    }

    form {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
      font-size: ${theme.font.sizes.small};
      width: 95%;

      input {
        all: unset;
        height: ${theme.spacings.xlarge};
        background-color: ${theme.colors.mintCream};
        border-radius: ${theme.borderRadius};
        padding: 5px;
        box-shadow: ${theme.boxShadow};
        margin-bottom: ${theme.spacings.medium};
        color: ${theme.colors.eerieBlack};
        
        &[type="submit"] {
            background-color: ${theme.colors.eerieBlack};
            color: ${theme.colors.mintCream};
            text-align: center;
            cursor: pointer;
        }
      }
    }

    b {
        font-size: 1.2rem;
        text-align: right;
        margin-bottom: ${theme.spacings.medium};

        span {
            color: ${theme.colors.columbiaBlue};
            cursor: pointer;
        }
    }
  `}
`;
