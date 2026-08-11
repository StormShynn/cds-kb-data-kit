---
name: C_PRASMMRYACCTSRBLQRY
description: "PRA Summary Accounts Receivable Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYACCTSRBLQRY')/$value
semantic_en: "PRA Summary Accounts Receivable Query"
semantic_vi: "PRA Summary Accounts Receivable Query — CDS view tiêu dùng dựa trên I_PRAAcctgDocSmmryAcctsRbl."
keywords:
  - "pra"
  - "summary"
  - "accounts"
  - "receivable"
  - "query"
  - "company"
  - "code"
  - "remitter"
  - "joint"
  - "venture"
  - "accts"
  - "division"
  - "interest"
  - "measurement"
tags:
  - IS
  - account
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRASMMRYACCTSRBLQRY

**PRA Summary Accounts Receivable Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYACCTSRBLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Remitter` |  | |  |  | `CHAR(10)` | Remitter (Customer) |
| `AccountsReceivableJointVenture` |  | |  |  | `CHAR(6)` | AR Venture |
| `AcctsRblDivisionOfInterest` |  | |  |  | `CHAR(5)` | AR DOI |
| `AcctsRblMeasurementPt` |  | |  |  | `CHAR(20)` | AR MP |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `BalAmtAgeCode` |  | |  |  | `CHAR(3)` | Accounts Receivable Age |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `AcctsRblStatus` |  | |  |  | `CHAR(2)` | Accounts Receivable Status |
| `StatusLastChangedByUser` |  | |  |  | `CHAR(12)` | Accounts Receivable Status User |
| `WriteOffResponsibleUser` |  | |  |  | `CHAR(12)` | Accounts Receivable Writeoff User |
| `AgingPeriod` |  | |  |  | `CHAR(8)` | Aging Accounting Period(YYYYMM01) |
| `GLAccountType` |  | |  |  | `CHAR(2)` | Account Type |
| `BalAmtInCompanyCodeCrcy` |  | |  |  | `CURR(13)` | Current Balance |
| `ReceivableAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Total Receivable Balance |
| `CashAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Total Cash Received |
| `StatusAmtInCompanyCodeCrcy` |  | |  |  | `CURR(13)` | Status Amount |
| `WriteOffAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Auto Write Off Amount |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYACCTSRBLQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYACCTSRBLQRY')/$value)*

```abap
@EndUserText.label: 'PRA Summary Accounts Receivable Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVSUMARQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRASmmryAcctsRblQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_PRAAcctgDocSmmryAcctsRbl
{

  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  CompanyCode,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  Remitter,
  AccountsReceivableJointVenture,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AcctsRblDivisionOfInterest,
  @AnalyticsDetails.query.display: #KEY_TEXT
  AcctsRblMeasurementPt,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,
  SalesDate,
  @AnalyticsDetails.query.axis: #COLUMNS
  @AnalyticsDetails.query.display: #TEXT
  BalAmtAgeCode,
  CompanyCodeCurrency,
  @AnalyticsDetails.query.display: #TEXT
  AcctsRblStatus,
  StatusLastChangedByUser,
  WriteOffResponsibleUser,
  AgingPeriod,
  @AnalyticsDetails.query.display: #TEXT
  GLAccountType,
  @AnalyticsDetails.query.axis: #COLUMNS
  BalAmtInCompanyCodeCrcy,
  @AnalyticsDetails.query.hidden     
  ReceivableAmtInCoCodeCrcy,
  @AnalyticsDetails.query.hidden     
  CashAmtInCoCodeCrcy,
  @AnalyticsDetails.query.hidden     
  StatusAmtInCompanyCodeCrcy,
  @AnalyticsDetails.query.hidden     
  WriteOffAmtInCoCodeCrcy
}
```
