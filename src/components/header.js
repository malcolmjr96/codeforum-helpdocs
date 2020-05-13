import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Wrap from './wrap';
import { HamburgerIcon, CloseIcon } from './icons';

const HeaderContainerDesktop = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0 26px;
  margin-bottom: 32px;

  border-bottom: 1px solid #d3dce0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const HeaderContainerMobile = styled(HeaderContainerDesktop)`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

const Anchor = styled.a`
  text-decoration: none;
  color: #536171;
  font-size: 14px;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;

const LinksNav = styled.nav`
  & > a {
    margin: 0 15px;
  }

  & > a:last-child {
    margin-right: 0;
  }
`;

const MobileContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;

  width: 100%;
  height: 100%;

  background-color: #3072be;
`;

const MobileMenu = styled.ul`
  padding: 0 16px;

  list-style-type: none;
`;

const MobileMenuItem = styled.li`
  padding: 10px;

  border-bottom: 1px solid rgba(24, 56, 95, 0.3);
`;

const MobileMenuLogoContainer = styled.div`
  padding: 32px 16px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MobileMenuAnchor = styled(Anchor)`
  color: #fff;
`;

// TODO: Remove when content modeling is implement, just to fill it with something
function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 90"
      aria-hidden="true"
      width="60"
      height="60"
    >
      <g fill-rule="nonzero" fill="none">
        <path
          d="M0 44.647C0 19.989 19.985 0 44.645 0c24.66 0 44.644 19.989 44.644 44.647 0 24.655-19.984 44.646-44.645 44.646C19.985 89.293 0 69.303 0 44.647"
          fill="#FEFEFE"
        ></path>
        <path
          d="M70.624 53.952c.513-.121.882-.112 1.145.153.306.324.245.862.162 1.2-.394 1.64-3.863 13.268-20.302 17.244-10.764 2.598-20.677-.954-22.914-3.756 0 0-.52-.52-.29-1.048.15-.342.364-.414.835-.617 10.95-4.691 29.945-10.491 41.364-13.176zm-2.595 4.777c.752-1.593-1.417-2.403-2.027-.538-1.523 3.913-4.653 8.508-10.16 11.637 4.893-1.923 9.59-5.595 12.187-11.099zm-36.446-47.24c5.501-2.967 13.358-4.135 19.123-3.518 10.444 1.113 13.626 6.021 13.806 6.313l.016.023c.053.067.362.489.19.918-.137.326-.452.44-.807.502-4.966.843-12.701 2.362-22.122 4.862-6.615 1.755-17.105 5.233-20.621 6.421-.417.14-.747.144-.975-.141-.222-.282-.13-.94-.074-1.16 0 0 1.496-8.848 11.464-14.22zm2.216-.1c-6.041 2.666-10.123 9.015-10.348 11.702-.085 1.069 1.328 1.222 1.465.085 1.276-4.898 5.175-9.524 8.883-11.787zm25.108 2.178c.05-2.437-6.903-5.265-13.273-4.752 6.491.432 10.384 2.931 10.402 4.67.016 1.103-.938 2.075-2.214 2.458 3.258-.8 5.051-.92 5.085-2.376z"
          fill="#FAAE17"
        ></path>
        <path
          d="M75.47 56.933c-5.637 12.665-16.45 21.476-30.623 21.676-10.325.142-19.436-3.39-26.015-9.556l-3.978 1.697.01-6.16c-4.336-5.844-6.85-13.24-6.85-21.643 0-21.522 16.48-38.487 39.468-38.487 3.753 0 7.146.585 9.704 1.164C53.244 4.364 49.33 3.68 44.97 3.68c-24.667 0-41.272 20.004-41.272 40.637 0 22.484 17.638 41.314 40.788 41.314 22.11 0 34.036-15.59 37.854-24.961l-6.872-3.737z"
          fill="#0054A5"
        ></path>
        <path
          d="M27.065 45.06c.62-.945 2.07-1.802 3.765-1.035 1.539.698 1.962 2.376 1.118 3.728-.63 1.02-4.502 7.124-4.502 7.124l4.396 4.43c.871.96 1.107 3.1-.448 4.354-1.719 1.388-3.665.826-4.727-.277l-4.828-5.123-.01 6.394s.023 1.247-.45 1.985c-.512.81-1.363 1.046-1.363 1.046L15.698 69.5l.018-20.18 6.136-2.54.007 7.132 5.206-8.852zm12.92-5.037l-.008 15.215v1.887c0 2.38-.853 3.544-3.119 4.397-1.59.598-3.298 1.185-3.298 1.185l.006-14.957V45.89c0-2.95 1.12-4.077 3.072-4.784a70.832 70.832 0 013.348-1.082zm19.261-4.997s.016 12.44.003 17.534c-.027 1.523-1.008 2.605-2.187 2.947-1.141.333-2.394.248-3.384-.78l-6.132-7.056s.007 4.614.034 6.975c.011 2.184-.763 3.442-2.88 4.173-.23.077-2.862.984-2.862.984l-.002-20.235 2.94-.888s1.992-.72 3.196.483c2.252 2.257 5.706 6.577 5.706 6.577v-6.07c0-2.543 1.16-3.506 2.675-3.936a50.596 50.596 0 012.802-.689l.091-.02zm21.78 15.957c1.88 0 3.456 1.476 3.456 3.433 0 1.985-1.577 3.46-3.456 3.46-1.896 0-3.474-1.475-3.474-3.46 0-1.957 1.578-3.433 3.474-3.433zm0 .51c-1.622 0-2.848 1.265-2.848 2.923 0 1.685 1.226 2.95 2.848 2.95 1.591 0 2.83-1.265 2.83-2.95 0-1.658-1.239-2.923-2.83-2.923zm.077.925c1.015 0 1.59.313 1.59 1.201 0 .745-.465 1.03-1.07 1.083l1.084 1.777h-.832l-.997-1.741h-.51v1.741h-.79v-4.061h1.525zm-.054.628h-.682v1.07h.722c.457 0 .8-.067.8-.562 0-.445-.455-.508-.84-.508zM69.565 32.094c2.368-.47 4.85-.333 6.76.438 2.587 1 1.781 5.263-1.063 4.836-.848-.126-2.285-.734-4.837-.149-2.257.518-4.124 2.423-4.183 5.724.032 3.076 1.319 4.817 4.151 4.374 2.01-.399 2.038-1.256 2.038-1.338l.001-.005-.011-1.636s-.669.212-1.11.281c-1.388.257-2.029-.465-2.047-1.79.004-.765.005-1.305.006-1.63v-.378l8.585-1.856s.044 5.234 0 6.89c0 1.127-.264 2.65-1.386 3.748-1.231 1.213-3.477 2.513-6.719 2.887-4.52.51-9.551-1.71-9.57-8.534.019-8.589 6.226-11.23 9.386-11.862zm-52.502-.077c3.173-1.154 5.034.236 5.034 2.353 0 1.413-.603 2.615-1.92 3.672 1.296.212 2.399 1.274 2.424 2.745.047 2.822-1.985 4.323-4.633 5.42l-5.423 2.305-.015-14.695s3.417-1.395 4.533-1.8zm1.618 9.281c-.018-1.114-.884-1.719-2.376-.97l-.004 3.576s.483-.214.837-.378c.875-.405 1.557-1.137 1.543-2.228zM31.018 27.11c1.031-.294 1.884.034 1.884 1.272l.002 7.677c-.038 4.036-1.915 5.613-4.725 6.444-3.19.94-5.28-.572-5.267-3.607.014-2.285.007-7.606.005-8.812v-.247s.692-.276 1.846-.661c1.026-.34 1.893.031 1.893 1.276l.011 7.476c.005.91.41 1.485 1.271 1.27 1.12-.282 1.258-1.423 1.27-2.334l.004-9.137s.974-.378 1.806-.617zm7.79-2.369c2.81-.655 4.812.628 4.772 2.898-.014 2.162-1.22 3.476-2.302 4.374l2.378 2.286c.736.711.78 1.993-.036 2.767-.49.46-1.798.934-2.82-.108l-3.174-3.276-.013 3.6c-.007.973-.67 1.675-1.51 1.996-.698.241-2.194.752-2.194.752l.01-13.797s3.075-1.071 4.888-1.492zM18.352 35.693c.009-1.08-.876-1.356-2.075-.738v3.112c.261-.106.461-.193.682-.301.81-.396 1.386-1.125 1.393-2.073zm33.503-14.447c2.378-.083 3.49.69 3.46 1.94-.029 1.167-.839 1.847-2.256 1.617-.574-.072-1.319-.175-2.135.034-1.64.42-2.842 1.921-2.887 4.475.022 1.946.75 2.966 2.063 3 .94.024 1.843-.372 1.84-.975l-.008-1.52s-.36.082-.81.175c-.718.148-1.218-.31-1.222-1.02l.004-1.523 5.481-1.246v5.21c0 .788-.292 1.71-.992 2.33-.706.616-1.719 1.277-3.76 1.69-3.618.652-6.572-1.349-6.572-5.878 0-4.426 2.64-8.131 7.794-8.31zm12.379-2.54s-.007.76-.008 1.306l-.001.252c0 .798-.286 1.383-1.134 1.561-1.093.23-3.123.653-3.123.653v2.052l3.904-.826s.003.51.004 1.16v.336c0 .862-.396 1.271-1.145 1.436-.598.132-2.758.587-2.758.587l-.012 2.59 4.401-.961v1.568c0 .99-.506 1.562-1.316 1.737-2.412.524-6.793 1.557-6.793 1.557l.03-13.399c2.304-.526 6-1.269 7.951-1.608zm5.806-.989c2.768-.356 4.626 1.183 4.592 3.364-.018 1.919-1.224 3.075-2.25 3.768l2.385 2.685c.68.756.648 2.052-.353 2.682-.985.625-1.962.297-2.529-.329l-3.107-3.645s.007 2.241.002 3.222c-.009.972-.571 1.683-1.584 1.895l-2.027.398.009-13.228s3.86-.686 4.862-.812zM39.773 28.71c-.023-1.523-1.427-1.188-2.151-.922l-.005 3.829c.01-.002 2.178-1.125 2.156-2.907zm31.114-7.049c-.016-1.451-1.449-1.188-2.124-1.037l.005 3.573c.004 0 2.15-.817 2.12-2.536z"
          fill="#EC1D24"
        ></path>
      </g>
    </svg>
  );
}

export default function Header(props) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function openMenu() {
    setIsMenuOpened(true);
  }

  function closeMenu() {
    setIsMenuOpened(false);
  }

  return (
    <Wrap>
      <HeaderContainerDesktop>
        <Link to="/">
          <Logo />
        </Link>
        <LinksNav>
          {props.links?.map((link) => (
            <Anchor href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </Anchor>
          ))}
        </LinksNav>
      </HeaderContainerDesktop>

      <HeaderContainerMobile>
        <div>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <HamburgerIcon onClick={openMenu} />
      </HeaderContainerMobile>

      {isMenuOpened && (
        <MobileContainer>
          <MobileMenuLogoContainer>
            <Link to="/" onClick={closeMenu}>
              <Logo />
            </Link>
            <CloseIcon onClick={closeMenu} />
          </MobileMenuLogoContainer>

          <MobileMenu>
            {props.links?.map((link) => (
              <MobileMenuItem>
                <MobileMenuAnchor
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </MobileMenuAnchor>
              </MobileMenuItem>
            ))}
          </MobileMenu>
        </MobileContainer>
      )}
    </Wrap>
  );
}
