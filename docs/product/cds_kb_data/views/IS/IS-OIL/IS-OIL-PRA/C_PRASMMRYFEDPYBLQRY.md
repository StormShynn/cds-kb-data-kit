---
name: C_PRASMMRYFEDPYBLQRY
description: "PRA Summary Federal Payable Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYFEDPYBLQRY')/$value
semantic_en: "PRA Summary Federal Payable Query"
semantic_vi: "PRA Summary Federal Payable Query — CDS view tiêu dùng dựa trên I_PRAAcctgDocSmmryFedPybl."
keywords:
  - "pra"
  - "summary"
  - "federal"
  - "payable"
  - "query"
  - "sales"
  - "date"
  - "company"
  - "code"
  - "joint"
  - "venture"
  - "division"
  - "interest"
  - "well"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_PRASMMRYFEDPYBLQRY

**PRA Summary Federal Payable Query**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYFEDPYBLQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `PRAContract` |  | |  |  | `CHAR(10)` | Contract Number |
| `VolumeType` |  | |  |  | `CHAR(2)` | Volume Type Code |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `PriorPeriodAdjustmentReason` |  | |  |  | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `ProcessingException` |  | |  |  | `CHAR(1)` | ONRR-2014 - Disposition Code |
| `ExceptionReason` |  | |  |  | `CHAR(4)` | ONRR-2014 - Reason Code |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Unit |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Energy Unit |
| `GrossVolInVolUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `GrossEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Gross Energy |
| `GrossAmount` |  | |  |  | `CURR(13)` | Gross value |
| `OwnerNetVolInVolUnit` |  | |  |  | `QUAN(13)` | Owner Net Volume |
| `OwnerEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Owner Energy |
| `OwnerGrossAmount` |  | |  |  | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` |  | |  |  | `CURR(13)` | Owner Net Value |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYFEDPYBLQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRASMMRYFEDPYBLQRY')/$value)*

```abap
@EndUserText.label: 'PRA Summary Federal Payable Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVSUMFEDPBLQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRASmmryFedPyblQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_PRAAcctgDocSmmryFedPybl
{
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.axis: #ROWS
  SalesDate,
  CompanyCode,
  JointVenture,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DivisionOfInterest,
  Well,
  @AnalyticsDetails.query.display: #KEY_TEXT
  WellCompletion,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PRAContract,
  @AnalyticsDetails.query.display: #KEY_TEXT
  VolumeType,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PRAOwner,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CostCenter,
  @AnalyticsDetails.query.display: #TEXT
  PriorPeriodAdjustmentReason,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DeliveryNetwork,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.display: #TEXT
  @AnalyticsDetails.query.axis: #ROWS
  ProcessingException,
  @AnalyticsDetails.query.axis: #ROWS
  ExceptionReason,


  VolumeUnit,
  EnergyUnit,
  @AnalyticsDetails.query.hidden     
  GrossVolInVolUnit,
  @AnalyticsDetails.query.hidden     
  GrossEnergyInEnergyUnit,
  @AnalyticsDetails.query.hidden     
  GrossAmount,
  @AnalyticsDetails.query.hidden     
  OwnerNetVolInVolUnit,
  @AnalyticsDetails.query.hidden     
  OwnerEnergyInEnergyUnit,
  @AnalyticsDetails.query.hidden     
  OwnerGrossAmount,
  @AnalyticsDetails.query.axis: #COLUMNS
  OwnerNetAmount
}
```
