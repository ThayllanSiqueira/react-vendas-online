import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from '../../../constants/errorsStatus';
import { URL_AUTH } from '../../../constants/urls';
import { MethodsEnum } from '../../../enums/methods.enum';
import ConnectionAPI, {
  connectionAPIDelete,
  connectionAPIGet,
  connectionAPIPatch,
  connectionAPIPost,
  connectionAPIPut,
} from '../connectionAPI';

jest.mock('../auth', () => ({
  getAuthorizationToken: () => mockToken,
}));

const mockAxios = new MockAdapter(axios);

const RETURN_VALUE = 'RETURN_VALUE';
const mockToken = 'TOKEN_MOCK';
const BODY_MOCK = { name: 'name' };

describe('connectionAPI function', () => {
  describe('connectionAPIGet', () => {
    it('should success get', async () => {
      const spyAxios = jest.spyOn(axios, 'get');
      mockAxios.onGet(URL_AUTH).reply(200, RETURN_VALUE);
      const returnGet = await connectionAPIGet(URL_AUTH);
      expect(returnGet).toEqual(RETURN_VALUE);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
    });
  });

  describe('connectionAPIDelete', () => {
    it('should success delete', async () => {
      mockAxios.onDelete(URL_AUTH).reply(200, RETURN_VALUE);
      const returnDelete = await connectionAPIDelete(URL_AUTH);
      expect(returnDelete).toEqual(RETURN_VALUE);
    });
  });

  describe('connectionAPIPost', () => {
    it('should success post', async () => {
      const spyAxios = jest.spyOn(axios, 'post');
      mockAxios.onPost(URL_AUTH).reply(200, RETURN_VALUE);
      const returnPost = await connectionAPIPost(URL_AUTH, BODY_MOCK);
      expect(returnPost).toEqual(RETURN_VALUE);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });
  describe('connectionAPIPut', () => {
    it('should success put', async () => {
      const spyAxios = jest.spyOn(axios, 'put');
      mockAxios.onPut(URL_AUTH).reply(200, RETURN_VALUE);
      const returnPut = await connectionAPIPut(URL_AUTH, BODY_MOCK);
      expect(returnPut).toEqual(RETURN_VALUE);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });
  describe('connectionAPIPatch', () => {
    it('should success patch', async () => {
      const spyAxios = jest.spyOn(axios, 'patch');
      mockAxios.onPatch(URL_AUTH).reply(200, RETURN_VALUE);
      const returnPatch = await connectionAPIPatch(URL_AUTH, BODY_MOCK);
      expect(returnPatch).toEqual(RETURN_VALUE);
      expect(spyAxios.mock.calls[0][0]).toEqual(URL_AUTH);
      expect(spyAxios.mock.calls[0][1]).toEqual(BODY_MOCK);
    });
  });

  describe('test connect', () => {
    it('should return success', async () => {
      mockAxios.onGet(URL_AUTH).reply(200, RETURN_VALUE);
      const returnGet = await ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET);
      expect(returnGet).toEqual(RETURN_VALUE);
    });

    it('should return error 401', async () => {
      mockAxios.onGet(URL_AUTH).reply(401);
      expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrow(
        Error(ERROR_ACCESS_DANIED),
      );
    });

    it('should return error 403', async () => {
      mockAxios.onGet(URL_AUTH).reply(403);
      expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrow(
        Error(ERROR_ACCESS_DANIED),
      );
    });

    it('should return error 400', async () => {
      mockAxios.onGet(URL_AUTH).reply(400);
      expect(ConnectionAPI.connect(URL_AUTH, MethodsEnum.GET)).rejects.toThrow(
        Error(ERROR_CONNECTION),
      );
    });
  });

  describe('test call', () => {
    it('should header send authorization', async () => {
      const spyAxios = jest.spyOn(axios, 'get');
      mockAxios.onGet(URL_AUTH).reply(200, RETURN_VALUE);

      expect(spyAxios.mock.calls[0][1]?.headers).toEqual({
        Authorization: mockToken,
        'Content-Type': 'application/json',
      });
    });
  });
});
