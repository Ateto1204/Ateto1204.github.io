import MbtiAvatar from "./MbtiAvatar";
import MyAvatar from "./MyAvatar";

interface ProfileAvatarProps {
    cardRef: React.RefObject<HTMLDivElement>
    handleClick: () => void
    imgUrl: string
}

function ProfileAvatar({ cardRef, handleClick, imgUrl}: ProfileAvatarProps) {
    return (
        <div 
            ref={cardRef}
            onClick={handleClick}
            className={`relative transform-style-3d transition duration-300
                        h-36 w-36 mb-3 mt-12 mr-6 
                        md:h-52 md:w-44 lg:h-80 lg:w-56 lg:float-left
                        xl:h-96 xl:w-80 xl:mr-16 cursor-pointer`}
        >
            <MyAvatar />
            <MbtiAvatar imgUrl={imgUrl} />
        </div>
    )
}

export default ProfileAvatar;