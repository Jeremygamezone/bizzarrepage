import type { ChangeEvent } from 'react';
import { useReducer } from 'react';

import type { Action } from './reducers/formReducer';
import { reducer, initialState } from './reducers/formReducer';

import Input from './Input';
import TextArea from './TextArea';
import SendButton from './SendButton';

export default function ContactForm({ className = '' }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange =
        (type: Action['type']) =>
        ({ target }: ChangeEvent) => {
            dispatch({ type, payload: (target as HTMLInputElement).value });
        };

    return (
        <form className={`p-4 md:p-8 rounded bg-white h-fit ${className}`}>
            <Input
                label="Nombre"
                placeholder="María Hernández"
                value={state.nombre}
                onChange={handleInputChange('SET_NOMBRE')}
            />
            <Input
                label="Email"
                placeholder="maria.hernandez@email.com"
                type="email"
                value={state.email}
                icon="email"
                onChange={handleInputChange('SET_EMAIL')}
            />
            <Input
                label="Asunto"
                placeholder="Me interesa saber más sobre..."
                value={state.asunto}
                icon="subject"
                onChange={handleInputChange('SET_ASUNTO')}
            />
            <TextArea
                label="Mensaje"
                placeholder="Hola, me gustaría comprar una botella..."
                value={state.mensaje}
                onChange={handleInputChange('SET_MENSAJE')}
            />
            <SendButton state={state} />
        </form>
    );
}
