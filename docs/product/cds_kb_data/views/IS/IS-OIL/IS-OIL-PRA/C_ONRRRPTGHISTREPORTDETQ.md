---
name: C_ONRRRPTGHISTREPORTDETQ
description: "ONRR Reporting History Report Detail Qry"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ONRRRPTGHISTREPORTDETQ')/$value
semantic_en: "ONRR Reporting History Report Detail Qry"
semantic_vi: "ONRR Reporting History Report Detail Qry — CDS view tiêu dùng dựa trên I_ONRRRptgHistoryReportDetails."
keywords:
  - "onrr"
  - "reporting"
  - "history"
  - "report"
  - "detail"
  - "qry"
  - "payer"
  - "code"
  - "lessor"
  - "type"
  - "lease"
  - "well"
  - "number"
  - "agreement"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
---
# C_ONRRRPTGHISTREPORTDETQ

**ONRR Reporting History Report Detail Qry**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ONRRRPTGHISTREPORTDETQ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ONRRPayerCode` |  | |  |  | `NUMC(5)` | ONRR-2014 - Payor Code |
| `ONRRLessorType` |  | |  |  | `CHAR(1)` | ONRR-2014 - Lessor Code |
| `ONRRLease` |  | |  |  | `CHAR(25)` | ONRR-2014 - Lease Number |
| `APIWellNumber` |  | |  |  | `CHAR(15)` | ONRR-2014 - API Well Number |
| `ONRRAgreement` |  | |  |  | `CHAR(25)` | ONRR-2014 - Agreement Number |
| `ONRRReportedProduct` |  | |  |  | `CHAR(2)` | ONRR-2014 - Product Code |
| `ONRRSalesType` |  | |  |  | `CHAR(4)` | ONRR-2014 - Sales Type Code |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `ONRRReportedTransType` |  | |  |  | `CHAR(2)` | ONRR-2014 - Transaction Code |
| `RoyaltyRate` |  | |  |  | `CHAR(10)` | ONRR-2014 - Royalty Rate |
| `ONRRPaymentMethod` |  | |  |  | `CHAR(1)` | ONRR-2014 - Payment Method Code |
| `ONRRReportedRefTransType` |  | |  |  | `CHAR(2)` | ONRR-2014 - Reference Transaction Code |
| `ONRRBusinessTransactionType` |  | |  |  | `CHAR(1)` | ONRR-2014 - Line Type |
| `ProcessRun` |  | |  |  | `NUMC(10)` | Proc 2.0 - Run ID |
| `PayerAssignedDocument` |  | |  |  | `CHAR(8)` | ONRR-2014 - Payor Assigned Document Number |
| `PayerAssignedDocumentItem` |  | |  |  | `NUMC(6)` | ONRR-2014 - Line Number |
| `ONRRAdjmtReason` |  | |  |  | `NUMC(2)` | ONRR-2014 - Adjustment Code |
| `SalesYearMonth` |  | |  |  | `ACCP(6)` | Fiscal Period |
| `RoyaltyPaytDistributeeType` |  | |  |  | `NUMC(3)` | ONRR-2014 - Distributee Code |
| `TribalOrAllotteeLeaseType` |  | |  |  | `CHAR(1)` | ONRR-2014 - Tribal / Allottee Indicator |
| `IndianIndexZone` |  | |  |  | `CHAR(3)` | ONRR-2014 - Index Zone |
| `RefPayerAssignedDocument` |  | |  |  | `CHAR(8)` | ONRR- Ref Payor Assigned Document Number |
| `RefPayerAssignedDocumentItem` |  | |  |  | `NUMC(6)` | ONRR-Ref Payor Assigned Document Line Number |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Energy Base Unit Of Measure |
| `Currency` |  | |  |  | `CUKY(5)` | Currency Key |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `AgencyReportType` |  | |  |  | `CHAR(1)` | Proc 2.0 - Amended/Current Indicator |
| `ONRRLeaseName` |  | |  |  | `CHAR(20)` | ONRR-2014 - Lease Name |
| `HeatingValUnit` |  | |  |  | `UNIT(3)` | Heating Unit Of Measure |
| `ONRRReportStatus` |  | |  |  | `CHAR(1)` | ONRR-2014 - Status |
| `AgencyReportIsManual` |  | |  |  | `CHAR(1)` | ONRR-2014 - Manual 2014 Flag |
| `IsRejectOverridden` |  | |  |  | `CHAR(1)` | ONRR-2014 - Override Reject Flag |
| `OverrideDocument` |  | |  |  | `CHAR(8)` | ONRR-2014 - Override Payor Assigned Document Number |
| `ONRROverrideAdjmtReason` |  | |  |  | `NUMC(2)` | ONRR-2014 - Override Adjustment Code |
| `SalesFigureIsToBeRecalculated` |  | |  |  | `CHAR(1)` | ONRR-2014:  Recalculate Sales Vol/Val |
| `FutureRptHasRoyaltyDueAdjmt` |  | |  |  | `CHAR(1)` | ONRR-2014:  Persist Royalty Due Adjustment |
| `IsManualReversal` |  | |  |  | `CHAR(1)` | ONRR-2014 - Manual Reversal Flag |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `LeaseSalesVolumeInVolUnit` |  | |  |  | `QUAN(13)` | ONRR-2014 - Sales Volume |
| `LeaseGasEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | ONRR-2014 - Gas Energy |
| `ReportedSalesValue` |  | |  |  | `CURR(13)` | ONRR-2014 - Sales Value |
| `GrossRoyaltyAmount` |  | |  |  | `CURR(13)` | ONRR-2014 - Royalty Value Prior To Allowance |
| `TranspAllwncDeductAmt` |  | |  |  | `CURR(13)` | ONRR-2014 - Transportation Allowance Deduction |
| `ProcgAllwncDeductAmt` |  | |  |  | `CURR(13)` | ONRR-2014 - Processing Allowance Deduction |
| `NetRoyaltyAmount` |  | |  |  | `CURR(13)` | ONRR-2014 - Royalty Value Less Allowance |
| `HeatingValue` |  | |  |  | `QUAN(13)` | Heating value |
| `AgencyReportedPrice` |  | |  |  | `DEC(9)` | ONRR-2014 - Price |
| `IndianIndexPrice` |  | |  |  | `DEC(9)` | ONRR-2014 - Index Price |
| `TranspAllwncDeductAdjmtAmt` |  | |  |  | `CURR(13)` | ONRR-2014 - Transportation Allowance Deduction Adjustment |
| `ProcgAllwncDeductAdjmtAmt` |  | |  |  | `CURR(13)` | ONRR-2014 - Processing Allowance Deduction Adjustment |
| `RoyaltyDueAdjustmentAmount` |  | |  |  | `CURR(13)` | ONRR-2014 - Royalty Due Adjustment |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ONRRRPTGHISTREPORTDETQ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ONRRRPTGHISTREPORTDETQ')/$value)*

