import { UserState } from '@/app/provider/user';
import Style from './Board.module.scss';

const Board = () => {
    const { user } = UserState();

    return (
        <div id={Style.wrapper}>
            <span>{user.name}</span>
            <br />
            <span>{user.token}</span>
        </div>
    );
};

export { Board };
