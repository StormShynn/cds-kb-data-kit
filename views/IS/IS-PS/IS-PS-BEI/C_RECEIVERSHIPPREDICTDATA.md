---
name: C_RECEIVERSHIPPREDICTDATA
description: Risk of Receivership Prediction dataset
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPPREDICTDATA')/$value
semantic_en: Risk of Receivership Prediction dataset
tags:
  - IS
  - component:IS-PS-BEI
  - consumption-view
  - IS-PS
  - IS-PS-BEI
  - metadata-only
---
# C_RECEIVERSHIPPREDICTDATA

**Risk of Receivership Prediction dataset**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPPREDICTDATA')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BhvrlInsgtsAccountNumber` | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsSubAccountNumber` | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsCalDate` | `DATN(8)` | Date |
| `BusinessPartnerType` | `CHAR(4)` | Business Partner Type |
| `BPGroupingCharacter` | `CHAR(10)` | Grouping Characteristic |
| `NrOfLatePaymentPenalty12Month` | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty12Month` | `INT1(3)` |  |
| `NumberOfLateSubmission12Month` | `INT1(3)` |  |
| `NumberOfTaxCorrection12Month` | `INT1(3)` |  |
| `NrOfInterestDocument12Month` | `INT1(3)` |  |
| `NrOfNoClearingDocument12Month` | `INT1(3)` |  |
| `NumberOfTransferPosting12Month` | `INT1(3)` |  |
| `NumberOfCreatedAudit12Month` | `INT1(3)` |  |
| `NumberOfAuditAssessment12Month` | `INT1(3)` |  |
| `NumberOfObjection12Month` | `INT1(3)` |  |
| `NumberOfNoSubmission12Month` | `INT1(3)` |  |
| `NrOfNoClearingDocument6Month` | `INT1(3)` |  |
| `NrOfLatePaymentPenalty6Month` | `INT1(3)` |  |
| `NumberOfLateSubmission6Month` | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty6Month` | `INT1(3)` |  |
| `NrOfLatePaymentPenalty2Month` | `INT1(3)` |  |
| `NumberOfLateSubmission2Month` | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty2Month` | `INT1(3)` |  |
| `NrOfNoClearingDocument2Month` | `INT1(3)` |  |
| `NumberOfLevel01DunningNonFiler` | `INT1(3)` |  |
| `NumberOfLevel02DunningNonFiler` | `INT1(3)` |  |
| `NumberOfLevel03DunningNonFiler` | `INT1(3)` |  |
| `NumberOfLevel04DunningNonFiler` | `INT1(3)` |  |
| `NumberOfLevel01DunningNonPayer` | `INT1(3)` |  |
| `NumberOfLevel02DunningNonPayer` | `INT1(3)` |  |
| `NumberOfLevel03DunningNonPayer` | `INT1(3)` |  |
| `NumberOfLevel04DunningNonPayer` | `INT1(3)` |  |
| `NumberOfDunning6Month` | `INT1(3)` |  |
| `NumberOfDunning2Month` | `INT1(3)` |  |
| `DueAmountInLocalCurrency` | `DEC(13)` |  |
| `ChgInDueAmtValue` | `DEC(13)` |  |
| `ExternalEventHasAffected` | `INT1(3)` |  |
| `BhvrlInsgtsTgtVal` | `CHAR(5)` |  |
