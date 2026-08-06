---
name: I_PRAPAYMENTDETAIL
description: Production Revenue Accounting Payment Detail
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTDETAIL')/$value
semantic_en: Production Revenue Accounting Payment Detail
tags:
  - IS
  - account
  - bo:material
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - payment
  - product
  - metadata-only
---
# I_PRAPAYMENTDETAIL

**Production Revenue Accounting Payment Detail**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAPAYMENTDETAIL')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `ProcessRun` | `NUMC(10)` | Proc 2.0 - Run ID |
| `PaymentReference` | `CHAR(13)` | Check Number |
| `PRAOwner` | `CHAR(10)` | PRA owner |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | `CHAR(5)` | Division of Interest (DOI) |
| `Well` | `CHAR(15)` | Well ID number |
| `WellCompletion` | `CHAR(5)` | Well Completion Number |
| `OwnerInterestType` | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` | `CHAR(2)` | Owner Interest Sequence Number |
| `SalesDate` | `DATS(8)` | Sales Date / Month |
| `Product` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `DisbursementDecimalRatio` | `CHAR(10)` | Payment Processing - Disbursement decimal |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
| `RecordType` | `CHAR(1)` | Payment Processing - Record Type |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `FiscalPeriod` | `ACCP(6)` | Fiscal Period |
| `DeliveryNetwork` | `CHAR(20)` | Delivery network number |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `County` | `CHAR(3)` | County Code |
| `UnitJointVenture` | `CHAR(6)` | Unit venture |
| `SuspenseReason` | `CHAR(3)` | Suspense Reason Code |
| `PriorPeriodAdjustmentReason` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `CalculationBasis` | `CHAR(1)` | Actual, Entitlement, Settlement Codes |
| `PaymentDetailRejectionRsn` | `CHAR(3)` | Payment Processing - Detail Level Reject Code |
| `PaymentDate` | `DATS(8)` | Check Date |
| `JntIntrstBilgVenture` | `CHAR(6)` | JIB  Venture |
| `JointVentureEquityType` | `CHAR(3)` | Equity Type |
| `JointVentureEquityGroup` | `CHAR(3)` | Equity Group |
| `OriginTransaction` | `CHAR(32)` | Source Transaction ID |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created On Timestamp |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `NetRevenueInterestRatio` | `DEC(9)` | Net Revenue Interest Percent |
| `HeatingValue` | `QUAN(13)` | Heating value |
| `VolumeUnit` | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` | `UNIT(3)` | Energy Base Unit Of Measure |
| `HeatingValUnit` | `UNIT(3)` | Heating Unit Of Measure |
| `GrossVolInVolUnit` | `QUAN(13)` | Total Gross Volume |
| `GrossAmount` | `CURR(13)` | Gross value |
| `OwnerGrossAmount` | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` | `CURR(13)` | Owner Net Value |
| `OwnerNetVolInVolUnit` | `QUAN(13)` | Owner Net Volume |
| `GrossEnergyInEnergyUnit` | `QUAN(13)` | Gross Energy |
| `OwnerEnergyInEnergyUnit` | `QUAN(13)` | Owner Energy |
| `GrossMarketingCost` | `CURR(15)` | Gross marketing costs |
| `GrossTaxAmount` | `CURR(15)` | Gross Tax |
| `TotalMarketingAmt` | `CURR(15)` | Total owner marketing cost |
| `OwnerTaxAmount` | `CURR(15)` | Owner tax |
| `TotalDeductionAmt` | `CURR(15)` | Total Owner Other Deducts |
| `GrossLessDeductionAmt` | `CURR(13)` | Gross value less deductions |
| `WeightedNetPrice` | `CURR(15)` | Price |
