import { db } from '@/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Index = () => {
    const [test, setTest] = useState();

    // async - await로 데이터 fetch 대기
    async function getTest() {
        //     // document에 대한 참조 생성
        const docRef = doc(db, 'story', '1');
        //     // 참조에 대한 Snapshot 쿼리
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log(docSnap.data());
            // setTest(docSnap.data());
        }
    }

    useEffect(() => {
        getTest();
    }, []);

    return (
        <>
            <div style={{ height: '5000px' }}>asdasd</div>
        </>
    );
};

export default Index;
