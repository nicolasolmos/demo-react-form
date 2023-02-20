import styles from './SuccessScreen.module.css';

const SuccessScreen = (props) => {

  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>
              Key
            </th>
            <th>
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {
            Object.keys(props.dniData).map(key => <tr>
              <td>{key}</td>
              <td>{props.dniData[key].toString()}</td>
            </tr>)
          }
        </tbody>
      </table>
    </section>
  );
};

export default SuccessScreen;