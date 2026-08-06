---
name: C_APDAYSPAYOUTST
description: This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result calculates the days payable outstanding (direct calculation) from 365 days ago till today. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables? Which suppliers have the highest or the lowest days payable outstanding? For more information about the calculation of the measures, see Calculation Logic: Days Payable Outstanding.
app_component: FI-AP-IS-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APDAYSPAYOUTST')/$value
semantic_en: This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result calculates the days payable outstanding (direct calculation) from 365 days ago till today. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables? Which suppliers have the highest or the lowest days payable outstanding? For more information about the calculation of the measures, see Calculation Logic: Days Payable Outstanding.
tags:
  - FI
  - bo:plant
  - component:FI-AP-IS-2CL
  - consumption-view
  - FI-AP
  - FI-AP-IS
  - FI-AP-IS-2CL
  - lob:finance
  - supplier
  - metadata-only
---
# C_APDAYSPAYOUTST

**This CDS view provides you with an insight into the average collection period of your company. It shows the number of days it takes, on average, for your company to collect payables. The result calculates the days payable outstanding (direct calculation) from 365 days ago till today. This CDS view provides the prerequisites for answering the following business questions: How long does it take to collect payables? Which suppliers have the highest or the lowest days payable outstanding? For more information about the calculation of the measures, see Calculation Logic: Days Payable Outstanding.**

| Property | Value |
|---|---|
| App Component | `FI-AP-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_APDAYSPAYOUTST')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `CompanyCode` | `CHAR(4)` | Company Code |
| `Supplier` | `CHAR(10)` | Supplier |
| `YearMonth` | `CHAR(6)` | Calendar Year Month in external format MM.YYYY |
| `SupplierRegion` | `CHAR(3)` | Supplier Region |
| `SupplierRegionName` | `CHAR(20)` | Description |
| `CompanyCodeName` | `CHAR(25)` | Name of Company Code or Company |
| `SupplierName` | `CHAR(80)` | Name of Supplier |
| `AccountingClerk` | `CHAR(2)` | Accounting Clerk |
| `AccountingClerkName` | `CHAR(30)` | Name of Accounting Clerk |
| `SupplierCountry` | `CHAR(3)` | Country/Region Key |
| `SupplierCountryName` | `CHAR(50)` | Country/Region Name |
| `DisplayCurrency` | `CUKY(5)` | Display Currency |
| `WeightedNetAmountInDisplayCrcy` | `CURR(23)` | Weighted Net Amount in Display Currency |
| `AmountInDisplayCurrency` | `CURR(23)` | Amount in Display Currency |
| `DaysPayablesOutstanding` | `INT1(3)` |  |
