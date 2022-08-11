/**
 * @Author: fanx
 * @Date: 2022年08月11日 11:30
 * @Description: file content
 */
import { connect } from 'umi';

interface CounterTypes {
  countNumber: number;
  dispatch: Function;
}

const CounterUI = ({ countNumber, dispatch }: CounterTypes) => {
  return (
    <div>
      <p>现在的计数值为：{countNumber}</p>
      <button onClick={() => dispatch({ type: 'count/add' })}>+</button>
      <p></p>
      <button onClick={() => dispatch({ type: 'count/addAsync' })}>异步 +</button>
    </div>
  );
};

const CounterReducer = ({ dispatch, countNumber }: any) => {
  console.log(countNumber);
  return (
    <div>
      <h3>DVA计数器案例</h3>
      <CounterUI countNumber={countNumber} dispatch={dispatch} />
    </div>
  );
};

export default connect((state: any) => {
  console.log(state);
  return { countNumber: state.count.num };
})(CounterReducer);
