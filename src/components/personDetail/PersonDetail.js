import React, {useContext} from 'react';

import {AppContext} from '../../contexts/App.context';

import { Icon } from './../../components/icon/Icon';

import './PersonDetail.scss';

export const PersonDetail = () => {
	
	const {handleBackClick, activePerson:person} = useContext(AppContext);
		
		return (
			<section className="personDetail">
				
			<span className="personDetail__link__icon" onClick={handleBackClick}><Icon icon="arrow-left" width="25" height="28"/></span>
				
				<div className="personDetail__content">
					<figure className="personDetail__mugshot">
						<img src={person.mugshot} alt={`${person.searchParams.firstName} ${person.searchParams.lastName}`}/>
					</figure>
					
					<h3 className="personDetail__title">{person.searchParams.firstName} {person.searchParams.lastName}</h3>
					
					<div className="personDetail__subtitle">
							{person.searchParams.department}
						</div>

						<div className="personDetail__subtitle">
							{person.searchParams.job}
						</div>

						<div className="personDetail__info">
							{person.location} <br/>
							Manager: {person.manager}
						</div>

						<div className="personDetail__info">
							
						</div>

					<div className="personDetail__content__inner">
						<div className="personDetail__content__item">
							{person.mobile && 
								<span className="personDetail__itemWrap">
									<span className="personDetail__icon"><Icon icon="mobile" width="32" height="32"/></span> 
									<a className="personDetail__link" href={`tel:${person.mobile}`}>{person.mobile}</a>
								</span>
							}
							{person.phone && 
								<span className="personDetail__itemWrap">
									<span className="personDetail__icon"><Icon icon="phone" width="32" height="32"/></span> 
									<a className="personDetail__link" href={`tel:${person.phone}`}>{person.phone}</a>
								</span>
							}
						</div>

						{person.mail && 
							<div className="personDetail__content__item">
								<span className="personDetail__itemWrap">
									<span className="personDetail__icon"><Icon icon="mail" width="34" height="32"/></span> 
									{person.mail}
								</span>
							</div>
						}

					</div>
				</div>	

			</section>
		)

}