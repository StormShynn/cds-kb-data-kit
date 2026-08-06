---
name: I_LATEPAYMENTPREDICTDATACUBE
description: Apply dataset for Late Payment - Cube
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: false
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LATEPAYMENTPREDICTDATACUBE')/$value
semantic_en: Apply dataset for Late Payment - Cube
tags:
  - IS
  - component:IS-PS-BEI
  - interface-view
  - IS-PS
  - IS-PS-BEI
  - payment
  - metadata-only
---
# I_LATEPAYMENTPREDICTDATACUBE

**Apply dataset for Late Payment - Cube**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View Hub catalog entry](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LATEPAYMENTPREDICTDATACUBE')/$value) |

## Fields

| Field | Type | Description |
|---|---|---|
| `BusinessPartner` | `CHAR(10)` | Business Partner Number |
| `BhvrlInsgtsAccountNumber` | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsSubAccountNumber` | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsCalDate` | `DATN(8)` | Date |
| `BusinessPartnerType` | `CHAR(4)` | Business Partner Type |
| `BPGroupingCharacter` | `CHAR(10)` | Grouping Characteristic |
| `NrOfLatePaymentPenalty3Month` | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty3Month` | `INT1(3)` |  |
| `NrOfCreatedAudit3Month` | `INT1(3)` |  |
| `NrOfAuditAssessment3Month` | `INT1(3)` |  |
| `NrOfObjection3Month` | `INT1(3)` |  |
| `NrOfLateSubmission3Month` | `INT1(3)` |  |
| `NrOfNoSubmission3Month` | `INT1(3)` |  |
| `NumberOfLateSubmission6Month` | `INT1(3)` |  |
| `NrOfNoSubmission6Month` | `INT1(3)` |  |
| `NumberOfLateSubmission12Month` | `INT1(3)` |  |
| `NumberOfNoSubmission12Month` | `INT1(3)` |  |
| `NumberOfLevel01DunningNonFiler` | `INT1(3)` |  |
| `NumberOfLevel02DunningNonFiler` | `INT1(3)` |  |
| `NumberOfLevel03DunningNonFiler` | `INT1(3)` |  |
| `NumberOfLevel04DunningNonFiler` | `INT1(3)` |  |
| `NumberOfLevel01DunningNonPayer` | `INT1(3)` |  |
| `NumberOfLevel02DunningNonPayer` | `INT1(3)` |  |
| `NumberOfLevel03DunningNonPayer` | `INT1(3)` |  |
| `NumberOfLevel04DunningNonPayer` | `INT1(3)` |  |
| `DueAmountInLocalCurrency` | `DEC(31)` |  |
| `NrOfMonthWithAuthority` | `INT4(10)` |  |
| `NumberOfBankruptcies` | `INT1(3)` |  |
| `FilgAmtChgCurAndPrevMonthValue` | `DEC(31)` |  |
| `FilgAmtChgCurAndPrevYearValue` | `DEC(31)` |  |
| `NumberOfMonthDebtAmountOverdue` | `INT1(3)` |  |
| `ScaledDebtAmountValue` | `DEC(31)` |  |
| `NrOfMonthSincePayer` | `INT1(3)` |  |
| `BusinessPartnerStatusName` | `CHAR(30)` | Individual Status of an Object |
| `DeviationInFilingAmount` | `DEC(31)` |  |
| `AvgNrOfOverdueDay` | `DEC(31)` |  |
| `ExternalEventHasAffected` | `INT1(3)` |  |
| `BhvrlInsgtsTgtVal` | `CHAR(5)` |  |
