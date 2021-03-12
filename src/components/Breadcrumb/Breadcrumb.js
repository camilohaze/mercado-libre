import './Breadcrumb.css';

export default function Breadcrumb ({ categories }) {
    const lastIndex = (categories || []).length - 1;

    return(
        <div className={'Breadcrumb'}>
            {categories.map((category, index) => {
                if (index === lastIndex) {
                    return (
                        <div className={'Breadcrumb__item'} key={category}>
                            <span className={'Breadcrumb__item-label'}>{ category }</span>
                        </div>
                    );
                }
                return (
                    <div className={'Breadcrumb__item'} key={category}>
                        <span className={'Breadcrumb__item-label'}>{ category }</span>
                        <i className={'Breadcrumb__separator'}></i>
                    </div>
                );
            })}
        </div>
    );
};
