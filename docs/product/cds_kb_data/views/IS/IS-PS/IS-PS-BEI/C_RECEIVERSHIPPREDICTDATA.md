---
name: C_RECEIVERSHIPPREDICTDATA
description: "Risk of Receivership Prediction dataset"
app_component: IS-PS-BEI
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPPREDICTDATA')/$value
semantic_en: "Risk of Receivership Prediction dataset"
semantic_vi: "Risk of Receivership Prediction dataset — CDS view tiêu dùng dựa trên P_TF_RECEIVERSHIP."
keywords:
  - "risk"
  - "receivership"
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
  - component:IS-PS-BEI
  - consumption-view
  - IS-PS
  - IS-PS-BEI
---
# C_RECEIVERSHIPPREDICTDATA

**Risk of Receivership Prediction dataset**

| Property | Value |
|---|---|
| App Component | `IS-PS-BEI` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPPREDICTDATA')/$value) |

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

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPPREDICTDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RECEIVERSHIPPREDICTDATA')/$value)*

```abap
@AbapCatalog.sqlViewName: 'CRCVRSHIPPREDICT'
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
@EndUserText.label: 'Risk of Receivership Prediction dataset'
define view C_ReceivershipPredictData as select from P_TF_RECEIVERSHIP(P_SAPClient : $session.client , P_DatasetType : 'P', P_BalanceFlag: 'X') {
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
