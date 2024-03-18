import { userStore } from '@/app/store/user';
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Regist.scss';
import { RegistEditor, EditorValue } from './RegistEditor';
import { API_StoryBySeq, API_StoryRegist } from '@/shared/api/story';
import { I_Story } from '../model/story';

const Regist = () => {
    const navigate = useNavigate();
    const { name } = userStore();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        /**
         * 수정 모드로 진인 합 경우
         */
        const urlParams = new URLSearchParams(window.location.search);
        const viewSeq = urlParams.get('seq');

        if (viewSeq) {
            (async () => {
                const res: I_Story = (await API_StoryBySeq(viewSeq)) as I_Story;
                setTitle(res.title);
                setContent(res.content);
            })();
        }

        console.log('viewSeq', viewSeq);
    }, []);

    const submitData = async (e: FormEvent) => {
        e.preventDefault();

        const res = await API_StoryRegist({
            name: name,
            date: new Date(),
            title: title,
            content: EditorValue,
        });
        if (res) {
            alert('글이 작성 되었습니다.');
            navigate('/story');
        }
    };

    const cancelData = () => {
        history.back();
    };

    return (
        <div className="storyRegist">
            <form onSubmit={submitData}>
                <fieldset>
                    <strong className="title">Subject</strong>
                    <input
                        type="text"
                        name=""
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />
                </fieldset>
                <fieldset>
                    <strong className="title">Content</strong>
                    <RegistEditor mdfyContent={content}></RegistEditor>
                </fieldset>
                <div className="btns">
                    <button title="저장" type="submit" className="btnSave">
                        저장
                    </button>
                    <button title="취소" type="button" className="btnCancel" onClick={cancelData}>
                        X
                    </button>
                </div>
            </form>
        </div>
    );
};
export { Regist };
