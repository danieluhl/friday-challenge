import React from 'react';
import {
	Highlight,
	Hits,
	InstantSearch,
	SearchBox,
	Stats
} from 'react-instantsearch-dom';

// @TODO remove this - it's canned styling
import './algolia.css'

const Result = ({ hit }) => (
	<div style={{ marginTop: '10px' }}>
		<div>
			<Highlight attribute="title" hit={hit} />
		</div>
		<small>{hit.date}</small>
		<div>{hit.tags}</div>
	</div>
)

const Search = ({ appId, apiKey, indexName }) => (
	<InstantSearch
		appId={appId}
		apiKey={apiKey}
		indexName={indexName}
	>
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
)

export default Search;
