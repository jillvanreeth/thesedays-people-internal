import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import './Sort.scss';

import { Icon } from './../../components/icon/Icon';

export const Sort = () => {

	const {handleSortClick,dir,activeSort} = useContext(AppContext);

	return (	
		<table className="sort">
			<thead>
				<tr>	
					<th className={`sort__item${activeSort !== 'firstname' ? ' sort__item--inactive' : ''}`} onClick={(e) => handleSortClick(e.currentTarget.id)} id="firstname">
						<span className="sort__label">
							First name
							<span className="sort__icon">
								<Icon icon={`${activeSort === 'firstname' ? dir : 'asc'}`} width="26" height="28" />
							</span>
						</span>
					</th>

					<th className={`sort__item${activeSort !== 'lastname' ? ' sort__item--inactive' : ''}`} onClick={(e) => handleSortClick(e.currentTarget.id)} id="lastname">
						<span className="sort__label">
							Last name
							<span className="sort__icon">
								<Icon icon={`${activeSort === 'lastname' ? dir : 'asc'}`} width="26" height="28" />
							</span>
						</span>
					</th>

				</tr>
			</thead>
		</table>
	)
}