---
name: I_CAWRITEOFFDOCUMENT
description: "Cawriteoffdocument"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - document
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CAWRITEOFFDOCUMENT

**Cawriteoffdocument**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAWriteOffDocumentNumber` | ✓ | |  | `CADocumentNumber` |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `CreationTime` |  | |  |  |  |  |
| `LastChangeDate` |  | |  |  |  |  |
| `LastChangeTime` |  | |  |  |  |  |
| `CATaxCompanyCode` |  | |  |  |  |  |
| `CAStorageLocationOfTaxSuplmnt` |  | |  |  |  |  |
| `CATaxCodeWasExchanged` |  | |  |  |  |  |
| `TaxReportingDate` |  | |  |  |  |  |
| `CAReconciliationKey` |  | |  |  |  |  |
| `CASeparateDocIsCreatedInGL` |  | |  |  |  |  |
| `CARequestedPeriodForGLTransfer` |  | |  |  |  |  |
| `CAApplicationArea` |  | |  |  |  |  |
| `CADocumentType` |  | |  |  |  |  |
| `CADocumentOriginCode` |  | |  |  |  |  |
| `TransactionCurrency` |  | |  |  |  |  |
| `DocumentDate` |  | |  |  |  |  |
| `CAWriteOffDate` |  | |  | `CAPostingDate` |  |  |
| `ExchangeRateDate` |  | |  |  |  |  |
| `CAReferenceDocument` |  | |  |  |  |  |
| `CAReturnReason` |  | |  |  |  |  |
| `CAWriteOffReason` |  | |  | `CAPostingReason` |  |  |
| `ReferenceDocumentType` |  | |  |  |  |  |
| `OriginalReferenceDocument` |  | |  |  |  |  |
| `CAReversedDocumentNumber` |  | |  |  |  |  |
| `CAClearingInformation` |  | |  |  |  |  |
| `CAReversalDocumentNumber` |  | |  |  |  |  |
| `CADocumentSupplements` |  | |  |  |  |  |
| `LogicalSystem` |  | |  |  |  |  |
| `CAWorkflowCheckReason` |  | |  |  |  |  |
| `CAWorkflowCheckProcess` |  | |  |  |  |  |
| `CADocumentTransactionClass` |  | |  |  |  |  |
| `CADocContainsCashFlowItems` |  | |  |  |  |  |
| `CADocumentClass` |  | |  |  |  |  |
| `CADocumentVersion` |  | |  |  |  |  |
| `IsIndividualPosting` |  | |  |  |  |  |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAClearingInformation` | | ✓ | | | | |
| `_CADocTransactionClass` | | ✓ | | | | |
| `_CADocumentClass` | | ✓ | | | | |
| `_CADocumentOriginCode` | | ✓ | | | | |
| `_CADocumentSupplement` | | ✓ | | | | |
| `_CADocumentType` | | ✓ | | | | |
| `_CADocumentVersion` | | ✓ | | | | |
| `_CAPostingReason` | | ✓ | | | | |
| `_CARequestedSpecialPeriod` | | ✓ | | | | |
| `_CAReturnReason` | | ✓ | | | | |
| `_CATaxSupplementStorageLoc` | | ✓ | | | | |
| `_CATaxCompanyCode` | | ✓ | | | | |
| `_CAWorkflowCheckProcess` | | ✓ | | | | |
| `_CAWorkflowCheckReason` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CADocumentHeader` | [1..1] |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]

@AccessControl.authorizationCheck: #MANDATORY
                                                                    

@Analytics: { dataCategory: #DIMENSION,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture: { mapping: [ { table : 'dfkkko' , 
                                                                        role  : #MAIN, 
                                                                        viewElement : ['CAWriteOffDocumentNumber'], 
                                                                        tableElement : ['opbel' ] } ] } }
 }


@EndUserText.label: 'Contract Accounting Write Off Document'

@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true

@ObjectModel: { modelingPattern:#ANALYTICAL_DIMENSION,
                representativeKey: 'CAWriteOffDocumentNumber',
                sapObjectNodeType.name: 'ContrAcctgWriteOff',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #ANALYTICAL_DIMENSION,
                                         #ANALYTICAL_PROVIDER,
                                         #EXTRACTION_DATA_SOURCE  
] }

@ObjectModel.usageType: { serviceQuality: #A,
                          sizeCategory: #XXL,
                          dataClass: #TRANSACTIONAL }

@VDM.viewType: #COMPOSITE

define view entity I_CAWriteOffDocument
  as select from I_CADocument

  // Key User Extensibility. Is registerd in transaction SCFD_REGISTRY. Do not change E_CADocumentHeader or alias _Extension without adopting CFD regestry entry
  association [1..1] to E_CADocumentHeader as _Extension on  $projection.CAWriteOffDocumentNumber = _Extension.CADocumentNumber
  
{
  key CADocumentNumber as CAWriteOffDocumentNumber,

      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangeDate,
      LastChangeTime,
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
      CAPostingDate    as CAWriteOffDate,
      ExchangeRateDate,
      CAReferenceDocument,
      CAReturnReason,
      CAPostingReason  as CAWriteOffReason,
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

      /* Associations */
      _CAApplicationArea,
      _CAClearingInformation,
      _CADocTransactionClass,
      _CADocumentClass,
      _CADocumentOriginCode,
      _CADocumentSupplement,
      _CADocumentType,
      _CADocumentVersion,
      _CAPostingReason,
      _CARequestedSpecialPeriod,
      _CAReturnReason,
      _CATaxSupplementStorageLoc,
      _CATaxCompanyCode,
      _CAWorkflowCheckProcess,
      _CAWorkflowCheckReason,
      _TransactionCurrency

}
where
     CADocumentOriginCode = '16'
  or CADocumentOriginCode = '17'
```
