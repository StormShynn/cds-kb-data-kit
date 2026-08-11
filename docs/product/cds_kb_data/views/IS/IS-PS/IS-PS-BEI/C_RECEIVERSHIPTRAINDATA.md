---
name: C_RECEIVERSHIPTRAINDATA
description: "Risk of Receivership Training dataset"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPTRAINDATA')/$value
semantic_en: "Risk of Receivership Training dataset"
semantic_vi: "Risk of Receivership Training dataset — CDS view tiêu dùng dựa trên P_TF_RECEIVERSHIP."
keywords:
  - "risk"
  - "receivership"
  - "training"
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
  - component:IS-PS-BEI
  - consumption-view
  - IS-PS
  - IS-PS-BEI
---
# C_RECEIVERSHIPTRAINDATA

**Risk of Receivership Training dataset**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPTRAINDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `BhvrlInsgtsAccountNumber` | ✓ | |  |  | `CHAR(12)` | Contract Account Number |
| `BhvrlInsgtsSubAccountNumber` | ✓ | |  |  | `CHAR(20)` | Reference Specifications from Contract |
| `BhvrlInsgtsCalDate` | ✓ | |  |  | `DATN(8)` | Date |
| `BusinessPartnerType` |  | |  |  | `CHAR(4)` | Business Partner Type |
| `BPGroupingCharacter` |  | |  |  | `CHAR(10)` | Grouping Characteristic |
| `NrOfLatePaymentPenalty12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLateSubmission12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfTaxCorrection12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfInterestDocument12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfTransferPosting12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfCreatedAudit12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfAuditAssessment12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfObjection12Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfNoSubmission12Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLatePaymentPenalty6Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLateSubmission6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty6Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLatePaymentPenalty2Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLateSubmission2Month` |  | |  |  | `INT1(3)` |  |
| `NrOfLateSubmsnPenalty2Month` |  | |  |  | `INT1(3)` |  |
| `NrOfNoClearingDocument2Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel01DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel02DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel03DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel04DunningNonFiler` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel01DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel02DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel03DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfLevel04DunningNonPayer` |  | |  |  | `INT1(3)` |  |
| `NumberOfDunning6Month` |  | |  |  | `INT1(3)` |  |
| `NumberOfDunning2Month` |  | |  |  | `INT1(3)` |  |
| `DueAmountInLocalCurrency` |  | |  |  | `DEC(13)` |  |
| `ChgInDueAmtValue` |  | |  |  | `DEC(13)` |  |
| `ExternalEventHasAffected` |  | |  |  | `INT1(3)` |  |
| `BhvrlInsgtsTgtVal` |  | |  |  | `CHAR(5)` |  |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPTRAINDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPTRAINDATA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CRCVRSHIPTRAIN'
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
@EndUserText.label: 'Risk of Receivership Training dataset'
define view C_ReceivershipTrainData as select from P_TF_RECEIVERSHIP(P_SAPClient : $session.client , P_DatasetType : 'T', P_BalanceFlag: 'X') {
key BusinessPartner,
key BhvrlInsgtsAccountNumber,
key BhvrlInsgtsSubAccountNumber,
key BhvrlInsgtsCalDate,
BusinessPartnerType,
BPGroupingCharacter,
NrOfLatePaymentPenalty12Month,
NrOfLateSubmsnPenalty12Month,
NumberOfLateSubmission12Month,
NumberOfTaxCorrection12Month,
NrOfInterestDocument12Month,
NrOfNoClearingDocument12Month,
NumberOfTransferPosting12Month,
NumberOfCreatedAudit12Month,
NumberOfAuditAssessment12Month,
NumberOfObjection12Month,
NumberOfNoSubmission12Month,
NrOfNoClearingDocument6Month,
NrOfLatePaymentPenalty6Month,
NumberOfLateSubmission6Month,
NrOfLateSubmsnPenalty6Month,
NrOfLatePaymentPenalty2Month,
NumberOfLateSubmission2Month,
NrOfLateSubmsnPenalty2Month,
NrOfNoClearingDocument2Month,
NumberOfLevel01DunningNonFiler,
NumberOfLevel02DunningNonFiler,
NumberOfLevel03DunningNonFiler,
NumberOfLevel04DunningNonFiler,
NumberOfLevel01DunningNonPayer,
NumberOfLevel02DunningNonPayer,
NumberOfLevel03DunningNonPayer,
NumberOfLevel04DunningNonPayer,
NumberOfDunning6Month,
NumberOfDunning2Month,
DueAmountInLocalCurrency,
ChgInDueAmtValue,
ExternalEventHasAffected,
BhvrlInsgtsTgtVal
}
```
