import { loadUser, getLevel } from '../js/user';
import fetchData, { httpGet } from '../js/http';

jest.mock('../js/http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should call loadUser once', () => {
  httpGet.mockReturnValue(JSON.stringify({}));

  const response = loadUser(1);
  expect(response).toEqual({});
  expect(httpGet).toHaveBeenCalledWith('http://server:8080/users/1');
});

test('проверка с заглушками fetchData - status: ok', () => {
  fetchData.mockReturnValue({ status: 'ok', level: 1 });

  const response = getLevel(1);

  expect(`Ваш текущий уровень: 1`).toBe(response);
});

test('проверка с заглушками fetchData - без статуса', () => {
  fetchData.mockReturnValue({ status: 'error'});

  const response = getLevel(1);

  expect(`Информация об уровне временно недоступна`).toBe(response);
});

