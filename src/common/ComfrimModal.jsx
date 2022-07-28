function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

export default function ComfrimModal({ config, type }){
    const colors = {
        warning: 'text-yellow-500',
        confirm: 'text-teal-500',
        delete: 'text-red-500',
      };
      const bg = {
        warning: 'bg-yellow-100',
        confirm: 'bg-teal-100',
        delete: 'bg-red-100',
      };
    
    return (  
        <>
            {config?.open && (
                <div id="respa" className="alert" role="alert">
                    <div className={classNames(config?.type === 'success' ? 'alertSuccess' : config?.type === 'error' ? 'alertError' : config?.type === 'warning' ? 'alertWarnig' : 'alertInfo' ,'alertText')} >
                        <p>{config?.message}</p>
                    </div>
                </div>
            )}
        </>
    );
};