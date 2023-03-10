import { createBoard } from '@wixc3/react-board';
import { Favourite } from '../../../components/favourite/favourite';

export default createBoard({
    name: 'Favourite',
    Board: () => <Favourite />
});
