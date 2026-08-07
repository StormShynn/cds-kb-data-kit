---
name: I_RAPERFOBLGNCHANGETYPEITEM
description: Raperfoblgnchangetypeitem
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - item-level
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RAPERFOBLGNCHANGETYPEITEM

**Raperfoblgnchangetypeitem**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PerformanceObligation` | ✓ | |  | `cast(pob_id as farr_cds_pob_id preserving type)` |
| `RevenueAccountingContract` | ✓ | |  | `cast(contract_id as farr_cds_contract_id preserving type)` |
| `RevnAcctgContrChangeEffctvDate` | ✓ | |  | `effective_date` |
| `PerformanceObligationClass` |  | |  | `cast(pob_name as farr_cds_pob_name preserving type)` |
| `RAPerfOblgnChangeType` |  | |  | `change_type` |
| `RevnAcctgReconciliationKey` |  | |  | `recon_key` |
| `FiscalYear` |  | |  | `cast(fiscal_year as fis_gjahr preserving type)` |
| `FiscalPeriod` |  | |  | `cast(period as fins_fiscalperiod preserving type)` |
| `FiscalYearPeriod` |  | |  | `cast(concat(fiscal_year, period) as fis_jahrper_conv)` |
| `RAPerformanceObligationType` |  | |  | `cast(pob_type as farr_cds_pob_type preserving type)` |
| `SSPriceInSalesDocCrcy` |  | |  | `cast(ssp as farr_cds_standalone_price preserving type)` |
| `AllocatedPriceInSalesDocCrcy` |  | |  | `alloc_amt` |
| `ContractualPrcInSlsDocCrcy` |  | |  | `cast(trx_price as farr_cds_contractual_price preserving type)` |
| `OplContractualPrcInSlsDocCrcy` |  | |  | `cast(trx_price_org as farr_cds_transaction_price_org preserving type)` |
| `RATotalInterestAmtInSlsDocCrcy` |  | |  | `cast(total_interest_amount as farr_cds_total_interest_amount preserving type)` |
| `PerfOblgnFaceAmtInSlsDocCrcy` |  | |  | `face_value` |
| `SalesDocumentCurrency` |  | |  | `cast(trx_price_curk as waerk preserving type)` |
| `PerformanceObligationStartDate` |  | |  | `start_date` |
| `PerformanceObligationEndDate` |  | |  | `end_date` |
| `PerfOblgnFulfillmentType` |  | |  | `fulfill_type` |
| `PerfObligationDeferralMethod` |  | |  | `deferral_method` |
| `RAPerfOblgnIsResidual` |  | |  | `cast(residual_pob as farr_cds_residual_pob preserving type)` |
| `PerfOblgnIsExclFromPriceAlloc` |  | |  | `cast(prevent_alloc as farr_cds_exclude_allocation preserving type)` |
| `SSPriceTolerancePercent` |  | |  | `cast(ssp_range_perc as farr_cds_ssp_range_percentage preserving type)` |
| `SSPriceToleranceAmount` |  | |  | `ssp_range_amount` |
| `PerfOblgnContractualQuantity` |  | |  | `cast(quantity as farr_cds_contractual_quantity)` |
| `PerfOblgnContractualQtyUnit` |  | |  | `quantity_unit` |
| `PerfOblgnEffectiveQuantity` |  | |  | `cast(effective_qty as farr_cds_effective_quantity)` |
| `PerfOblgnEffectiveQuantityUnit` |  | |  | `effective_qty_unit` |
| `RAPerfOblgnDistinctType` |  | |  | `distinct_type` |
| `RAHigherLevelPerfOblgn` |  | |  | `hi_level_pob_id` |
| `PerfOblgnIsFinallyInvoiced` |  | |  | `final_invoice` |
| `PerfOblgnIsSoftDeleted` |  | |  | `soft_deleted` |
| `RAPerfOblgnFinalizationDate` |  | |  | `final_date` |
| `RAContractIsManuallyAllocated` |  | |  | `cast(manual_allocated as farr_cds_manual_price_alloc preserving type)` |
| `RABusinessChangeReason` |  | |  | `cast(business_change_reason as farr_cds_business_chg_reason preserving type)` |
| `RAChangeTypeCreationDateTime` |  | |  | `cast(created_on as creation_date_time preserving type)` |
| `RAChangeTypeChangeDateTime` |  | |  | `cast(changed_on as last_changed_date_time preserving type)` |
| `_PerfOblgn` | | ✓ | | |
| `_RevenueAccountingContract` | | ✓ | | |
| `_RevnAcctgChangeType` | | ✓ | | |
| `_PerfOblgnDistinctType` | | ✓ | | |
| `_Currency` | | ✓ | | |
| `_PerfOblgnEffectiveQtyUnit` | | ✓ | | |
| `_PerfOblgnContractualQtyUnit` | | ✓ | | |
| `_FulfillmentType` | | ✓ | | |
| `_PerfOblgnDeferralMethod` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PerfOblgn` | `I_RAPerfOblgnWithoutAcctAssgmt` | [1..1] |
| `_RevenueAccountingContract` | `I_RevenueAccountingContract` | [1..1] |
| `_RevnAcctgChangeType` | `I_RevnAcctgChangeType` | [1..1] |
| `_PerfOblgnDistinctType` | `I_RAPerfOblgnDistinctType` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_PerfOblgnEffectiveQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PerfOblgnContractualQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_FulfillmentType` | `I_RAPerfOblgnFlfmtType` | [1..1] |
| `_PerfOblgnDeferralMethod` | `I_RAPerfOblgnDeferralMethod` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY

@EndUserText.label: 'Performance Obligation Change Type Item'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType: {serviceQuality: #C, sizeCategory: #XXL, dataClass: #TRANSACTIONAL}
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]

@VDM.viewType: #BASIC

define view entity I_RAPerfOblgnChangeTypeItem
  as select from farr_d_pob_ctype
  association [1..1] to I_RAPerfOblgnWithoutAcctAssgmt as _PerfOblgn                   on $projection.PerformanceObligation = _PerfOblgn.PerformanceObligation
  association [1..1] to I_RevenueAccountingContract    as _RevenueAccountingContract   on $projection.RevenueAccountingContract = _RevenueAccountingContract.RevenueAccountingContract
  association [1..1] to I_RevnAcctgChangeType          as _RevnAcctgChangeType         on $projection.RAPerfOblgnChangeType = _RevnAcctgChangeType.RAPerfOblgnChangeType
  association [1..1] to I_RAPerfOblgnDistinctType      as _PerfOblgnDistinctType       on $projection.RAPerfOblgnDistinctType = _PerfOblgnDistinctType.RAPerfOblgnDistinctType
  association [0..1] to I_Currency                     as _Currency                    on $projection.SalesDocumentCurrency = _Currency.Currency
  association [0..1] to I_UnitOfMeasure                as _PerfOblgnEffectiveQtyUnit   on $projection.PerfOblgnEffectiveQuantityUnit = _PerfOblgnEffectiveQtyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _PerfOblgnContractualQtyUnit on $projection.PerfOblgnContractualQtyUnit = _PerfOblgnContractualQtyUnit.UnitOfMeasure
  association [1..1] to I_RAPerfOblgnFlfmtType         as _FulfillmentType             on $projection.PerfOblgnFulfillmentType = _FulfillmentType.PerfOblgnFulfillmentType
  association [0..1] to I_RAPerfOblgnDeferralMethod    as _PerfOblgnDeferralMethod     on $projection.PerfObligationDeferralMethod = _PerfOblgnDeferralMethod.PerfObligationDeferralMethod
{
      @ObjectModel.text.element: ['PerformanceObligationClass']
  key cast(pob_id as farr_cds_pob_id preserving type)                               as PerformanceObligation,

      @ObjectModel.foreignKey.association: '_RevenueAccountingContract'
  key cast(contract_id as farr_cds_contract_id preserving type)                     as RevenueAccountingContract,

  key effective_date                                                                as RevnAcctgContrChangeEffctvDate,

      @Semantics.text: true
      cast(pob_name as farr_cds_pob_name preserving type)                           as PerformanceObligationClass,

      @ObjectModel.foreignKey.association: '_RevnAcctgChangeType'
      change_type                                                                   as RAPerfOblgnChangeType,

      recon_key                                                                     as RevnAcctgReconciliationKey,

      cast(fiscal_year as fis_gjahr preserving type)                                as FiscalYear,

      cast(period as fins_fiscalperiod preserving type)                             as FiscalPeriod,

      cast(concat(fiscal_year, period) as fis_jahrper_conv)                         as FiscalYearPeriod,

      cast(pob_type as farr_cds_pob_type preserving type)                           as RAPerformanceObligationType,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(ssp as farr_cds_standalone_price preserving type)                        as SSPriceInSalesDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      alloc_amt                                                                     as AllocatedPriceInSalesDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(trx_price as farr_cds_contractual_price preserving type)                 as ContractualPrcInSlsDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(trx_price_org as farr_cds_transaction_price_org preserving type)         as OplContractualPrcInSlsDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(total_interest_amount as farr_cds_total_interest_amount preserving type) as RATotalInterestAmtInSlsDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      face_value                                                                    as PerfOblgnFaceAmtInSlsDocCrcy,

      @ObjectModel.foreignKey.association: '_Currency'
      cast(trx_price_curk as waerk preserving type)                                 as SalesDocumentCurrency,

      start_date                                                                    as PerformanceObligationStartDate,

      end_date                                                                      as PerformanceObligationEndDate,

      @ObjectModel.foreignKey.association: '_FulfillmentType'
      fulfill_type                                                                  as PerfOblgnFulfillmentType,

      @ObjectModel.foreignKey.association: '_PerfOblgnDeferralMethod'
      deferral_method                                                               as PerfObligationDeferralMethod,

      cast(residual_pob as farr_cds_residual_pob preserving type)                   as RAPerfOblgnIsResidual,

      cast(prevent_alloc as farr_cds_exclude_allocation preserving type)            as PerfOblgnIsExclFromPriceAlloc,

      cast(ssp_range_perc as farr_cds_ssp_range_percentage preserving type)         as SSPriceTolerancePercent,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      ssp_range_amount                                                              as SSPriceToleranceAmount,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnContractualQtyUnit'
      cast(quantity as farr_cds_contractual_quantity)                               as PerfOblgnContractualQuantity,

      @ObjectModel.foreignKey.association: '_PerfOblgnContractualQtyUnit'
      quantity_unit                                                                 as PerfOblgnContractualQtyUnit,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnEffectiveQuantityUnit'
      cast(effective_qty as farr_cds_effective_quantity)                            as PerfOblgnEffectiveQuantity,

      @ObjectModel.foreignKey.association: '_PerfOblgnEffectiveQtyUnit'
      effective_qty_unit                                                            as PerfOblgnEffectiveQuantityUnit,

      @ObjectModel.foreignKey.association: '_PerfOblgnDistinctType'
      distinct_type                                                                 as RAPerfOblgnDistinctType,

      hi_level_pob_id                                                               as RAHigherLevelPerfOblgn,

      final_invoice                                                                 as PerfOblgnIsFinallyInvoiced,

      soft_deleted                                                                  as PerfOblgnIsSoftDeleted,

      final_date                                                                    as RAPerfOblgnFinalizationDate,

      cast(manual_allocated as farr_cds_manual_price_alloc preserving type)         as RAContractIsManuallyAllocated,

      cast(business_change_reason as farr_cds_business_chg_reason preserving type)  as RABusinessChangeReason,

      cast(created_on as creation_date_time preserving type)                        as RAChangeTypeCreationDateTime,

      cast(changed_on as last_changed_date_time preserving type)                    as RAChangeTypeChangeDateTime,

      /* association */
      _Currency,

      _PerfOblgn,

      _RevenueAccountingContract,

      _RevnAcctgChangeType,

      _PerfOblgnDistinctType,

      _FulfillmentType,

      _PerfOblgnDeferralMethod,

      _PerfOblgnEffectiveQtyUnit,

      _PerfOblgnContractualQtyUnit
}
```
