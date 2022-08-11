/**
 * @Author: fanx
 * @Date: 2022年08月11日 11:30
 * @Description: file content
 */
import { connect } from 'umi';

interface CounterTypes {
  countNumber: number;
}

const CounterUI = ({ countNumber }: CounterTypes) => {
  return (
    <div>
      <p>现在的计数值为：{countNumber}</p>
    </div>
  );
};

const CounterReducer = ({ dispatch, countNumber }: any) => {
  return (
    <div>
      <h3>DVA计数器案例</h3>
      <CounterUI countNumber={countNumber} />
    </div>
  );
};

export default connect((state: any) => {
  console.log(state);
  return { countNumber: state.count.num };
})(CounterReducer);
