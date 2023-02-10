
import classNames from "classnames/bind";
import styles from './Menu.module.scss'
import Tippy from "@tippyjs/react/headless";

import {Wrapper as PopperWrapper} from '~/components/Popper'
// import Header from "./Header";
import MenuItem from "./MenuItem";
import { useState } from "react";
import Header from "./Header";

const cx =classNames.bind(styles)

const defaultFn = ()=>{}
function Menu({children,items=[],onChange = defaultFn, hideOnClick = false}) {

    const [history,setHistory] = useState([{data:items}])
    const current = history[history.length - 1]

    const renderItem = ()=>{
        return current.data.map((item,index)=>{
            const isParent = !!item.children;
            
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={()=>{
                        if(isParent){
                            setHistory(prev => [...prev,item.children]);
                        } else{
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }
    return (
        <Tippy
            interactive
            placement='bottom-end'
            delay={[0,500]}
            offset={[12,8]}
            onHidden={()=> setHistory(prev => prev.slice(0,1))}
            hideOnClick={hideOnClick}
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                        <PopperWrapper className={cx('menu-popper')}>
                            {history.length > 1 && <Header title="Language" onBack={()=>{
                                setHistory((prev) => prev.slice(0,prev.length - 1))
                            }}/>}
                            {renderItem()}
                        </PopperWrapper>
                    </div>
                )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;