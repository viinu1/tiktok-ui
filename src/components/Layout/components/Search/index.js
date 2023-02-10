import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark, faSpinner} from '@fortawesome/free-solid-svg-icons'
import HeadlessTippy from '@tippyjs/react/headless';

import  * as searchServices from '~/apiSercices/searchServices'
import { Wrapper as PopperWrapper} from '~/components/Popper'
import AccountItem from '~/components/AccountItem';
import { useDebounce } from '~/hooks';

import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles)

function Search() {

    const [searchValue,setSearchValue] = useState('')
    const [searchResult,setSearchResult] = useState([])
    const [showResult,setShowResult] = useState(true)
    const [loading,setLoading] = useState(false)

    const debounce = useDebounce(searchValue,600)

    const inputRef = useRef();

    useEffect(()=>{
        if (!searchValue.trim()) {
            setSearchResult([])
            return;
        }
        setLoading(true)

        const fetchApi = async () => {
            setLoading(true)

            const result = await searchServices.search(debounce)
            setSearchResult(result)

            setLoading(false)
        }
        fetchApi()
        
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[debounce])

    const handleClick =() =>{
        setSearchValue('')
        inputRef.current.focus();
        setShowResult(false)
        
    }

    const handleHideResult =()=>{
        setShowResult(false)
    }
    
    const handleChange =(e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue)
        }
    }

    
    return (
        //Using a wrapper <div> or <span> tag around the reference element solves
        //this by creating a new parentNode context
        <div>
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
                        onChange={handleChange}
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
                    
                    
                    <button className={cx('search-btn')} onMouseDown={e => e.preventDefault()}>
                        <SearchIcon/>
                    </button>
                </div>
            </HeadlessTippy>
        </div>
        
    );
}

export default Search;