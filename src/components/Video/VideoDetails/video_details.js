import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) return <div>Loading...</div>

    const videoId = video.id.videoId;
    const url = `http://www.youtube.com/embed/${videoId}`;
    const title = video.snippet.title;
    const description = video.snippet.description;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" title="youtube_video" src={url}></iframe>
            </div>
            <div className="details">
                <div>{title}</div>
                <div>{description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;