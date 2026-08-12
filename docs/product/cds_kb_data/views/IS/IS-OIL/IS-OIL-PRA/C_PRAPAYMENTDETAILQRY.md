---
name: C_PRAPAYMENTDETAILQRY
description: "PRA Payment Detail Query"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTDETAILQRY')/$value
semantic_en: "PRA Payment Detail Query"
semantic_vi: "PRA Payment Detail Query — CDS view tiêu dùng dựa trên I_PRAPaymentDetail."
keywords:
  - "pra"
  - "payment"
  - "detail"
  - "query"
  - "process"
  - "reference"
  - "owner"
  - "joint"
  - "venture"
  - "division"
  - "interest"
tags:
  - IS
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
---
# C_PRAPAYMENTDETAILQRY

**PRA Payment Detail Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTDETAILQRY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProcessRun` |  | |  |  | `NUMC(10)` | Proc 2.0 - Run ID |
| `PaymentReference` |  | |  |  | `CHAR(13)` | Check Number |
| `PRAOwner` |  | |  |  | `CHAR(10)` | PRA owner |
| `JointVenture` |  | |  |  | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` |  | |  |  | `CHAR(5)` | Division of Interest (DOI) |
| `Well` |  | |  |  | `CHAR(15)` | Well ID number |
| `WellCompletion` |  | |  |  | `CHAR(5)` | Well Completion Number |
| `OwnerInterestType` |  | |  |  | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` |  | |  |  | `CHAR(2)` | Owner Interest Sequence Number |
| `SalesDate` |  | |  |  | `DATS(8)` | Sales Date / Month |
| `Product` |  | |  |  | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `DisbursementDecimalRatio` |  | |  |  | `CHAR(10)` | Payment Processing - Disbursement decimal |
| `GLAccount` |  | |  |  | `CHAR(10)` | G/L Account Number |
| `RecordType` |  | |  |  | `CHAR(1)` | Payment Processing - Record Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `FiscalPeriod` |  | |  |  | `ACCP(6)` | Fiscal Period |
| `DeliveryNetwork` |  | |  |  | `CHAR(20)` | Delivery network number |
| `Country` |  | |  |  | `CHAR(3)` | Country/Region Key |
| `Region` |  | |  |  | `CHAR(3)` | Region (State, Province, County) |
| `County` |  | |  |  | `CHAR(3)` | County Code |
| `UnitJointVenture` |  | |  |  | `CHAR(6)` | Unit venture |
| `SuspenseReason` |  | |  |  | `CHAR(3)` | Suspense Reason Code |
| `PriorPeriodAdjustmentReason` |  | |  |  | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `CalculationBasis` |  | |  |  | `CHAR(1)` | Actual, Entitlement, Settlement Codes |
| `PaymentDetailRejectionRsn` |  | |  |  | `CHAR(3)` | Payment Processing - Detail Level Reject Code |
| `PaymentDate` |  | |  |  | `DATS(8)` | Check Date |
| `JntIntrstBilgVenture` |  | |  |  | `CHAR(6)` | JIB  Venture |
| `JointVentureEquityType` |  | |  |  | `CHAR(3)` | Equity Type |
| `JointVentureEquityGroup` |  | |  |  | `CHAR(3)` | Equity Group |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Created By |
| `CreationDateTime` |  | |  |  | `DEC(15)` | Created On Timestamp |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Currency Key |
| `NetRevenueInterestRatio` |  | |  |  | `DEC(9)` | Net Revenue Interest Percent |
| `HeatingValue` |  | |  |  | `QUAN(13)` | Heating value |
| `VolumeUnit` |  | |  |  | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` |  | |  |  | `UNIT(3)` | Energy Base Unit Of Measure |
| `HeatingValUnit` |  | |  |  | `UNIT(3)` | Heating Unit Of Measure |
| `GrossVolInVolUnit` |  | |  |  | `QUAN(13)` | Total Gross Volume |
| `GrossAmount` |  | |  |  | `CURR(13)` | Gross value |
| `OwnerGrossAmount` |  | |  |  | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` |  | |  |  | `CURR(13)` | Owner Net Value |
| `OwnerNetVolInVolUnit` |  | |  |  | `QUAN(13)` | Owner Net Volume |
| `GrossEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Gross Energy |
| `OwnerEnergyInEnergyUnit` |  | |  |  | `QUAN(13)` | Owner Energy |
| `GrossMarketingCost` |  | |  |  | `CURR(15)` | Gross marketing costs |
| `GrossTaxAmount` |  | |  |  | `CURR(15)` | Gross Tax |
| `TotalMarketingAmt` |  | |  |  | `CURR(15)` | Total owner marketing cost |
| `OwnerTaxAmount` |  | |  |  | `CURR(15)` | Owner tax |
| `TotalDeductionAmt` |  | |  |  | `CURR(15)` | Total Owner Other Deducts |
| `GrossLessDeductionAmt` |  | |  |  | `CURR(13)` | Gross value less deductions |
| `WeightedNetPrice` |  | |  |  | `CURR(15)` | Price |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTDETAILQRY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_PRAPAYMENTDETAILQRY')/$value)*

