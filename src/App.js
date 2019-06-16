import React from 'react';
import _ from 'lodash';
import YTsearch from 'youtube-api-search';

import SearchBar from './components/SearchBar/search_bar';
import VideoDetail from './components/Video/VideoDetails/video_details';
import VideoList from './components/Video/VideoList/video_list';

const YT_API_KEY = ''; // insert your own YOUTUBE API KEY here

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentWillMount() {
        this.videoSearch('Reactjs');
    }

    videoSearch = term => {
        YTsearch({ key: YT_API_KEY, term }, videos => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            });
        });
    }

    onSelectedVideo = selectedVideo => {
        this.setState({ selectedVideo });
    }

    render() {
        const { videos, selectedVideo } = this.state;
        const videoSearch = _.debounce(term => this.videoSearch(term), 1000);

        return (
            <div className="App">
                <SearchBar
                    videoSearch={videoSearch}
                />
                <div className="row">
                    <VideoDetail
                        video={selectedVideo}
                    />
                    <VideoList
                        videos={videos}
                        onSelectedVideo={selectedVideo => this.onSelectedVideo(selectedVideo)}
                    />
                </div>
            </div>
        );
    }
}

export default App;