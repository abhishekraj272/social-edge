import React from "react";

export default function Attachment({ type, url }) {
    if (type === "ytUrl") {
        return (
            <iframe
                loading="lazy"
                width="300"
                height="300"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media;"
                allowFullScreen
            ></iframe>
        );
    }
    return (
        <>
            <img loading="lazy" src={url} alt="placeholder" width="300" height="300" />
        </>
    );
}
