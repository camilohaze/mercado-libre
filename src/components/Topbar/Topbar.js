import './Topbar.css';

import { useHistory } from 'react-router-dom';

export default function Topbar () {
    const history = useHistory();

    const onSearch = () => {
        history.push('items?search=');
    };

    return(
        <div className="Topbar">
            <div className={'container'}>
                <header className="Topbar__header">
                    <div className={'Topbar__logo-container'}>
                        <img src={'/Assets/Logo_ML.png'} className="Topbar__logo" alt="logo" />
                    </div>
                    <div className={'Topbar__search-container'}>
                        <input type={'text'} id={'search'} name={'search'} className={'Topbar__search-input'} placeholder={'Nunca dejes de buscar'} alt={'Buscador'} />
                        <button className={'Topbar__search-icon'} onClick={(e) => { onSearch() }}>
                            <img src={'/Assets/ic_Search.png'} alt="ic_Search" />
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
};
