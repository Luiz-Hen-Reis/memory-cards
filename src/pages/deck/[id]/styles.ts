import { MutableRefObject, Ref } from "react";
import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.spacings.medium};
    height: 80vh;
    margin-top: 1rem;
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-flow: column nowrap;
    width: 30rem;
    height: 45rem;
    position: relative;
    perspective: 1500rem;
    -moz-perspective: 1500rem;
  `}
`;

export const CardFront = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.ultraViolet};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45rem;
    transition: all 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: ${theme.borderRadius};
    overflow: hidden;
    box-shadow: ${theme.boxShadow};
  `}
`;

export const CardBack = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45rem;
    background: ${theme.colors.ultraViolet};
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    border-radius: ${theme.borderRadius};
    overflow: hidden;
    box-shadow: ${theme.boxShadow};
    transform: rotateY(180deg);
  `}
`;

export const BtnContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    gap: 1rem;

    button {
      font-size: ${theme.font.sizes.small};
      background-color: ${theme.colors.ultraViolet};
      padding: ${theme.spacings.small} ${theme.spacings.large};
      border-radius: ${theme.borderRadius};
      box-shadow: ${theme.boxShadow};
      cursor: pointer;

      &:nth-child(2):disabled {
        opacity: .5;
      }
    }
  `}
`;
