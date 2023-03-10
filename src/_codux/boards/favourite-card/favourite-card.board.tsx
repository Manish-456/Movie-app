import { createBoard } from '@wixc3/react-board';
import { FavouriteCard } from '../../../components/favourite-card/Favouritecard';

export default createBoard({
    name: 'FavouriteCard',
    Board: () => (
        <FavouriteCard
            movie={{
                id: 123,
                overview: 'Life fucked me ',
                release_date: '2022-04-08',
                title: 'Avatar',
                vote_average: 3,
                poster_path:
                    'https://fastly.picsum.photos/id/238/500/500.jpg?hmac=RTqzA8baxtxXgGxGmalGmNvKeLv_ZYq2GA4PKnmJa_Y',
            }}
        />
    ),
    environmentProps: {
        canvasHeight: 100,
    },
});
