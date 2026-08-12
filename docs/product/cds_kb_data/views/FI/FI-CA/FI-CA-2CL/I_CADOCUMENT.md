---
name: I_CADOCUMENT
description: "Cadocument"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CADOCUMENT

**Cadocument**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CADocumentNumber` | ✓ | |  | `opbel` |  |  |
| `CAReconciliationKey` |  | |  | `fikey` |  |  |
| `CAApplicationArea` |  | |  | `applk` |  |  |
| `CADocumentType` |  | |  | `blart` |  |  |
| `CADocumentOriginCode` |  | |  | `herkf` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `CreationDate` |  | |  | `cpudt` |  |  |
| `CreationTime` |  | |  | `cputm` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `DocumentDate` |  | |  | `bldat` |  |  |
| `CAPostingDate` |  | |  | `budat` |  |  |
| `ExchangeRateDate` |  | |  | `wwert` |  |  |
| `CAReferenceDocument` |  | |  | `xblnr` |  |  |
| `CAReturnReason` |  | |  | `rlgrd` |  |  |
| `CAPostingReason` |  | |  | `abgrd` |  |  |
| `CASeparateDocIsCreatedInGL` |  | |  | `xeibh` |  |  |
| `ReferenceDocumentType` |  | |  | `awtyp` |  |  |
| `OriginalReferenceDocument` |  | |  | `awkey` |  |  |
| `CAReversedDocumentNumber` |  | |  | `stbel` |  |  |
| `CADocumentClass` |  | |  | `bltyp` |  |  |
| `CAClearingInformation` |  | |  | `aginf` |  |  |
| `CATaxCompanyCode` |  | |  | `stbuk` |  |  |
| `CAReversalDocumentNumber` |  | |  | `storb` |  |  |
| `CADocumentSupplements` |  | |  | `appdx` |  |  |
| `LogicalSystem` |  | |  | `awsys` |  |  |
| `CADocumentVersion` |  | |  | `versn` |  |  |
| `CAWorkflowCheckReason` |  | |  | `c4eye` |  |  |
| `CAWorkflowCheckProcess` |  | |  | `c4eyp` |  |  |
| `CADocumentTransactionClass` |  | |  | `tatyp` |  |  |
| `CADocumentTypeForGLTransfer` |  | |  | `hbbla` |  |  |
| `CADocContainsCashFlowItems` |  | |  | `xcsha` |  |  |
| `CAStorageLocationOfTaxSuplmnt` |  | |  | `utloc` |  |  |
| `CATaxCodeWasExchanged` |  | |  | `xtxch` |  |  |
| `TaxReportingDate` |  | |  | `vatdate` |  |  |
| `TaxFulfillmentDate` |  | |  | `fulfilldate` |  |  |
| `CARequestedPeriodForGLTransfer` |  | |  | `wnper` |  |  |
| `IsIndividualPosting` |  | |  | `xsing` |  |  |
| `CADocumentIsAged` |  | |  | `xdaag` |  |  |
| `LastChangeDate` |  | |  | `chdate` |  |  |
| `LastChangeTime` |  | |  | `chtime` |  |  |
| `CAInvcgRefPostingDocType` |  | |  | `cadoctype` |  |  |
| `CAInvoicingDocument` |  | |  | `invdocno` |  |  |
| `CA1stCountrySpecificReference` |  | |  | `glo_ref1_hd` |  |  |
| `CAFirstCountrySpecificDate` |  | |  | `glo_dat1_hd` |  |  |
| `CAClassificationKey` |  | |  | `opord` |  |  |
| `_AccountingDocType` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAClearingInformation` | | ✓ | | | | |
| `_CADocTransactionClass` | | ✓ | | | | |
| `_CADocumentClass` | | ✓ | | | | |
| `_CADocumentOriginCode` | | ✓ | | | | |
| `_CADocumentSupplement` | | ✓ | | | | |
| `_CADocumentType` | | ✓ | | | | |
| `_CADocumentVersion` | | ✓ | | | | |
| `_CAInvcgDocument` | | ✓ | | | | |
| `_CAInvcgRefPostgDocType` | | ✓ | | | | |
| `_CAPostingReason` | | ✓ | | | | |
| `_CAReturnReason` | | ✓ | | | | |
| `_CARequestedSpecialPeriod` | | ✓ | | | | |
| `_CATaxSupplementStorageLoc` | | ✓ | | | | |
| `_CAWorkflowCheckReason` | | ✓ | | | | |
| `_CAWorkflowCheckProcess` | | ✓ | | | | |
| `_CATaxCompanyCode` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AccountingDocType` | `I_AccountingDocumentType` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [1..1] |
| `_CAClearingInformation` | `I_CAClearingInformation` | [0..1] |
| `_CADocTransactionClass` | `I_CADocTransactionClass` | [1..1] |
| `_CADocumentClass` | `I_CADocumentClass` | [0..1] |
| `_CADocumentOriginCode` | `I_CADocumentOriginCode` | [1..1] |
| `_CADocumentSupplement` | `I_CADocumentSupplement` | [0..1] |
| `_CADocumentType` | `I_CADocumentType` | [1..1] |
| `_CADocumentVersion` | `I_CADocumentVersion` | [0..1] |
| `_CAInvcgDocument` | `I_CAInvcgDocHeader` | [0..1] |
| `_CAInvcgRefPostgDocType` | `I_CAInvcgRefPostgDocTyp` | [0..1] |
| `_CAPostingReason` | `I_CAPostingReason` | [0..1] |
| `_CAReturnReason` | `I_CAReturnReason` | [0..*] |
| `_CARequestedSpecialPeriod` | `I_CARequestedSpecialPeriod` | [1..1] |
| `_CATaxSupplementStorageLoc` | `I_CATaxSupplementStorageLoc` | [0..1] |
| `_CAWorkflowCheckReason` | `I_CAWorkflowCheckReason` | [0..1] |
| `_CAWorkflowCheckProcess` | `I_CAWorkflowCheckProcess` | [0..1] |
| `_CATaxCompanyCode` | `I_CompanyCode` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [1..1] |
| `_CreatedByUser` | `I_User` | [0..1] |
| `_Extension` | `E_CADocumentHeader` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@Analytics.dataExtraction.enabled: true

@EndUserText.label: 'Contract Accounting Document'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADocumentNumber',
                sapObjectNodeType.name: 'ContrAcctgDocument',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #EXTRACTION_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { serviceQuality: #A,
                             sizeCategory: #XXL,
                             dataClass: #TRANSACTIONAL } }

@VDM.viewType: #BASIC

define view entity I_CADocument
  as select from dfkkko

  association [0..1] to I_AccountingDocumentType    as _AccountingDocType         on  $projection.CADocumentTypeForGLTransfer = _AccountingDocType.AccountingDocumentType
  association [1..1] to I_CAApplicationArea         as _CAApplicationArea         on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CAClearingInformation     as _CAClearingInformation     on  $projection.CAClearingInformation = _CAClearingInformation.CAClearingInformation
  association [1..1] to I_CADocTransactionClass     as _CADocTransactionClass     on  $projection.CADocumentTransactionClass = _CADocTransactionClass.CADocumentTransactionClass
  association [0..1] to I_CADocumentClass           as _CADocumentClass           on  $projection.CADocumentClass = _CADocumentClass.CADocumentClass
  association [1..1] to I_CADocumentOriginCode      as _CADocumentOriginCode      on  $projection.CADocumentOriginCode = _CADocumentOriginCode.CADocumentOriginCode
  association [0..1] to I_CADocumentSupplement      as _CADocumentSupplement      on  $projection.CADocumentSupplements = _CADocumentSupplement.CADocumentSupplements
  association [1..1] to I_CADocumentType            as _CADocumentType            on  $projection.CADocumentType    = _CADocumentType.CADocumentType
                                                                                  and $projection.CAApplicationArea = _CADocumentType.CAApplicationArea
  association [0..1] to I_CADocumentVersion         as _CADocumentVersion         on  $projection.CADocumentVersion = _CADocumentVersion.CADocumentVersion
  association [0..1] to I_CAInvcgDocHeader          as _CAInvcgDocument           on  $projection.CAInvoicingDocument = _CAInvcgDocument.CAInvoicingDocument
  association [0..1] to I_CAInvcgRefPostgDocTyp     as _CAInvcgRefPostgDocType    on  $projection.CAInvcgRefPostingDocType = _CAInvcgRefPostgDocType.CAInvcgRefPostingDocType
  association [0..1] to I_CAPostingReason           as _CAPostingReason           on  $projection.CADocumentOriginCode = _CAPostingReason.CADocumentOriginCode
                                                                                  and $projection.CAPostingReason      = _CAPostingReason.CAPostingReason
  association [0..*] to I_CAReturnReason            as _CAReturnReason            on  $projection.CAReturnReason = _CAReturnReason.CAReturnReason
                                                                                  and _CAReturnReason.HouseBank  is not initial
  association [1..1] to I_CARequestedSpecialPeriod  as _CARequestedSpecialPeriod  on  $projection.CARequestedPeriodForGLTransfer = _CARequestedSpecialPeriod.CARequestedPeriodForGLTransfer
  association [0..1] to I_CATaxSupplementStorageLoc as _CATaxSupplementStorageLoc on  $projection.CAStorageLocationOfTaxSuplmnt = _CATaxSupplementStorageLoc.CAStorageLocationOfTaxSuplmnt
  association [0..1] to I_CAWorkflowCheckReason     as _CAWorkflowCheckReason     on  $projection.CAWorkflowCheckReason = _CAWorkflowCheckReason.CAWorkflowCheckReason
  association [0..1] to I_CAWorkflowCheckProcess    as _CAWorkflowCheckProcess    on  $projection.CAWorkflowCheckProcess = _CAWorkflowCheckProcess.CAWorkflowCheckProcess
  association [0..1] to I_CompanyCode               as _CATaxCompanyCode          on  $projection.CATaxCompanyCode = _CATaxCompanyCode.CompanyCode
  association [1..1] to I_Currency                  as _TransactionCurrency       on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_User                      as _CreatedByUser             on  $projection.CreatedByUser = _CreatedByUser.UserID
  // Key User Extensibility. Is registerd in transaction SCFD_REGISTRY. Do not change E_CADocumentHeader or alias _Extension without adopting CFD regestry entry
  association [1..1] to E_CADocumentHeader          as _Extension                 on  $projection.CADocumentNumber = _Extension.CADocumentNumber

{
  key opbel       as CADocumentNumber,

      fikey       as CAReconciliationKey,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk       as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CADocumentType'
      blart       as CADocumentType,
      @ObjectModel.foreignKey.association: '_CADocumentOriginCode'
      herkf       as CADocumentOriginCode,
      @ObjectModel.foreignKey.association: '_CreatedByUser'
      ernam       as CreatedByUser,
      cpudt       as CreationDate,
      cputm       as CreationTime,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers       as TransactionCurrency,
      bldat       as DocumentDate,
      budat       as CAPostingDate,
      wwert       as ExchangeRateDate,
      xblnr       as CAReferenceDocument,
      @ObjectModel.foreignKey.association: '_CAReturnReason'
      rlgrd       as CAReturnReason,
      @ObjectModel.foreignKey.association: '_CAPostingReason'
      abgrd       as CAPostingReason,
      xeibh       as CASeparateDocIsCreatedInGL,
      //xbwer
      awtyp       as ReferenceDocumentType,
      awkey       as OriginalReferenceDocument,
      stbel       as CAReversedDocumentNumber,
      //stmet
      @ObjectModel.foreignKey.association: '_CADocumentClass'
      bltyp       as CADocumentClass,
      @ObjectModel.foreignKey.association: '_CAClearingInformation'
      aginf       as CAClearingInformation,
      @ObjectModel.foreignKey.association: '_CATaxCompanyCode'
      stbuk       as CATaxCompanyCode,
      storb       as CAReversalDocumentNumber,
      @ObjectModel.foreignKey.association: '_CADocumentSupplement'
      appdx       as CADocumentSupplements,
      awsys       as LogicalSystem,
      @ObjectModel.foreignKey.association: '_CADocumentVersion'
      versn       as CADocumentVersion,
      @ObjectModel.foreignKey.association: '_CAWorkflowCheckReason'
      c4eye       as CAWorkflowCheckReason,
      @ObjectModel.foreignKey.association: '_CAWorkflowCheckProcess'
      c4eyp       as CAWorkflowCheckProcess,
      @ObjectModel.foreignKey.association: '_CADocTransactionClass'
      tatyp       as CADocumentTransactionClass,
      @ObjectModel.foreignKey.association: '_AccountingDocType'
      hbbla       as CADocumentTypeForGLTransfer,
      xcsha       as CADocContainsCashFlowItems,
      @ObjectModel.foreignKey.association: '_CATaxSupplementStorageLoc'
      utloc       as CAStorageLocationOfTaxSuplmnt,
      xtxch       as CATaxCodeWasExchanged,
      vatdate     as TaxReportingDate,
      fulfilldate as TaxFulfillmentDate,
      @ObjectModel.foreignKey.association: '_CARequestedSpecialPeriod'
      wnper       as CARequestedPeriodForGLTransfer,
      xsing       as IsIndividualPosting,
      //keypp
      //_dataging
      xdaag       as CADocumentIsAged,
      //trsla
      //locok
      //bttype
      //cbttype
      //closingstep
      chdate      as LastChangeDate,
      chtime      as LastChangeTime,
      @ObjectModel.foreignKey.association: '_CAInvcgRefPostgDocType'
      cadoctype   as CAInvcgRefPostingDocType,
      @ObjectModel.foreignKey.association: '_CAInvcgDocument'
      invdocno    as CAInvoicingDocument,
      glo_ref1_hd as CA1stCountrySpecificReference,
      glo_dat1_hd as CAFirstCountrySpecificDate,
      opord       as CAClassificationKey,

      /* associations */
      _AccountingDocType,
      _CAApplicationArea,
      _CAClearingInformation,
      _CADocTransactionClass,
      _CADocumentClass,
      _CADocumentOriginCode,
      _CADocumentSupplement,
      _CADocumentType,
      _CADocumentVersion,
      _CAInvcgDocument,
      _CAInvcgRefPostgDocType,
      _CAPostingReason,
      _CAReturnReason,
      _CARequestedSpecialPeriod,
      _CATaxCompanyCode,
      _CATaxSupplementStorageLoc,
      _CAWorkflowCheckProcess,
      _CAWorkflowCheckReason,
      _CreatedByUser,
      _TransactionCurrency
}
```
