import React from 'react';

const Spinner = () => {
    return (
        <div className='load'>
            <div class="ui segment">
                <div class="ui active inverted dimmer">
                    <div class="ui large text loader">Loading</div>
                </div>
            </div>
        </div>
    )
}

export default Spinner;