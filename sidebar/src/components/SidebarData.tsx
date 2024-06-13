import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';

interface SidebarItem {
	title: string;
	icon: JSX.Element;
	link: string;
};

export const SidebarData: SidebarItem[] = [
	{
		title: "ホーム",
		icon: <HomeIcon />,
		link: "/home",
	},
	{
		title: "メール",
		icon: <EmailIcon />,
		link: "/mail",
	},
	{
		title: "フレンド",
		icon: <PersonAddIcon />,
		link: "/friend",
	},
	{
		title: "設定",
		icon: <SettingsIcon />,
		link: "/setting",
	},
];
