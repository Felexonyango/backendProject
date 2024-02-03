import { strictEqual, deepStrictEqual } from 'assert';
import supertest from 'supertest';
import app from '../../app';
let server: any;

beforeEach(() => {
  server = app.listen(3002);
});

afterEach(() => {
  server.close();
});


describe('GET /api/user/all', () => {
  it('should retrieve users with partial properties successfully', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjViOGY0MDdlNGNjMGYzYjljNDI1MTJhIiwicm9sZSI6WyI2NWI4ZjM0OTkxNzI5YTMyNjg0NGNhMjEiXSwiaWF0IjoxNzA2OTUyODAyLCJleHAiOjE3MDY5ODg4MDJ9.TiWjm06GmZ-0wa4HGqZdfPpw8KsFaKUpHZ4Dzo4gpac';
    const mockUserData = [
      { firstname: 'user1', email: 'user1@gmail.com', password: 'test@202' },
      { firstname: 'user2', email: 'user2@gmail.com', password: 'test@202' },
    ];

    const findMock = jest.fn().mockResolvedValue(mockUserData);

    jest.mock('../../model/user', () => ({
      __esModule: true,
      default: {
        find: findMock,
      },
    }));

    const response = await supertest(app)
      .get('/api/user/all')
      .expect(200)
      .set('Authorization', `Bearer ${token}`)
      .expect('Content-Type', /json/);

    strictEqual(response.status, 200);
    deepStrictEqual(response.body.message, 'Users retrieved successfully');
     expect(response.body.result).toHaveLength(3);

  });
});
