//This function mocks the get request. That way, the interface can be tested without actual API calls. Just responds with pre-defined JSON outputs based on URL.

const request = (URL) => {
  const latest_news_p_1 = {
    response: {
      currentPage: 1,
      orderBy: "relevance",
      pageSize: 10,
      pages: 3,
      results: [
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 1",
          webUrl: "https://www.google1.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 2",
          webUrl: "https://www.google2.com",
        },
        {
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 3",
          webUrl: "https://www.google3.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 4",
          webUrl: "https://www.google4.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 5",
          webUrl: "https://www.google5.com",
        },
        {
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 6",
          webUrl: "https://www.google6.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 7",
          webUrl: "https://www.google7.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 8",
          webUrl: "https://www.google8.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 9",
          webUrl: "https://www.google9.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 10",
          webUrl: "https://www.google10.com",
        },
      ],
      status: "ok",
      total: "22",
      userTier: "developer",
    },
  };

  const latest_news_p_2 = {
    response: {
      currentPage: 2,
      orderBy: "relevance",
      pageSize: 10,
      pages: 3,
      results: [
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 11",
          webUrl: "https://www.google11.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 12",
          webUrl: "https://www.google12.com",
        },
        {
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 13",
          webUrl: "https://www.google13.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 14",
          webUrl: "https://www.google14.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 15",
          webUrl: "https://www.google15.com",
        },
        {
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 16",
          webUrl: "https://www.google16.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 17",
          webUrl: "https://www.google17.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 18",
          webUrl: "https://www.google18.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 19",
          webUrl: "https://www.google19.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 20",
          webUrl: "https://www.google20.com",
        },
      ],
      status: "ok",
      total: "22",
      userTier: "developer",
    },
  };

  const latest_news_p_3 = {
    response: {
      currentPage: 3,
      orderBy: "relevance",
      pageSize: 10,
      pages: 3,
      results: [
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 21",
          webUrl: "https://www.google21.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Recent Article 22",
          webUrl: "https://www.google22.com",
        },
      ],
      status: "ok",
      total: "22",
      userTier: "developer",
    },
  };

  const cat_news_relevance_p_1 = {
    response: {
      currentPage: 1,
      orderBy: "relevance",
      pageSize: 10,
      pages: 2,
      results: [
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 1",
          webUrl: "https://www.google1.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 2",
          webUrl: "https://www.google2.com",
        },
        {
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 3",
          webUrl: "https://www.google3.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 4",
          webUrl: "https://www.google4.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 5",
          webUrl: "https://www.google5.com",
        },
        {
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 6",
          webUrl: "https://www.google6.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 7",
          webUrl: "https://www.google7.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 8",
          webUrl: "https://www.google8.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 9",
          webUrl: "https://www.google9.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 10",
          webUrl: "https://www.google10.com",
        },
      ],
      status: "ok",
      total: "12",
      userTier: "developer",
    },
  };

  const cat_news_relevance_p_2 = {
    response: {
      currentPage: 2,
      orderBy: "relevance",
      pageSize: 10,
      pages: 2,
      results: [
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 11",
          webUrl: "https://www.google11.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Most Relevant Cat Article 12",
          webUrl: "https://www.google12.com",
        },
      ],
      status: "ok",
      total: "12",
      userTier: "developer",
    },
  };

  const cat_news_oldest_p_1 = {
    response: {
      currentPage: 1,
      orderBy: "relevance",
      pageSize: 10,
      pages: 2,
      results: [
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 1",
          webUrl: "https://www.google1.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 2",
          webUrl: "https://www.google2.com",
        },
        {
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 3",
          webUrl: "https://www.google3.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 4",
          webUrl: "https://www.google4.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 5",
          webUrl: "https://www.google5.com",
        },
        {
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 6",
          webUrl: "https://www.google6.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 7",
          webUrl: "https://www.google7.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 8",
          webUrl: "https://www.google8.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 9",
          webUrl: "https://www.google9.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 10",
          webUrl: "https://www.google10.com",
        },
      ],
      status: "ok",
      total: "12",
      userTier: "developer",
    },
  };

  const cat_news_oldest_p_2 = {
    response: {
      currentPage: 2,
      orderBy: "relevance",
      pageSize: 10,
      pages: 2,
      results: [
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 11",
          webUrl: "https://www.google11.com",
        },
        {
          fields: {
            thumbnail: "notARealPhoto.jpg",
          },
          sectionName: "UK news",
          webPublicationDate: "2020-10-28T16:58:02Z",
          webTitle: "Oldest Cat Article 12",
          webUrl: "https://www.google12.com",
        },
      ],
      status: "ok",
      total: "12",
      userTier: "developer",
    },
  };

  const empty_response = {
    response: {
      currentPage: 0,
      orderBy: "relevance",
      pageSize: 10,
      pages: 0,
      results: [],
      status: "ok",
      total: 0,
      userTier: "developer",
    },
  };

  return new Promise((resolve, reject) => {
    if (
      URL ===
      `https://content.guardianapis.com/search?page=1&q=&order-by=newest&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      resolve(latest_news_p_1);
    } else if (
      URL ===
      `https://content.guardianapis.com/search?page=2&q=&order-by=newest&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      resolve(latest_news_p_2);
    } else if (
      URL ===
      `https://content.guardianapis.com/search?page=3&q=&order-by=newest&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      resolve(latest_news_p_3);
    } else if (
      URL ===
      `https://content.guardianapis.com/search?page=1&q=cats&order-by=relevance&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      resolve(cat_news_relevance_p_1);
    } else if (
      URL ===
      `https://content.guardianapis.com/search?page=2&q=cats&order-by=relevance&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      resolve(cat_news_relevance_p_2);
    } else if (
      URL ===
      `https://content.guardianapis.com/search?page=1&q=cats&order-by=oldest&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      resolve(cat_news_oldest_p_1);
    } else if (
      URL ===
      `https://content.guardianapis.com/search?page=2&q=cats&order-by=oldest&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      resolve(cat_news_oldest_p_2);
    } else if (
      URL ===
      `https://content.guardianapis.com/search?page=1&q=noresults&order-by=relevance&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      resolve(empty_response);
    } else if (
      URL ===
      `https://content.guardianapis.com/search?page=1&q=error&order-by=relevance&page-size=10&api-key=${process.env.REACT_APP_API_KEY}&show-fields=thumbnail`
    ) {
      reject();
    }
  });
};

export const getRequest = request;
