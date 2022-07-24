function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

export default function Alert({alert, handleClose}){
    if (alert && alert?.autoClose) {
        setTimeout(() => {
          handleClose();
        }, 5000);
    }
    
    return (  
        <>
            {alert?.active && (
                <div id="respa" className="alert" role="alert">
                    <div className={classNames(alert?.type === 'success' ? 'alertSuccess' : alert?.type === 'error' ? 'alertError' : alert?.type === 'warning' ? 'alertWarnig' : 'alertInfo' ,'alertText')} >
                        <p>{alert?.message}</p>
                    </div>
                </div>
            )}
        </>
    );
};