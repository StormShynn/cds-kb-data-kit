---
name: C_PRAPAYMENTHEADERQRY
description: "PRA Payment Header Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTHEADERQRY')/$value
semantic_en: "PRA Payment Header Query"
semantic_vi: "PRA Payment Header Query — CDS view tiêu dùng dựa trên I_PRAPaymentHeader."
keywords:
  - "pra"
  - "payment"
  - "header"
  - "query"
  - "process"
  - "reference"
  - "owner"
  - "date"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# C_PRAPAYMENTHEADERQRY

**PRA Payment Header Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTHEADERQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessRun` |  | |  |  | `NUMC(10)` | Proc 2.0 - Run ID |
| `PaymentReference` |  | |  |  | `CHAR(13)` | Check Number |
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `PaymentDate` |  | |  |  | `DATS(8)` | Check Date |
| `PaymentType` |  | |  |  | `CHAR(1)` | Payment Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CheckStatus` |  | |  |  | `CHAR(2)` | Payment Processing - Check Status |
| `PaymentStatusDate` |  | |  |  | `DATS(8)` | Status Date |
| `PaymentHeaderRejectionRsn` |  | |  |  | `CHAR(3)` | Payment Processing - High Level Reject Code |
| `CheckIsOutOfTolerance` |  | |  |  | `CHAR(1)` | Payment Processing - Out-Of-Tolerance Flag |
| `CheckIsSentToBank` |  | |  |  | `CHAR(1)` | Flag Indicating Sent to Bank |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `OwnerNetAmount` |  | |  |  | `CURR(13)` | Owner Net Value |
| `VarianceAmount` |  | |  |  | `CURR(13)` | Payment Processing - Variance Amount |
| `VarianceRatio` |  | |  |  | `DEC(8)` | Payment Processing - Variance Percent |
| `MinimumPaymentAmt` |  | |  |  | `CURR(13)` | Payment Processing - Owner Minimum Pay |
| `NumberOfDocuments` |  | |  |  | `INT4(10)` | Number of Documents |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTHEADERQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTHEADERQRY')/$value)*

```abap
@EndUserText.label: 'PRA Payment Header Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVPAYMENTHDRQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRAPaymentHeaderQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_PRAPaymentHeader
{
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 4
  @AnalyticsDetails.query.display: #TEXT
  @AnalyticsDetails.query.axis: #ROWS
  ProcessRun,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  PaymentReference,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.display: #KEY_TEXT
  PRAOwner,
  PaymentDate,
  @AnalyticsDetails.query.display: #TEXT
  PaymentType,
  CompanyCode,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 3
  @AnalyticsDetails.query.display: #TEXT
  CheckStatus,
  PaymentStatusDate,
  @AnalyticsDetails.query.display: #TEXT
  PaymentHeaderRejectionRsn,
  @AnalyticsDetails.query.display: #TEXT
  CheckIsOutOfTolerance,
  @AnalyticsDetails.query.display: #TEXT
  CheckIsSentToBank,
  CreatedByUser,
  CreationDateTime,
  CompanyCodeCurrency,

  @AnalyticsDetails.query.axis: #COLUMNS
  OwnerNetAmount,
  @AnalyticsDetails.query.hidden
  VarianceAmount,
  @AnalyticsDetails.query.hidden
  VarianceRatio,
  @AnalyticsDetails.query.hidden
  MinimumPaymentAmt,
  @AnalyticsDetails.query.axis: #COLUMNS
  NumberOfDocuments

}
```
