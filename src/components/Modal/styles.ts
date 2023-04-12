import styled, { css } from "styled-components";

export const Container = styled.div<{ openModal: boolean }>`
    ${({ theme, openModal }) => css`
    width: ${openModal ? '100vw' : '0'};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    transition: all ease .3s;
    background-color: ${theme.colors.federalBlue};
    `}
`;