

// Honestly I'm not 100% clear what this does, it's straight from Stack Overflow
// But it allows us to stringify 'circular' data (whatever that is) from the API
export const getCircularReplacer = () => {
    const seen = new WeakSet();

    return (key, value) => {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return;
            }
            seen.add(value);
        }
        return value;
    };
};


export const circularToJSON = (data) => {
    return JSON.parse(JSON.stringify(data, getCircularReplacer()));
};

export const createFormArray = (forms) => {
    const formIDArray = Object.values(forms);
    return formIDArray.map((id) => {
        return id.id;
    });
};

export const isEmptyObject = (object) => {
    return !object || Object.keys(object).length === 0;
};
