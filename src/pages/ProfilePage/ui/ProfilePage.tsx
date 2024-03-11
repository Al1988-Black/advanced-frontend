import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line max-len
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
