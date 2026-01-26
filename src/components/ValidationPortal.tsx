import { useState, useEffect } from 'react';

export default function ValidationPortal() {
    const [isVerified, setIsVerified] = useState(false);

    useEffect(() => {
        const isAdult = localStorage.getItem('isAdult') === 'true';
        setIsVerified(isAdult);
    }, []);

    const handleConfirm = () => {
        localStorage.setItem('isAdult', 'true');
        setIsVerified(true);
    };

    const handleReject = () => {
        window?.history.back();
    };

    if (isVerified) return null;

    return (
        <>
            <div className="bg-black fixed w-full h-full z-[100] bg-[url(/campo.jpg)] top-0 bg-cover bg-center">
                <div className="absolute top-[50%] md:w-3/6 w-full left-[50%] p-14 bg-black text-white -translate-x-1/2 -translate-y-1/2">
                    <img src="/autentica-de-mi-pueblo.png" className="mx-auto" />
                    <p className="text-xl text-center p-3 m-3 rounded-lg font-medium">
                        Debes tener mayoría de edad para ingresar.
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <button
                            className="text-center w-full bg-blue-500 p-2 font-medium cursor-pointer hover:bg-blue-700"
                            onClick={handleConfirm}
                        >
                            SI SOY MAYOR DE EDAD
                        </button>
                        <button
                            className="text-center w-full p-2 font-medium cursor-pointer hover:bg-blue-800"
                            onClick={handleReject}
                        >
                            NO SOY MAYOR DE EDAD
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
