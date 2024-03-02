import { useNavigate } from 'react-router-dom';

import Style from './notFound.module.scss';

// interface OwnProps {
//     status: string;
// }

const NotFound = ({ status = '' }) => {
    const nav = useNavigate();

    return (
        <div className={Style.wrapper}>
            <h1>
                Error <strong>{status}</strong>
            </h1>

            <div className={Style.btns}>
                <button onClick={() => nav('/')}>홈</button>
                <button>돌아가기</button>
            </div>
        </div>
    );
};

export default NotFound;
