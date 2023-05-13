import { useEffect, useState } from "react";


const Content = () => {

    
    const [avatar, setAvatar] = useState('');
    
    useEffect(() => {

        // Cleanup function
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview);
        }
    }, [avatar]);

    const handlePreview = (e) => {
        const file = e.target.files[0];
        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    }

    return (
        <>
            <input type="file" onChange={handlePreview}/>
            {avatar && <img src={avatar.preview} />}
        </>
    )
}

export default Content;