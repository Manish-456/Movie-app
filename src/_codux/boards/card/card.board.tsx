import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            movie={{
                id: '123',
                overview: 'Once upon a time there lived  a ghost haha just kidding Vikram ',
                release_date: '345',
                title: 'This is movie',
                vote_average: 3,
                poster_path:
                    'https://fastly.picsum.photos/id/238/500/500.jpg?hmac=RTqzA8baxtxXgGxGmalGmNvKeLv_ZYq2GA4PKnmJa_Y',
            }}
        />
    ),
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
    },
});
