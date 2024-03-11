import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useMemo, useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'widgests/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { SideBarItemList } from '../../model/items';
import { SideBarItem } from '../SideBarItem/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToogle = () => {
        setCollapsed((prev) => !prev);
    };
    const itemList = useMemo(
        () =>
            // eslint-disable-next-line implicit-arrow-linebreak
            SideBarItemList.map((item) => (
                <SideBarItem
                    item={item}
                    key={item.path}
                    collapsed={collapsed}
                />
            )),
        [collapsed]
    );

    return (
        <div
            data-testid="sideBar"
            className={classNames(cls.SideBar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sideBar-toggle"
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
                onClick={onToogle}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>{itemList}</div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={cls.lang} short={collapsed} />
            </div>
        </div>
    );
});
