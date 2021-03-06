const MIN_RATE = 1000
const INITIAL_DIFFICULTY = 3;

const GENESIS_DATA = {
    timestamp: 1,
    lastHash: '-----',
    hash: 'hash_one',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
}

const STARTING_BALANCE = 1000;
const MINING_REWARD = 50

const REWARD_INPUT = { address: '*authorized-reward*' }

module.exports = {
    GENESIS_DATA,
    MIN_RATE,
    STARTING_BALANCE,
    MINING_REWARD,
    REWARD_INPUT
}