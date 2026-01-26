import type { IconKeys } from './types/InputProps';
import type InputProps from './types/InputProps';
import UserIcon from '../../icons/UserIcon';
import EmailIcon from '../../icons/EmailIcon';
import SubjectIcon from '../../icons/SubjectIcon';

const icons: Record<IconKeys, () => JSX.Element> = {
    nombre: () => <UserIcon className="w-4 h-4 text-yellow-800" />,
    email: () => <EmailIcon className="w-4 h-4 text-yellow-800" />,
    subject: () => <SubjectIcon className="w-4 h-4 text-yellow-800" />,
};

export default function Input({ label, placeholder, value, onChange, type = 'text', icon = 'nombre' }: InputProps) {
    const Icon = icons[icon];
    return (
        <label className="mb-2 text-sm font-medium text-gray-900 flex flex-col gap-2">
            <span>{label}</span>
            <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-orange-100 border border-e-0 border-gray-300 rounded-s-md ">
                    <Icon />
                </span>
                <input
                    type={type}
                    className="outline-yellow-800 rounded-none rounded-e-lg bg-orange-50 border border-gray-300 text-gray-900 focus:ring-yellow-800 focus:border-yellow-800 block flex-1 min-w-0 w-full text-sm p-2.5  g-gray-700 r"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </div>
        </label>
    );
}
