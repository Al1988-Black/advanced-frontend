import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line max-len
import {
    DynamicModuleLoader,
    ReducersList,
} from 'shared/lib/componets/DynamicModuleLoader/DynamicModuleLoader';
import {
    ProfileCard,
    fetchProfileData,
    profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useEffect } from 'react';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);
    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};
export default ProfilePage;
