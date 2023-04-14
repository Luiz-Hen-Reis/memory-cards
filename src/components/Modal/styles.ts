import styled, { css } from "styled-components";
import {
  HamburgerBtn,
  Container as IHeader,
  UserInfo as IUserInfo,
} from "../Header/styles";

export const Container = styled.div<{ modalIsOpen: boolean }>`
  ${({ theme, modalIsOpen }) => css`
    height: ${modalIsOpen ? "100vh" : "0vh"};
    width: ${modalIsOpen ? "100vw" : "0vw"};
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    transition: all ease 0.3s;
    background-color: ${theme.colors.federalBlue};

    @media ${theme.media.medium} {
      display: none;
    }
  `}
`;

export const Header = styled(IHeader)``;

export const CloseBtn = styled(HamburgerBtn)`
  margin-left: 3px;

  span {
    &:nth-child(1) {
      transform: rotate(-45deg);
    }

    &:nth-child(2) {
      transform: rotate(45deg);
    }
  }
`;

export const ModalBody = styled.div`
  ${({ theme }) => css`
    p {
      padding: 0px;
    }
  `}
`;

export const UserInfo = styled(IUserInfo)`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    display: flex;
    align-items: center;

    img {
        width: 6rem;
        height: 6rem;
    }
    
    p {
        font-size: ${theme.font.sizes.medium};
    }
  `}
`;
