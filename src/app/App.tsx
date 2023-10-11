import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { NavBar } from 'widgests/NavBar';
import { SideBar } from 'widgests/SideBar';
import { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavBar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
