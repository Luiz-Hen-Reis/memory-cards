import styled, { css } from "styled-components";

export const Container = styled.article`
  ${({ theme }) => css`
    height: 13rem;
    background-color: ${theme.colors.ultraViolet};
    padding: ${theme.spacings.small} ${theme.spacings.medium};
    border-radius: ${theme.borderRadius};
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all ease 0.3s;
    
    span {
      margin-bottom: 1.4rem;
    }

    &:hover {
      border-bottom: 0.5rem solid ${theme.colors.columbiaBlue};
    }
  `}
`;

export const DeckTitle = styled.header`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.medium};

    h1 {
      padding: 0;
      font-family: ${theme.font.family.secondary};
    }

    p {
      color: ${theme.colors.columbiaBlue};
    }
  `}
`;
