---
sidebar_position: 1
---

Pulls balance sheet data. Available quarterly or annually with the default being the last available quarter. This data is currently only available for U.S. symbols.

:::info

This data is also available with [Time Series](https://iexcloud.io/docs/api/#time-series) under ID `BALANCE_SHEET`

:::

```bash title="HTTP REQUEST"

GET /stock/{symbol}/balance-sheet

```

```json title="RESPONSE"
{
  "symbol": "AAPL",
  "balancesheet": [
    {
      "reportDate": "2020-10-17",
      "filingType": "10-K",
      "fiscalDate": "2020-09-13",
      "fiscalQuarter": 4,
      "fiscalYear": 2010,
      "currency": "USD",
      "currentCash": 25913000000,
      "shortTermInvestments": null,
      "receivables": 23186000000,
      "inventory": 3956000000,
      "otherCurrentAssets": 12087000000,
      "currentAssets": 131339000000,
      "longTermInvestments": 170799000000,
      "propertyPlantEquipment": 41304000000,
      "goodwill": null,
      "intangibleAssets": null,
      "otherAssets": 22283000000,
      "totalAssets": 365725000000,
      "accountsPayable": 55888000000,
      "currentLongTermDebt": null,
      "otherCurrentLiabilities": null,
      "totalCurrentLiabilities": 116866000000,
      "longTermDebt": 93735000000,
      "otherLiabilities": null,
      "minorityInterest": 0,
      "totalLiabilities": 258578000000,
      "commonStock": 40201000000,
      "retainedEarnings": 70400000000,
      "treasuryStock": null,
      "capitalSurplus": null,
      "shareholderEquity": 107147000000,
      "netTangibleAssets": 107147000000,
      "id": "BALANCE_SHEET",
      "key": "AAPL",
      "subkey": "quarterly",
      "date": 1635273127391,
      "updated": 1635273127391
    }
    // { ... }
  ]
}
```

### Data Weighting (applicable only to legacy price plans)

`.003` credit per symbol per period

### Data Timing

`End of day`

### Data Schedule

Updates at `8am, 9am UTC` daily

### Data Source(s)

Copyright: Data provided by [New Constructs, LLC](https://www.newconstructs.com/) © All rights reserved.

### Notes

- Only included with paid subscription plans.
- Financial information is limited for some financial firms.

### Examples

- [/stock/aapl/balance-sheet](/)
- [/stock/aapl/balance-sheet?period=annual](/)

### Query Parameters

| KEY        | TYPE   | DESCRIPTION                                                      |
| ---------- | ------ | ---------------------------------------------------------------- |
| reportDate | string | Date financials were reported                                    |
| filingType | string | Filing type                                                      |
| fiscalDate | string | The last day of the relevant fiscal period, formatted YYYY-MM-DD |
