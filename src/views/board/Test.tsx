import { useEffect } from 'react';

const Test = () => {
    useEffect(() => {
        const timer = setInterval(() => {
            console.log('timer...');
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return <>Timer</>;
};

export default Test;
