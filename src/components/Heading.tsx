interface HeadingProps {
    text: string
}

export default function Heading({ text }: HeadingProps) {
    return (
        <div className="mb-8 border-b border-stone-200 dark:border-stone-800 pb-2">
            <h1 className='font-bold text-2xl md:text-3xl text-stone-800 dark:text-stone-100'>{text}</h1>
        </div>
    );
}