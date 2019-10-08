import React from 'react';

import './NoResults.scss';

export const NoResults = () => {
	return (
		<thead className="noResults">
			<tr>
				<td colSpan="100">
					<h3 className="noResults__title">No results found</h3>
				</td>
			</tr>
		</thead>
	)
}