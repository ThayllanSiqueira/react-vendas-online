import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { URL_AUTH } from '../../../constants/urls';
import {
  connectionAPIDelete,
  connectionAPIGet,
  connectionAPIPatch,
  connectionAPIPost,
  connectionAPIPut,
} from '../connectionAPI';

const mockAxios = new MockAdapter(axios);

const RETURN_VALUE = 'RETURN_VALUE';
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
});
