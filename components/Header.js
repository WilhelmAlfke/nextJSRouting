import styled from "styled-components";
import Link from "next/link";
import StyledNavLink from "./StyledNavLink";
import { useRouter } from "next/router";

export default function Header() {
  const { pathname } = useRouter();
  return (
    <StyledHeader>
      <StyledNav>
        <Link href="/" passHref legacyBehavior>
          <StyledNavLink active={pathname === "/"}>Home</StyledNavLink>
        </Link>

        <Link href="/product" passHref legacyBehavior>
          <StyledNavLink active={pathname === "/product"}>
            Product
          </StyledNavLink>
        </Link>

        <Link href="/team" passHref legacyBehavior>
          <StyledNavLink active={pathname === "/team"}>Team</StyledNavLink>
        </Link>

        <Link href="/account" passHref legacyBehavior>
          <StyledNavLink active={pathname === "/account"}>
            Account
          </StyledNavLink>
        </Link>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: DarkSlateGray;
  padding: 1.5rem;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
