const VITE_GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
export const DEFAULT_PROFILE_CDN =
    "https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=";

export const YOUTUBE_VIDEO_API =
    "https://youtube.googleapis.com/youtube/v3/videos?maxResults=50&part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=" +
    VITE_GOOGLE_API_KEY;

export const DEFAULT_PROFILE_URL =
    "https://static.vecteezy.com/system/resources/thumbnails/010/260/479/small/default-avatar-profile-icon-of-social-media-user-in-clipart-style-vector.jpg";

export const VIDEO_DETAILS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${VITE_GOOGLE_API_KEY}&id=`;

export const YOUTUBE_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=${VITE_GOOGLE_API_KEY}&q=`;
export const COMMENT_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&key=${VITE_GOOGLE_API_KEY}&videoId=`;
