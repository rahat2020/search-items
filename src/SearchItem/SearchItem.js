import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
export default function SearchItem(props) {

    return (
        <section className="col-3">
            <div className="d-flex search-item">
                <span className="box-input shadow mb-2">
                    {props.items}
                    <FontAwesomeIcon icon={faTimes} className="ms-2" />
                </span>
            </div>
        </section>

    )
}
