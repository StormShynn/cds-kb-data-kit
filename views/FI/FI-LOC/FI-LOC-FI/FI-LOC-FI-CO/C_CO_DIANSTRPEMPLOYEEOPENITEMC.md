---
name: C_CO_DIANSTRPEMPLOYEEOPENITEMC
description: Empl. Pyrl Open Items Cube for CO DIAN
app_component: FI-LOC-FI-CO
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CO_DIANSTRPEMPLOYEEOPENITEMC')/$value
semantic_en: Empl. Pyrl Open Items Cube for CO DIAN
tags:
  - FI
  - component:FI-LOC-FI-CO
  - consumption-view
  - FI-LOC
  - FI-LOC-FI
  - FI-LOC-FI-CO
  - lob:controlling
  - lob:finance
  - lob:logistics general
  - metadata-only
---
# C_CO_DIANSTRPEMPLOYEEOPENITEMC

**Empl. Pyrl Open Items Cube for CO DIAN**

| Property | Value |
|---|---|
| App Component | `FI-LOC-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_CO_DIANSTRPEMPLOYEEOPENITEMC')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `PayrollYear` |  | |  |  | `NUMC(4)` | Fiscal Year |
| `CO_DIANReportFormat` |  | |  |  | `CHAR(6)` | DIAN Report Format |
| `CO_DIANReportItemType` |  | |  |  | `NUMC(4)` | Report Format Item Type |
| `CO_DIANTaxNumberType` |  | |  |  | `NUMC(2)` | DIAN Type of Document |
| `TaxNumber1` |  | |  |  | `CHAR(16)` | Tax Number 1 |
| `CreationUTCDateTime` |  | |  |  | `DEC(15)` | UTC Time Stamp in Short Form (YYYYMMDDhhmmss) |
| `StatryRptgEntity` |  | |  |  | `CHAR(10)` | Reporting Entity |
| `StatryRptCategory` |  | |  |  | `CHAR(30)` | Report Category ID |
| `StatryRptRunID` |  | |  |  | `NUMC(8)` | Report Run ID |
| `FirstName` |  | |  |  | `CHAR(40)` | Name 1 |
| `MiddleName` |  | |  |  | `CHAR(40)` | Name 2 |
| `LastName` |  | |  |  | `CHAR(40)` | Name 3 |
| `AdditionalLastName` |  | |  |  | `CHAR(40)` | Name 4 |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CompanyCodeCountry` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `CO_DIANCountry` |  | |  |  | `CHAR(4)` | DIAN Country/Region Code |
| `StreetName` |  | |  |  | `CHAR(60)` | Street |
| `CityCode` |  | |  |  | `CHAR(12)` | City code for city/street file |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `CO_DIANPyrlItemTypeBaseAmt` |  | |  |  | `CURR(23)` | Amount for DIAN |
| `CO_DIANPyrlItemTypeBaseAmtCrcy` |  | |  |  | `CUKY(5)` | Currency for DIAN |
| `CO_DIANPyrlItmTypeCalcdAmt` |  | |  |  | `CURR(23)` | Amount for DIAN |
| `CO_DIANPyrlItmTypeCalcdAmtCrcy` |  | |  |  | `CUKY(5)` | Currency for DIAN |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | ABAP System Field: Name of Current User |
