import './SuccessScreen.css';

const SuccessScreen = (props) => {

  return (
    <section className='success-screen-page'>
      <div className='success-screen-table-container'>
        <header>
          <h2>
            This is your personal information
          </h2>
        </header>
        <table className='success-screen-table'>
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
      </div>
    </section>
  );
};

export default SuccessScreen;