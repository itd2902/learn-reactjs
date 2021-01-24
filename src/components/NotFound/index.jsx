import React from 'react';
import PropTypes from 'prop-types';

NotFound.propTypes = {

};

function NotFound(props) {
    return (
        <div>
            {/* không redirect đến trang khác vì người dùng sẽ k biết notfound ở trang nào */}
            NotFound
        </div>
    );
}

export default NotFound;