export type Action =
    | { type: 'SET_NOMBRE'; payload: string }
    | { type: 'SET_ASUNTO'; payload: string }
    | { type: 'SET_MENSAJE'; payload: string }
    | { type: 'SET_EMAIL'; payload: string };


export const initialState = {
    nombre: '',
    asunto: '',
    mensaje: '',
    email: '',
};
export const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case 'SET_NOMBRE':
            return { ...state, nombre: action.payload };
        case 'SET_ASUNTO':
            return { ...state, asunto: action.payload };
        case 'SET_MENSAJE':
            return { ...state, mensaje: action.payload };
        case 'SET_EMAIL':
            return { ...state, email: action.payload };
        default:
            return state;
    }
};