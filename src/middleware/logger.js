const logger = store => next => action => {
    console.group(action.type)
    console.log('The Action: ', action);
    const returnValue = next(action);
    console.log('The new state:', store.getState())
    return returnValue
};

export default logger;
