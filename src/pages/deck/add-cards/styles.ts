import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
    font-size: ${theme.font.sizes.small};
    margin: 0 1rem;
  `}
`;

export const FormContainer = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: -5rem 1rem;

    h1 {
      text-align: center;
      margin-bottom: ${theme.spacings.medium};
    }

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

    select {
      height: ${theme.spacings.xlarge};
      background-color: ${theme.colors.mintCream};
      border-radius: ${theme.borderRadius};
      padding: 5px;
      box-shadow: ${theme.boxShadow};
      margin-bottom: ${theme.spacings.medium};
      color: ${theme.colors.eerieBlack};

    }
  `}
`;
