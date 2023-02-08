const lpLoading = '#lp-loading';

const showLoading = () => {
    // 'use strict';

    $(lpLoading)
        .fadeIn(1500, 'swing', () => {});
};

const hideLoading = () => {
    // 'use strict';

    $(lpLoading)
        .fadeOut(1500, 'swing', () => {});
};


$(window).on('load', () => {
    // 'use strict';

    hideLoading();
});