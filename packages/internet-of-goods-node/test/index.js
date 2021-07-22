const {
    Simulator,
} = require('../distribution');



const main = () => {
    const locations = [
        'A-1-1',
        'A-1-2',
        'A-1-3',

        'A-2-1',
        'A-2-2',
        'A-2-3',

        'B-1-1',
        'B-1-2',
        'B-1-3',
        'B-1-4',
        'B-1-5',
    ];

    const simulator = new Simulator(locations);
    simulator.run();

    simulator.send('A-1-1', 'B-1-5');
}

main();
