interface HeadingProps {
    text: string
}

export default function Heading({ text }: HeadingProps) {
    return (
        <div className="mb-4">
            <h1 className='font-bold text-xl md:text-2xl mb-4'>{text}</h1>
            <hr className="border-t-1 border-sky-500 mx-auto mt-2" />
        </div>
    );
}