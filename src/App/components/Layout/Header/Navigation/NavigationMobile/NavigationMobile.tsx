import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Nav } from '~/ameliance-ui/components/blocks/Nav';
import { Button } from '~/ameliance-ui/components/Button';
import { MenuIcon } from '~/ameliance-ui/components/icons/MenuIcon';
import { LinkLabel } from '~/ameliance-ui/components/Link';
import { Menu, MenuContainer, MenuItem } from '~/ameliance-ui/components/Menu';

import { navigationList } from '../navigationList';

import s from './NavigationMobile.module.scss';

export function NavigationMobile() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handelIconMenuClick = () => {
		setIsMenuOpen(true);
	};

	const handelMenuClose = () => {
		setIsMenuOpen(false);
	};

	const linkClass = ({ isActive }: Record<string, boolean>) => (isActive ? s.active : '');

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
					{navigationList.map((item) => (
						<MenuItem key={item.label}>
							<NavLink className={linkClass} end={item.end} to={item.path}>
								<LinkLabel className={s.link} underline={false}>
									{item.label}
								</LinkLabel>
							</NavLink>
						</MenuItem>
					))}
				</Menu>
				<Button type="text" onClick={handelIconMenuClick}>
					<MenuIcon />
				</Button>
			</MenuContainer>
		</Nav>
	);
}