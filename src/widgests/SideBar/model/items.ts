import React from 'react';
import { RoutePath } from 'shared/config/routerConfig/routerConfig';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SideBarItemType {
    path?: string;
    text?: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SideBarItemList: SideBarItemType[] = [
    {
        path: RoutePath.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePath.about,
        text: 'О сайте',
        Icon: AboutIcon,
    },
    {
        path: RoutePath.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
    },
];
