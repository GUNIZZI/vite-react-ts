import 'react-quill/dist/quill.snow.css';
import './RegistEditor.scss';
import ReactQuill from 'react-quill';
import { useEffect, useMemo, useState } from 'react';

const formats = ['font', 'header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'align', 'color', 'background', 'size', 'h1', 'image', 'width'];
let EditorValue = '';

type OwnProps = {
    mdfyContent: string | null;
};

const RegistEditor = ({ mdfyContent }: OwnProps) => {
    const [values, setValues] = useState('');

    if (mdfyContent) {
        console.log(mdfyContent);
    }

    const modules = useMemo(() => {
        return {
            toolbar: {
                container: [
                    // [{ header: [1, 2, 3, 4, 5, 6, false] }],

                    [{ size: ['small', false, 'large', 'huge'] }],

                    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
                    ['blockquote', 'code-block'],
                    ['link', 'image', 'video'],

                    [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
                    [{ script: 'sub' }, { script: 'super' }], // superscript/subscript

                    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
                    [{ align: [] }],

                    ['clean'], // remove formatting button
                ],
            },
        };
    }, []);

    useEffect(() => {
        EditorValue = values;
    }, [values]);

    return (
        <>
            <ReactQuill theme="snow" modules={modules} formats={formats} onChange={setValues} defaultValue={mdfyContent || values} />
        </>
    );
};

export { RegistEditor, EditorValue };
