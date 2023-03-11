import axios from 'axios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import missionsSlice, { fetchMissions, toogleReserve } from '../Redux/MissionsSlice';

jest.mock('axios');

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('missionsSlice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({ missions: { missions: [] } });
  });

  afterEach(() => {
    axios.get.mockReset();
    store.clearActions();
  });

  describe('fetchMissions', () => {
    it('should fetch missions data and dispatch fulfilled action with payload', async () => {
      const mockedData = [
        { mission_id: 'mission-1', mission_name: 'Mission 1', description: 'Mission 1 description' },
        { mission_id: 'mission-2', mission_name: 'Mission 2', description: 'Mission 2 description' },
      ];

      axios.get.mockResolvedValueOnce({ data: mockedData });

      await store.dispatch(fetchMissions());

      expect(axios.get).toHaveBeenCalledWith('https://api.spacexdata.com/v3/missions');
      expect(store.getActions()).toContainEqual({
        type: fetchMissions.fulfilled.type,
        payload: mockedData,
      });
    });
  });

  describe('toogleReserve', () => {
    it('should toggle reserved property of mission with given id', () => {
      const initialState = {
        missions: [
          { mission_id: 'mission-1', mission_name: 'Mission 1', description: 'Mission 1 description', reserved: false },
          { mission_id: 'mission-2', mission_name: 'Mission 2', description: 'Mission 2 description', reserved: false },
        ],
      };

      const missionId = 'mission-1';
      const expectedState = {
        missions: [
          { mission_id: 'mission-1', mission_name: 'Mission 1', description: 'Mission 1 description', reserved: true },
          { mission_id: 'mission-2', mission_name: 'Mission 2', description: 'Mission 2 description', reserved: false },
        ],
      };

      const action = toogleReserve(missionId);
      const state = missionsSlice.reducer(initialState, action);

      expect(state).toEqual(expectedState);
    });
  });
});
