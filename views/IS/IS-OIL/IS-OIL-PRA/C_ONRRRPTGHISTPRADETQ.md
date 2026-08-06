---
name: C_ONRRRPTGHISTPRADETQ
description: ONRR PRA Reporting Details Query
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ONRRRPTGHISTPRADETQ')/$value
semantic_en: ONRR PRA Reporting Details Query
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - consumption-view
  - IS-OIL
  - IS-OIL-PRA
  - metadata-only
---
# C_ONRRRPTGHISTPRADETQ

**ONRR PRA Reporting Details Query**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_ONRRRPTGHISTPRADETQ')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `SalesDate` | `DATS(8)` | Sales Date / Month |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | `CHAR(5)` | Division of Interest (DOI) |
| `Well` | `CHAR(15)` | Well ID number |
| `WellCompletion` | `CHAR(5)` | Well Completion Number |
| `PRAContract` | `CHAR(10)` | Contract Number |
| `VolumeType` | `CHAR(2)` | Volume Type Code |
| `Product` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `PRAOwner` | `CHAR(10)` | PRA owner |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
| `CostCenter` | `CHAR(10)` | Cost Center |
| `ONRRBusinessTransactionType` | `CHAR(1)` | ONRR-2014 - PRA Detail Line Type |
| `ProcessRun` | `NUMC(10)` | Proc 2.0 - Run ID |
| `AgencyReportType` | `CHAR(1)` | Proc 2.0 - Amended/Current Indicator |
| `PriorPeriodAdjustmentReason` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `VolumeUnit` | `UNIT(3)` | Volume Base Unit of Measure |
| `EnergyUnit` | `UNIT(3)` | Energy Base Unit Of Measure |
| `Currency` | `CUKY(5)` | Currency Key |
| `DeliveryNetwork` | `CHAR(20)` | Delivery network number |
| `MasterDataRecordingLvl` | `CHAR(1)` | ONRR-2014 - Master Level |
| `ONRRPayerCode` | `NUMC(5)` | ONRR-2014 - Payor Code |
| `ONRRLease` | `CHAR(25)` | ONRR-2014 - Lease Number |
| `ONRRAgreement` | `CHAR(25)` | ONRR-2014 - Agreement Number |
| `IsCompensatoryRoyalty` | `CHAR(1)` | ONRR-2014 - Compensatory Royalty Flag |
| `IsSection6LeaseOverride` | `CHAR(1)` | ONRR-2014 - Section 6 Lease Flag |
| `IsShallowWaterRoyaltyRelieved` | `CHAR(1)` | ONRR-2014 - Royalty Relief - Shallow Flag |
| `IsDeepWaterRoyaltyRelieved` | `CHAR(1)` | ONRR-2014 - Royalty Relief - Deep Flag |
| `IsRptgAtAPIWellLvl` | `CHAR(1)` | ONRR-2014 - Report API Well Flag |
| `ONRRLessorType` | `CHAR(1)` | ONRR-2014 - Lessor Code |
| `TribalOrAllotteeLeaseType` | `CHAR(1)` | ONRR-2014 - Tribal / Allottee Indicator |
| `RoyaltyPaytDistributeeType` | `NUMC(3)` | ONRR-2014 - Distributee Code |
| `OnOrOffShoreLeaseSale` | `CHAR(1)` | ONRR-2014 - On-Shore/Off-Shore Indicator |
| `IndianIndexZone` | `CHAR(3)` | ONRR-2014 - Index Zone |
| `ONRRLeaseName` | `CHAR(20)` | ONRR-2014 - Lease Name |
| `IsSection6Lease` | `CHAR(1)` | Section 6 |
| `HasTransactionCode37` | `CHAR(1)` | Transaction 37 |
| `HasTransactionCode38` | `CHAR(1)` | Transaction 38 |
| `ONRRSalesType` | `CHAR(4)` | ONRR-2014 - Sales Type Code |
| `APIWellNumber` | `CHAR(15)` | ONRR-2014 - API Well Number |
| `ONRRReportedProduct` | `CHAR(2)` | ONRR-2014 - Product Code |
| `ONRRReportedTransType` | `CHAR(2)` | ONRR-2014 - Transaction Code |
| `ONRRPaymentMethod` | `CHAR(1)` | ONRR-2014 - Payment Method Code |
| `ONRRReportStatus` | `CHAR(1)` | ONRR-2014 - Status |
| `ONRROverrideAdjmtReason` | `NUMC(2)` | ONRR-2014 - Override Adjustment Code |
| `IsRejectOverridden` | `CHAR(1)` | ONRR-2014 - Override Reject Flag |
| `OverrideDocument` | `CHAR(8)` | ONRR-2014 - Override Payor Assigned Document Number |
| `FutureRptHasRoyaltyDueAdjmt` | `CHAR(1)` | ONRR-2014:  Persist Royalty Due Adjustment |
| `SalesFigureIsToBeRecalculated` | `CHAR(1)` | ONRR-2014:  Recalculate Sales Vol/Val |
| `CreatedByUser` | `CHAR(12)` | Created By |
| `CreationDateTime` | `DEC(15)` | Created On Timestamp |
| `RoyaltyRate` | `CHAR(10)` | ONRR-2014 - Royalty Rate |
| `AllocationPercent` | `DEC(9)` | ONRR-2014 - Allocation Percent |
| `OverrideRoyaltyRate` | `DEC(9)` | ONRR-2014 - Override Royalty Rate |
| `OwnerNetAmount` | `CURR(13)` | Owner Net Value |
| `OwnerNetVolInVolUnit` | `QUAN(13)` | Owner Net Volume |
| `OwnerGrossAmount` | `CURR(13)` | Owner Gross Value |
| `OwnerEnergyInEnergyUnit` | `QUAN(13)` | Owner Energy |
| `GrossAmount` | `CURR(13)` | Gross value |
| `GrossVolInVolUnit` | `QUAN(13)` | Total Gross Volume |
| `GrossEnergyInEnergyUnit` | `QUAN(13)` | Gross Energy |
| `TranspAllwncDeductAdjmtAmt` | `CURR(13)` | ONRR-2014 - Transportation Allowance Deduction Adjustment |
| `ProcgAllwncDeductAdjmtAmt` | `CURR(13)` | ONRR-2014 - Processing Allowance Deduction Adjustment |
| `RoyaltyDueAdjustmentAmount` | `CURR(13)` | ONRR-2014 - Royalty Due Adjustment |
| `TranspAllwncDeductAmt` | `CURR(13)` | ONRR-2014 - Transportation Allowance Deduction |
| `ProcgAllwncDeductAmt` | `CURR(13)` | ONRR-2014 - Processing Allowance Deduction |
| `TaxAmount` | `CURR(13)` | ONRR-2014 - Tax |
| `TaxReimbursementAmount` | `CURR(13)` | ONRR-2014 - Tax Reimbursement |
| `MarketingReimbursementAmount` | `CURR(13)` | ONRR-2014 - Marketing Reimbursement |
