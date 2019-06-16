import React from 'react';
import VideoListItem from './VideoListItem/video_list_item';

const VideoList = ({ videos, onSelectedVideo }) => {
    const videoItems = videos.map(video => (
        <VideoListItem
            onSelectedVideo={onSelectedVideo}
            key={video.etag}
            video={video}
        />
    ));

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;