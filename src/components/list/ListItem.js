import React from "react";
import PropTypes from "prop-types";
import { dateFormatter } from "../../utils/dateFormatter";

//This component contains each image, headline, category, and date of an article.
const ListItem = ({ articleData }) => {
  return (
    <a href={articleData.webUrl} target='_blank' rel='noopener noreferrer'>
      <div className='article-thumbnail'>
        <div className='article-text'>
          <div className='article-title-text'>{articleData.webTitle}</div>
          <div className='article-date-text'>{articleData.sectionName}</div>
          <div className='article-date-text'>
            {dateFormatter(articleData.webPublicationDate)}
          </div>
        </div>
        {/*In the event that the article does not have a thumbnail image, it will not have articleData.fields. In this case, a filler image is used.*/}
        {articleData.fields ? (
          <div
            className='article-img my-2'
            style={{
              backgroundImage: `url(${articleData.fields.thumbnail})`,
            }}
          ></div>
        ) : (
          <div className='filler-article-img my-2'></div>
        )}
      </div>
    </a>
  );
};

//Typecheck the props.
ListItem.propTypes = {
  articleData: PropTypes.object,
};

export default ListItem;
