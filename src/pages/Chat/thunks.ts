import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { sendMessage } from '../../store/chat/actions';
import { State } from '../../store';

function exampleAPI(): Promise<string> {
  return Promise.resolve('Async Chat Bot');
}

export const thunkSendMessage = (message: string): ThunkAction<void, State, null, Action<string>> => async (
  dispatch: ThunkDispatch<State, null, Action<string>>,
): Promise<void> => {
  const asyncResp = await exampleAPI();
  dispatch(
    sendMessage({
      message,
      user: asyncResp,
      timestamp: new Date().getTime(),
    }),
  );
};
