---
name: I_DIRECTACTIVITYALLOCATIONTP_2
description: Directactivityallocationtp 2
app_component: CA-GTF-FXU-FI-CO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-GTF
  - CA-GTF-FXU
  - interface-view
  - transactional-processing
  - component:CA-GTF-FXU-FI-CO
  - lob:Cross-Application Components
---
# I_DIRECTACTIVITYALLOCATIONTP_2

**Directactivityallocationtp 2**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FiscalYear` | `FiscalYear` |
| key `ReferenceDocument` | `ReferenceDocument` |
| key `ControllingArea` | `ControllingArea` |
| key `ReferenceDocumentType` | `ReferenceDocumentType` |
| key `ReferenceDocumentContext` | `ReferenceDocumentContext` |
| `FiscalYearForEdit` | `FiscalYearForEdit` |
| `ReferenceDocumentForEdit` | `ReferenceDocumentForEdit` |
| `ControllingAreaForEdit` | `ControllingAreaForEdit` |
| `ReferenceDocumentTypeForEdit` | `ReferenceDocumentTypeForEdit` |
| `ReferenceDocumentContextFoEd` | `ReferenceDocumentContextFoEd` |
| `AccountingDocumentHeaderText` | `AccountingDocumentHeaderText` |
| `DocumentDate` | `DocumentDate` |
| `PostingDate` | `PostingDate` |
| `FiscalPeriod` | `FiscalPeriod` |
| `FiscalYearPeriod` | `FiscalYearPeriod` |
| `AccountingDocumentCreationDate` | `AccountingDocumentCreationDate` |
| `AccountingDocCreatedByUser` | `AccountingDocCreatedByUser` |
| `IsReversal` | `IsReversal` |
| `IsReversed` | `IsReversed` |
| `ControllingDocumentStatus` | `ControllingDocumentStatus` |
| `AllocationPostingType` | `AllocationPostingType` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `PredecessorReferenceDocument` | `PredecessorReferenceDocument` |
| `ReversalReferenceDocument` | `ReversalReferenceDocument` |
| `ReversedReferenceDocument` | `ReversedReferenceDocument` |
| `GlobalCurrency` | `GlobalCurrency` |
| `TotalAmountInGlobalCurrency` | `} TotalAmountInGlobalCurrency` |
| `AccountingDocumentType` | `AccountingDocumentType` |
| `ControllingBusTransacType` | `ControllingBusTransacType` |
| `_Item` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Direct Activity Allocation - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'AccountingActivityAllocation', 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL
  }
}
@OData.entityType.name:'ActivityAllocation_Type'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}

define root view entity I_DirectActivityAllocationTP_2
  provider contract transactional_interface
  as projection on R_DirectActivityAllocationTP  

{  
  key     FiscalYear,
  key     ReferenceDocument,
  key     ControllingArea,
  key     ReferenceDocumentType,
  key     ReferenceDocumentContext,

          @Semantics.fiscal.year: true
          @ObjectModel.editableFieldFor: 'FiscalYear'
          FiscalYearForEdit,
          @ObjectModel.editableFieldFor: 'ReferenceDocument'
          ReferenceDocumentForEdit,
          @ObjectModel.editableFieldFor: 'ControllingArea'
          ControllingAreaForEdit,
          @ObjectModel.editableFieldFor: 'ReferenceDocumentType'
          ReferenceDocumentTypeForEdit,
          @ObjectModel.editableFieldFor: 'ReferenceDocumentContext'
          ReferenceDocumentContextFoEd,

          AccountingDocumentHeaderText,          
          DocumentDate,
          PostingDate,
          @Semantics.fiscal.period: true
          FiscalPeriod,
          @Semantics.fiscal.yearPeriod: true
          FiscalYearPeriod,
          AccountingDocumentCreationDate,
          AccountingDocCreatedByUser,
          IsReversal,
          IsReversed,
          ControllingDocumentStatus,
          AllocationPostingType,
          ExchangeRateDate,
          PredecessorReferenceDocument,
          ReversalReferenceDocument,
          ReversedReferenceDocument,       
          //SuccessorReferenceDocument, Currently empty          
          GlobalCurrency,          
          @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
          TotalAmountInGlobalCurrency,          
          AccountingDocumentType,  
          ControllingBusTransacType, 

          /* Associations */
          _Item : redirected to composition child I_DrctActyAllocationItemTP_2

}
```
