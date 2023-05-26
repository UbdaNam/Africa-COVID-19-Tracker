import "../styles/DetailsTable.css";

export default function DetailsTable({ countryDetail }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>Population</td>
            <td>{countryDetail.population.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Cases</td>
            <td>{countryDetail.cases.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Active</td>
            <td>{countryDetail.active.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Critical</td>
            <td>{countryDetail.critical.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Recovered</td>
            <td>{countryDetail.recovered.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Deaths</td>
            <td>{countryDetail.deaths.toLocaleString()}</td>
          </tr>
          <tr>
            <td>Tests</td>
            <td>{countryDetail.tests.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
