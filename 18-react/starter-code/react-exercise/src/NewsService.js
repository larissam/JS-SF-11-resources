const endpoints = {
  NEWSAPI: {
    url: 'https://newsapi.org/v2/top-headlines',
    defaultParams: {
      apiKey: 'dd591ea74bd0486ea58d22ea637a0b4e',
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
      'api-key': 'f84b612e-9d72-4f3a-9d45-0a16b96c3cc3',
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

    fetch(`${url}?${queryString(params)}`).then(function(response){
      return response.json();
    }).then(function(data){
      const transformedData = transformer(data);
      callback(transformedData);
    })
  }
}

export default NewsService;
export { newsSources };
