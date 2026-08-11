---
name: I_CADOCUMENTCUBE
description: "Contract Accounting Document - Cube"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTCUBE')/$value
semantic_en: "Contract Accounting Document - Cube"
semantic_vi: "Contract Accounting Document - Cube — CDS view giao diện (transactional data) dựa trên I_CADocument."
keywords:
  - "Contract Accounting Document - Cube"
  - "contract"
  - "accounting"
  - "document"
  - "cube"
  - "number"
  - "created"
  - "user"
  - "creation"
  - "date"
  - "time"
  - "company"
  - "code"
tags:
  - FI
  - account
  - bo:journalentry
  - component:FI-CA-2CL
  - contract
  - document
  - FI-CA
  - FI-CA-2CL
  - interface-view
  - lob:cross_application components
  - lob:finance
---
# I_CADOCUMENTCUBE

**Contract Accounting Document - Cube**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTCUBE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentNumber` | ✓ | |  |  | `CHAR(12)` | Number of a FI-CA Document |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `CATaxCompanyCode` |  | |  |  | `CHAR(4)` | Tax Company Code |
| `CAStorageLocationOfTaxSuplmnt` |  | |  |  | `CHAR(2)` | Storage Location of Tax Supplement for Telco Tax (U.S.A) |
| `CATaxCodeWasExchanged` |  | |  |  | `CHAR(1)` | Tax Codes Were Exchanged |
| `TaxReportingDate` |  | |  |  | `DATS(8)` | Tax Reporting Date |
| `CAReconciliationKey` |  | |  |  | `CHAR(12)` | Reconciliation Key for General Ledger |
| `CASeparateDocIsCreatedInGL` |  | |  |  | `CHAR(1)` | Create Separate Document in General Ledger |
| `CARequestedPeriodForGLTransfer` |  | |  |  | `NUMC(2)` | Requested Special Period for Transfer to General Ledger |
| `CAApplicationArea` |  | |  |  | `CHAR(1)` | Application Area |
| `CADocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `CADocumentOriginCode` |  | |  |  | `CHAR(2)` | Document Origin Key |
| `TransactionCurrency` |  | |  |  | `CUKY(5)` | Transaction Currency |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `CAPostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `ExchangeRateDate` |  | |  |  | `DATS(8)` | Translation Date |
| `CAReferenceDocument` |  | |  |  | `CHAR(16)` | Reference Document Number |
| `CAReturnReason` |  | |  |  | `CHAR(3)` | Return Reason |
| `CAPostingReason` |  | |  |  | `CHAR(2)` | Posting Reason (For Write-Offs And Transfer Postings) |
| `ReferenceDocumentType` |  | |  |  | `CHAR(5)` | Reference Transaction |
| `OriginalReferenceDocument` |  | |  |  | `CHAR(20)` | Object Key |
| `CAReversedDocumentNumber` |  | |  |  | `CHAR(12)` | Number of Reversed Document |
| `CAClearingInformation` |  | |  |  | `CHAR(1)` | Clearing Information |
| `CAReversalDocumentNumber` |  | |  |  | `CHAR(12)` | Number of Reversal Document |
| `CADocumentSupplements` |  | |  |  | `CHAR(1)` | Existing document supplements |
| `LogicalSystem` |  | |  |  | `CHAR(10)` | Logical System of Source Document |
| `CAWorkflowCheckReason` |  | |  |  | `CHAR(2)` | Check Reason for Workflows Acc. to Dual Control Principle |
| `CAWorkflowCheckProcess` |  | |  |  | `CHAR(1)` | Editing Process to Be Confirmed |
| `CADocumentTransactionClass` |  | |  |  | `CHAR(1)` | Transaction Class of Document |
| `CADocContainsCashFlowItems` |  | |  |  | `CHAR(1)` | Document Contains Assignments from Cash Flows |
| `CADocumentClass` |  | |  |  | `CHAR(1)` | Document Class |
| `CADocumentVersion` |  | |  |  | `CHAR(3)` | Version Number |
| `IsIndividualPosting` |  | |  |  | `CHAR(1)` | Individual Posting |
| `CADocumentIsAged` |  | |  |  | `CHAR(1)` | Data Aging: Document was already in historical area |
| `_ApplArea` |  | |  | `_CAApplicationArea` |  |  |
| `_DocOriginCode` |  | |  | `_CADocumentOriginCode` |  |  |
| `_DocType` |  | |  | `_CADocumentType` |  |  |
| `_CompCode` |  | |  | `_CATaxCompanyCode` |  |  |
| `_WorkflowCheckProcess` |  | |  | `_CAWorkflowCheckProcess` |  |  |
| `_WorkflowCheckReason` |  | |  | `_CAWorkflowCheckReason` |  |  |
| `_Currency` |  | |  | `_TransactionCurrency` |  |  |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CADocumentHeader` | [1..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTCUBE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_CADOCUMENTCUBE')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]

@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics: { dataCategory: #CUBE,
              internalName: #LOCAL,
              dataExtraction: { enabled: true,
                                delta.changeDataCapture: { mapping:[ { table           : 'dfkkko',role: #MAIN,
                                                                       viewElement     : ['CADocumentNumber' ],
                                                                       tableElement    : ['opbel' ] } ] } } }

@EndUserText.label: 'Contract Accounting Document - Cube'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{ modelingPattern: #ANALYTICAL_CUBE,
               sapObjectNodeType.name: 'ContrAcctgDocument',
               supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #ANALYTICAL_PROVIDER  ],
               usageType:{ serviceQuality: #C,
                           sizeCategory: #XXL,
                           dataClass: #TRANSACTIONAL } }

@VDM.viewType: #COMPOSITE

define view entity I_CADocumentCube
  as select from I_CADocument
  
  // Key User Extensibility. Is registerd in transaction SCFD_REGISTRY. Do not change E_CADocumentHeader or alias _Extension without adopting CFD regestry entry
  association [1..1] to E_CADocumentHeader as _Extension on  $projection.CADocumentNumber = _Extension.CADocumentNumber

{
  key CADocumentNumber,
      CreatedByUser,
      CreationDate,
      CreationTime,
      @ObjectModel.foreignKey.association: '_CompCode'
      CATaxCompanyCode,
      CAStorageLocationOfTaxSuplmnt,
      CATaxCodeWasExchanged,
      TaxReportingDate,
      CAReconciliationKey,
      CASeparateDocIsCreatedInGL,
      CARequestedPeriodForGLTransfer,
      @ObjectModel.foreignKey.association: '_ApplArea'
      CAApplicationArea,
      @ObjectModel.foreignKey.association: '_DocType'
      CADocumentType,
      @ObjectModel.foreignKey.association: '_DocOriginCode'
      CADocumentOriginCode,
      @ObjectModel.foreignKey.association: '_Currency'
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
      @ObjectModel.foreignKey.association: '_WorkflowCheckReason'
      CAWorkflowCheckReason,
      @ObjectModel.foreignKey.association: '_WorkflowCheckProcess'
      CAWorkflowCheckProcess,
      CADocumentTransactionClass,
      CADocContainsCashFlowItems,
      CADocumentClass,
      CADocumentVersion,
      IsIndividualPosting,
      CADocumentIsAged,

      /* Associations */
      _CAApplicationArea      as _ApplArea,
      _CADocumentOriginCode   as _DocOriginCode,
      _CADocumentType         as _DocType,
      _CATaxCompanyCode       as _CompCode,
      _CAWorkflowCheckProcess as _WorkflowCheckProcess,
      _CAWorkflowCheckReason  as _WorkflowCheckReason,
      _TransactionCurrency    as _Currency
}
```
