import { useEffect, useState } from 'react';
import { I_Story } from '../model/story';
import { API_StoryBySeq } from '@/shared/api/story';
import { dateTsToDateStr } from '@/shared/util';
import DOMPurify from 'dompurify';

import 'react-quill/dist/quill.core.css';
import 'react-quill/dist/quill.snow.css';

const View = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const viewSeq = urlParams.get('seq');

    const [isLoading, setIsLoading] = useState(true);
    const [viewData, setViewData] = useState<I_Story>();

    useEffect(() => {
        if (viewSeq) {
            (async () => {
                const res = await API_StoryBySeq(viewSeq);
                setViewData(res as I_Story);
            })();
        }
    }, []);

    return (
        <div className="storyRegist">
            {viewData ? (
                <>
                    <div>{viewData.title}</div>
                    <div>{dateTsToDateStr(viewData.date)}</div>
                    <div className="ql-editor">
                        <div
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(viewData.content),
                            }}></div>
                    </div>
                </>
            ) : (
                <>
                    <div>Loading...</div>
                </>
            )}
        </div>
    );
};
export { View };
