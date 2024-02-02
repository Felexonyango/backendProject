import request from 'supertest';
import express, { Application } from 'express';
import { getAllUsers } from '../../controller/user';

jest.mock('../../model/user', () => ({
  __esModule: true,
  default: {
    find: jest.fn(),
  },
}));

const app: Application = express();

app.use(express.json());

app.get('/api/users/all', getAllUsers);

describe('GET /api/users/all', () => {
  it('should retrieve users with partial properties successfully', async () => {
    const mockUserData = [
      { firstname: 'user1', email: 'user1@gmail.com',password:'test@202' },
      { firstname: 'user2', email: 'user2@gmail.com',password:'test@202'  },
    ];

    jest.spyOn(require('../../model/user').default, 'find').mockResolvedValue(mockUserData);

    const response = await request(app).get('/api/users/all');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Users retrieved successfully',
      result: mockUserData,
    });

   
    expect(require('../../model/user').default.find).toHaveBeenCalledWith({});

    // Restore the original implementation of User.find
    jest.restoreAllMocks();
  });
});
