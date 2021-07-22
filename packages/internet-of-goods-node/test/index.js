const {
    Simulator,
} = require('../distribution');



const main = () => {
    const simulator = new Simulator([]);
    simulator.run();

    simulator.send('A', 'B');
}

main();
