import { createBoard } from '@wixc3/react-board';
import { Context } from '../../../components/context/context';

export default createBoard({
    name: 'Context',
    Board: () => <Context />
});
