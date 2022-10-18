import { forwardRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors, device } from "../styles/Theme";

export const Button = forwardRef(
  ({ icon, disabled, to, children, navOpen }, ref) => {
    const IconComponent = icon;

    return (
      <LinkContainer to={to} ref={ref} disabled={disabled}>
        <IconComponent />
        {children}
      </LinkContainer>
    );
  }
);

const hoverEffect = {
  enabled: {
    "background-color": colors.hoverWhite,
    border: `3px dotted ${colors.hoverWhite}`,
  },
  disabled: {
    border: `2px dotted ${colors.hoverWhite}`,
    cursor: "not-allowed",
    opacity: "0.5",
  },
};

const LinkContainer = styled(Link)`
  position: relative;
  padding: 10px 50px;
  width: 100%;
  height: 70px;
  display: inline-block;
  text-align: end;
  display: flex;
  justify-content: center;
  align-items: center;

  > svg {
    position: absolute;
    left: 50px;
    width: 40px;
    height: 40px;
    margin-right: 20px;
    color: ${colors.white};
  }

  ${device.desktop} {
    padding: 20px;
    text-align: end;
    justify-content: space-between;
    align-items: center;

    > svg {
      position: static;
      width: 40px;
      height: 40px;
      margin-right: 20px;
      color: ${colors.white};
    }
  }

  &:hover {
    ${({ disabled }) =>
      disabled ? { ...hoverEffect.disabled } : { ...hoverEffect.enabled }};
  }

  &:disabled {
  }
`;
