const Live = require('../components/Live').default;
const { getRandomizedStreamers } = require('../src/components/Live'); // Import your module

// Mock sortedOnlineStreamers for testing
const sortedOnlineStreamers = [1, 2, 3, 4, 5];
const randomOrder = true; // Modify this as needed

describe('getRandomizedStreamers', () => {
  it('should return sortedOnlineStreamers when randomOrder is false', () => {
    const result = getRandomizedStreamers(sortedOnlineStreamers, false);
    expect(result).toEqual(sortedOnlineStreamers);
  });

  it('should return a randomized array when randomOrder is true', () => {
    const result = getRandomizedStreamers(sortedOnlineStreamers, true);
    
    // Check if the length is the same
    expect(result).toHaveLength(sortedOnlineStreamers.length);

    // Check if the contents are not in the original order
    expect(result).not.toEqual(sortedOnlineStreamers);
  });

  // You can add more test cases as needed
});
