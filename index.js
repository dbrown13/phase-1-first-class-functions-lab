const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier = 4) => {
    return (fare) => {
        return fare * multiplier
    }
}

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

const selectDifferentDrivers = (drivers, fn) => {
    return fn(drivers);

}