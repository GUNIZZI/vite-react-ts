import { useEffect, useState } from 'react';
import { I_Story } from '../model/story';
import { Link } from 'react-router-dom';
import DOMPurify from 'isomorphic-dompurify';

// import Styles from './List.module.scss';
import './List.scss';
import { dateTsToDateStr } from '@/shared/util';
import { API_StoryList } from '@/shared/api/story';

const List = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [listData, setListData] = useState<I_Story[]>([]);

    useEffect(() => {
        (async () => {
            const res = await API_StoryList();
            console.log(res);
            setListData(res as I_Story[]);
            setIsLoading(false);
        })();
    }, []);

    return (
        <div className={`wrapper ${isLoading ? 'is-loading' : ''}`}>
            <div className="brdList">
                {listData.map((item, index) => (
                    <div className="card" key={index}>
                        {item.imgPath ? (
                            <div className="imgWrap">
                                <img src={item.imgPath} />
                            </div>
                        ) : (
                            ''
                        )}
                        <div className="date">{dateTsToDateStr(item.date)}</div>
                        <div className="title">{item.title}</div>
                        <div
                            className="content"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item?.textContent?.slice(0, 400) || item.content),
                            }}></div>
                        <Link to={{ pathname: '../View', search: `?seq=${item.seq}` }} className="link"></Link>
                        <Link to={{ pathname: '../Regist', search: `?seq=${item.seq}` }} className="btnEdit" title="수정">
                            <span className="material-icons">edit_note</span>
                        </Link>
                    </div>
                ))}
            </div>
            <Link className="btnAdd" to="/story/regist">
                글쓰기
            </Link>
        </div>
    );
};

export { List };
