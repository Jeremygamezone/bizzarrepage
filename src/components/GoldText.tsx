interface Props {
    text: string;
}

const baseStyle =
    'text-9xl font-agave uppercase font-extrabold bg-gradient-to-br from-[#FFE49B] via-[#9A7448] to-[#FFE49B] inline-block text-transparent bg-clip-text';
export default function GoldText({ text }: Props) {
    return (
        <h2 className={baseStyle + ' relative'}>
            {text}
            <span
                className={
                    baseStyle +
                    ' absolute rotate-180 -scale-x-100 translate-y-full left-0 bottom-6 opacity-20 select-none pointer-events-none'
                }
            >
                {text}
            </span>
        </h2>
    );
}
