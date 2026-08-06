---
name: C_SUPLREVALUSRDFNDCRITRASCORES
description: Supplier Evaluation User-Defined Criteria
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRDFNDCRITRASCORES')/$value
semantic_en: Supplier Evaluation User-Defined Criteria
tags:
  - MM
  - bo:companycode
  - component:MM-PUR-ANA-2CL
  - consumption-view
  - lob:sourcing & procurement
  - MM-PUR
  - MM-PUR-ANA
  - MM-PUR-ANA-2CL
  - supplier
  - metadata-only
---
# C_SUPLREVALUSRDFNDCRITRASCORES

**Supplier Evaluation User-Defined Criteria**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUPLREVALUSRDFNDCRITRASCORES')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `Supplier` | `CHAR(10)` | Account Number of Supplier |
| `PurchasingCategory` | `CHAR(20)` | Purchasing Category ID |
| `SuplrEvalUserDefinedCriteria` | `CHAR(10)` | Criterion Identifier |
| `MaterialGroup` | `CHAR(9)` | Material Group |
| `PurgCatName` | `CHAR(1)` |  |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SupplierCountry` | `CHAR(3)` | Supplier Country/Region |
| `CalendarYear` | `NUMC(4)` | Calendar Year |
| `CalendarMonth` | `NUMC(2)` | Calendar Month |
| `CalendarWeek` | `NUMC(2)` | Calendar Week |
| `CalendarQuarter` | `NUMC(1)` | Calendar Quarter |
| `NmbrOfSuplrEvalUsrDfndCritra1` | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra2` | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra3` | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra4` | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra5` | `INT1(3)` |  |
| `NmbrOfSuplrEvalUsrDfndCritra6` | `INT1(3)` |  |
| `SuplrEvalUsrDfndCriteria1Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria2Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria3Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria4Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCriteria5Score` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SupplierEvalUsrCriteria6Value` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `TotNmbrOfSuplrUsrDfndCritra` | `INT4(10)` |  |
| `SuplrEvalUsrDfndCritraTotScore` | `DEC(10)` | User-Defined Score for Supplier Evaluation |
| `SuplrEvalUsrDfndCritraTotVal` | `DEC(5)` | Weight % for Supplier Evaluation |
