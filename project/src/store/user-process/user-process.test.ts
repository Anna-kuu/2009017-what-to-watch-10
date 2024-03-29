import { AuthorizationStatus } from '../../const';
import { UserProcess } from '../../types/state';
import { makeFakeUser } from '../../utils/mocks';
import { checkAuthAction, loginAction, logoutAction } from '../api-actions';
import { userProcess } from './user-process';

const user = makeFakeUser();

describe('Reduser: user', () => {
  let state: UserProcess;

  beforeEach(() => {
    state = {
      authorizationStatus: AuthorizationStatus.Unknown,
      avatarUrl: '',
    };
  });

  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(undefined, {type: 'UNKNOWN_ACTION'}))
      .toEqual(state);
  });

  describe('checkAuthAction test', () => {
    it('should update authorizationStatus to "AUTH" if checkAuthAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.fulfilled.type, payload: user }))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, avatarUrl: user.avatarUrl});
    });
    it('should update authorizationStatus to "NO_AUTH" if checkAuthAction rejected', () => {
      expect(userProcess.reducer(state, { type: checkAuthAction.rejected.type, payload: user }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, avatarUrl: ''});
    });
  });

  describe('loginAction test', () => {
    it('should update authorizationStatus to "AUTH" if loginAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: loginAction.fulfilled.type, payload: user}))
        .toEqual({authorizationStatus: AuthorizationStatus.Auth, avatarUrl: user.avatarUrl});
    });
    it('should update authorizationStatus to "NO_AUTH" if loginAction rejected', () => {
      expect(userProcess.reducer(state, { type: loginAction.rejected.type, payload: user }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, avatarUrl: ''});
    });
  });

  describe('logoutAction test', () => {
    it('should update authorizationStatus to "NO_AUTH" if logoutAction fulfilled', () => {
      expect(userProcess.reducer(state, { type: logoutAction.fulfilled.type }))
        .toEqual({authorizationStatus: AuthorizationStatus.NoAuth, avatarUrl: ''});
    });
  });
});
