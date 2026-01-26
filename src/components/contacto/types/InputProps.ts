import type { ChangeEventHandler } from 'react';

export type IconKeys = 'nombre' | 'email' | 'subject';

export default interface InputProps {
    label: string;
    placeholder: string;
    value: string;
    onChange?: ChangeEventHandler;
    type?: string;
    icon?: IconKeys;
}
