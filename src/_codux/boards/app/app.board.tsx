import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1024,
        canvasWidth: 1078,
        windowHeight: 768,
        canvasHeight: 3901,
    },
});
