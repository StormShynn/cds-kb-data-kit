---
name: C_PRASMMRYTAXPYBLQRY
description: "PRA Summary Taxes Payable Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYTAXPYBLQRY')/$value
semantic_en: "PRA Summary Taxes Payable Query"
semantic_vi: "PRA Summary Taxes Payable Query — CDS view tiêu dùng dựa trên I_PRAAcctgDocSmmryTaxPybl."
keywords:
  - "pra"
  - "summary"
  - "taxes"
  - "payable"
  - "query"
  - "company"
  - "code"
  - "country"
  - "primary"
  - "geogrl"
  - "location"
  - "sales"
  - "date"
  - "product"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRASMMRYTAXPYBLQRY

**PRA Summary Taxes Payable Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYTAXPYBLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `PrimaryGeogrlLocation` |  | |  |  | `CHAR(2)` | Primary Geographical Location |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `SeveranceTaxType` |  | |  |  | `CHAR(2)` | Severance Tax Type |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit Venture |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `TaxPyblStatus` |  | |  |  | `CHAR(2)` | Taxes Payable Status |
| `StatusLastChangedByUser` |  | |  |  | `CHAR(12)` | Taxes Payable Status User |
| `WriteOffResponsibleUser` |  | |  |  | `CHAR(12)` | Taxes Payable Writeoff User |
| `BalAmtAgeCode` |  | |  |  | `CHAR(3)` | Taxes Payable Write-off Age |
| `AgingPeriod` |  | |  |  | `CHAR(8)` | Aging Accounting Period(YYYYMM01) |
| `TargetDate` |  | |  |  | `ACCP(6)` | Fiscal Period |
| `BalAmtInCompanyCodeCrcy` |  | |  |  | `CURR(13)` | Current Balance |
| `StatusAmtInCompanyCodeCrcy` |  | |  |  | `CURR(13)` | Status Amount |
| `WriteOffAmtInCoCodeCrcy` |  | |  |  | `CURR(13)` | Write Off Amount |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYTAXPYBLQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYTAXPYBLQRY')/$value)*

```abap
@EndUserText.label: 'PRA Summary Taxes Payable Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVSUMTAXPBLQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRASmmryTaxPyblQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_PRAAcctgDocSmmryTaxPybl
{

  CompanyCode,
  @Consumption.filter: { selectionType : #SINGLE, multipleSelections: false, mandatory: false, defaultValue: 'US' }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.display: #TEXT
  Country,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #TEXT
  PrimaryGeogrlLocation,
  SalesDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,
  JointVenture,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DivisionOfInterest,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.display: #TEXT
  @AnalyticsDetails.query.axis: #ROWS
  SeveranceTaxType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
  UnitJointVenture,
  CompanyCodeCurrency,
  @AnalyticsDetails.query.display: #TEXT
  TaxPyblStatus,
  StatusLastChangedByUser,
  WriteOffResponsibleUser,
  @AnalyticsDetails.query.display: #TEXT
  @AnalyticsDetails.query.axis: #COLUMNS
  BalAmtAgeCode,
  @AnalyticsDetails.query.display: #TEXT
  AgingPeriod,
  TargetDate,
  //GLAccountType,
  @AnalyticsDetails.query.axis: #COLUMNS
  BalAmtInCompanyCodeCrcy,
  @AnalyticsDetails.query.hidden     
  StatusAmtInCompanyCodeCrcy,
  @AnalyticsDetails.query.hidden     
  WriteOffAmtInCoCodeCrcy
}
```