```abap
@EndUserText.label: 'ONRR Reporting History Report Detail Qry'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVONRRRHISTRDQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED
define view C_ONRRRptgHistReportDetQ
  as select from I_ONRRRptgHistoryReportDetails
{
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  ONRRPayerCode,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ONRRLessorType,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  @AnalyticsDetails.query.axis: #ROWS
  ONRRLease,
  APIWellNumber,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 3
  @AnalyticsDetails.query.axis: #ROWS
  ONRRAgreement,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ONRRReportedProduct,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ONRRSalesType,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 4
  @AnalyticsDetails.query.axis: #COLUMNS
  SalesDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ONRRReportedTransType,
  RoyaltyRate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ONRRPaymentMethod,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ONRRReportedRefTransType,
  ONRRBusinessTransactionType,
  ProcessRun,
  @AnalyticsDetails.query.display: #KEY_TEXT
  PayerAssignedDocument,
  PayerAssignedDocumentItem,
  @AnalyticsDetails.query.display: #KEY_TEXT
  ONRRAdjmtReason,
  SalesYearMonth, //'ACCP'
  @AnalyticsDetails.query.display: #TEXT
  RoyaltyPaytDistributeeType,
  @AnalyticsDetails.query.display: #TEXT
  TribalOrAllotteeLeaseType,
  @AnalyticsDetails.query.display: #TEXT
  IndianIndexZone,
  @AnalyticsDetails.query.display: #KEY_TEXT
  RefPayerAssignedDocument,
  RefPayerAssignedDocumentItem,
  VolumeUnit,
  EnergyUnit,
  Currency,
  @AnalyticsDetails.query.display: #KEY_TEXT
  CompanyCode,
  @AnalyticsDetails.query.display: #TEXT
  AgencyReportType,
  ONRRLeaseName,
  HeatingValUnit,
  @AnalyticsDetails.query.display: #TEXT
  ONRRReportStatus,
  @AnalyticsDetails.query.display: #TEXT
  AgencyReportIsManual,
  @AnalyticsDetails.query.display: #TEXT
  IsRejectOverridden,
  OverrideDocument,
  @AnalyticsDetails.query.display: #TEXT
  ONRROverrideAdjmtReason,
  @AnalyticsDetails.query.display: #TEXT
  SalesFigureIsToBeRecalculated,
  @AnalyticsDetails.query.display: #TEXT
  FutureRptHasRoyaltyDueAdjmt,
  @AnalyticsDetails.query.display: #TEXT
  IsManualReversal,
  CreatedByUser,
  CreationDateTime,
  @AnalyticsDetails.query.hidden
  LeaseSalesVolumeInVolUnit,
  @AnalyticsDetails.query.hidden
  LeaseGasEnergyInEnergyUnit,
  @AnalyticsDetails.query.hidden
  ReportedSalesValue,
  @AnalyticsDetails.query.hidden
  GrossRoyaltyAmount,
  @AnalyticsDetails.query.hidden
  TranspAllwncDeductAmt,
  @AnalyticsDetails.query.hidden
  ProcgAllwncDeductAmt,
  @AnalyticsDetails.query.axis: #COLUMNS
  NetRoyaltyAmount,
  @AnalyticsDetails.query.hidden
  HeatingValue,
  @AnalyticsDetails.query.hidden
  AgencyReportedPrice,
  @AnalyticsDetails.query.hidden
  IndianIndexPrice,
  @AnalyticsDetails.query.hidden
  TranspAllwncDeductAdjmtAmt,
  @AnalyticsDetails.query.hidden
  ProcgAllwncDeductAdjmtAmt,
  @AnalyticsDetails.query.hidden
  RoyaltyDueAdjustmentAmount


}
```
