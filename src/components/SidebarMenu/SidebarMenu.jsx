import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import sprite from '../../img/svg/symbol-defs.svg';

const NavButton = styled.button`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  border: none;
  width: 38px;
  height: 38px;
  background-color: var(--white);
  filter: drop-shadow(0px -1px 7px rgba(71, 71, 71, 0.05));
  @media(min-width: 768px) {
    width: 44px;
    height: 44px;
  }
`;

const SidebarList = styled.ul`
  margin: 0;
`;

const SidebarItem = styled.li`
  margin-bottom: 16px;
`;

const SidebarSvg = styled.svg`
  width: 14px;
  height: 14px;
  fill: rgba(220, 221, 223, 1);
  &.active {
    fill: rgba(63, 148, 95, 1);
  }
  @media(min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

const SidebarMenu = ({ isOpen, onClose }) => {
  // Состояние для открытия/закрытия сайдбара
  const location = useLocation();

  const links = [
    { to: '/dashboard', icon: 'icon-dashboard' },
    { to: '/orders', icon: 'icon-shopping-cart' },
    { to: '/products', icon: 'icon-Group' },
    { to: '/customers', icon: 'icon-pharmacy' },
    { to: '/suppliers', icon: 'icon-users' },
  ];


  const toggleSidebar = () => {
    onClose(false);
  };

  return (
    <nav>
      <SidebarList>
        {links.map((link) => (
          <SidebarItem key={link.to}>
            <NavLink to={link.to} className={({ isActive }) => (isActive ? 'active' : '')} onClick={toggleSidebar}>
              <NavButton>
                <SidebarSvg className={location.pathname === link.to ? 'active' : ''}>
                  <use href={`${sprite}#${link.icon}`} />
                </SidebarSvg>
              </NavButton>
            </NavLink>
          </SidebarItem>
        ))}
      </SidebarList>
    </nav>
  );
};

export default SidebarMenu;

