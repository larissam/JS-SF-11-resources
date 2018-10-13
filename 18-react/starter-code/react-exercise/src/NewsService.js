import { NEWSAPI_KEY, GUARDIAN_KEY } from "./keys";

const endpoints = {
  NEWSAPI: {
    url: 'https://newsapi.org/v2/top-headlines',
    defaultParams: {
      apiKey: NEWSAPI_KEY,
      country: 'us',
    },
    label: 'News API',
    transformer: (data) => {
      const articles = data.articles;
      return articles.map((article) => ({
        title: article.title,
        source: article.source.name,
        thumbnail: article.urlToImage,
        description: article.description,
        url: article.url,
      }));
    }
  },
  GUARDIAN: {
    url: 'https://content.guardianapis.com/search',
    defaultParams: {
      'api-key': GUARDIAN_KEY,
      'show-fields': 'thumbnail,trailText'
    },
    label: 'Guardian API',
    transformer: (data) => {
      const articles = data.response.results;
      return articles.map((article) => ({
        title: article.webTitle,
        source: 'The Guardian',
        thumbnail: article.fields ? article.fields.thumbnail : '',
        description: article.fields ? article.fields.trailText : '',
        url: article.webUrl
      }));
    }
  }
};

const newsSources = Object.keys(endpoints).map((endpoint) => ({ id: endpoint, label: endpoints[endpoint].label }));
const queryString = (params) => Object.keys(params).map((paramName) => `${encodeURIComponent(paramName)}=${encodeURIComponent(params[paramName])}`).join("&");

class NewsService {
  static get(endpointId, queryParams = {}, callback) {
    const endpoint = endpoints[endpointId];
    const { defaultParams, url, transformer } = endpoint;

    const params = { ...defaultParams, ...queryParams };

    fetch(`${url}?${queryString(params)}`)
      .then((response) => response.json())
      .then((data) => {
        const transformedData = transformer(data);
        callback(transformedData);
      })
  }
}

export default NewsService;
export { newsSources };
