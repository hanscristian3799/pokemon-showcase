import Image from "next/image";
import React from "react";

const Loading = () => {
    return (
        <div className="h-screen flex flex-col items-center justify-center">
            <Image
                src="/pokeball.png"
                alt="loading-image"
                width={75}
                height={75}
                className="animate-spin"
            />
            <p className="mt-4 text-lg">Calling the pokemon...</p>
        </div>
    );
};

export default Loading;
