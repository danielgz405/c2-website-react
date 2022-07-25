function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  
export default function SubNavigation({ subNavigation, setCurrent }) {
    const handleClick = (event, item) => {
        event.preventDefault();
        setCurrent(item.name || item);
    };
    return (
        <aside className="col-span-3 sub-navigation">
            <nav className="space-y-1">
                {subNavigation.map((item) => (
                <button
                    key={item.name}
                    onClick={(event) => handleClick(event, item)}
                    className={classNames(
                    item.current
                        ? 'text-color-pri bg-pri-hover border-subnavigation-pri'
                        : 'text-color-seco bg-pri-hover',
                    'subnavigationButtom'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                >
                    <item.icon className={classNames(item.current ? 'text-color-pri' : 'text-color-seco', 'mr-4 subnavigationIcon')} aria-hidden="true" />
                    <span className="truncate">{item.name}</span>
                </button>
                ))}
            </nav>
        </aside>
    );
}