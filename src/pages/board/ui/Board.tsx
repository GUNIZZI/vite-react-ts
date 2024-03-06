import Style from './Board.module.scss';
import { useAuth } from '@/features/auth/user/hooks';

const Board = () => {
    const { user, isLogined } = useAuth();

    return (
        <div id={Style.wrapper}>
            <span>{user.name}</span>
            <br />
            <span>{isLogined}</span>
        </div>
    );
};

export { Board };
