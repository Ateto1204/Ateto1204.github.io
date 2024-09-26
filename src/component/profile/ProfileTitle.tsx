import { myEngName } from "../../data/profileData";

export const ProfileTitle = () => (
    <h1 className='font-serif font-semibold leading lg:mb-8
                    text-3xl md:text-4xl lg:text-5xl'>
        {myEngName}
    </h1>
);