import { Timestamp } from 'firebase/firestore';

export interface I_Story {
    seq?: string;
    user: string;
    date: Timestamp;
    title: string;
    content: string;
    textContent?: string;
    imgPath?: string;
}

export interface I_StoryRegist {
    name?: string | undefined | null;
    date: Date;
    title: string;
    content: string;
}
