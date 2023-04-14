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
    padding: 0 ${theme.spacings.small};

    a {
      display: block;
      margin: ${theme.spacings.medium} 0;
      background-color: ${theme.colors.ultraViolet};
      padding: ${theme.spacings.small} ${theme.spacings.huge};
      font-size: ${theme.font.sizes.small};
      border-radius: ${theme.borderRadius};
      text-align: center;
      cursor: pointer;
    }

    button {
      all: unset;
      display: block;
      margin: ${theme.spacings.xhuge} auto;
      background-color: ${theme.colors.ultraViolet};
      padding: ${theme.spacings.small} ${theme.spacings.huge};
      font-size: ${theme.font.sizes.small};
      border-radius: ${theme.borderRadius};
      text-align: center;
      cursor: pointer;
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
      margin-left: 5px;
    }
  `}
`;
