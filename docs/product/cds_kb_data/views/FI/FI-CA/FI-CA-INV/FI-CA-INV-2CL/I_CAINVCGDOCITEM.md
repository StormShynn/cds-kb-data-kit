---
name: I_CAINVCGDOCITEM
description: "Cainvcgdocitem"
app_component: FI-CA-INV-2CL
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
  - FI-CA-INV
  - interface-view
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CAINVCGDOCITEM

**Cainvcgdocitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
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
| `CAInvoicingDocument` | ✓ | |  | `invdocno` |  |  |
| `CAInvcgDocItem` | ✓ | |  | `invdocitem` |  |  |
| `CAInvcgDocumentItemType` |  | |  | `itemtype` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `CAContract` |  | |  | `vtref` |  |  |
| `CAProviderContractItemNumber` |  | |  | `vtpos` |  |  |
| `CASubApplication` |  | |  | `subap` |  |  |
| `CAInvcgItmAltvBusinessPartner` |  | |  | `cast(gpart_a as inv_gpart_a_gfn_kk preserving type)` |  |  |
| `CAInvcgItmAltvContractAccount` |  | |  | `cast(vkont_a as inv_vkont_a_gfn_kk preserving type)` |  |  |
| `CAInvcgDocItmAltvMDCat` |  | |  | `cast(gpvkt_a_cat as inv_gpvkt_a_cat_gfn_kk preserving type)` |  |  |
| `CAMainTransaction` |  | |  | `hvorg` |  |  |
| `CASubTransaction` |  | |  | `tvorg` |  |  |
| `CAIsDocItemSimulated` |  | |  | `item_simulated` |  |  |
| `CAInvcgDocItemIsReversal` |  | |  | `reversalitem` |  |  |
| `CAInvcgIsInFinalAmt` |  | |  | `cast(totalrel as totalrel_gfn_kk preserving type)` |  |  |
| `CAInvcgIsItemPostingRelevant` |  | |  | `postrel` |  |  |
| `CAInvcgIsNotBPRelevant` |  | |  | `not_bprel` |  |  |
| `CAInvcgIsItemPrintingRelevant` |  | |  | `printrel` |  |  |
| `CAInvcgSubstituteGroupPrinting` |  | |  | `print_substitute` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `CAAmountInTransactionCurrency` |  | |  | `betrw` |  |  |
| `CAInvcgDocItmLoclCurrency` |  | |  | `invwaerh` |  |  |
| `CAInvcgDocItmAmtInLoclCurrency` |  | |  | `invbetrh` |  |  |
| `CAInvcgDocItmTaxBaseAmtInLCrcy` |  | |  | `invsbash` |  |  |
| `CACurrencySourceDocument` |  | |  | `cast(srcdoc_curr as srcdoc_curr_gfn_kk preserving type)` |  |  |
| `CAInvcgSourceDocumentAmount` |  | |  | `cast(srcdoc_amt as srcdoc_amt_gfn_kk preserving type)` |  |  |
| `CAGroupingCurrencyTranslation` |  | |  | `cast(currc_group as currc_group_gfn_kk preserving type)` |  |  |
| `CAAccountDeterminationCode` |  | |  | `kofiz` |  |  |
| `BusinessPlace` |  | |  | `cast(bupla as farp_bupla preserving type)` |  |  |
| `BusinessArea` |  | |  | `cast(gsber as fis_rbusa preserving type)` |  |  |
| `CATaxIsIncluded` |  | |  | `tax_included` |  |  |
| `CATaxDetnType` |  | |  | `tax_det_type` |  |  |
| `CAInvcgTaxGroupingKey` |  | |  | `taxgr` |  |  |
| `CAOtherTaxCode` |  | |  | `strkz` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `CATaxDeterminationCode` |  | |  | `ermwskz` |  |  |
| `TaxJurisdiction` |  | |  | `txjcd` |  |  |
| `CATransactionKeyAccountDetn` |  | |  | `ktosl` |  |  |
| `CAConditionType` |  | |  | `kschl` |  |  |
| `CATaxRateInPercent` |  | |  | `tax_perc` |  |  |
| `TaxCountry` |  | |  | `tax_country` |  |  |
| `TransToTaxCntryCrcyCnvrsnFctr` |  | |  | `taxc_factor` |  |  |
| `CAInvcgOffsettingAction` |  | |  | `offset_action` |  |  |
| `CAInvcgOffsettingCategory` |  | |  | `offset_cat` |  |  |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` |  |  |
| `CATaxDate` |  | |  | `txdat` |  |  |
| `CATaxBaseAmount` |  | |  | `sbasw` |  |  |
| `CATaxAmountInTransCurrency` |  | |  | `sbetw` |  |  |
| `CATaxPortionInTransCurrency` |  | |  | `sttax` |  |  |
| `WithholdingTaxCode` |  | |  | `qsskz` |  |  |
| `CAIsDownPaymentRequest` |  | |  | `xanza` |  |  |
| `CAStatisticalItemCode` |  | |  | `stakz` |  |  |
| `CAInvcgOffsettingGroup` |  | |  | `offset_invgr` |  |  |
| `CAInvcgDfrrdRevenueStatus` |  | |  | `cast(defrev_stat as defrev_stat_gfn_kk preserving type)` |  |  |
| `CAIsRevenueAccountingRelevant` |  | |  | `rarel` |  |  |
| `CAInvcgRevenueGrouping` |  | |  | `ra_invgr` |  |  |
| `CARevenueAccountingServiceType` |  | |  | `service_type` |  |  |
| `CAInvcgAccrualPostingType` |  | |  | `cast(billac_type as billac_type_gfn_kk preserving type)` |  |  |
| `CAIsPrepaid` |  | |  | `prepaid` |  |  |
| `UnitOfMeasure` |  | |  | `meins` |  |  |
| `Quantity` |  | |  | `menge` |  |  |
| `CANetDueDate` |  | |  | `faedn` |  |  |
| `CACashDiscountDueDate` |  | |  | `faeds` |  |  |
| `CACashDiscountRate` |  | |  | `sktpz` |  |  |
| `CAInvcgDocItemDefStatus` |  | |  | `xstund` |  |  |
| `CAItemPeriodStartDate` |  | |  | `date_from` |  |  |
| `CAItemPeriodEndDate` |  | |  | `date_to` |  |  |
| `CAInvcgRefPostingDocType` |  | |  | `cast(cadoctype as cadoctype_gfn_kk preserving type )` |  |  |
| `CADocumentNumber` |  | |  | `cast(opbel as opbel_gfn_kk preserving type )` |  |  |
| `CAGroupingKeyDocumentItems` |  | |  | `psgrp` |  |  |
| `CAInvcgGroupingKey` |  | |  | `invgr` |  |  |
| `CAClearingDocumentNumber` |  | |  | `augbl` |  |  |
| `CAClearingAmountInTransCrcy` |  | |  | `augbw` |  |  |
| `CAInvcgDocItemCrtnMethod` |  | |  | `item_crmet` |  |  |
| `CAInvcgFunction` |  | |  | `inv_function` |  |  |
| `CAInvcgSourceDocumentCat` |  | |  | `cast(srcdoccat as srcdoccat_gfn_kk preserving type)` |  |  |
| `CAInvcgSourceDocumentNumber` |  | |  | `cast(srcdocno as srcdocno_gfn_kk preserving type)` |  |  |
| `CAInvcgDocItemSourceItmCat` |  | |  | `srcitemcat` |  |  |
| `CAInvcgSourceDocumentItem` |  | |  | `srcdocitem` |  |  |
| `CABllbleItmDiscountKey` |  | |  | `cast(disckey as disckey_gfn_kk preserving type)` |  |  |
| `CABllbleItmDiscountVersion` |  | |  | `disckey_versno` |  |  |
| `CAInvcgCorrectionCategory` |  | |  | `cast(corrcat as corrcat_gfn_kk preserving type)` |  |  |
| `CABillToParty` |  | |  | `bill_to_party` |  |  |
| `CABillToRegion` |  | |  | `bill_to_region` |  |  |
| `CABillFromRegion` |  | |  | `bill_from_region` |  |  |
| `CAControlCode` |  | |  | `steuc` |  |  |
| `CASupplyRegion` |  | |  | `supply_region` |  |  |
| `CABillToCountry` |  | |  | `bill_to_country` |  |  |
| `WBSElementInternalID` |  | |  | `cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )` |  |  |
| `_CAInvcgDocHeader` | | ✓ | | | | |
| `_CompCode` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_CAInvcgItmAltvBusinessPartner` | | ✓ | | | | |
| `_CAInvcgItmAltvContractAccount` | | ✓ | | | | |
| `_CADocument` | | ✓ | | | | |
| `_CAInvcgDocItmAltvMDCat` | | ✓ | | | | |
| `_CAInvcgDocItemType` | | ✓ | | | | |
| `_CAInvcgFunction` | | ✓ | | | | |
| `_CABllbleItmDiscountKey` | | ✓ | | | | |
| `_CAInvcgRefPostgDocTyp` | | ✓ | | | | |
| `_CAInvcgSourceDocCat` | | ✓ | | | | |
| `_CAConditionType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_CAStatisticalItemCode` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CACurrencySourceDocument` | | ✓ | | | | |
| `_CAInvcgDocItmLoclCurrency` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CAInvcgAccrualPostingType` | | ✓ | | | | |
| `_CAAccountDetnCode` | | ✓ | | | | |
| `_CADeferredRevenueStatus` | | ✓ | | | | |
| `_CAInvcgDocItmDefStatus` | | ✓ | | | | |
| `_CAInvcgDocItmCrtnMethod` | | ✓ | | | | |
| `_CAInvcgDocItmSrceItmCat` | | ✓ | | | | |
| `_TaxCountry` | | ✓ | | | | |
| `_CATaxDetnType` | | ✓ | | | | |
| `_CASubApplication` | | ✓ | | | | |
| `_CATransactionKeyAcctDetn` | | ✓ | | | | |
| `_CAInvcgCorrectionCat` | | ✓ | | | | |
| `_CAInvcgOffsettingAction` | | ✓ | | | | |
| `_CAInvcgOffsettingCategory` | | ✓ | | | | |
| `_CAInvcgOffsettingProcedure` | | ✓ | | | | |
| `_CABillToParty` | | ✓ | | | | |
| `_CABillToRegion` | | ✓ | | | | |
| `_CABillFromRegion` | | ✓ | | | | |
| `_CASupplyRegion` | | ✓ | | | | |
| `_CABillToCountry` | | ✓ | | | | |
| `_WBSElementBasicData` | | ✓ | | | | |
| `_CADocumentHeader` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CAInvcgDocHeader` | `I_CAInvcgDocHeader` | [1..1] |
| `_CompCode` | `I_CompanyCode` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_CAInvcgItmAltvBusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_CAInvcgItmAltvContractAccount` | `I_ContractAccountHeader` | [0..1] |
| `_CADocument` | `I_CADocument` | [0..1] |
| `_CAInvcgDocItmAltvMDCat` | `I_CAInvcgDocItmAltvMDCat` | [0..1] |
| `_CAInvcgDocItemType` | `I_CAInvcgDocItemType` | [0..1] |
| `_CAInvcgFunction` | `I_CAInvcgFunction` | [0..1] |
| `_CABllbleItmDiscountKey` | `I_CABllbleItmDiscountKey` | [0..1] |
| `_CAInvcgRefPostgDocTyp` | `I_CAInvcgRefPostgDocTyp` | [0..1] |
| `_CAInvcgSourceDocCat` | `I_CAInvcgSourceDocCat` | [0..1] |
| `_CAConditionType` | `I_ConditionType` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CACurrencySourceDocument` | `I_Currency` | [0..1] |
| `_CAInvcgDocItmLoclCurrency` | `I_Currency` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CAInvcgAccrualPostingType` | `I_CAInvcgAccrualPostingType` | [0..1] |
| `_CAAccountDetnCode` | `I_CAAccountDetnCode` | [0..1] |
| `_CADeferredRevenueStatus` | `I_CADeferredRevenueStatus` | [0..1] |
| `_CAInvcgDocItmDefStatus` | `I_CAInvcgDocItmDefStatus` | [0..1] |
| `_CAInvcgDocItmCrtnMethod` | `I_CAInvcgDocItmCrtnMethod` | [0..1] |
| `_CAInvcgDocItmSrceItmCat` | `I_CAInvcgDocItmSrceItmCat` | [0..1] |
| `_TaxCountry` | `I_Country` | [0..1] |
| `_CATaxDetnType` | `I_CATaxDetnType` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CATransactionKeyAcctDetn` | `I_CATransactionKeyAcctDetn` | [0..1] |
| `_CAInvcgCorrectionCat` | `I_CAInvcgCorrectionCat` | [0..1] |
| `_CAInvcgOffsettingAction` | `I_CAInvcgOffsettingAction` | [0..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CABillToParty` | `I_BusinessPartner` | [0..1] |
| `_CABillToRegion` | `I_Region` | [0..1] |
| `_CABillFromRegion` | `I_Region` | [0..1] |
| `_CASupplyRegion` | `I_Region` | [0..1] |
| `_CABillToCountry` | `I_Country` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Extension` | `E_CAInvcgDocItem` | [0..1] |
| `_CADocumentHeader` | `I_CADocumentHeader` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvdoc_i', 
          role: #MAIN,
          viewElement: ['CAInvoicingDocument', 'CAInvcgDocItem'],
          tableElement: ['invdocno', 'invdocitem']
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
  representativeKey: 'CAInvcgDocItem',
  sapObjectNodeType.name: 'ContrAcctgInvoicingDocumentItm',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@Metadata.allowExtensions:true
@EndUserText.label: 'Fakturierungsbelegposition'
define view entity I_CAInvcgDocItem
  as select from dfkkinvdoc_i as invdoc_i
  association [1..1] to I_CAInvcgDocHeader           as _CAInvcgDocHeader              on  $projection.CAInvoicingDocument = _CAInvcgDocHeader.CAInvoicingDocument

  association [0..1] to I_CompanyCode                as _CompCode                      on  $projection.CompanyCode = _CompCode.CompanyCode
  association [0..1] to I_Division                   as _Division                      on  $projection.Division = _Division.Division
  association [0..1] to I_BusinessArea               as _BusinessArea                  on  $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_BusinessPartner            as _CAInvcgItmAltvBusinessPartner on  $projection.CAInvcgItmAltvBusinessPartner = _CAInvcgItmAltvBusinessPartner.BusinessPartner
  association [0..1] to I_ContractAccountHeader      as _CAInvcgItmAltvContractAccount on  $projection.CAInvcgItmAltvContractAccount = _CAInvcgItmAltvContractAccount.ContractAccount
  association [0..1] to I_CADocument                 as _CADocument                    on  $projection.CADocumentNumber = _CADocument.CADocumentNumber
  association [0..1] to I_CAInvcgDocItmAltvMDCat     as _CAInvcgDocItmAltvMDCat        on  $projection.CAInvcgDocItmAltvMDCat = _CAInvcgDocItmAltvMDCat.CAInvcgDocItmAltvMDCat

  association [0..1] to I_CAInvcgDocItemType         as _CAInvcgDocItemType            on  $projection.CAInvcgDocumentItemType = _CAInvcgDocItemType.CAInvcgDocumentItemType
  association [0..1] to I_CAInvcgFunction            as _CAInvcgFunction               on  $projection.CAInvcgFunction = _CAInvcgFunction.CAInvcgFunction
  association [0..1] to I_CABllbleItmDiscountKey     as _CABllbleItmDiscountKey        on  $projection.CABllbleItmDiscountKey = _CABllbleItmDiscountKey.CABllbleItmDiscountKey
  association [0..1] to I_CAInvcgRefPostgDocTyp      as _CAInvcgRefPostgDocTyp         on  $projection.CAInvcgRefPostingDocType = _CAInvcgRefPostgDocTyp.CAInvcgRefPostingDocType
  association [0..1] to I_CAInvcgSourceDocCat        as _CAInvcgSourceDocCat           on  $projection.CAInvcgSourceDocumentCat = _CAInvcgSourceDocCat.CAInvcgSourceDocumentCat
  association [0..1] to I_ConditionType              as _CAConditionType               on  $projection.CAConditionType           = _CAConditionType.ConditionType
                                                                                       and _CAConditionType.ConditionUsage       = 'A'
                                                                                       and _CAConditionType.ConditionApplication = 'TX'

  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure                 on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_CAStatisticalItemCode      as _CAStatisticalItemCode         on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode

  association [0..1] to I_Currency                   as _TransactionCurrency           on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_Currency                   as _CACurrencySourceDocument      on  $projection.CACurrencySourceDocument = _CACurrencySourceDocument.Currency
  association [0..1] to I_Currency                   as _CAInvcgDocItmLoclCurrency     on  $projection.CAInvcgDocItmLoclCurrency = _CAInvcgDocItmLoclCurrency.Currency
  association [0..1] to I_CARevnAcctgServiceType     as _CARevnAcctgServiceType        on  $projection.CARevenueAccountingServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CAInvcgAccrualPostingType  as _CAInvcgAccrualPostingType     on  $projection.CAInvcgAccrualPostingType = _CAInvcgAccrualPostingType.CAInvcgAccrualPostingType

  association [0..1] to I_CAAccountDetnCode          as _CAAccountDetnCode             on  $projection.CAAccountDeterminationCode = _CAAccountDetnCode.CAAccountDeterminationCode
  association [0..1] to I_CADeferredRevenueStatus    as _CADeferredRevenueStatus       on  $projection.CAInvcgDfrrdRevenueStatus = _CADeferredRevenueStatus.CAInvcgDfrrdRevenueStatus
  association [0..1] to I_CAInvcgDocItmDefStatus     as _CAInvcgDocItmDefStatus        on  $projection.CAInvcgDocItemDefStatus = _CAInvcgDocItmDefStatus.CAInvcgDocItemDefStatus
  association [0..1] to I_CAInvcgDocItmCrtnMethod    as _CAInvcgDocItmCrtnMethod       on  $projection.CAInvcgDocItemCrtnMethod = _CAInvcgDocItmCrtnMethod.CAInvcgDocItemCrtnMethod
  association [0..1] to I_CAInvcgDocItmSrceItmCat    as _CAInvcgDocItmSrceItmCat       on  $projection.CAInvcgDocItemSourceItmCat = _CAInvcgDocItmSrceItmCat.CAInvcgDocItemSourceItmCat
  association [0..1] to I_Country                    as _TaxCountry                    on  $projection.TaxCountry = _TaxCountry.Country
  association [0..1] to I_CATaxDetnType              as _CATaxDetnType                 on  $projection.CATaxDetnType = _CATaxDetnType.CATaxDetnType
  association [0..1] to I_CASubApplication           as _CASubApplication              on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CATransactionKeyAcctDetn   as _CATransactionKeyAcctDetn      on  $projection.CATransactionKeyAccountDetn = _CATransactionKeyAcctDetn.CATransactionKeyAccountDetn
  association [0..1] to I_CAInvcgCorrectionCat       as _CAInvcgCorrectionCat          on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCat.CAInvcgCorrectionCategory
  association [0..1] to I_CAInvcgOffsettingAction    as _CAInvcgOffsettingAction       on  $projection.CAInvcgOffsettingAction = _CAInvcgOffsettingAction.CAInvcgOffsettingAction
  association [0..1] to I_CAInvcgOffsettingCategory  as _CAInvcgOffsettingCategory     on  $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure    on  $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure


  // from X_S4C_I_CAInvcgDocHeader
  association [0..1] to I_BusinessPartner            as _CABillToParty                 on  $projection.CABillToParty = _CABillToParty.BusinessPartner
  association [0..1] to I_Region                     as _CABillToRegion                on  $projection.CABillToCountry = _CABillToRegion.Country
                                                                                       and $projection.CABillToRegion  = _CABillToRegion.Region
  association [0..1] to I_Region                     as _CABillFromRegion              on  $projection.CABillToCountry  = _CABillFromRegion.Country
                                                                                       and $projection.CABillFromRegion = _CABillFromRegion.Region
  association [0..1] to I_Region                     as _CASupplyRegion                on  $projection.CABillToCountry = _CASupplyRegion.Country
                                                                                       and $projection.CASupplyRegion  = _CASupplyRegion.Region
  association [0..1] to I_Country                    as _CABillToCountry               on  $projection.CABillToCountry = _CABillToCountry.Country
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData           on $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID



  // extension
  association [0..1] to E_CAInvcgDocItem             as _Extension                     on  $projection.CAInvoicingDocument = _Extension.CAInvoicingDocument
                                                                                       and $projection.CAInvcgDocItem      = _Extension.CAInvcgDocItem

  // deprecated
  association [0..1] to I_CADocumentHeader           as _CADocumentHeader              on  $projection.CADocumentNumber = _CADocumentHeader.CADocumentNumber
{
      @ObjectModel.foreignKey.association: '_CAInvcgDocHeader'
  key invdocno                                                    as CAInvoicingDocument,
  key invdocitem                                                  as CAInvcgDocItem,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItemType'
      itemtype                                                    as CAInvcgDocumentItemType,
      @ObjectModel.foreignKey.association: '_CompCode'
      bukrs                                                       as CompanyCode,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                       as Division,
      vtref                                                       as CAContract,
      vtpos                                                       as CAProviderContractItemNumber,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                                       as CASubApplication,
      @ObjectModel.foreignKey.association: '_CAInvcgItmAltvBusinessPartner'
      cast(gpart_a as inv_gpart_a_gfn_kk preserving type)         as CAInvcgItmAltvBusinessPartner,
      @ObjectModel.foreignKey.association: '_CAInvcgItmAltvContractAccount'
      cast(vkont_a as inv_vkont_a_gfn_kk preserving type)         as CAInvcgItmAltvContractAccount,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmAltvMDCat'
      cast(gpvkt_a_cat as inv_gpvkt_a_cat_gfn_kk preserving type) as CAInvcgDocItmAltvMDCat,
      // fkey on upper view
      hvorg                                                       as CAMainTransaction,
      // fkey on upper view
      tvorg                                                       as CASubTransaction,
      item_simulated                                              as CAIsDocItemSimulated,
      reversalitem                                                as CAInvcgDocItemIsReversal,
      cast(totalrel as totalrel_gfn_kk preserving type)           as CAInvcgIsInFinalAmt,
      postrel                                                     as CAInvcgIsItemPostingRelevant,
      not_bprel                                                   as CAInvcgIsNotBPRelevant,
      printrel                                                    as CAInvcgIsItemPrintingRelevant,
      print_substitute                                            as CAInvcgSubstituteGroupPrinting,
      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers                                                       as TransactionCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                                       as CAAmountInTransactionCurrency,

      @ObjectModel.foreignKey.association: '_CAInvcgDocItmLoclCurrency'
      invwaerh                                                    as CAInvcgDocItmLoclCurrency,
      @Semantics.amount.currencyCode: 'CAInvcgDocItmLoclCurrency'
      invbetrh                                                    as CAInvcgDocItmAmtInLoclCurrency,
      @Semantics.amount.currencyCode: 'CAInvcgDocItmLoclCurrency'
      invsbash                                                    as CAInvcgDocItmTaxBaseAmtInLCrcy,

      @ObjectModel.foreignKey.association: '_CACurrencySourceDocument'
      cast(srcdoc_curr as srcdoc_curr_gfn_kk preserving type)     as CACurrencySourceDocument,
      @Semantics.amount.currencyCode: 'CACurrencySourceDocument'
      cast(srcdoc_amt as srcdoc_amt_gfn_kk preserving type)       as CAInvcgSourceDocumentAmount,
      cast(currc_group as currc_group_gfn_kk preserving type)     as CAGroupingCurrencyTranslation,
      @ObjectModel.foreignKey.association: '_CAAccountDetnCode'
      kofiz                                                       as CAAccountDeterminationCode,
      cast(bupla as farp_bupla preserving type)                   as BusinessPlace,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      cast(gsber as fis_rbusa preserving type)                    as BusinessArea,
      tax_included                                                as CATaxIsIncluded,
      @ObjectModel.foreignKey.association: '_CATaxDetnType'
      tax_det_type                                                as CATaxDetnType,
      taxgr                                                       as CAInvcgTaxGroupingKey,
      // fkey on upper view
      strkz                                                       as CAOtherTaxCode,
      // fkey on upper view
      mwskz                                                       as TaxCode,
      -- fkey missing
      ermwskz                                                     as CATaxDeterminationCode,
      // fkey on upper view
      txjcd                                                       as TaxJurisdiction,
      @ObjectModel.foreignKey.association: '_CATransactionKeyAcctDetn'
      ktosl                                                       as CATransactionKeyAccountDetn,
      @EndUserText.label: 'Steuerkonditionsart'
      @ObjectModel.foreignKey.association: '_CAConditionType'
      kschl                                                       as CAConditionType,
      tax_perc                                                    as CATaxRateInPercent,
      @ObjectModel.foreignKey.association: '_TaxCountry'
      tax_country                                                 as TaxCountry,
      taxc_factor                                                 as TransToTaxCntryCrcyCnvrsnFctr,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingAction'
      offset_action                                               as CAInvcgOffsettingAction,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
      offset_cat                                                  as CAInvcgOffsettingCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      offset_proc                                                 as CAInvcgOffsettingProcedure,
      txdat                                                       as CATaxDate,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sbasw                                                       as CATaxBaseAmount,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sbetw                                                       as CATaxAmountInTransCurrency,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      sttax                                                       as CATaxPortionInTransCurrency,
      // fkey on upper view
      qsskz                                                       as WithholdingTaxCode,
      xanza                                                       as CAIsDownPaymentRequest,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                                                       as CAStatisticalItemCode,
      offset_invgr                                                as CAInvcgOffsettingGroup,
      @ObjectModel.foreignKey.association: '_CADeferredRevenueStatus'
      cast(defrev_stat as defrev_stat_gfn_kk preserving type)     as CAInvcgDfrrdRevenueStatus,
      @Semantics.booleanIndicator:true
      rarel                                                       as CAIsRevenueAccountingRelevant,
      ra_invgr                                                    as CAInvcgRevenueGrouping,
      @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
      service_type                                                as CARevenueAccountingServiceType,
      @ObjectModel.foreignKey.association: '_CAInvcgAccrualPostingType'
      cast(billac_type as billac_type_gfn_kk preserving type)     as CAInvcgAccrualPostingType,
      prepaid                                                     as CAIsPrepaid,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      meins                                                       as UnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      menge                                                       as Quantity,
      faedn                                                       as CANetDueDate,
      faeds                                                       as CACashDiscountDueDate,
      sktpz                                                       as CACashDiscountRate,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmDefStatus'
      xstund                                                      as CAInvcgDocItemDefStatus,
      date_from                                                   as CAItemPeriodStartDate,
      date_to                                                     as CAItemPeriodEndDate,
      @ObjectModel.foreignKey.association: '_CAInvcgRefPostgDocTyp'
      cast(cadoctype as cadoctype_gfn_kk preserving type )        as CAInvcgRefPostingDocType,
      @ObjectModel.foreignKey.association: '_CADocument'
      cast(opbel as opbel_gfn_kk preserving type )                as CADocumentNumber,
      psgrp                                                       as CAGroupingKeyDocumentItems,
      invgr                                                       as CAInvcgGroupingKey,
      augbl                                                       as CAClearingDocumentNumber,
      @Semantics.amount.currencyCode: 'TransactionCurrency'
      augbw                                                       as CAClearingAmountInTransCrcy,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmCrtnMethod'
      item_crmet                                                  as CAInvcgDocItemCrtnMethod,
      @ObjectModel.foreignKey.association: '_CAInvcgFunction'
      inv_function                                                as CAInvcgFunction,
      @ObjectModel.foreignKey.association: '_CAInvcgSourceDocCat'
      cast(srcdoccat as srcdoccat_gfn_kk preserving type)         as CAInvcgSourceDocumentCat,
      cast(srcdocno as srcdocno_gfn_kk preserving type)           as CAInvcgSourceDocumentNumber,
      @ObjectModel.foreignKey.association: '_CAInvcgDocItmSrceItmCat'
      srcitemcat                                                  as CAInvcgDocItemSourceItmCat,
      srcdocitem                                                  as CAInvcgSourceDocumentItem,
      @ObjectModel.foreignKey.association: '_CABllbleItmDiscountKey'
      cast(disckey as disckey_gfn_kk preserving type)             as CABllbleItmDiscountKey,
      disckey_versno                                              as CABllbleItmDiscountVersion,
      @ObjectModel.foreignKey.association: '_CAInvcgCorrectionCat'
      cast(corrcat as corrcat_gfn_kk preserving type)             as CAInvcgCorrectionCategory,

      // from X_S4C_I_CAInvcgDocItem
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CABillToParty'
      bill_to_party                                               as CABillToParty,
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CABillToRegion'
      bill_to_region                                              as CABillToRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CABillFromRegion'
      bill_from_region                                            as CABillFromRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      steuc                                                       as CAControlCode,
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CASupplyRegion'
      supply_region                                               as CASupplyRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      @ObjectModel.foreignKey.association: '_CABillToCountry'
      bill_to_country                                             as CABillToCountry,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )    as WBSElementInternalID,

      // Make association public
      _CAInvcgDocHeader,
      _CAInvcgFunction,
      _CompCode,
      _Division,
      _BusinessArea,
      _TransactionCurrency,
      _CAInvcgDocItmLoclCurrency,
      _CACurrencySourceDocument,
      _CAInvcgItmAltvBusinessPartner,
      _CAInvcgItmAltvContractAccount,
      _CAStatisticalItemCode,
      _CAInvcgDocItemType,
      _CABllbleItmDiscountKey,
      _CAInvcgSourceDocCat,
      _CAInvcgRefPostgDocTyp,
      _CADocument,
      _CADeferredRevenueStatus,
      _CAInvcgDocItmAltvMDCat,
      _CAInvcgDocItmDefStatus,
      _CAInvcgDocItmCrtnMethod,
      _CAInvcgDocItmSrceItmCat,
      _CAAccountDetnCode,
      _CARevnAcctgServiceType,
      _CAInvcgAccrualPostingType,
      _CATaxDetnType,
      _TaxCountry,
      _CASubApplication,
      _CATransactionKeyAcctDetn,
      _CAConditionType,
      _UnitOfMeasure,
      _CAInvcgCorrectionCat,
      _CAInvcgOffsettingAction,
      _CAInvcgOffsettingCategory,
      _CAInvcgOffsettingProcedure,

      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CADocument'
      @VDM.lifecycle.status: #DEPRECATED
      @VDM.lifecycle.successor: '_CADocument'
      _CADocumentHeader,

      @Feature: 'SW:IN_CONVINV_TAX'
      _CABillToParty,
      @Feature: 'SW:IN_CONVINV_TAX'
      _CABillToRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      _CABillFromRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      _CASupplyRegion,
      @Feature: 'SW:IN_CONVINV_TAX'
      _CABillToCountry,
      _WBSElementBasicData
}
```
