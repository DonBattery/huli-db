# Húlí Database Service

This module is responsible for executing MySQL queries using the MySQL-Bricks module for a safer connection and query, and the Húlí-Env module for dependency-injection.

This module is depending on the MySQL module because it will connect to MySQL databases, and on the Húlí-env module because it provides the connection-object.

The module exports a function

```JAVASCRIPT
executeQuery(query)
```

which accepts a MySQL-Bricks query-object as parameter and returns a promise which "on resolve" will return the result of your query
and "on reject" will return the MySQL error-object.
