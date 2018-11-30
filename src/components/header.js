import React from 'react';
import { Link } from 'gatsby';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Stats,
  Pagination
} from 'react-instantsearch/dom';
import Hit from './hit';

const Header = ({ siteTitle, algolia }) => {
  return (
    <div
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem'
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem'
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none'
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div className="search">
          {algolia &&
          algolia.appId && (
            <InstantSearch
              appId={algolia.appId}
              apiKey={algolia.searchOnlyApiKey}
              indexName={algolia.indexName}
            >
              <SearchBox translations={{ placeholder: 'Search' }} />
              <Stats />
              <Hits hitComponent={Hit} />
              <Pagination />
            </InstantSearch>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
