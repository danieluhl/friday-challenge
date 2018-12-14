import React from 'react';
import {
  Highlight,
  Hits,
  InstantSearch,
  SearchBox,
  Stats
} from 'react-instantsearch-dom';

// @TODO remove this - it's canned styling
import './algolia.css';

// Min number of characters needed to trigger search results
const MIN_CHAR_COUNT = 4;

const Result = ({ hit }) => (
  <a style={{ marginTop: '10px' }} href={hit.slug}>
    <div>
      <Highlight attribute="title" hit={hit} />
    </div>
    <Highlight attribute="date" hit={hit} />
    <Highlight attribute="tags" hit={hit} />
  </a>
);

const Search = ({ appId, apiKey, indexName }) => (
  <InstantSearch appId={appId} apiKey={apiKey} indexName={indexName}>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <SearchBox />
      <Hits hitComponent={Result} />
      <Stats />
    </div>
  </InstantSearch>
);

export default Search;
