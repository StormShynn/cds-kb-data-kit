---
name: I_CADOCUMENTTP
description: Cadocumenttp
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - transactional-processing
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADOCUMENTTP

**Cadocumenttp**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CADocumentNumber` | `CADocumentNumber` |
| `CreatedByUser` | `CreatedByUser` |
| `CreationDate` | `CreationDate` |
| `CreationTime` | `CreationTime` |
| `CATaxCompanyCode` | `CATaxCompanyCode` |
| `CAStorageLocationOfTaxSuplmnt` | `CAStorageLocationOfTaxSuplmnt` |
| `CATaxCodeWasExchanged` | `CATaxCodeWasExchanged` |
| `TaxReportingDate` | `TaxReportingDate` |
| `CAReconciliationKey` | `CAReconciliationKey` |
| `CASeparateDocIsCreatedInGL` | `CASeparateDocIsCreatedInGL` |
| `CARequestedPeriodForGLTransfer` | `CARequestedPeriodForGLTransfer` |
| `CAApplicationArea` | `CAApplicationArea` |
| `CADocumentType` | `CADocumentType` |
| `CADocumentOriginCode` | `CADocumentOriginCode` |
| `TransactionCurrency` | `TransactionCurrency` |
| `DocumentDate` | `DocumentDate` |
| `CAPostingDate` | `CAPostingDate` |
| `ExchangeRateDate` | `ExchangeRateDate` |
| `CAReferenceDocument` | `CAReferenceDocument` |
| `CAReturnReason` | `CAReturnReason` |
| `CAPostingReason` | `CAPostingReason` |
| `ReferenceDocumentType` | `ReferenceDocumentType` |
| `OriginalReferenceDocument` | `OriginalReferenceDocument` |
| `CAReversedDocumentNumber` | `CAReversedDocumentNumber` |
| `CAClearingInformation` | `CAClearingInformation` |
| `CAReversalDocumentNumber` | `CAReversalDocumentNumber` |
| `CADocumentSupplements` | `CADocumentSupplements` |
| `LogicalSystem` | `LogicalSystem` |
| `CAWorkflowCheckReason` | `CAWorkflowCheckReason` |
| `CAWorkflowCheckProcess` | `CAWorkflowCheckProcess` |
| `CADocumentTransactionClass` | `CADocumentTransactionClass` |
| `CADocContainsCashFlowItems` | `CADocContainsCashFlowItems` |
| `CADocumentClass` | `CADocumentClass` |
| `CADocumentVersion` | `CADocumentVersion` |
| `IsIndividualPosting` | `IsIndividualPosting` |
| `CADocumentIsAged` | `CADocumentIsAged` |
| `_BPItem` | *Association* |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK

@EndUserText.label: 'Document Header - TP'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern:        #TRANSACTIONAL_INTERFACE,
                representativeKey:      'CADocumentNumber',
                sapObjectNodeType.name: 'ContrAcctgDocument',
                supportedCapabilities:  [#TRANSACTIONAL_PROVIDER],
                usageType:              { dataClass: #TRANSACTIONAL,
                                          sizeCategory: #XXL,
                                          serviceQuality: #C } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        usage.type:              [#TRANSACTIONAL_PROCESSING_SERVICE],
        viewType:                #TRANSACTIONAL }

define root view entity I_CADocumentTP
  provider contract transactional_interface
  as projection on R_CADocumentTP as ContrAcctgDocument
{
      //I_CADocumentHeader
  key CADocumentNumber,
      CreatedByUser,
      CreationDate,
      CreationTime,
      CATaxCompanyCode,
      CAStorageLocationOfTaxSuplmnt,
      CATaxCodeWasExchanged,
      TaxReportingDate,
      CAReconciliationKey,
      CASeparateDocIsCreatedInGL,
      CARequestedPeriodForGLTransfer,
      CAApplicationArea,
      CADocumentType,
      CADocumentOriginCode,
      TransactionCurrency,
      DocumentDate,
      CAPostingDate,
      ExchangeRateDate,
      CAReferenceDocument,
      CAReturnReason,
      CAPostingReason,
      ReferenceDocumentType,
      OriginalReferenceDocument,
      CAReversedDocumentNumber,
      CAClearingInformation,
      CAReversalDocumentNumber,
      CADocumentSupplements,
      LogicalSystem,
      CAWorkflowCheckReason,
      CAWorkflowCheckProcess,
      CADocumentTransactionClass,
      CADocContainsCashFlowItems,
      CADocumentClass,
      CADocumentVersion,
      IsIndividualPosting,
      CADocumentIsAged,
      /* Associations */
      _BPItem : redirected to composition child I_CADocumentBPItemTP
}
```
