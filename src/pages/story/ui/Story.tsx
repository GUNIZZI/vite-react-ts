import { fbStore } from '@/features/auth/firebase';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { I_Story } from '../model/user';

const Story = () => {
    const [test, setTest] = useState<I_Story>({ user: '', date: Timestamp.now(), title: '', content: '' });

    // async - await로 데이터 fetch 대기
    async function getTest() {
        //     // document에 대한 참조 생성
        const docRef = doc(fbStore, 'story', '1');
        //     // 참조에 대한 Snapshot 쿼리
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setTest(docSnap.data() as I_Story);
        }
    }

    useEffect(() => {
        getTest();
    }, []);

    return (
        <>
            <div>FB user: {test?.user}</div>
            <div>FB date: {test.date.toDate().toString()}</div>
            <div>FB title: {test?.title}</div>
            <div>FB content: {test?.title}</div>
        </>
    );
};

export { Story };
