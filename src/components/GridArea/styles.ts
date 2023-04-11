import styled, { css } from "styled-components";

export const Container = styled.section`
  ${({ theme }) => css`
    padding: 0 1rem;

    h1 {
      padding: ${theme.spacings.medium} 1rem 1rem;
      font-size: 1.6rem;
    }
  `}
`;

export const GridContainer = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media ${theme.media.medium} {
      grid-template-columns: repeat(3, 1fr);
    }
  `}
`;
