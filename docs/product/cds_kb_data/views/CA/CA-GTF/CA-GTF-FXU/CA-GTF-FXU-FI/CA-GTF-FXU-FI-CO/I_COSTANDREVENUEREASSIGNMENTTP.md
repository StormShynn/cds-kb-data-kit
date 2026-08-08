---
name: I_COSTANDREVENUEREASSIGNMENTTP
description: "Costandrevenuereassignmenttp"
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
# I_COSTANDREVENUEREASSIGNMENTTP

**Costandrevenuereassignmenttp**

| Property | Value |
|---|---|
| App Component | `CA-GTF-FXU-FI-CO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FiscalYear` | ✓ | |  |  |  |  |
| `ReferenceDocument` | ✓ | |  |  |  |  |
| `ControllingArea` | ✓ | |  |  |  |  |
| `ReferenceDocumentType` | ✓ | |  |  |  |  |
| `ReferenceDocumentContext` | ✓ | |  |  |  |  |
| `FiscalYearForEdit` |  | |  |  |  |  |
| `ReferenceDocumentForEdit` |  | |  |  |  |  |
| `ControllingAreaForEdit` |  | |  |  |  |  |
| `ReferenceDocumentTypeForEdit` |  | |  |  |  |  |
| `ReferenceDocumentContextFoEd` |  | |  |  |  |  |
| `AccountingDocumentHeaderText` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `PostingDate` |  | |  |  |  |  |
| `FiscalPeriod` |  | |  |  |  |  |
| `FiscalYearPeriod` |  | |  |  |  |  |
| `AccountingDocumentCreationDate` |  | |  |  |  |  |
| `AccountingDocCreatedByUser` |  | |  |  |  |  |
| `IsReversal` |  | |  |  |  |  |
| `IsReversed` |  | |  |  |  |  |
| `ControllingDocumentStatus` |  | |  |  |  |  |
| `AllocationPostingType` |  | |  |  |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `ReversalReferenceDocument` |  | |  |  |  |  |
| `ReversedReferenceDocument` |  | |  |  |  |  |
| `GlobalCurrency` |  | |  |  |  |  |
| `TotalAmountInGlobalCurrency` |  | |  |  |  |  |
| `AccountingDocumentType` |  | |  |  |  |  |
| `ControllingBusTransacType` |  | |  |  |  |  |
| `CostRevenueReassignmentType` |  | |  |  |  |  |
| `_Item` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #NOT_REQUIRED
}
@EndUserText.label: 'Reassign Cost and Revenues - TP'
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions: true
@ObjectModel: {
  modelingPattern: #TRANSACTIONAL_INTERFACE,
  sapObjectNodeType.name: 'CostAndRevenueReassignment', 
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
  usageType: {
    serviceQuality: #C,
    sizeCategory: #XXL,
    dataClass: #TRANSACTIONAL
  }
}
@OData.entityType.name:'CostAndRevenueReassignment_Type'
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define root view entity I_CostAndRevenueReassignmentTP provider contract transactional_interface
  as projection on R_CostAndRevenueReassignmentTP
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
          
          ReversalReferenceDocument,
          ReversedReferenceDocument, 
              
          GlobalCurrency,          
          @Semantics: { amount : {currencyCode: 'GlobalCurrency'} }
          TotalAmountInGlobalCurrency, 
                   
          AccountingDocumentType,  
          ControllingBusTransacType,
          CostRevenueReassignmentType,
          
          /*Associations*/
          _Item : redirected to composition child I_CostAndRevnReassgmtItemTP
}
```
