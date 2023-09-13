import { IngredientsAction, IngredientsState } from '@/ts/types/reducers.type';

export default function ingredientsReducer(
  state: IngredientsState,
  action: IngredientsAction,
) {
  switch (action.type) {
    case 'UPDATE':
      return state;
    default:
      return state;
  }
}
