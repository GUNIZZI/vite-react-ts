import { Timestamp } from 'firebase/firestore';

const dateTsToDateStr = (ts: Timestamp) => {
    const date = new Date(ts.toMillis());
    return date.toLocaleDateString();
};

export { dateTsToDateStr };
