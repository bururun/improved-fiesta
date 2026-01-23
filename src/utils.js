// Utility functions for EventManager

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    return data;
}

function validateInput(value) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    return true;
}

// Update 7
function newFunction7() {
    return 7;
}

module.exports = { formatData, validateInput };


// Utility functions for EventManager

function formatData(data) {
    if (typeof data === 'string') {
        return data.trim().toUpperCase();
    }
    return data;
}

function validateInput(value) {
    if (value === null || value === undefined) {
        throw new Error('Value cannot be null');
    }
    return true;
}

// Update 24
function newFunction24() {
    return 24;
}

module.exports = { formatData, validateInput };
