function executeCommands(commands) {
    const MAX_VALUE = 256;
    const MIN_VALUE = 0;
    const values = { V00: 0, V01: 0, V02: 0, V03: 0, V04: 0, V05: 0, V06: 0, V07: 0 };
    let mainThreadIndex = 0;

    const commandActions = {
        "MOV": ([param1, param2]) => mov(param1, param2),
        "ADD": ([param1, param2]) => add(param1, param2),
        "DEC": ([param]) => dec(param),
        "INC": ([param]) => inc(param),
        "JMP": ([param], currentIndex) => jmp(param, currentIndex)
    }
    const getNewValue = (value) => {
        if (value >= MIN_VALUE && value < MAX_VALUE) return value;

        return value >= MAX_VALUE
            ? value - MAX_VALUE
            : MAX_VALUE + value
    }

    const mov = (param1, param2) => {
        const newValue = param1.startsWith("V")
            ? values[param1]
            : +param1;

        values[param2] = getNewValue(newValue);
    }

    const add = (param1, param2) => {
        values[param1] = getNewValue(
            values[param1] + values[param2]
        );
    }

    const dec = (param) => {
        const newValue = getNewValue(values[param] - 1);
        values[param] = newValue;
    }

    const inc = (param) => {
        const newValue = getNewValue(values[param] + 1);
        values[param] = newValue;
    }
    
    const jmp = (param, index) => {
        if (values.V00 === 0) return;
        execute(commands.slice(param, index + 1), false)
    }

    const execute = (cmds, isMainThread = true) => {
        cmds.forEach((command, index) => {
            if (isMainThread) mainThreadIndex = index;

            commandActions[command.substr(0, 3)](
                command.substr(4).split(","),
                mainThreadIndex
            );
        });
    }

    execute(commands);

    return Object.values(values);
}



console.log("Expected:", [14, 10, 0, 0, 0, 0, 0], "Actual:", executeCommands([
    'MOV 5,V00',  // V00 es 5
    'MOV 10,V01', // V01 es 10
    'DEC V00',    // V00 ahora es 4
    'ADD V00,V01' // V00 = V00 + V01 = 14
]))

console.log("Expected:", [0, 254, 0, 0, 0, 0, 0], "Actual:", executeCommands([
    'MOV 255,V00', // V00 es 255
    'INC V00',     // V00 es 256, desborda a 0
    'DEC V01',     // V01 es -1, desborda a 255
    'DEC V01'      // V01 es 254
]))

console.log("Expected:", [0, 10, 0, 0, 0, 0, 1, 0], "Actual:", executeCommands([
    'MOV 10,V00', // V00 es 10
    'DEC V00',    // decrementa V00 en 1  <---┐
    'INC V01',    // incrementa V01 en 1      |
    'JMP 1',      // bucle hasta que V00 sea 0 ----┘
    'INC V06'     // incrementa V06 en 1
]))