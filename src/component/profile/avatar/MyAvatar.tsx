import { avatarURL, name } from "../../../data/profile/profileData";

function MyAvatar() {
    return (
        <div className="card">
            <img
                src={avatarURL}
                alt={name}
                className="h-40 w-32 object-cover shadow-none rounded-lg
                            md:h-52 md:w-64 lg:h-72 2xl:h-80 
                            hover:shadow-2xl transition-shadow bg-white"
            />
        </div>
    );
}

export default MyAvatar;
