import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faSpinner} from '@fortawesome/free-solid-svg-icons'

import { Wrapper as PopperWrapper} from '~/components/Popper'
import AccountItem from '~/components/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function Search() {

    const [searchValue,setSearchValue] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)

    const inputRef = useRef();

    useEffect(()=>{
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true)
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data)
                setLoading(false)
            })
    },[searchValue])

    const handleClick =() =>{
        setSearchValue('')
        inputRef.current.focus();
        setShowResult(false)
        
    }

    const handleHideResult =()=>{
        setShowResult(false)
    }
    
    return (
        <HeadlessTippy
                    interactive
                    placement='bottom'
                    visible={showResult && searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h3 className={cx('search-title')}>
                                        Account
                                    </h3>
                                    {searchResult.map((result)=>(
                                        <AccountItem key={result.id} data={result}/>                              
                                    ))}
                                </PopperWrapper>
                            </div>
                      )}
                      onClickOutside={handleHideResult}
                >
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            placeholder='Searh Account and Video'
                            spellCheck={false}
                            onChange={(e) => setSearchValue(e.target.value)}
                            onFocus={()=>setShowResult(true)}
                        />

                        {!!searchValue && !loading && (
                            <button className={cx('clear')} onClick={handleClick}>
                                <FontAwesomeIcon icon={faCircleXmark}/>
                            </button>
                        )}
                        {
                            loading && <FontAwesomeIcon  className={cx('spinner')} icon={faSpinner}/>
                        }
                        
                        
                        <button className={cx('search-btn')}>
                            <SearchIcon/>
                        </button>
                    </div>
        </HeadlessTippy>
    );
}

export default Search;