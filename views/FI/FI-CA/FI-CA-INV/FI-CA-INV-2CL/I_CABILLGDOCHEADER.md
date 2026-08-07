---
name: I_CABILLGDOCHEADER
description: Cabillgdocheader
app_component: FI-CA-INV-2CL
software_component: SAPSCORE
release_state: released
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
# I_CABILLGDOCHEADER

**Cabillgdocheader**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CABillgDocument` | ✓ | |  | `billdocno` |
| `BusinessPartner` |  | |  | `gpart` |
| `ContractAccount` |  | |  | `vkont` |
| `CABillgType` |  | |  | `bill_type` |
| `CABillgDocPeriodStartDate` |  | |  | `cast(date_from as bill_period_from_gfn_kk preserving type )` |
| `CABillgDocPeriodEndDate` |  | |  | `cast(date_to as bill_period_to_gfn_kk preserving type )` |
| `CABillgDocumentReversalReason` |  | |  | `revreason` |
| `CABillgIsDocumentSimulated` |  | |  | `simulated` |
| `CABillgDocumentExternal` |  | |  | `cast(refdocno as refdocno_gfn_kk preserving type )` |
| `LogicalSystem` |  | |  | `log_system` |
| `CAApplicationArea` |  | |  | `applk` |
| `CABillgDocOriginProcess` |  | |  | `srcprocess` |
| `CAInvcgSourceDocumentType` |  | |  | `srcdoctype` |
| `CAInvcgTechnicalDocumentType` |  | |  | `cast(techdoctype as techdoctype_gfn_kk preserving type )` |
| `CAInvcgDocumentType` |  | |  | `doctype` |
| `CAInvcgTargetProcess` |  | |  | `targprocess` |
| `CAInvcgMasterDataType` |  | |  | `mdcat` |
| `CAInvcgAltvBusinessPartner` |  | |  | `cast(gpart_inv as gpart_inv_gfn_kk preserving type )` |
| `CAInvcgAltvContractAccount` |  | |  | `cast(vkont_inv as vkont_inv_gfn_kk preserving type )` |
| `CABillgBaseDate` |  | |  | `bill_basedate` |
| `CABillgCurrency` |  | |  | `bill_curr` |
| `CAInvcgCurrency` |  | |  | `cast(inv_curr as inv_curr_gfn_kk preserving type )` |
| `CATaxDetnType` |  | |  | `tax_det_type` |
| `CATaxDateType` |  | |  | `tax_date_type` |
| `CAInvcgCategory` |  | |  | `inv_category` |
| `CAInvcgControlOfInvoicingUnit` |  | |  | `cast(separate_inv as separate_inv_bitpack_gfn_kk preserving type )` |
| `CAInvcgFirstDate` |  | |  | `invoice_first` |
| `CABillgReversalDocument` |  | |  | `cast(reversaldoc as reversalbilldoc_gfn_kk preserving type )` |
| `CABillgReversedDocument` |  | |  | `cast(reverseddoc as reversedbilldoc_gfn_kk preserving type )` |
| `CABillgAdjustmentDocument` |  | |  | `cast(adjustmentdoc as adjustmentbilldoc_gfn_kk preserving type )` |
| `CABillgAdjustedDocument` |  | |  | `adjusteddoc` |
| `CAInvcgCorrectionCategory` |  | |  | `cast(corrcat as corrcat_gfn_kk preserving type )` |
| `CaInvcgIsOrderDeleted` |  | |  | `cast(trigdeleted as trigdeleted_gfn_kk preserving type )` |
| `CABillgHasAdditionalInvoice` |  | |  | `xinfbill` |
| `CAInvcgIsAccrualPostingRlvt` |  | |  | `cast(xbillac as xbillac_gfn_kk preserving type )` |
| `CABillgLockedForInvoicing` |  | |  | `invlock` |
| `CABillgGrpgOfAdditionalItems` |  | |  | `cast(add_group as add_group_gfn_kk preserving type )` |
| `CABillgDocHasRefObjects` |  | |  | `cast(xinvbill_x as xinvbill_x_gfn_kk preserving type )` |
| `CABillgDocumentNumberOfItems` |  | |  | `recnum` |
| `CABllbleItmNumber` |  | |  | `cast(bit_number as bit_number_gfn_kk preserving type )` |
| `CreatedByUser` |  | |  | `crname` |
| `CABillgDocCreationDate` |  | |  | `crdate` |
| `CABillgDocCreationTime` |  | |  | `crtime` |
| `CABillgDocInternalNumber` |  | |  | `cast(billrunno as billrunno_gfn_kk preserving type )` |
| `CABillgProcess` |  | |  | `bill_process` |
| `CABillgDocHasPrepaidItems` |  | |  | `prepaid_incl` |
| `CABillgDocHasRefillItems` |  | |  | `pprefill_incl` |
| `CABillgDocHasRevnRecgnItems` |  | |  | `revrec_incl` |
| `CAPartnerSettlementRule` |  | |  | `ptsrl` |
| `CABillgDocumentInvcgStatus` |  | |  | `invstatus` |
| `CAInvoicingDocument` |  | |  | `invdocno` |
| `CAInvcgCreationDate` |  | |  | `invcrdate` |
| `CASubAreaForParallelization` | ✓ | |  | `keypp` |
| `CAAltvMDOriginalIsIncluded` |  | |  | `altmd_orig_incl` |
| `_BusinessPartner` | | ✓ | | |
| `_ContractAccountHeader` | | ✓ | | |
| `_CAInvcgAltvBusinessPartner` | | ✓ | | |
| `_CAInvcgAltvContractAccount` | | ✓ | | |
| `_ContractAccountPartner` | | ✓ | | |
| `_CABillgCurrency` | | ✓ | | |
| `_CAInvcgCurrency` | | ✓ | | |
| `_CABillgReversalDocument` | | ✓ | | |
| `_CABillgReversedDocument` | | ✓ | | |
| `_CABillgAdjustmentDocument` | | ✓ | | |
| `_CABillgAdjustedDocument` | | ✓ | | |
| `_CABillgDocOriginProcess` | | ✓ | | |
| `_CAInvcgTargetProc` | | ✓ | | |
| `_CAInvcgCategory` | | ✓ | | |
| `_CABillgProcess` | | ✓ | | |
| `_CABillgType` | | ✓ | | |
| `_CAApplicationArea` | | ✓ | | |
| `_CAInvcgSourceDocType` | | ✓ | | |
| `_CAInvcgDocumentType` | | ✓ | | |
| `_CAInvcgDocTechDocType` | | ✓ | | |
| `_CABillgDocReversalReason` | | ✓ | | |
| `_CAInvcgMasterDataType` | | ✓ | | |
| `_CATaxDetnType` | | ✓ | | |
| `_CATaxDateType` | | ✓ | | |
| `_CAInvcgControlOfInvcgUnit` | | ✓ | | |
| `_CAInvcgCorrectionCat` | | ✓ | | |
| `_CABillgExistsAddInvcg` | | ✓ | | |
| `_CABillgLockedForInvcg` | | ✓ | | |
| `_CABillgDocInvcgStatus` | | ✓ | | |
| `_CAInvcgDocHeader` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_ContractAccountHeader` | `I_ContractAccountHeader` | [0..1] |
| `_CAInvcgAltvBusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CAInvcgAltvContractAccount` | `I_ContractAccountHeader` | [0..1] |
| `_ContractAccountPartner` | `I_ContractAccountPartner` | [0..1] |
| `_CABillgCurrency` | `I_Currency` | [0..1] |
| `_CAInvcgCurrency` | `I_Currency` | [0..1] |
| `_CABillgReversalDocument` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgReversedDocument` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgAdjustmentDocument` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgAdjustedDocument` | `I_CABillgDocHeader` | [0..1] |
| `_CABillgDocOriginProcess` | `I_CABillgDocOriginProcess` | [0..1] |
| `_CAInvcgTargetProc` | `I_CAInvcgTargetProc` | [0..1] |
| `_CAInvcgCategory` | `I_CAInvcgCategory` | [0..1] |
| `_CABillgProcess` | `I_CABillgProcess` | [0..1] |
| `_CABillgType` | `I_CABillgType` | [0..1] |
| `_CAApplicationArea` | `I_CAApplicationArea` | [0..1] |
| `_CAInvcgSourceDocType` | `I_CAInvcgSourceDocType` | [0..1] |
| `_CAInvcgDocumentType` | `I_CAInvcgDocumentType` | [0..1] |
| `_CAInvcgDocTechDocType` | `I_CAInvcgDocTechDocType` | [0..1] |
| `_CABillgDocReversalReason` | `I_CABillgDocReversalReason` | [0..1] |
| `_CAInvcgMasterDataType` | `I_CAInvcgMasterDataType` | [0..1] |
| `_CATaxDetnType` | `I_CATaxDetnType` | [0..1] |
| `_CATaxDateType` | `I_CATaxDateType` | [0..1] |
| `_CAInvcgControlOfInvcgUnit` | `I_CAInvcgControlOfInvcgUnit` | [0..1] |
| `_CAInvcgCorrectionCat` | `I_CAInvcgCorrectionCat` | [0..1] |
| `_CABillgExistsAddInvcg` | `I_CABillgExistsAddInvcg` | [0..1] |
| `_CABillgLockedForInvcg` | `I_CABillgLockedForInvcg` | [0..1] |
| `_CABillgDocInvcgStatus` | `I_CABillgDocInvcgStatus` | [0..1] |
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [0..1] |
| `_Extension` | `E_CABillgDocHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvbill_h',
          role: #MAIN,
          viewElement: ['CABillgDocument'],
          tableElement: ['billdocno']
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
  representativeKey: 'CABillgDocument',  
  sapObjectNodeType.name: 'ContrAcctgBillingDocument',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Abrechnungsbelegkopf'
