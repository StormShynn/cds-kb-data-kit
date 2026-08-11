---
name: C_LATEFILINGPREDICTDATA
description: "Risk of Late Filing Prediction dataset"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LATEFILINGPREDICTDATA')/$value
semantic_en: "Risk of Late Filing Prediction dataset"
semantic_vi: "Risk of Late Filing Prediction dataset — CDS view tiêu dùng dựa trên P_TF_LATE_FILING."
keywords:
  - "risk"
  - "late"
  - "filing"
  - "prediction"
  - "dataset"
  - "business"
  - "partner"
  - "bhvrl"
  - "insgts"
  - "account"
  - "number"
  - "date"
  - "type"
tags:
  - IS
  - bo:companycode
  - component:IS-PS-BEI
  - consumption-view
  - IS-PS
  - IS-PS-BEI
---
# C_LATEFILINGPREDICTDATA

**Risk of Late Filing Prediction dataset**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LATEFILINGPREDICTDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BhvrlInsgtsAccountNumber` | ✓ | |  |  | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsSubAccountNumber` | ✓ | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsCalDate` | ✓ | |  |  | `DATN(8)` | Date |
| `BusinessPartnerType` |  | |  |  | `CHAR(4)` | Business Partner Type |
| `BPGroupingCharacter` |  | |  |  | `CHAR(10)` | Grouping Characteristic |
| `NrOfLatePaymentPenalty3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfCreatedAudit3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfAuditAssessment3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfObjection3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfInterestDocument3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfInterestDocument6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfInterestDocument12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument3Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel01DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel02DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel03DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel04DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel01DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel02DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel03DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel04DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `DueAmountInLocalCurrency` |  | |  |  | `DEC(13)` |  |
| `NrOfMonthWithAuthority` |  | |  |  | `INT4(10)` |  |
| `NumberOfBankruptcies` |  | |  |  | `INT1(3)` |  |
| `FilgAmtChgCurAndPrevMonthValue` |  | |  |  | `DEC(13)` |  |
| `FilgAmtChgCurAndPrevYearValue` |  | |  |  | `DEC(13)` |  |
| `NumberOfMonthDebtAmountOverdue` |  | |  |  | `INT1(3)` |  |
| `ScaledDebtAmountValue` |  | |  |  | `DEC(25)` |  |
| `NrOfMonthSinceFiler` |  | |  |  | `INT1(3)` |  |
| `BusinessPartnerStatusName` |  | |  |  | `CHAR(30)` | Individual Status of an Object |
| `DeviationInFilingAmount` |  | |  |  | `DEC(13)` |  |
| `AvgNrOfOverdueDay` |  | |  |  | `DEC(13)` |  |
| `ExternalEventHasAffected` |  | |  |  | `INT1(3)` |  |
| `BhvrlInsgtsTgtVal` |  | |  |  | `CHAR(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LATEFILINGPREDICTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_LATEFILINGPREDICTDATA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CLATEFILGPREDICT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@VDM.viewType: #CONSUMPTION
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.serviceQuality: #D
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE]
@EndUserText.label: 'Risk of Late Filing Prediction dataset'
define view C_LateFilingPredictData as select from P_TF_LATE_FILING(P_SAPClient : $session.client , P_DatasetType : 'P', P_BalanceFlag : 'X') {
   key BusinessPartner,
   key BhvrlInsgtsAccountNumber,
   key BhvrlInsgtsSubAccountNumber,
   key BhvrlInsgtsCalDate,
   BusinessPartnerType,
   BPGroupingCharacter,
   NrOfLatePaymentPenalty3Month,
   NrOfLateSubmsnPenalty3Month,
   NrOfCreatedAudit3Month,
   NrOfAuditAssessment3Month,
   NrOfObjection3Month,
   NrOfInterestDocument3Month,
   NrOfInterestDocument6Month,
   NrOfInterestDocument12Month,
   NrOfNoClearingDocument3Month,
   NrOfNoClearingDocument6Month,
   NrOfNoClearingDocument12Month,
   NumberOfLevel01DunningNonFiler,
   NumberOfLevel02DunningNonFiler,
   NumberOfLevel03DunningNonFiler,
   NumberOfLevel04DunningNonFiler,
   NumberOfLevel01DunningNonPayer,
   NumberOfLevel02DunningNonPayer,
   NumberOfLevel03DunningNonPayer,
   NumberOfLevel04DunningNonPayer,
   DueAmountInLocalCurrency,
   NrOfMonthWithAuthority,
   NumberOfBankruptcies,
   FilgAmtChgCurAndPrevMonthValue,
   FilgAmtChgCurAndPrevYearValue,
   NumberOfMonthDebtAmountOverdue,
   ScaledDebtAmountValue,
   NrOfMonthSinceFiler,
   BusinessPartnerStatusName,
   DeviationInFilingAmount,
   AvgNrOfOverdueDay,
   ExternalEventHasAffected,
   BhvrlInsgtsTgtVal
}
```