```abap
@EndUserText.label: 'PRA Payment Detail Query'
@Analytics.query:true
@VDM.viewType: #CONSUMPTION
@AccessControl.authorizationCheck:#PRIVILEGED_ONLY
@AbapCatalog.sqlViewName: 'CPVPAYMENTDTLQ'
//@OData.publish: true

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.serviceQuality: #D
@ObjectModel.usageType.dataClass: #MIXED

define view C_PRAPaymentDetailQry
  //  with parameters
  //    @Consumption.hidden: true
  //    @Environment.systemField: #SYSTEM_LANGUAGE
  //    P_Language : sylangu
  as select from I_PRAPaymentDetail
{
  @AnalyticsDetails.query.display: #TEXT
  ProcessRun,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 2
  PaymentReference,
  @Consumption.filter: { selectionType : #RANGE, multipleSelections: true, mandatory: false }
  @AnalyticsDetails.query.variableSequence: 1
  @AnalyticsDetails.query.axis: #ROWS
  @AnalyticsDetails.query.display: #KEY_TEXT
  PRAOwner,
  JointVenture,
  @AnalyticsDetails.query.display: #KEY_TEXT
  DivisionOfInterest,
  Well,
  @AnalyticsDetails.query.display: #KEY_TEXT
  WellCompletion,
  @AnalyticsDetails.query.display: #TEXT
  OwnerInterestType,
  OwnerInterestSequence,
  SalesDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  Product,
  DisbursementDecimalRatio,
  @AnalyticsDetails.query.display: #KEY_TEXT
  GLAccount,
  @AnalyticsDetails.query.display: #TEXT
  RecordType,
  CompanyCode,
  FiscalPeriod,
  DeliveryNetwork,
  @AnalyticsDetails.query.display: #TEXT
  Country,
  @AnalyticsDetails.query.display: #TEXT
  Region,
  @AnalyticsDetails.query.display: #TEXT
  County,
  @AnalyticsDetails.query.display: #KEY_TEXT
  UnitJointVenture,
  @AnalyticsDetails.query.display: #TEXT
  SuspenseReason,
  @AnalyticsDetails.query.display: #TEXT
  PriorPeriodAdjustmentReason,
  @AnalyticsDetails.query.display: #TEXT
  CalculationBasis,
  @AnalyticsDetails.query.display: #TEXT
  PaymentDetailRejectionRsn,
  PaymentDate,
  @AnalyticsDetails.query.display: #KEY_TEXT
  JntIntrstBilgVenture,
  @AnalyticsDetails.query.display: #TEXT
  JointVentureEquityType,
  @AnalyticsDetails.query.display: #TEXT
  JointVentureEquityGroup,

  CreatedByUser,
  CreationDateTime,
  CompanyCodeCurrency,

  @AnalyticsDetails.query.hidden
  NetRevenueInterestRatio,
  @AnalyticsDetails.query.hidden
  HeatingValue,
  VolumeUnit,
  EnergyUnit,
  HeatingValUnit,
  @AnalyticsDetails.query.hidden
  GrossVolInVolUnit,
  @AnalyticsDetails.query.hidden
  GrossAmount,
  @AnalyticsDetails.query.hidden
  OwnerGrossAmount,
  @AnalyticsDetails.query.axis: #COLUMNS
  OwnerNetAmount,
  @AnalyticsDetails.query.axis: #COLUMNS
  OwnerNetVolInVolUnit,
  @AnalyticsDetails.query.hidden
  GrossEnergyInEnergyUnit,
  @AnalyticsDetails.query.hidden
  OwnerEnergyInEnergyUnit,
  @AnalyticsDetails.query.hidden
  GrossMarketingCost,
  @AnalyticsDetails.query.hidden
  GrossTaxAmount,
  @AnalyticsDetails.query.hidden
  TotalMarketingAmt,
  @AnalyticsDetails.query.hidden
  OwnerTaxAmount,
  @AnalyticsDetails.query.hidden
  TotalDeductionAmt,
  @AnalyticsDetails.query.hidden
  GrossLessDeductionAmt,
  @AnalyticsDetails.query.hidden
  WeightedNetPrice

}
```
