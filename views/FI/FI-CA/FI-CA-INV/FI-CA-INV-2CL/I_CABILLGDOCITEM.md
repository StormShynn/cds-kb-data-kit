---
name: I_CABILLGDOCITEM
description: Cabillgdocitem
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
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGDOCITEM

**Cabillgdocitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `CABillgDocument` | `billdocno` |
| key `CABillgDocItem` | `billdocitem` |
| `CAIsDocItemSimulated` | `item_simulated` |
| `CABillgDocumentItemType` | `itemtype` |
| `CAContract` | `vtref` |
| `CompanyCode` | `bukrs` |
| `CAMainTransaction` | `hvorg` |
| `CASubTransaction` | `tvorg` |
| `CAInvcgIsItemPostingRelevant` | `postrel` |
| `CAInvcgIsItemPrintingRelevant` | `printrel` |
| `CABillgDocItemAmount` | `bill_amount` |
| `CABillgCurrency` | `bill_curr` |
| `CATaxIsIncluded` | `tax_included` |
| `TaxCode` | `mwskz` |
| `UnitOfMeasure` | `qty_unit` |
| `CABillgDocItemExternalNumber` | `refitem` |
| `CABillgDocItemIsReversal` | `reversalitem` |
| `CAInvcgDocItemIsReversal` | `reversalitem` |
| `CAInvcgCorrectionCategory` | `cast(corrcat as corrcat_gfn_kk preserving type )` |
| `CAInvcgIsNotBPRelevant` | `not_bprel` |
| `CAInvcgSubstituteGroupPrinting` | `print_substitute` |
| `CAItemPeriodStartDate` | `date_from` |
| `CAItemPeriodEndDate` | `date_to` |
| `CANetDueDate` | `faedn` |
| `Division` | `spart` |
| `BusinessArea` | `gsber` |
| `BusinessPlace` | `cast(bupla as farp_bupla preserving type)` |
| `Segment` | `segmt` |
| `ProfitCenter` | `prctr` |
| `CAAccountDeterminationCode` | `kofiz` |
| `CATaxDetnType` | `tax_det_type` |
| `CATaxCountry` | `tax_country` |
| `CATaxDateType` | `tax_date_type` |
| `CABillgTaxGroup` | `tax_group` |
| `CAExternalTaxDate` | `ext_tax_date` |
| `CATaxDeterminationCode` | `ermwskz` |
| `CAAltvTaxDeterminationCode` | `cast(ermwskz_b2b as ermwskz_b2b_gfn_kk preserving type )` |
| `CAAltvTaxCode` | `mwskz_b2b` |
| `CAOtherTaxCode` | `strkz` |
| `TaxJurisdiction` | `txjcd` |
| `WithholdingTaxCode` | `qsskz` |
| `CAIsDownPaymentRequest` | `xanza` |
| `CAStatisticalItemCode` | `stakz` |
| `CABillgDeferredRevenueCategory` | `cast(defrev_cat as defrev_cat_gfn_kk preserving type )` |
| `CABillgDeferredRevenueDate` | `defrev_pdate` |
| `CAInvcgDfrrdRevenueStatus` | `cast(defrev_stat as defrev_stat_gfn_kk preserving type )` |
| `CAIsRevenueAccountingRelevant` | `rarel` |
| `CARevenueAccountingServiceType` | `service_type` |
| `CAInvcgAccrualPostingType` | `cast(billac_type as billac_type_gfn_kk preserving type )` |
| `CABillgDocItemIsBIRelevant` | `qty_bw_rel` |
| `CABillgDocItemIsFICORelevant` | `qty_fi_co_rel` |
| `CAProviderContractItemNumber` | `vtpos` |
| `CASubApplication` | `subap` |
| `CAIsPrepaid` | `prepaid` |
| `CABillgIsPrepaidBalanceChg` | `pprefill` |
| `CABillgPartnerSettlementCat` | `cast(pscat as pscat_gfn_kk preserving type )` |
| `CABillgDocItemCrtnMethod` | `item_crmet` |
| `CABillgFunction` | `bill_function` |
| `CABillgGrpgOfAdditionalItems` | `cast(add_group as add_group_gfn_kk preserving type )` |
| `CABillgGrpgOfPaymentData` | `py_group` |
| `CABillgGroupingSourceItems` | `src_group` |
| `CABllbleItmNumber` | `cast(bit_number as bit_number_gfn_kk preserving type )` |
| `CADiscBaseItmGroup` | `disc_group` |
| `CAReasonSecurityDeposit` | `sec_reason` |
| `CABillgReqReason` | `cast(billreqrsn as billreqrsn_gfn_kk preserving type )` |
| `CABllbleItmDiscountKey` | `cast(disckey as disckey_gfn_kk preserving type )` |
| `CABllbleItmDiscountVersion` | `disckey_versno` |
| `CABillingQuantity` | `cast ( quantity_pdp + quantity_adp as quantity_kk )` |
| `CABillgQuantityBeforeDecPoint` | `quantity_pdp` |
| `CABillgQuantityAfterDecPoint` | `quantity_adp` |
| `CADependentItemType` | `cast(dittype as dittype_gfn_kk preserving type )` |
| `ConditionType` | `condition_type` |
| `CAAltvMDOriginalIsEnbld` | `altmd_orig` |
| `CARevenueDistributionUUID` | `invbill_i.diskey` |
| `CAInvcgOffsettingReferenceKey` | `invbill_i.offset_refid` |
| `CAInvcgOffsettingCategory` | `invbill_i.offset_cat` |
| `CAInvcgOffsettingProcedure` | `invbill_i.offset_proc` |
| `CAInvcgOffsettingAction` | `invbill_i.offset_action` |
| `CAInvcgOffsettingGroup` | `invbill_i.offset_group` |
| `CAInvcgOffsettingRefKeyLong` | `cast(invbill_i.offset_refid_l as inv_offset_refid_long_gfn_kk preserving type)` |
| `CAAllowance` | `invbill_i.allowance` |
| `CAAllowanceID` | `invbill_i.allowance_id` |
| `RAOriginalDocItemType` | `cast(invbill_i.ra_origdoc_type as rai_ority_gfn_kk preserving type)` |
| `RAOriginalDocItemID` | `cast(invbill_i.ra_origdoc_id as rai_oriid_gfn_kk preserving type)` |
| `CAAmountPerUnitAmount` | `invbill_i.amount_per_unit_amnt` |
| `CAAmountPerUnitCurrency` | `invbill_i.amount_per_unit_cuky` |
| `CAAmountPerUnitQuantityUnit` | `invbill_i.amount_per_unit_qtyu` |
| `CAAmountPerUnitQuantity` | `invbill_i.amount_per_unit_quan` |
| `CAIntcoCompanyCodeRequesting` | `invbill_i.ico_bukrs_req` |
| `CAIntcoCompanyCodeSupplying` | `invbill_i.ico_bukrs_sup` |
| `CAIntcoType` | `cast(invbill_i.ico_type as ico_type_gfn_kk preserving type)` |
| `CAIntcoProcedure` | `cast(invbill_i.ico_proc as ico_proc_gfn_kk preserving type)` |
| `CABillToParty` | `invbill_i.bill_to_party` |
| `CABillToRegion` | `invbill_i.bill_to_region` |
| `CABillFromRegion` | `invbill_i.bill_from_region` |
| `CAControlCode` | `invbill_i.steuc` |
| `CASupplyRegion` | `invbill_i.supply_region` |
| `CABillToCountry` | `invbill_i.bill_to_country` |
| `WBSElementInternalID` | `cast( ps_psp_pnr as fis_wbsint_no_conv preserving type )` |
| `_CABillgDocumentItemType` | *Association* |
| `_CARevnAcctgServiceType` | *Association* |
| `_CAInvcgAccrualPostingType` | *Association* |
| `_CABillgFunction` | *Association* |
| `_CABllbleItmDiscountKey` | *Association* |
| `_UnitOfMeasure` | *Association* |
| `_CABillgReqReason` | *Association* |
| `_Division` | *Association* |
| `_BusinessArea` | *Association* |
| `_Segment` | *Association* |
| `_ProfitCenter` | *Association* |
| `_CAAccountDetnCode` | *Association* |
| `_CompanyCode` | *Association* |
| `_CABillgCurrency` | *Association* |
| `_CATaxCountry` | *Association* |
| `_CAInvcgCorrectionCat` | *Association* |
| `_CATaxDetnType` | *Association* |
| `_CATaxDateType` | *Association* |
| `_CAStatisticalItemCode` | *Association* |
| `_CABillgDeferredRevnCat` | *Association* |
| `_CADeferredRevenueStatus` | *Association* |
| `_CAIsRevnAcctgRelevant` | *Association* |
| `_CASubApplication` | *Association* |
| `_CABillgDocItemCrtnMethod` | *Association* |
| `_CADependentItemType` | *Association* |
| `_CABillgDocHeader` | *Association* |
| `_CAInvcgOffsettingCategory` | *Association* |
| `_CAInvcgOffsettingProcedure` | *Association* |
| `_CAInvcgOffsettingAction` | *Association* |
| `_CAIntcoCompanyCodeRequesting` | *Association* |
| `_CAIntcoCompanyCodeSupplying` | *Association* |
| `_CAIntcoType` | *Association* |
| `_CAIntcoProcedure` | *Association* |
| `_CAAmountPerUnitQuantityUnit` | *Association* |
| `_WBSElementBasicData` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgDocumentItemType` | `I_CABillgDocumentItemType` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CAInvcgAccrualPostingType` | `I_CAInvcgAccrualPostingType` | [0..1] |
| `_CABillgFunction` | `I_CABillgFunction` | [0..1] |
| `_CABllbleItmDiscountKey` | `I_CABllbleItmDiscountKey` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_CABillgReqReason` | `I_CABillgReqReason` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CAAccountDetnCode` | `I_CAAccountDetnCode` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_CABillgCurrency` | `I_Currency` | [0..1] |
| `_CATaxCountry` | `I_Country` | [0..1] |
| `_CAInvcgCorrectionCat` | `I_CAInvcgCorrectionCat` | [0..1] |
| `_CATaxDetnType` | `I_CATaxDetnType` | [0..1] |
| `_CATaxDateType` | `I_CATaxDateType` | [0..1] |
| `_CAStatisticalItemCode` | `I_CAStatisticalItemCode` | [0..1] |
| `_CABillgDeferredRevnCat` | `I_CABillgDeferredRevnCat` | [0..1] |
| `_CADeferredRevenueStatus` | `I_CADeferredRevenueStatus` | [0..1] |
| `_CAIsRevnAcctgRelevant` | `I_CAIsRevnAcctgRelevant` | [0..1] |
| `_CASubApplication` | `I_CASubApplication` | [0..1] |
| `_CABillgDocItemCrtnMethod` | `I_CABillgDocItemCrtnMethod` | [0..1] |
| `_CADependentItemType` | `I_CADependentItemType` | [0..1] |
| `_CABillgDocHeader` | `I_CABillgDocHeader` | [1..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CAInvcgOffsettingAction` | `I_CAInvcgOffsettingAction` | [0..1] |
| `_CAIntcoCompanyCodeRequesting` | `I_CompanyCode` | [0..1] |
| `_CAIntcoCompanyCodeSupplying` | `I_CompanyCode` | [0..1] |
| `_CAIntcoType` | `I_CAIntcoType` | [0..1] |
| `_CAIntcoProcedure` | `I_CAIntcoProcedure` | [0..1] |
| `_CAAmountPerUnitQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_WBSElementBasicData` | `I_WBSElementBasicData` | [0..1] |
| `_Extension` | `E_CABillgDocItem` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkinvbill_i',
          role: #MAIN,
          viewElement: ['CABillgDocument', 'CABillgDocItem'],
          tableElement: ['billdocno', 'billdocitem']
      } ]
    }
  },
  technicalName: 'ICAINVBILL_I'
}
@VDM.viewType: #BASIC
@ObjectModel: {
  usageType: {
    serviceQuality: #B,
    sizeCategory: #XL,
    dataClass: #TRANSACTIONAL
  },
  modelingPattern: #NONE,
  representativeKey: 'CABillgDocItem',
  sapObjectNodeType.name: 'ContrAcctgBillingDocumentItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Abrechnungsbelegposition'
define view entity I_CABillgDocItem
  as select from dfkkinvbill_i as invbill_i

  association [0..1] to I_CABillgDocumentItemType    as _CABillgDocumentItemType      on  $projection.CABillgDocumentItemType = _CABillgDocumentItemType.CABillgDocumentItemType
  association [0..1] to I_CARevnAcctgServiceType     as _CARevnAcctgServiceType       on  $projection.CARevenueAccountingServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CAInvcgAccrualPostingType  as _CAInvcgAccrualPostingType    on  $projection.CAInvcgAccrualPostingType = _CAInvcgAccrualPostingType.CAInvcgAccrualPostingType
  association [0..1] to I_CABillgFunction            as _CABillgFunction              on  $projection.CABillgFunction = _CABillgFunction.CABillgFunction
  association [0..1] to I_CABllbleItmDiscountKey     as _CABllbleItmDiscountKey       on  $projection.CABllbleItmDiscountKey = _CABllbleItmDiscountKey.CABllbleItmDiscountKey
  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure                on  $projection.UnitOfMeasure = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_CABillgReqReason           as _CABillgReqReason             on  $projection.CABillgReqReason = _CABillgReqReason.CABillgReqReason
  association [0..1] to I_Division                   as _Division                     on  $projection.Division = _Division.Division
  association [0..1] to I_BusinessArea               as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Segment                    as _Segment                      on  $projection.Segment = _Segment.Segment
  association [0..*] to I_ProfitCenter               as _ProfitCenter                 on  $projection.ProfitCenter = _ProfitCenter.ProfitCenter
  association [0..1] to I_CAAccountDetnCode          as _CAAccountDetnCode            on  $projection.CAAccountDeterminationCode = _CAAccountDetnCode.CAAccountDeterminationCode
  association [0..1] to I_CompanyCode                as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_Currency                   as _CABillgCurrency              on  $projection.CABillgCurrency = _CABillgCurrency.Currency
  association [0..1] to I_Country                    as _CATaxCountry                 on  $projection.CATaxCountry = _CATaxCountry.Country

  association [0..1] to I_CAInvcgCorrectionCat       as _CAInvcgCorrectionCat         on  $projection.CAInvcgCorrectionCategory = _CAInvcgCorrectionCat.CAInvcgCorrectionCategory
  association [0..1] to I_CATaxDetnType              as _CATaxDetnType                on  $projection.CATaxDetnType = _CATaxDetnType.CATaxDetnType
  association [0..1] to I_CATaxDateType              as _CATaxDateType                on  $projection.CATaxDateType = _CATaxDateType.CATaxDateType
  association [0..1] to I_CAStatisticalItemCode      as _CAStatisticalItemCode        on  $projection.CAStatisticalItemCode = _CAStatisticalItemCode.CAStatisticalItemCode
  association [0..1] to I_CABillgDeferredRevnCat     as _CABillgDeferredRevnCat       on  $projection.CABillgDeferredRevenueCategory = _CABillgDeferredRevnCat.CABillgDeferredRevenueCategory
  association [0..1] to I_CADeferredRevenueStatus    as _CADeferredRevenueStatus      on  $projection.CAInvcgDfrrdRevenueStatus = _CADeferredRevenueStatus.CAInvcgDfrrdRevenueStatus
  association [0..1] to I_CAIsRevnAcctgRelevant      as _CAIsRevnAcctgRelevant        on  $projection.CAIsRevenueAccountingRelevant = _CAIsRevnAcctgRelevant.CAIsRevenueAccountingRelevant
  association [0..1] to I_CASubApplication           as _CASubApplication             on  $projection.CASubApplication = _CASubApplication.CASubApplication
  association [0..1] to I_CABillgDocItemCrtnMethod   as _CABillgDocItemCrtnMethod     on  $projection.CABillgDocItemCrtnMethod = _CABillgDocItemCrtnMethod.CABillgDocItemCrtnMethod
  association [0..1] to I_CADependentItemType        as _CADependentItemType          on  $projection.CADependentItemType = _CADependentItemType.CADependentItemType

  association [1..1] to I_CABillgDocHeader           as _CABillgDocHeader             on  $projection.CABillgDocument = _CABillgDocHeader.CABillgDocument

  // prepared enhancements
  association [0..1] to I_CAInvcgOffsettingCategory  as _CAInvcgOffsettingCategory    on  $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure   on  $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure
  association [0..1] to I_CAInvcgOffsettingAction    as _CAInvcgOffsettingAction      on  $projection.CAInvcgOffsettingAction = _CAInvcgOffsettingAction.CAInvcgOffsettingAction
  association [0..1] to I_CompanyCode                as _CAIntcoCompanyCodeRequesting on  $projection.CAIntcoCompanyCodeRequesting = _CAIntcoCompanyCodeRequesting.CompanyCode
  association [0..1] to I_CompanyCode                as _CAIntcoCompanyCodeSupplying  on  $projection.CAIntcoCompanyCodeSupplying = _CAIntcoCompanyCodeSupplying.CompanyCode
  association [0..1] to I_CAIntcoType                as _CAIntcoType                  on  $projection.CAIntcoType = _CAIntcoType.CAIntcoType
  association [0..1] to I_CAIntcoProcedure           as _CAIntcoProcedure             on  $projection.CAIntcoProcedure = _CAIntcoProcedure.CAIntcoProcedure
  association [0..1] to I_UnitOfMeasure              as _CAAmountPerUnitQuantityUnit  on  $projection.CAAmountPerUnitQuantityUnit = _CAAmountPerUnitQuantityUnit.UnitOfMeasure
  association [0..1] to I_WBSElementBasicData        as _WBSElementBasicData           on $projection.WBSElementInternalID = _WBSElementBasicData.WBSElementInternalID


  // extension
  association [0..1] to E_CABillgDocItem             as _Extension                    on  $projection.CABillgDocument = _Extension.CABillgDocument
                                                                                      and $projection.CABillgDocItem  = _Extension.CABillgDocItem
{
      @ObjectModel.foreignKey.association: '_CABillgDocHeader'
  key billdocno                                                as CABillgDocument,
  key billdocitem                                              as CABillgDocItem,
      item_simulated                                           as CAIsDocItemSimulated,
      @ObjectModel.foreignKey.association: '_CABillgDocumentItemType'
      itemtype                                                 as CABillgDocumentItemType,
      vtref                                                    as CAContract,
      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                    as CompanyCode,
      -- fkey in upper view
      hvorg                                                    as CAMainTransaction,
      -- fkey in upper view
      tvorg                                                    as CASubTransaction,
      postrel                                                  as CAInvcgIsItemPostingRelevant,
      printrel                                                 as CAInvcgIsItemPrintingRelevant,
      @Semantics.amount.currencyCode: 'CABillgCurrency'
      bill_amount                                              as CABillgDocItemAmount,
      @ObjectModel.foreignKey.association: '_CABillgCurrency'
      bill_curr                                                as CABillgCurrency,
      tax_included                                             as CATaxIsIncluded,
      -- fkey in upper view
      mwskz                                                    as TaxCode,
      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      qty_unit                                                 as UnitOfMeasure,
      refitem                                                  as CABillgDocItemExternalNumber,
      reversalitem                                             as CABillgDocItemIsReversal,

      @API.element: {
        releaseState: #DEPRECATED,
        successor:    'CABillgDocItemIsReversal'
      }
      reversalitem                                             as CAInvcgDocItemIsReversal,
      @ObjectModel.foreignKey.association: '_CAInvcgCorrectionCat'
      cast(corrcat as corrcat_gfn_kk preserving type )         as CAInvcgCorrectionCategory,
      not_bprel                                                as CAInvcgIsNotBPRelevant,
      print_substitute                                         as CAInvcgSubstituteGroupPrinting,
      date_from                                                as CAItemPeriodStartDate,
      date_to                                                  as CAItemPeriodEndDate,
      faedn                                                    as CANetDueDate,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                    as Division,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                    as BusinessArea,
      cast(bupla as farp_bupla preserving type)                as BusinessPlace,
      @ObjectModel.foreignKey.association: '_Segment'
      segmt                                                    as Segment,
      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                                    as ProfitCenter,
      @ObjectModel.foreignKey.association: '_CAAccountDetnCode'
      kofiz                                                    as CAAccountDeterminationCode,
      @ObjectModel.foreignKey.association: '_CATaxDetnType'
      tax_det_type                                             as CATaxDetnType,
      @ObjectModel.foreignKey.association: '_CATaxCountry'
      tax_country                                              as CATaxCountry,
      @ObjectModel.foreignKey.association: '_CATaxDateType'
      tax_date_type                                            as CATaxDateType,
      tax_group                                                as CABillgTaxGroup,
      ext_tax_date                                             as CAExternalTaxDate,
      ermwskz                                                  as CATaxDeterminationCode,
      cast(ermwskz_b2b as ermwskz_b2b_gfn_kk preserving type ) as CAAltvTaxDeterminationCode,
      -- fkey in upper view
      mwskz_b2b                                                as CAAltvTaxCode,
      -- fkey in upper view
      strkz                                                    as CAOtherTaxCode,
      -- fkey in upper view
      txjcd                                                    as TaxJurisdiction,
      -- fkey in upper view
      qsskz                                                    as WithholdingTaxCode,
      xanza                                                    as CAIsDownPaymentRequest,
      @ObjectModel.foreignKey.association: '_CAStatisticalItemCode'
      stakz                                                    as CAStatisticalItemCode,
      @ObjectModel.foreignKey.association: '_CABillgDeferredRevnCat'
      cast(defrev_cat as defrev_cat_gfn_kk preserving type )   as CABillgDeferredRevenueCategory,
      defrev_pdate                                             as CABillgDeferredRevenueDate,
      @ObjectModel.foreignKey.association: '_CADeferredRevenueStatus'
      cast(defrev_stat as defrev_stat_gfn_kk preserving type ) as CAInvcgDfrrdRevenueStatus,
      @Semantics.booleanIndicator:true
      rarel                                                    as CAIsRevenueAccountingRelevant,
      @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
      service_type                                             as CARevenueAccountingServiceType,
      @ObjectModel.foreignKey.association: '_CAInvcgAccrualPostingType'
      cast(billac_type as billac_type_gfn_kk preserving type ) as CAInvcgAccrualPostingType,
      qty_bw_rel                                               as CABillgDocItemIsBIRelevant,
      qty_fi_co_rel                                            as CABillgDocItemIsFICORelevant,
      vtpos                                                    as CAProviderContractItemNumber,
      @ObjectModel.foreignKey.association: '_CASubApplication'
      subap                                                    as CASubApplication,
      prepaid                                                  as CAIsPrepaid,
      pprefill                                                 as CABillgIsPrepaidBalanceChg,
      -- fkey missing
      cast(pscat as pscat_gfn_kk preserving type )             as CABillgPartnerSettlementCat,
      @ObjectModel.foreignKey.association: '_CABillgDocItemCrtnMethod'
      item_crmet                                               as CABillgDocItemCrtnMethod,
      @ObjectModel.foreignKey.association: '_CABillgFunction'
      bill_function                                            as CABillgFunction,
      cast(add_group as add_group_gfn_kk preserving type )     as CABillgGrpgOfAdditionalItems,
      py_group                                                 as CABillgGrpgOfPaymentData,
      src_group                                                as CABillgGroupingSourceItems,
      cast(bit_number as bit_number_gfn_kk preserving type )   as CABllbleItmNumber,
      disc_group                                               as CADiscBaseItmGroup,
      sec_reason                                               as CAReasonSecurityDeposit,
      @ObjectModel.foreignKey.association: '_CABillgReqReason'
      cast(billreqrsn as billreqrsn_gfn_kk preserving type )   as CABillgReqReason,
      @ObjectModel.foreignKey.association: '_CABllbleItmDiscountKey'
      cast(disckey as disckey_gfn_kk preserving type )         as CABllbleItmDiscountKey,
      disckey_versno                                           as CABllbleItmDiscountVersion,
      @Semantics.quantity.unitOfMeasure: 'UnitOfMeasure'
      cast ( quantity_pdp + quantity_adp
             as quantity_kk )                                  as CABillingQuantity,
      quantity_pdp                                             as CABillgQuantityBeforeDecPoint,
      quantity_adp                                             as CABillgQuantityAfterDecPoint,
      @ObjectModel.foreignKey.association: '_CADependentItemType'
      cast(dittype as dittype_gfn_kk preserving type )         as CADependentItemType,
      condition_type                                           as ConditionType,
      altmd_orig                                               as CAAltvMDOriginalIsEnbld,

      _CABillgDocHeader,
      _CABillgReqReason,
      _Division,
      _BusinessArea,
      _CompanyCode,
      _Segment,
      _CATaxCountry,
      _CABillgCurrency,
      _ProfitCenter,
      _CAAccountDetnCode,
      _UnitOfMeasure,
      _CABillgDocumentItemType,
      _CARevnAcctgServiceType,
      _CAInvcgAccrualPostingType,
      _CABillgFunction,
      _CABllbleItmDiscountKey,
      _CAInvcgCorrectionCat,
      _CATaxDetnType,
      _CATaxDateType,
      _CAStatisticalItemCode,
      _CABillgDeferredRevnCat,
      _CADeferredRevenueStatus,
      _CAIsRevnAcctgRelevant,
      _CASubApplication,
      _CABillgDocItemCrtnMethod,
      _CADependentItemType,

      // Moved from Extension View  X_S4C_I_CABILLGDOCITEM
      invbill_i.diskey                                         as CARevenueDistributionUUID,
      invbill_i.offset_refid                                   as CAInvcgOffsettingReferenceKey,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
      invbill_i.offset_cat                                     as CAInvcgOffsettingCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      invbill_i.offset_proc                                    as CAInvcgOffsettingProcedure,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingAction'
      invbill_i.offset_action                                  as CAInvcgOffsettingAction,
      invbill_i.offset_group                                   as CAInvcgOffsettingGroup,
      cast(invbill_i.offset_refid_l as inv_offset_refid_long_gfn_kk preserving type) as CAInvcgOffsettingRefKeyLong,
      invbill_i.allowance                                      as CAAllowance,
      invbill_i.allowance_id                                   as CAAllowanceID,
      cast(invbill_i.ra_origdoc_type as rai_ority_gfn_kk preserving type) as RAOriginalDocItemType,
      cast(invbill_i.ra_origdoc_id as rai_oriid_gfn_kk preserving type) as RAOriginalDocItemID,
      @Semantics.amount.currencyCode: 'CAAmountPerUnitCurrency'
      invbill_i.amount_per_unit_amnt                           as CAAmountPerUnitAmount,
      invbill_i.amount_per_unit_cuky                           as CAAmountPerUnitCurrency,
      @ObjectModel.foreignKey.association: '_CAAmountPerUnitQuantityUnit'
      invbill_i.amount_per_unit_qtyu                           as CAAmountPerUnitQuantityUnit,
      @Semantics.quantity.unitOfMeasure: 'CAAmountPerUnitQuantityUnit'
      invbill_i.amount_per_unit_quan                           as CAAmountPerUnitQuantity,
      @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeRequesting'
      invbill_i.ico_bukrs_req                                  as CAIntcoCompanyCodeRequesting,
      @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeSupplying'
      invbill_i.ico_bukrs_sup                                  as CAIntcoCompanyCodeSupplying,
      @ObjectModel.foreignKey.association: '_CAIntcoType'
      cast(invbill_i.ico_type as ico_type_gfn_kk preserving type) as CAIntcoType,
      @ObjectModel.foreignKey.association: '_CAIntcoProcedure'
      cast(invbill_i.ico_proc as ico_proc_gfn_kk preserving type) as CAIntcoProcedure,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.bill_to_party                                  as CABillToParty,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.bill_to_region                                 as CABillToRegion,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.bill_from_region                               as CABillFromRegion,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.steuc                                          as CAControlCode,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.supply_region                                  as CASupplyRegion,
      @Feature :'SW:IN_CONVINV_TAX'
      invbill_i.bill_to_country                                as CABillToCountry,
      @ObjectModel.foreignKey.association: '_WBSElementBasicData'
      cast( ps_psp_pnr as fis_wbsint_no_conv preserving type ) as WBSElementInternalID,      

      _CAInvcgOffsettingCategory,
      _CAInvcgOffsettingProcedure,
      _CAInvcgOffsettingAction,
      _CAAmountPerUnitQuantityUnit,
      _CAIntcoCompanyCodeRequesting,
      _CAIntcoCompanyCodeSupplying,
      _CAIntcoType,
      _CAIntcoProcedure,
      _WBSElementBasicData
}
```
