function apliDiscount(value, discount) {
    if (discount <= 0) {
        return value
    } else if (discount >= 100) {
        return 0
    }

    return value - (value * discount / 100);
}

module.exports = { apliDiscount };