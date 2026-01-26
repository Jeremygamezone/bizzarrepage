import type InputProps from './types/InputProps';

export default function TextArea({ label, placeholder, onChange, value }: InputProps) {
    return (
        <>
            <label className="mb-2 text-sm font-medium text-gray-900 dark:text-white flex flex-col gap-2">
                <span>{label}</span>
                <textarea
                    rows={4}
                    className="block p-2.5 w-full min-h-12 max-h-96 text-sm text-gray-900 bg-orange-50 rounded-lg border border-gray-300 outline-yellow-800 focus:ring-yellow-800 focus:border-yellow-800 "
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                ></textarea>
            </label>
        </>
    );
}
