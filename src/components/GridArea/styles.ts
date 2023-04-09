import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
      
  h1 {
      padding: ${theme.spacings.medium} 1rem 1rem;
      font-size: 1.6rem;
  }
  `}
`;