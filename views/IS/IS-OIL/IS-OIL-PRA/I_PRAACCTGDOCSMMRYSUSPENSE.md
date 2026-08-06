---
name: I_PRAACCTGDOCSMMRYSUSPENSE
description: Production Revenue Accounting Accounting Document Summary Suspense
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYSUSPENSE')/$value
semantic_en: Production Revenue Accounting Accounting Document Summary Suspense
tags:
  - IS
  - account
  - bo:journalentry
  - component:IS-OIL-PRA
  - document
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
  - product
  - metadata-only
---
# I_PRAACCTGDOCSMMRYSUSPENSE

**Production Revenue Accounting Accounting Document Summary Suspense**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRAACCTGDOCSMMRYSUSPENSE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `PRAOwner` | `CHAR(10)` | PRA owner |
| `OwnerInterestType` | `CHAR(2)` | Participant Interest Type |
| `OwnerInterestSequence` | `CHAR(2)` | Owner Interest Sequence Number |
| `JointVenture` | `CHAR(6)` | Joint Venture |
| `DivisionOfInterest` | `CHAR(5)` | Division of Interest (DOI) |
| `Well` | `CHAR(15)` | Well ID number |
| `WellCompletion` | `CHAR(5)` | Well Completion Number |
| `SalesDate` | `DATS(8)` | Sales Date / Month |
| `Product` | `CHAR(3)` | Full three char. product code (Major and Detail Products) |
| `DisbursementDecimalRatio` | `CHAR(10)` | Payment Processing - Disbursement decimal |
| `GLAccount` | `CHAR(10)` | G/L Account Number |
| `RecordType` | `CHAR(1)` | Payment Processing - Record Type |
| `CompanyCodeCurrency` | `CUKY(5)` | Currency Key |
| `GLAccountType` | `CHAR(2)` | Account Type |
| `UnitJointVenture` | `CHAR(6)` | Unit venture |
| `OwnerIsJntIntrstBilgEnabled` | `CHAR(1)` | Job Interest Billing Indicator |
| `FiscalPeriod` | `ACCP(6)` | Fiscal Period |
| `Country` | `CHAR(3)` | Country/Region Key |
| `Region` | `CHAR(3)` | Region (State, Province, County) |
| `County` | `CHAR(3)` | County Code |
| `CompanyCode` | `CHAR(4)` | Company Code |
| `DeliveryNetwork` | `CHAR(20)` | Delivery network number |
| `CalculationBasis` | `CHAR(1)` | Actual, Entitlement, Settlement Codes |
| `SuspenseReason` | `CHAR(3)` | Suspense Reason Code |
| `PriorPeriodAdjustmentReason` | `CHAR(2)` | Prior Period Adjustment Reason Code |
| `PaymentCycle` | `CHAR(1)` | Payment Processing - Future Pay Flag |
| `VolumeUnit` | `UNIT(3)` | Volume Unit |
| `EnergyUnit` | `UNIT(3)` | Energy Unit |
| `GrossVolInVolUnit` | `QUAN(13)` | Total Gross Volume |
| `GrossEnergyInEnergyUnit` | `QUAN(13)` | Gross Energy |
| `GrossAmount` | `CURR(13)` | Gross value |
| `NetRevenueInterestRatio` | `DEC(9)` | Net Revenue Interest Percent |
| `OwnerNetVolInVolUnit` | `QUAN(13)` | Owner Net Volume |
| `OwnerEnergyInEnergyUnit` | `QUAN(13)` | Owner Energy |
| `OwnerGrossAmount` | `CURR(13)` | Owner Gross Value |
| `OwnerNetAmount` | `CURR(13)` | Owner Net Value |
