import { useState } from "react";
import { ExpDialog } from "./ExpDialog";
import { TimelineItemProps } from "./TimelineItemProps";
import { glassBgStyle } from "../../data/glassStyle";

export const TimelineItem = ({
    date,
    title,
    company,
    skill,
    description,
}: TimelineItemProps) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpen = () => {
        setOpenDialog(true);
    }

    return (
        <li className='overflow-hidden relative m-2 mb-2 md:m-0 w-full'>
            <p className='text-base lg:float-left font-semibold w-40 mt-4 mr-5 md:mr-8'>
                {date}
            </p>
            <div 
                className='w-full lg:w-2/3 float-left lg:border-l-4 border-solid md:pl-8 py-4 px-2
                            lg:before:w-3 lg:before:h-3 before:rounded-full before:bg-gray-400 
                            before:absolute lg:before:left-[188px] before:top-[24px]'
            >
                <div 
                    className={`cursor-pointer pl-4 pr-4 py-2 
                                hover:opacity-60 transition-opacity
                                ${glassBgStyle}`}
                    onClick={handleOpen}
                >
                    <h3 className='font-serif text-lg lg:text-xl font-semibold my-4'>
                        {title}
                    </h3>
                    <p className='my-2'>
                        {company}{skill ? ' | ' + skill : ''}
                    </p>
                </div>
            </div>
            <ExpDialog  
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
                data={{date, title, company, skill, description}}
            />
        </li>
    );
}