import { I_Story, I_StoryRegist } from '@/pages/story/model/story';
import { fbStore } from '@/shared/auth/firebase';
import { addDoc, collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';

/**
 * 스토리 전체 목록
 * @returns {Promise<I_Story[]>} 전체 스토리 목록 데이터
 */
const API_StoryList = async () => {
    try {
        const fQuery = query(collection(fbStore, 'story'), orderBy('date', 'desc'));
        const res = await getDocs(fQuery);
        const datas: I_Story[] = [];
        res.forEach((doc) => {
            const contentStr = doc.data().content;
            const regex = /<img[^>]+src=["']([^"']+)["']/;
            const match = regex.exec(contentStr);
            const imgSrc = match && match[1];
            const textContent = contentStr?.replace(/<img\b[^>]*>/gi, '');
            datas.push({ ...doc.data(), seq: doc.id, imgPath: imgSrc, textContent: textContent } as I_Story);
        });
        return datas;
    } catch (error) {
        console.error('Error fetching documents:', error);
        return error;
    }
};

/**
 * 스토리 저장
 * @returns {}
 */
const API_StoryRegist = async (story: I_StoryRegist) => {
    try {
        const res = await addDoc(collection(fbStore, 'story'), story);
        return res;
    } catch (error) {
        console.error('Error Regist Story', error);
        return error;
    }
};

/**
 * 스토리 상세 가져오기
 * @param id 스토리 Seq
 * @returns {Object<I_Story>} 스토리 데이터
 */
const API_StoryBySeq = async (id: string) => {
    try {
        const docRef = doc(fbStore, 'story', id);
        const res = await getDoc(docRef);
        return res.data();
    } catch (error) {
        console.error('Error fetching documents:', error);
        return error;
    }
};

export { API_StoryList, API_StoryRegist, API_StoryBySeq };
