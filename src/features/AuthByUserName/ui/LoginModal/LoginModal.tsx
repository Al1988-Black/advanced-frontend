// import { classNames } from 'shared/lib/classNames/classNames';
import { Suspense } from 'react';
import { AppLoader } from 'shared/ui/AppLoader/AppLoader';
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

// import cls from './LoginModal.module.scss';

interface LoginModalProps {
    // className?: string;
    isOpen?: boolean;
    onClose: () => void;
}

export const LoginModal = (props: LoginModalProps) => {
    const { isOpen, onClose } = props;
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            lazy
            // className={classNames(cls.LoginModal, {}, [className])}
        >
            <Suspense fallback={<AppLoader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
