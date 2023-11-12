import pg from "pg";
import "dotenv";

// ("postgres://taqjtfch:WOdI64u6AeTTsDlS49o6qHKX8vVmw2Lh@rain.db.elephantsql.com/taqjtfch");

var pool = new pg.Pool({
  host: "rain.db.elephantsql.com",
  user: "taqjtfch",
  database: "taqjtfch",
  password: "WOdI64u6AeTTsDlS49o6qHKX8vVmw2Lh",
});
pool.connect(function (err) {
  if (err) {
    return console.error("could not connect to postgres", err);
  }
  pool.query('SELECT NOW() AS "theTime"', function (err, result) {
    if (err) {
      return console.error("error running query", err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    pool.end();
  });
});

export default pool;
