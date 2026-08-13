---
name: I_ARDISPUTECASETP
description: "Ardisputecasetp"
semantic_vi: "View Ardisputecasetp hiển thị dữ liệu tài chính liên quan đến các trường hợp khiếu nại, bao gồm các khoản tiền gốc và bị khiếu nại, và được sử dụng để xử lý và quản lý khiếu nại."
keywords:
  - "dispute case"
  - "dispute case view"
  - "financial data"
  - "disputed amount"
  - "original amount"
  - "dispute management"
  - "trường hợp khiếu nại"
  - "dữ liệu tài chính"
  - "khoản tiền bị khiếu nại"
  - "khoản tiền gốc"
  - "quản lý khiếu nại"
semantic_en: "The Ardisputecasetp view exposes financial data related to dispute cases, including original and disputed amounts, and is used to process and manage disputes."
app_component: FIN-FIO-CCD-COL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - interface-view
  - transactional-processing
  - dispute
  - component:FIN-FIO-CCD-COL-2CL
  - lob:Other
---
# I_ARDISPUTECASETP

**Ardisputecasetp**

| Property | Value |
|---|---|
| App Component | `FIN-FIO-CCD-COL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DisputeCaseUUID` | ✓ | |  |  |  |  |
| `DisputeCaseCoordinator` |  | |  |  |  |  |
| `DisputeCaseRootCause` |  | |  |  |  |  |
| `CaseProcessingDeadlineDate` |  | |  |  |  |  |
| `OriginalAmount` |  | |  |  |  |  |
| `DisputedAmount` |  | |  |  |  |  |
| `PaidAmount` |  | |  |  |  |  |
| `CreditedAmount` |  | |  |  |  |  |
| `WriteOffAmount` |  | |  |  |  |  |
| `ManuallyClearedAmount` |  | |  |  |  |  |
| `DisputeCaseCurrency` |  | |  |  |  |  |
| `CustomerDisputedAmount` |  | |  |  |  |  |
| `CustomerDisputedCurrency` |  | |  |  |  |  |
| `ContactPersonName` |  | |  |  |  |  |
| `ContactPersonEmailAddress` |  | |  |  |  |  |
| `ContactPersonPhoneNumber` |  | |  |  |  |  |
| `Customer` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `CaseType` |  | |  |  |  |  |
| `CaseID` |  | |  |  |  |  |
| `CaseExternalReference` |  | |  |  |  |  |
| `CaseCreatedBy` |  | |  |  |  |  |
| `CaseCreatedOn` |  | |  |  |  |  |
| `CaseLastChangedBy` |  | |  |  |  |  |
| `CaseLastChangedOn` |  | |  |  |  |  |
| `CaseClosedBy` |  | |  |  |  |  |
| `CaseClosedTime` |  | |  |  |  |  |
| `CasePlannedCloseDate` |  | |  |  |  |  |
| `CaseProcessor` |  | |  |  |  |  |
| `CaseResponsible` |  | |  |  |  |  |
| `CaseTitle` |  | |  |  |  |  |
| `CaseEscalationReason` |  | |  |  |  |  |
| `CaseCategory` |  | |  |  |  |  |
| `CasePriority` |  | |  |  |  |  |
| `CaseStatus` |  | |  |  |  |  |
| `CaseSystemStatus` |  | |  |  |  |  |
| `CaseReason` |  | |  |  |  |  |

## Source Code

```abap
@EndUserText.label: 'Accounts Reveivables Dispute Case - TP'

@Metadata.ignorePropagatedAnnotations:true
@AccessControl.authorizationCheck: #PRIVILEGED_ONLY

@ObjectModel: {
   sapObjectNodeType:{
      name: 'DisputeCase'},
   modelingPattern:       #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: { serviceQuality: #A,
                sizeCategory: #L,
                dataClass: #TRANSACTIONAL },
   semanticKey: [ 'DisputeCaseUUID', 'CaseID' ],
   representativeKey: 'DisputeCaseUUID'
 }

@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_ARDisputeCaseTP
  provider contract transactional_interface
  as projection on R_ARDisputeCaseTP as DisputeCase
{
  key DisputeCaseUUID,
      DisputeCaseCoordinator,
      DisputeCaseRootCause,
      CaseProcessingDeadlineDate,
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      OriginalAmount,
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      DisputedAmount,
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      PaidAmount,
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      CreditedAmount,
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      WriteOffAmount,
      @Semantics: { amount: { currencyCode: 'DisputeCaseCurrency' } }
      ManuallyClearedAmount,
      DisputeCaseCurrency,
      @Semantics: { amount: { currencyCode: 'CustomerDisputedCurrency' } }
      CustomerDisputedAmount,
      CustomerDisputedCurrency,
      ContactPersonName,
      ContactPersonEmailAddress,
      ContactPersonPhoneNumber,
      Customer,
      CompanyCode,
      CaseType,
      CaseID,
      CaseExternalReference,
      CaseCreatedBy,
      CaseCreatedOn,
      CaseLastChangedBy,
      CaseLastChangedOn,
      CaseClosedBy,
      CaseClosedTime,
      CasePlannedCloseDate,
      CaseProcessor,
      CaseResponsible,
      CaseTitle,
      CaseEscalationReason,
      CaseCategory,
      CasePriority,
      CaseStatus,
      CaseSystemStatus,
      CaseReason
}
```
