import { LOAD_CUSTOMERS } from './type';

const initialState = {
  customers: [
    {
      name: 'John Doe',
      phone: '912365574996',
      address: '123 Sun Street',
      membership: 'Platinum',
      id: 1,
    },
  ],
  loading: false,
  loaded: true,
};

export function customerReducer(
  state = initialState,
  action: { type: string; payload: string }
) {
  switch (action.type) {
    case LOAD_CUSTOMERS: {
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    }

    default:
      return state;
  }
}
