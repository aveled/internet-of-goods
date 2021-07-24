const {
    Simulator,
} = require('../distribution');



const main = () => {
    const nodeALocations = [
        'A-1-1',
        'A-1-2',
        'A-1-3',

        'A-2-1',
        'A-2-2',
        'A-2-3',
    ];
    const nodeAInput = [];

    const nodeBLocations = [
        'B-1-1',
        'B-1-2',
        'B-1-3',
        'B-1-4',
        'B-1-5',

        'B-1-1',
        'B-1-2',
    ];
    const nodeBInput = [
        'A-1-3',

        'A-2-3',
    ];

    const nodeCLocations = [
    ];
    const nodeCInput = [
        'B-1-5',

        'B-1-2',
    ];

    const nodes = {
        A: {
            locations: nodeALocations,
            input: nodeAInput,
        },
        B: {
            locations: nodeBLocations,
            input: nodeBInput,
        },
        C: {
            locations: nodeCLocations,
            input: nodeCInput,
        },
    };

    const simulator = new Simulator(nodes);
    simulator.run();

    simulator.send('A', 'C');
}

main();
