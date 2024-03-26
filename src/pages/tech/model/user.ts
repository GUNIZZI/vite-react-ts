import { Timestamp } from 'firebase/firestore';

export interface I_Story {
    user: string;
    date: Timestamp;
    title: string;
    content: string;
}
