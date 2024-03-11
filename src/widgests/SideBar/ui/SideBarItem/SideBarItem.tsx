import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { SideBarItemType } from 'widgests/SideBar/model/items';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SideBarItem.module.scss';

interface SideBarItemProps {
    item?: SideBarItemType;
    collapsed: boolean;
}

export const SideBarItem = memo((props: SideBarItemProps) => {
    const { t } = useTranslation();
    const { item, collapsed } = props;
    const { path, text, Icon } = item;
    return (
        <AppLink
            to={path}
            theme={AppLinkTheme.SECONDARY}
            className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        >
            <Icon className={cls.icon} />
            <span className={cls.link}>{t(text)}</span>
        </AppLink>
    );
});
