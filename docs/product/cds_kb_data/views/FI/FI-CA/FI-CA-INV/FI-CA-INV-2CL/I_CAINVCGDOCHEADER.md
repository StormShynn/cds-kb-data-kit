---
name: I_CAINVCGDOCHEADER
description: "Cainvcgdocheader"
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - FI-CA-INV
  - interface-view
  - header-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCHEADER

**Cainvcgdocheader**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CAInvoicingDocument` | ✓ | |  | `invdocno` |  |  |
| `CAApplicationArea` |  | |  | `applk` |  |  |
| `CAInvcgProcess` |  | |  | `inv_process` |  |  |
| `CAInvcgType` |  | |  | `inv_type` |  |  |
| `CAInvcgCategory` |  | |  | `inv_category` |  |  |
| `CAInvcgTechnicalDocumentType` |  | |  | `cast(techdoctype as techdoctype_gfn_kk preserving type)` |  |  |
| `CAInvcgTargetProcess` |  | |  | `targprocess` |  |  |
| `BusinessPartner` |  | |  | `cast(gpart as bu_partner preserving type)` |  |  |
| `ContractAccount` |  | |  | `vkont` |  |  |
| `CAInvcgMasterDataType` |  | |  | `mdcat` |  |  |
| `AltvContractAcctForCollvBills` |  | |  | `abwvk` |  |  |
| `CASubstituteDocumentNumber` |  | |  | `cast(abwbl as abwbl_gfn_kk preserving type )` |  |  |
| `CreatedByUser` |  | |  | `crname` |  |  |
| `CAInvcgCreationDate` |  | |  | `crdate` |  |  |
| `CAInvcgCreationTime` |  | |  | `crtime` |  |  |
| `CAInvcgDocCreationMode` |  | |  | `crmode` |  |  |
| `CAInvcgNmbrOfInvoicingDocItems` |  | |  | `recnum` |  |  |
| `CABllbleItmNumber` |  | |  | `cast(bit_number as bit_number_gfn_kk preserving type)` |  |  |
| `CAInvcgDocInternalNumber` |  | |  | `invrunno` |  |  |
| `CAReconciliationKey` |  | |  | `fikey` |  |  |
| `CAPostingDate` |  | |  | `budat` |  |  |
| `DocumentDate` |  | |  | `bldat` |  |  |
| `CANetDueDate` |  | |  | `faedn` |  |  |
| `CACashDiscountDueDate` |  | |  | `faeds` |  |  |
| `CACashDiscountRate` |  | |  | `sktpz` |  |  |
| `TransactionCurrency` |  | |  | `total_curr` |  |  |
| `CAAmountInTransactionCurrency` |  | |  | `total_amt` |  |  |
| `CAInvcgIsDocumentPosted` |  | |  | `invoiced` |  |  |
| `CAInvcgIsDocumentSimulated` |  | |  | `simulated` |  |  |
| `CAInvcgIsDocumentPreliminary` |  | |  | `cast(preliminary as inv_preliminary_gfn_kk preserving type)` |  |  |
| `CAInvcgPreliminaryCategory` |  | |  | `cast(prlinv_cat as prlinv_cat_gfn_kk preserving type)` |  |  |
| `CAPrelimInvcgDocValue` |  | |  | `prlinv_cnt` |  |  |
| `CAPreliminaryInvcgDocStatus` |  | |  | `cast(prlinv_status as prlinv_status_gfn_kk preserving type)` |  |  |
| `CAInvcgDocumentReversalReason` |  | |  | `revreason` |  |  |
| `CAInvcgReversalDocument` |  | |  | `cast(reversaldoc as inv_reversaldoc_gfn_kk preserving type)` |  |  |
| `CAInvcgReversedDocument` |  | |  | `cast(reverseddoc as inv_reverseddoc_gfn_kk preserving type)` |  |  |
| `CAInvcgCorrectionCategory` |  | |  | `cast(corrcat as corrcat_gfn_kk preserving type)` |  |  |
| `CAInvcgDocumentPrintDate` |  | |  | `printdate` |  |  |
| `CAInvcgDocIsLockedForPrinting` |  | |  | `printlock` |  |  |
| `CAPaymentMethod` |  | |  | `pymet` |  |  |
| `CAPaymentFormNumber` |  | |  | `nrzas` |  |  |
| `CAInvcgDocFormID` |  | |  | `form_id` |  |  |
| `ApplicationForm` |  | |  | `formkey` |  |  |
| `FormIDForAttachedPaymentMedium` |  | |  | `zlsch` |  |  |
| `CAInvcgDocumentType` |  | |  | `doctype` |  |  |
| `CAKeyIdentification` |  | |  | `exkid` |  |  |
| `CAOfficialDocumentNumber` |  | |  | `cast(exbel as exbel_no_conv_kk)` |  |  |
| `CAPartnerSettlementRule` |  | |  | `ptsrl` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `BusinessPlace` |  | |  | `bupla` |  |  |
| `CAContract` |  | |  | `vtref` |  |  |
| `CASubApplication` |  | |  | `subap` |  |  |
| `CAInvcgBaseDate` |  | |  | `invoice_basedate` |  |  |
| `CAInvcgDocPeriodCategory` |  | |  | `invpercat` |  |  |
| `CAInvcgDocPeriodDate` |  | |  | `invperiod` |  |  |
| `CAInvcgDocPeriodStartDate` |  | |  | `invperiod_from` |  |  |
| `CADunningCounter` |  | |  | `mazae` |  |  |
| `CAInvcgDocHasChargeOrDiscItems` |  | |  | `cast(chgdoc_ex as chgdoc_ex_gfn_kk preserving type)` |  |  |
| `CAInvcgDocHasControlDoc` |  | |  | `cast(cfcsimulated as inv_cfcsimulated_gfn_kk preserving type)` |  |  |
| `CAInvcgBolloTaxPostStatus` |  | |  | `bollotax` |  |  |
| `CAInvcgDocIsPartOfList` |  | |  | `xsubinv` |  |  |
| `CAInvcgDocHasObjectRelation` |  | |  | `xinvdoc_x` |  |  |
| `CAInvcgDocHasSEPAPreNotif` |  | |  | `sepa_prenot` |  |  |
| `CAInvcgDocExternal` |  | |  | `cast(ext_invdocno as ext_invdocno_gfn_kk preserving type)` |  |  |
| `CAInvcgAdjustmentDocument` |  | |  | `adjustmentdoc` |  |  |
| `CAInvcgAdjustedDocument` |  | |  | `cast(adjusteddoc as adjustedinvdoc_gfn_kk preserving type)` |  |  |
| `NameNumberRangeObject` |  | |  | `cast('FKKINV' as nrobj)` |  |  |
| `CAClassificationKey` |  | |  | `opord` |  |  |
| `_BusinessPartner` | | ✓ | | | | |
| `_ContractAccountHeader` | | ✓ | | | | |
| `_ContractAccountPartner` | | ✓ | | | | |
| `_AltvContractAcctForCollvBills` | | ✓ | | | | |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CAInvcgReversalDocument` | | ✓ | | | | |
| `_CAInvcgReversedDocument` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CAInvcgPreliminaryCategory` | | ✓ | | | | |
| `_CAPreliminaryInvcgDocStatus` | | ✓ | | | | |
| `_CAInvcgDocReversalReason` | | ✓ | | | | |
| `_CAInvcgDocLockedforPrint` | | ✓ | | | | |
| `_CAInvcgProcess` | | ✓ | | | | |
| `_CAInvcgCategory` | | ✓ | | | | |
| `_CAInvcgType` | | ✓ | | | | |
| `_CAInvcgDocumentType` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CAInvcgPeriodCat` | | ✓ | | | | |
| `_CAInvcgTargetProc` | | ✓ | | | | |
| `_CAApplicationArea` | | ✓ | | | | |
| `_CAInvcgCorrectionCat` | | ✓ | | | | |
| `_CAInvcgDocChrgDiscItems` | | ✓ | | | | |
| `_CAInvcgDocCreationMode` | | ✓ | | | | |
| `_CAInvcgMasterDataType` | | ✓ | | | | |
| `_CAInvcgDocTechDocType` | | ✓ | | | | |
| `_CAInvcgDocPartOfList` | | ✓ | | | | |
| `_CAInvcgBolloTaxPostStatus` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_CAReconciliationKey` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_ContractAccountHeader` | `I_ContractAccountHeader` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [0..1] |
| `_AltvContractAcctForCollvBills` | `I_ContractAccountHeader` | [0..1] |
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CAInvcgReversalDocument` | `I_CAInvcgDocHeader` | [0..1] |
| `_CAInvcgReversedDocument` | `I_CAInvcgDocHeader` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CAInvcgPreliminaryCategory` | `I_CAInvcgPreliminaryCategory` | [0..1] |
| `_CAPreliminaryInvcgDocStatus` | `I_CAPreliminaryInvcgDocStatus` | [0..1] |
| `_CAInvcgDocReversalReason` | `I_CAInvcgDocReversalReason` | [0..1] |
| `_CAInvcgDocLockedforPrint` | `I_CAInvcgDocLockedforPrint` | [0..1] |
| `_CAInvcgProcess` | `I_CAInvcgProcess` | [0..1] |
| `_CAInvcgCategory` | `I_CAInvcgCategory` | [0..1] |
| `_CAInvcgType` | `I_CAInvcgType` | [0..1] |
| `_CAInvcgDocumentType` | `I_CAInvcgDocumentType` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CAInvcgPeriodCat` | `I_CAInvcgPeriodCat` | [0..1] |
| `_CAInvcgTargetProc` | `I_CAInvcgTargetProc` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CAInvcgCorrectionCat` | `I_CAInvcgCorrectionCat` | [0..1] |
| `_CAInvcgDocChrgDiscItems` | `I_CAInvcgDocChrgDiscItems` | [0..1] |
| `_CAInvcgDocCreationMode` | `I_CAInvcgDocCreationMode` | [0..1] |
| `_CAInvcgMasterDataType` | `I_CAInvcgMasterDataType` | [0..1] |
| `_CAInvcgDocTechDocType` | `I_CAInvcgDocTechDocType` | [0..1] |
| `_CAInvcgDocPartOfList` | `I_CAInvcgDocPartOfList` | [0..1] |
| `_CAInvcgBolloTaxPostStatus` | `I_CAInvcgBolloTaxPostStatus` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CAReconciliationKey` | `I_CAReconciliationKey` | [0..1] |
| `_ProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_Extension` | `E_CAInvcgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvdoc_h',
          role: #MAIN,
          viewElement: ['CAInvoicingDocument'],
          tableElement: ['invdocno']
      } ]
    }
  }
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CAInvoicingDocument',
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocument',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Fakturierungsbelegkopf'
define view entity I_CAInvcgDocHeader
  as select from dfkkinvdoc_h

  association [0..1] to I_BusinessPartner             as _BusinessPartner               on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader       as _ContractAccountHeader         on  $projection.ContractAccount = _ContractAccountHeader.ContractAccount
  association [0..1] to I_ContractAccountPartner      as _ContractAccountPartner        on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                                        and $projection.ContractAccount = _ContractAccountPartner.ContractAccount
  association [0..1] to I_ContractAccountHeader       as _AltvContractAcctForCollvBills on  $projection.AltvContractAcctForCollvBills = _AltvContractAcctForCollvBills.ContractAccount

  association [1..1] to I_CAInvcgDocHeader            as _CAInvcgDocHeader              on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument
  association [0..1] to I_CAInvcgDocHeader            as _CAInvcgReversalDocument       on  $projection.CAInvcgReversalDocument = _CAInvcgReversalDocument.CAInvoicingDocument
  association [0..1] to I_CAInvcgDocHeader            as _CAInvcgReversedDocument       on  $projection.CAInvcgReversedDocument = _CAInvcgReversedDocument.CAInvoicingDocument

  association [0..1] to I_Currency                    as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_CAInvcgPreliminaryCategory  as _CAInvcgPreliminaryCategory    on  $projection.CAInvcgPreliminaryCategory = _CAInvcgPreliminaryCategory.CAInvcgPreliminaryCategory
  association [0..1] to I_CAPreliminaryInvcgDocStatus as _CAPreliminaryInvcgDocStatus   on  $projection.CAPreliminaryInvcgDocStatus = _CAPreliminaryInvcgDocStatus.CAPreliminaryInvcgDocStatus

  association [0..1] to I_CAInvcgDocReversalReason    as _CAInvcgDocReversalReason      on  $projection.CAInvcgDocumentReversalReason = _CAInvcgDocReversalReason.CAInvcgDocumentReversalReason
  association [0..1] to I_CAInvcgDocLockedforPrint    as _CAInvcgDocLockedforPrint      on  $projection.CAInvcgDocIsLockedForPrinting = _CAInvcgDocLockedforPrint.CAInvcgDocIsLockedForPrinting
  association [0..1] to I_CAInvcgProcess              as _CAInvcgProcess                on  $projection.CAInvcgProcess    = _CAInvcgProcess.CAInvcgProcess
                                                                                        and $projection.CAApplicationArea = _CAInvcgProcess.CAApplicationArea
  association [0..1] to I_CAInvcgCategory             as _CAInvcgCategory               on  $projection.CAInvcgCategory = _CAInvcgCategory.CAInvcgCategory
  association [0..1] to I_CAInvcgType                 as _CAInvcgType                   on  $projection.CAInvcgType       = _CAInvcgType.CAInvcgType
                                                                                        and $projection.CAApplicationArea = _CAInvcgType.CAApplicationArea
  association [0..1] to I_CAInvcgDocumentType         as _CAInvcgDocumentType           on  $projection.CAInvcgDocumentType            = _CAInvcgDocumentType.CAInvcgDocumentType
                                                                                        and $projection.CAApplicationArea              = _CAInvcgDocumentType.CAApplicationArea
                                                                                        and _CAInvcgDocumentType.NameNumberRangeObject = 'FKKINVDOC'
  association [0..1] to I_CASubApplication            as _CASubApplication              on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CAInvcgPeriodCat            as _CAInvcgPeriodCat              on  $projection.CAInvcgDocPeriodCategory = _CAInvcgPeriodCat.CAInvcgPeriodCategory
  association [0..1] to I_CAInvcgTargetProc           as _CAInvcgTargetProc             on  $projection.CAInvcgTargetProcess = _CAInvcgTargetProc.CAInvcgTargetProcess
  association [0..1] to I_CAApplicationArea           as _CAApplicationArea             on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea
  association [0..1] to I_CAInvcgCorrectionCat        as _CAInvcgCorrectionCat          on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCat.CAInvcgCorrectionCategory
  association [0..1] to I_CAInvcgDocChrgDiscItems     as _CAInvcgDocChrgDiscItems       on  $projection.CAInvcgDocHasChargeOrDiscItems = _CAInvcgDocChrgDiscItems.CAInvcgDocHasChargeOrDiscItems
  association [0..1] to I_CAInvcgDocCreationMode      as _CAInvcgDocCreationMode        on  $projection.CAInvcgDocCreationMode = _CAInvcgDocCreationMode.CAInvcgDocCreationMode
  association [0..1] to I_CAInvcgMasterDataType       as _CAInvcgMasterDataType         on  $projection.CAInvcgMasterDataType = _CAInvcgMasterDataType.CAInvcgMasterDataType
  association [0..1] to I_CAInvcgDocTechDocType       as _CAInvcgDocTechDocType         on  $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocType.CAInvcgTechnicalDocumentType
  association [0..1] to I_CAInvcgDocPartOfList        as _CAInvcgDocPartOfList          on  $projection.CAInvcgDocIsPartOfList = _CAInvcgDocPartOfList.CAInvcgDocIsPartOfList
  association [0..1] to I_CAInvcgBolloTaxPostStatus   as _CAInvcgBolloTaxPostStatus     on  $projection.CAInvcgBolloTaxPostStatus = _CAInvcgBolloTaxPostStatus.CAInvcgBolloTaxPostStatus
  association [0..1] to I_CompanyCode                 as _CompanyCode                   on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_CAReconciliationKey         as _CAReconciliationKey           on  $projection.CAReconciliationKey = _CAReconciliationKey.CAReconciliationKey
  association [0..1] to I_CAProviderContractHeader    as _ProviderContract              on  $projection.CASubApplication = 'P'
                                                                                        and $projection.CAContract       = _ProviderContract.CAProviderContract

  // extension
  association [0..1] to E_CAInvcgDocHeader            as _Extension                     on  $projection.CAInvoicingDocument = _Extension.CAInvoicingDocument

