# Big Appetite 🍔🍇🍈🍉🍊🍋🍌🍍🥭
The purpose of Big Appetite is simple, save raw HTTP requests to BigQuery. 


## BigQuery Schema
The first step is to create the a table in BigQuery where each call will be saved. Below is a SQL query that you can copy and paste into BigQuery's console to create the table and the schema.

🚨 Be sure to replace the DATASET_NAME_GOES_HERE field with the name of the BigQuery dataset you'll be using 🚨
```
CREATE TABLE IF NOT EXISTS DATASET_NAME_GOES_HERE.RAW_big_appetite (
    date DATETIME,
    source STRING,
    body STRING,
    query STRING,
) PARTITION BY DATE(date)
```

## Why
For development purposes and should not be used in a production environment

Enjoy!