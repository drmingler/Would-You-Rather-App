const logger = store => next => action => {
    console.group(action.type)
    console.log('The Action: ', action);
    const returnValue = next(action);
    console.log(store.getState());
    return returnValue
};
