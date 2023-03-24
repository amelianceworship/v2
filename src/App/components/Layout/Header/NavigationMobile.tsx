import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import asm from 'asm-ts-scripts';

import { PRIVATE_ROUTES, ROUTES } from '~app/constants/ROUTES';

import { Nav } from '~/ameliance-ui/components/blocks/Nav';
import { Button } from '~/ameliance-ui/components/Button';
import { MenuIcon } from '~/ameliance-ui/components/icons/MenuIcon';
import { Menu, MenuContainer, MenuItem } from '~/ameliance-ui/components/Menu';

import s from './NavigationMobile.module.scss';

export function NavigationMobile() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handelIconMenuClick = () => {
		setIsMenuOpen(true);
	};

	const handelMenuClose = () => {
		setIsMenuOpen(false);
	};

	const linkClass = ({ isActive }: Record<string, boolean>) => (isActive ? asm.join(s.active, 'link no-underline') : 'link no-underline');

	return (
		<Nav className={s.NavigationMobile}>
			<MenuContainer>
				<Menu
					isOpen={isMenuOpen}
					onClick={handelMenuClose}
					anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
					menuOrigin={{ horizontal: 'right', vertical: 'top' }}
					preventItemClickClose
				>
					<MenuItem>
						<NavLink className={linkClass} end to={ROUTES.HOME}>
							Головна
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink className={linkClass} to={ROUTES.SONGS_LIST}>
							Список пісень
						</NavLink>
					</MenuItem>
					<MenuItem>
						<NavLink className={linkClass} end to={PRIVATE_ROUTES.CHAT}>
							Чат
						</NavLink>
					</MenuItem>
				</Menu>
				<Button type="text" onClick={handelIconMenuClick}>
					<MenuIcon />
				</Button>
			</MenuContainer>
		</Nav>
	);
}
