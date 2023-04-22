import styled, { css } from "styled-components";

export const Container = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: ${theme.spacings.xhuge} 1rem;
    height: 100%;
    font-size: ${theme.font.sizes.small};

    h1 {
      margin-bottom: ${theme.spacings.large};
      text-align: center;
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

    @media ${theme.media.medium} {
        width: 40rem;
        margin: ${theme.spacings.xhuge} auto;
    }
  `}
`;
