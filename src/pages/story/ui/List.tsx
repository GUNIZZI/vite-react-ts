import { useEffect, useState } from 'react';
import { I_Story } from '../model/story';
import { Link } from 'react-router-dom';
import DOMPurify from 'isomorphic-dompurify';

// import Styles from './List.module.scss';
import Styles from './List.module.scss';
import { dateTsToDateStr } from '@/shared/util';
import { API_StoryList } from '@/shared/api/story';
import { userStore } from '@/app/store/user';
import { Flex } from 'antd';

const List = () => {
    const { getUser } = userStore();
    const [isLoading, setIsLoading] = useState(true);
    const [listData, setListData] = useState<I_Story[]>([]);

    useEffect(() => {
        (async () => {
            const res = await API_StoryList();
            setListData(res as I_Story[]);
            setIsLoading(false);
        })();
    }, []);

    return (
        <>
            <div className={Styles.list}>
                {listData.map((item, index) => (
                    <div className={Styles.card} key={index}>
                        {item.imgPath ? (
                            <div className={Styles.imgWrap}>
                                <img src={item.imgPath} />
                            </div>
                        ) : (
                            ''
                        )}
                        <div className={Styles.date}>{dateTsToDateStr(item.date)}</div>
                        <div className={Styles.title}>{item.title}</div>
                        <div
                            className={Styles.content}
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(item?.textContent?.slice(0, 400) || item.content),
                            }}></div>
                        <Link to={{ pathname: '../View', search: `?seq=${item.seq}` }} className={Styles.link}></Link>
                        {getUser() && (
                            <Link to={{ pathname: '../Regist', search: `?seq=${item.seq}` }} className={Styles.btnEdit} title="수정">
                                <span className="material-icons">edit_note</span>
                            </Link>
                        )}
                    </div>
                ))}
            </div>
            {/* {getUser() && (
                <Link className="btnAdd" to="/story/regist">
                    글쓰기
                </Link>
            )} */}
        </>
    );
};

export { List };
