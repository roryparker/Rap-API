'use strict';

function LikeButton() {
    const [liked, setLiked] = React.useState(false);

    if (liked) {
        return 'You loved this!';
    }

    return React.createElement(
        'button', {
            onClick: () => setLiked(true),
        },
        'Like'
    );
}

const domContainer = document.getElementById('like_button');
ReactDOM.render(React.createElement(LikeButton), domContainer);