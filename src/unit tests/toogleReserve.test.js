import missionsSlice from '../Redux/MissionsSlice';

describe('toogle reducer', () => {
  it('should return a toogle reserved key', () => {
    const id = '2fd';
    const state = {
      missions: [{
        mission_id: '2fd',
        mission_name: 'Elon',
        description: 'this is a test',
        reserved: false,
      }],
    };
    const newState = missionsSlice.reducer(state, {
      type: 'GET/toogleReserve',
      payload: id,
    });
    expect(newState.missions[0].reserved).toBeTruthy();
  });
});
