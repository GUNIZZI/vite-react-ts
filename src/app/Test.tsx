import { userStore } from './store/user';

const Test = () => {
    const { name, token } = userStore();
    return (
        <div>
            <div>{name}</div>
            <div>{token}</div>
        </div>
    );
};

export default Test;
