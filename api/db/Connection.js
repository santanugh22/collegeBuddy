import pg from "pg";
import "dotenv";

// ("postgres://taqjtfch:WOdI64u6AeTTsDlS49o6qHKX8vVmw2Lh@rain.db.elephantsql.com/taqjtfch");

var pool = new pg.Pool({
  host: process.env.DB_HOST,
  user: "taqjtfch",
  database: "taqjtfch",
  password: "WOdI64u6AeTTsDlS49o6qHKX8vVmw2Lh",
});


export default pool;