{
  key invdocno                                                      as CAInvoicingDocument,

      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                                         as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CAInvcgProcess'
      inv_process                                                   as CAInvcgProcess,
      @ObjectModel.foreignKey.association: '_CAInvcgType'
      inv_type                                                      as CAInvcgType,
      @ObjectModel.foreignKey.association: '_CAInvcgCategory'
      inv_category                                                  as CAInvcgCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgDocTechDocType'
      cast(techdoctype as techdoctype_gfn_kk preserving type)       as CAInvcgTechnicalDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgTargetProc'
      targprocess                                                   as CAInvcgTargetProcess,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      cast(gpart as bu_partner preserving type)                     as BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccountHeader'
      vkont                                                         as ContractAccount,
      @ObjectModel.foreignKey.association: '_CAInvcgMasterDataType'
      mdcat                                                         as CAInvcgMasterDataType,
      @ObjectModel.foreignKey.association: '_AltvContractAcctForCollvBills'
      abwvk                                                         as AltvContractAcctForCollvBills,
      cast(abwbl as abwbl_gfn_kk preserving type )                  as CASubstituteDocumentNumber,
      @Semantics.user.createdBy: true
      crname                                                        as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      crdate                                                        as CAInvcgCreationDate,
      @Semantics.systemTime.createdAt: true
      crtime                                                        as CAInvcgCreationTime,
      @ObjectModel.foreignKey.association: '_CAInvcgDocCreationMode'
      crmode                                                        as CAInvcgDocCreationMode,
      recnum                                                        as CAInvcgNmbrOfInvoicingDocItems,
      cast(bit_number as bit_number_gfn_kk preserving type)         as CABllbleItmNumber,
      invrunno                                                      as CAInvcgDocInternalNumber,
      @ObjectModel.foreignKey.association: '_CAReconciliationKey'
      fikey                                                         as CAReconciliationKey,
      budat                                                         as CAPostingDate,
      bldat                                                         as DocumentDate,
      faedn                                                         as CANetDueDate,
      faeds                                                         as CACashDiscountDueDate,
      sktpz                                                         as CACashDiscountRate,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      total_curr                                                    as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      total_amt                                                     as CAAmountInTransactionCurrency,
      invoiced                                                      as CAInvcgIsDocumentPosted,
      simulated                                                     as CAInvcgIsDocumentSimulated,
      cast(preliminary as inv_preliminary_gfn_kk preserving type)   as CAInvcgIsDocumentPreliminary,
      @ObjectModel.foreignKey.association: '_CAInvcgPreliminaryCategory'
      cast(prlinv_cat as prlinv_cat_gfn_kk preserving type)         as CAInvcgPreliminaryCategory,
      prlinv_cnt                                                    as CAPrelimInvcgDocValue,
      @ObjectModel.foreignKey.association: '_CAPreliminaryInvcgDocStatus'
      cast(prlinv_status as prlinv_status_gfn_kk preserving type)   as CAPreliminaryInvcgDocStatus,
      @ObjectModel.foreignKey.association: '_CAInvcgDocReversalReason'
      revreason                                                     as CAInvcgDocumentReversalReason,
      @ObjectModel.foreignKey.association: '_CAInvcgReversalDocument'
      cast(reversaldoc as inv_reversaldoc_gfn_kk preserving type)   as CAInvcgReversalDocument,
      @ObjectModel.foreignKey.association: '_CAInvcgReversedDocument'
      cast(reverseddoc as inv_reverseddoc_gfn_kk preserving type)   as CAInvcgReversedDocument,
      @ObjectModel.foreignKey.association: '_CAInvcgCorrectionCat'
      cast(corrcat as corrcat_gfn_kk preserving type)               as CAInvcgCorrectionCategory,
      printdate                                                     as CAInvcgDocumentPrintDate,
      @ObjectModel.foreignKey.association: '_CAInvcgDocLockedforPrint'
      printlock                                                     as CAInvcgDocIsLockedForPrinting,
      -- fkey in upper view (due to complexity)
      pymet                                                         as CAPaymentMethod,
      nrzas                                                         as CAPaymentFormNumber,
      form_id                                                       as CAInvcgDocFormID,
      formkey                                                       as ApplicationForm,
      @EndUserText.label: 'Formular ID für Zahlungsträger'
      zlsch                                                         as FormIDForAttachedPaymentMedium,
      @ObjectModel.foreignKey.association: '_CAInvcgDocumentType'
      doctype                                                       as CAInvcgDocumentType,
      exkid                                                         as CAKeyIdentification,
      cast(exbel as exbel_no_conv_kk)                               as CAOfficialDocumentNumber,
      ptsrl                                                         as CAPartnerSettlementRule,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                         as CompanyCode,
      bupla                                                         as BusinessPlace,
      vtref                                                         as CAContract,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                                         as CASubApplication,
      invoice_basedate                                              as CAInvcgBaseDate,
      @ObjectModel.foreignKey.association: '_CAInvcgPeriodCat'
      invpercat                                                     as CAInvcgDocPeriodCategory,
      invperiod                                                     as CAInvcgDocPeriodDate,
      invperiod_from                                                as CAInvcgDocPeriodStartDate,
      mazae                                                         as CADunningCounter,
      cast(chgdoc_ex as chgdoc_ex_gfn_kk preserving type)           as CAInvcgDocHasChargeOrDiscItems,
      cast(cfcsimulated as inv_cfcsimulated_gfn_kk preserving type) as CAInvcgDocHasControlDoc,
      @ObjectModel.foreignKey.association: '_CAInvcgBolloTaxPostStatus'
      bollotax                                                      as CAInvcgBolloTaxPostStatus,
      @EndUserText.label: 'Subfakturierngsbeleg'
      xsubinv                                                       as CAInvcgDocIsPartOfList,
      @EndUserText.label: 'Objektrelationen vorhanden'
      xinvdoc_x                                                     as CAInvcgDocHasObjectRelation,
      sepa_prenot                                                   as CAInvcgDocHasSEPAPreNotif,
      cast(ext_invdocno as ext_invdocno_gfn_kk preserving type)     as CAInvcgDocExternal,
      adjustmentdoc                                                 as CAInvcgAdjustmentDocument,
      cast(adjusteddoc as adjustedinvdoc_gfn_kk preserving type)    as CAInvcgAdjustedDocument,

      cast('FKKINV' as nrobj)                                       as NameNumberRangeObject,

      // from X_S4C_I_CAInvcgDocItem
      dfkkinvdoc_h.opord                                            as CAClassificationKey,

      // Make association public
      _BusinessPartner,
      _ContractAccountHeader,
      _ContractAccountPartner,
      _AltvContractAcctForCollvBills,
      _CAReconciliationKey,
      _TransactionCurrency,
      _CAInvcgPreliminaryCategory,
      _CAPreliminaryInvcgDocStatus,
      _CAInvcgProcess,
      _CAInvcgType,
      _CAInvcgCategory,
      _CAInvcgDocTechDocType,
      _CAInvcgTargetProc,
      _CAInvcgMasterDataType,
      _CAInvcgDocCreationMode,
      _CAInvcgDocReversalReason,
      _CAInvcgReversalDocument,
      _CAInvcgReversedDocument,
      _CAInvcgCorrectionCat,
      _CAInvcgDocumentType,
      _CAInvcgDocLockedforPrint,
      _CAInvcgPeriodCat,
      _CAInvcgDocChrgDiscItems,
      _CAInvcgBolloTaxPostStatus,
      _CAInvcgDocPartOfList,
      _CompanyCode,
      _CASubApplication,
      _ProviderContract,
      _CAInvcgDocHeader,
      _CAApplicationArea
}
```