define view entity I_CABillgDocHeader
  as select from dfkkinvbill_h as _dfkkinvbill_h

  association [0..1] to I_BusinessPartner           as _BusinessPartner            on  $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader     as _ContractAccountHeader      on  $projection.ContractAccount = _ContractAccountHeader.ContractAccount
  association [0..1] to I_BusinessPartner           as _CAInvcgAltvBusinessPartner on  $projection.CAInvcgAltvBusinessPartner = _CAInvcgAltvBusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader     as _CAInvcgAltvContractAccount on  $projection.CAInvcgAltvContractAccount = _CAInvcgAltvContractAccount.ContractAccount
  association [0..1] to I_ContractAccountPartner    as _ContractAccountPartner     on  $projection.BusinessPartner = _ContractAccountPartner.BusinessPartner
                                                                                   and $projection.ContractAccount = _ContractAccountPartner.ContractAccount

  association [0..1] to I_Currency                  as _CABillgCurrency            on  $projection.CABillgCurrency = _CABillgCurrency.Currency
  association [0..1] to I_Currency                  as _CAInvcgCurrency            on  $projection.CAInvcgCurrency = _CAInvcgCurrency.Currency

  association [0..1] to I_CABillgDocHeader          as _CABillgReversalDocument    on  $projection.CABillgReversalDocument = _CABillgReversalDocument.CABillgDocument
  association [0..1] to I_CABillgDocHeader          as _CABillgReversedDocument    on  $projection.CABillgReversedDocument = _CABillgReversedDocument.CABillgDocument
  association [0..1] to I_CABillgDocHeader          as _CABillgAdjustmentDocument  on  $projection.CABillgAdjustmentDocument = _CABillgAdjustmentDocument.CABillgDocument
  association [0..1] to I_CABillgDocHeader          as _CABillgAdjustedDocument    on  $projection.CABillgAdjustedDocument = _CABillgAdjustedDocument.CABillgDocument

  association [0..1] to I_CABillgDocOriginProcess   as _CABillgDocOriginProcess    on  $projection.CABillgDocOriginProcess = _CABillgDocOriginProcess.CABillgDocOriginProcess
  association [0..1] to I_CAInvcgTargetProc         as _CAInvcgTargetProc          on  $projection.CAInvcgTargetProcess = _CAInvcgTargetProc.CAInvcgTargetProcess
  association [0..1] to I_CAInvcgCategory           as _CAInvcgCategory            on  $projection.CAInvcgCategory = _CAInvcgCategory.CAInvcgCategory
  association [0..1] to I_CABillgProcess            as _CABillgProcess             on  $projection.CABillgProcess = _CABillgProcess.CABillgProcess
  association [0..1] to I_CABillgType               as _CABillgType                on  $projection.CABillgType = _CABillgType.CABillgType
  association [0..1] to I_CAApplicationArea         as _CAApplicationArea          on  $projection.CAApplicationArea = _CAApplicationArea.CAApplicationArea

  association [0..1] to I_CAInvcgSourceDocType      as _CAInvcgSourceDocType       on  _CAInvcgSourceDocType.CAInvcgSourceDocumentCat = 'INVBI'
                                                                                   and $projection.CAInvcgSourceDocumentType          = _CAInvcgSourceDocType.CAInvcgSourceDocumentType
  association [0..1] to I_CAInvcgDocumentType       as _CAInvcgDocumentType        on  $projection.CAInvcgDocumentType            = _CAInvcgDocumentType.CAInvcgDocumentType
                                                                                   and $projection.CAApplicationArea              = _CAInvcgDocumentType.CAApplicationArea
                                                                                   and _CAInvcgDocumentType.NameNumberRangeObject = 'FKKINVBILL'
  association [0..1] to I_CAInvcgDocTechDocType     as _CAInvcgDocTechDocType      on  $projection.CAInvcgTechnicalDocumentType = _CAInvcgDocTechDocType.CAInvcgTechnicalDocumentType
  association [0..1] to I_CABillgDocReversalReason  as _CABillgDocReversalReason   on  $projection.CABillgDocumentReversalReason = _CABillgDocReversalReason.CABillgDocumentReversalReason

  association [0..1] to I_CAInvcgMasterDataType     as _CAInvcgMasterDataType      on  $projection.CAInvcgMasterDataType = _CAInvcgMasterDataType.CAInvcgMasterDataType
  association [0..1] to I_CATaxDetnType             as _CATaxDetnType              on  $projection.CATaxDetnType = _CATaxDetnType.CATaxDetnType
  association [0..1] to I_CATaxDateType             as _CATaxDateType              on  $projection.CATaxDateType = _CATaxDateType.CATaxDateType
  association [0..1] to I_CAInvcgControlOfInvcgUnit as _CAInvcgControlOfInvcgUnit  on  $projection.CAInvcgControlOfInvoicingUnit = _CAInvcgControlOfInvcgUnit.CAInvcgControlOfInvoicingUnit
  association [0..1] to I_CAInvcgCorrectionCat      as _CAInvcgCorrectionCat       on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCat.CAInvcgCorrectionCategory
  association [0..1] to I_CABillgExistsAddInvcg     as _CABillgExistsAddInvcg      on  $projection.CABillgHasAdditionalInvoice = _CABillgExistsAddInvcg.CABillgHasAdditionalInvoice
  association [0..1] to I_CABillgLockedForInvcg     as _CABillgLockedForInvcg      on  $projection.CABillgLockedForInvoicing = _CABillgLockedForInvcg.CABillgLockedForInvoicing
  association [0..1] to I_CABillgDocInvcgStatus     as _CABillgDocInvcgStatus      on  $projection.CABillgDocumentInvcgStatus = _CABillgDocInvcgStatus.CABillgDocumentInvcgStatus
  association [0..1] to I_CAInvcgDocHeader          as _CAInvcgDocHeader           on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument

  // extension
  association [0..1] to E_CABillgDocHeader          as _Extension                  on  $projection.CABillgDocument = _Extension.CABillgDocument
{

      @EndUserText.label: 'Abrechnungsbeleg'
  key billdocno                                                          as CABillgDocument,
      @ObjectModel.foreignKey.association: '_BusinessPartner'
      gpart                                                              as BusinessPartner,
      @ObjectModel.foreignKey.association: '_ContractAccountHeader'
      vkont                                                              as ContractAccount,
      @ObjectModel.foreignKey.association: '_CABillgType'
      bill_type                                                          as CABillgType,
      cast(date_from as bill_period_from_gfn_kk preserving type )        as CABillgDocPeriodStartDate,
      cast(date_to as bill_period_to_gfn_kk preserving type )            as CABillgDocPeriodEndDate,
      @ObjectModel.foreignKey.association: '_CABillgDocReversalReason'
      revreason                                                          as CABillgDocumentReversalReason,
      simulated                                                          as CABillgIsDocumentSimulated,
      cast(refdocno as refdocno_gfn_kk preserving type )                 as CABillgDocumentExternal,
      log_system                                                         as LogicalSystem,
      @ObjectModel.foreignKey.association: '_CAApplicationArea'
      applk                                                              as CAApplicationArea,
      @ObjectModel.foreignKey.association: '_CABillgDocOriginProcess'
      srcprocess                                                         as CABillgDocOriginProcess,
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocType'
      srcdoctype                                                         as CAInvcgSourceDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgDocTechDocType'
      cast(techdoctype as techdoctype_gfn_kk preserving type )           as CAInvcgTechnicalDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgDocumentType'
      doctype                                                            as CAInvcgDocumentType,
      @ObjectModel.foreignKey.association: '_CAInvcgTargetProc'
      targprocess                                                        as CAInvcgTargetProcess,
      @ObjectModel.foreignKey.association: '_CAInvcgMasterDataType'
      mdcat                                                              as CAInvcgMasterDataType,
      @ObjectModel.foreignKey.association: '_CAInvcgAltvBusinessPartner'
      cast(gpart_inv as gpart_inv_gfn_kk preserving type )               as CAInvcgAltvBusinessPartner,
      @ObjectModel.foreignKey.association: '_CAInvcgAltvContractAccount'
      cast(vkont_inv as vkont_inv_gfn_kk preserving type )               as CAInvcgAltvContractAccount,
      bill_basedate                                                      as CABillgBaseDate,
      @ObjectModel.foreignKey.association: '_CABillgCurrency'
      bill_curr                                                          as CABillgCurrency,
      @ObjectModel.foreignKey.association: '_CAInvcgCurrency'
      cast(inv_curr as inv_curr_gfn_kk preserving type )                 as CAInvcgCurrency,
      @ObjectModel.foreignKey.association: '_CATaxDetnType'
      tax_det_type                                                       as CATaxDetnType,
      @ObjectModel.foreignKey.association: '_CATaxDateType'
      tax_date_type                                                      as CATaxDateType,
      @ObjectModel.foreignKey.association: '_CAInvcgCategory'
      inv_category                                                       as CAInvcgCategory,
      cast(separate_inv as separate_inv_bitpack_gfn_kk preserving type ) as CAInvcgControlOfInvoicingUnit,
      invoice_first                                                      as CAInvcgFirstDate,
      @ObjectModel.foreignKey.association: '_CABillgReversalDocument'
      cast(reversaldoc as reversalbilldoc_gfn_kk preserving type )       as CABillgReversalDocument,
      @ObjectModel.foreignKey.association: '_CABillgReversedDocument'
      cast(reverseddoc as reversedbilldoc_gfn_kk preserving type )       as CABillgReversedDocument,
      @ObjectModel.foreignKey.association: '_CABillgAdjustmentDocument'
      cast(adjustmentdoc as adjustmentbilldoc_gfn_kk preserving type )   as CABillgAdjustmentDocument,
      @ObjectModel.foreignKey.association: '_CABillgAdjustedDocument'
      adjusteddoc                                                        as CABillgAdjustedDocument,
      @ObjectModel.foreignKey.association: '_CAInvcgCorrectionCat'
      cast(corrcat as corrcat_gfn_kk preserving type )                   as CAInvcgCorrectionCategory,
      cast(trigdeleted as trigdeleted_gfn_kk preserving type )           as CaInvcgIsOrderDeleted,
      xinfbill                                                           as CABillgHasAdditionalInvoice,
      cast(xbillac as xbillac_gfn_kk preserving type )                   as CAInvcgIsAccrualPostingRlvt,
      @ObjectModel.foreignKey.association: '_CABillgLockedForInvcg'
      invlock                                                            as CABillgLockedForInvoicing,
      cast(add_group as add_group_gfn_kk preserving type )               as CABillgGrpgOfAdditionalItems,
      cast(xinvbill_x as xinvbill_x_gfn_kk preserving type )             as CABillgDocHasRefObjects,
      recnum                                                             as CABillgDocumentNumberOfItems,
      cast(bit_number as bit_number_gfn_kk preserving type )             as CABllbleItmNumber,
      @Semantics.user.createdBy: true
      crname                                                             as CreatedByUser,
      @Semantics.systemDate.createdAt: true
      crdate                                                             as CABillgDocCreationDate,
      @Semantics.systemTime.createdAt: true
      crtime                                                             as CABillgDocCreationTime,
      cast(billrunno as billrunno_gfn_kk preserving type )               as CABillgDocInternalNumber,
      @ObjectModel.foreignKey.association: '_CABillgProcess'
      bill_process                                                       as CABillgProcess,
      prepaid_incl                                                       as CABillgDocHasPrepaidItems,
      pprefill_incl                                                      as CABillgDocHasRefillItems,
      revrec_incl                                                        as CABillgDocHasRevnRecgnItems,
      ptsrl                                                              as CAPartnerSettlementRule,
      @ObjectModel.foreignKey.association: '_CABillgDocInvcgStatus'
      invstatus                                                          as CABillgDocumentInvcgStatus,
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
      invdocno                                                           as CAInvoicingDocument,
      invcrdate                                                          as CAInvcgCreationDate,
      keypp                                                              as CASubAreaForParallelization,
      altmd_orig_incl                                                    as CAAltvMDOriginalIsIncluded,

      // Make association public
      _ContractAccountPartner,
      _BusinessPartner,
      _ContractAccountHeader,
      _CAInvcgAltvBusinessPartner,
      _CAInvcgAltvContractAccount,
      _CABillgReversalDocument,
      _CABillgReversedDocument,
      _CABillgAdjustedDocument,
      _CABillgAdjustmentDocument,
      _CAApplicationArea,
      _CABillgCurrency,
      _CAInvcgCurrency,
      _CABillgDocOriginProcess,
      _CAInvcgSourceDocType,
      _CAInvcgTargetProc,
      _CAInvcgCategory,
      _CABillgProcess,
      _CABillgType,
      _CAInvcgDocTechDocType,
      _CAInvcgMasterDataType,
      _CATaxDetnType,
      _CATaxDateType,
      _CAInvcgDocumentType,
      _CAInvcgControlOfInvcgUnit,
      _CAInvcgCorrectionCat,
      _CABillgExistsAddInvcg,
      _CABillgLockedForInvcg,
      _CABillgDocInvcgStatus,
      _CABillgDocReversalReason,
      _CAInvcgDocHeader
}
```
