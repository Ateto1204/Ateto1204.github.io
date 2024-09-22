interface TimelineItemProps {
    date: string, 
    title: string,
    company: string,
    description: string,
    alertMessage: string,
}

export const TimelineItem = ({
    date,
    title,
    company,
    description,
    alertMessage,
}: TimelineItemProps) => {
    return (
        <li className='overflow-hidden relative m-2 mb-2 md:m-0'>
            <p className='text-base lg:float-left font-semibold w-48 mt-4 mr-5 md:mr-0'>
                {date}
            </p>
            <div 
                className='w-full lg:w-3/5 float-left lg:border-l-4 border-solid md:pl-8 py-4 px-2
                            lg:before:w-3 lg:before:h-3 before:rounded-full before:bg-gray-400 
                            before:absolute lg:before:left-[188px] before:top-[24px]'
            >
                <div 
                    className='cursor-pointer pl-4 pr-4 py-2 hover:opacity-60 transition-opacity
                                shadow-[1px_1px_10px] border rounded-2xl border-[rgb(184,190,197)]'
                    onClick={() => alert(alertMessage)}
                >
                    <h3 className='font-serif text-lg lg:text-xl font-semibold my-4'>
                        {title}
                    </h3>
                    <p className='my-2'>
                        {company}{description ? ' | ' + description : ''}
                    </p>
                </div>
            </div>
        </li>
    );
}