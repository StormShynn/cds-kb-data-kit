---
name: I_RAPERFOBLGNWITHOUTACCTASSGMT
description: "Raperfoblgnwithoutacctassgmt"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RAPERFOBLGNWITHOUTACCTASSGMT

**Raperfoblgnwithoutacctassgmt**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PerformanceObligation` | ✓ | |  | `cast(pob_id as farr_cds_pob_id preserving type)` |  |  |
| `PerformanceObligationClass` |  | |  | `cast(pob_name as farr_cds_pob_name preserving type)` |  |  |
| `RevenueAccountingContract` |  | |  | `cast(contract_id as farr_cds_contract_id preserving type)` |  |  |
| `AllocatedPriceInSalesDocCrcy` |  | |  | `alloc_amt` |  |  |
| `ContractualPrcInSlsDocCrcy` |  | |  | `cast(trx_price as farr_cds_contractual_price preserving type)` |  |  |
| `PerUnitSSPriceInSlsDocCrcy` |  | |  | `cast(unit_ssp as farr_cds_unit_ssp preserving type)` |  |  |
| `SSPriceInSalesDocCrcy` |  | |  | `cast(ssp as farr_cds_standalone_price preserving type)` |  |  |
| `SSPriceTolerancePercent` |  | |  | `cast(ssp_range_perc as farr_cds_ssp_range_percentage preserving type)` |  |  |
| `SSPriceToleranceAmount` |  | |  | `ssp_range_amount` |  |  |
| `SalesDocumentCurrency` |  | |  | `alloc_amt_curk` |  |  |
| `PerfOblgnContractualQuantity` |  | |  | `cast(quantity as farr_cds_contractual_quantity)` |  |  |
| `PerfOblgnContractualQtyUnit` |  | |  | `quantity_unit` |  |  |
| `PerfOblgnEffectiveQuantity` |  | |  | `cast(effective_qty as farr_cds_effective_quantity)` |  |  |
| `PerfOblgnEffectiveQuantityUnit` |  | |  | `effective_qty_unit` |  |  |
| `PerfOblgnFulfillmentType` |  | |  | `fulfill_type` |  |  |
| `RAPerfOblgnIsResidual` |  | |  | `cast(residual_pob as farr_cds_residual_pob preserving type)` |  |  |
| `PerfOblgnEventType` |  | |  | `event_type` |  |  |
| `PerformanceObligationStartDate` |  | |  | `start_date` |  |  |
| `PerformanceObligationEndDate` |  | |  | `end_date` |  |  |
| `RAPerfOblgnFinalizationDate` |  | |  | `final_date` |  |  |
| `PerfObligationDeferralMethod` |  | |  | `deferral_method` |  |  |
| `PerfOblgnStartDateType` |  | |  | `start_date_type` |  |  |
| `PerfOblgnIsFullyFulfilled` |  | |  | `cast(fully_fulfilled as farr_cds_fully_fulfilled preserving type)` |  |  |
| `PerfOblgnIsFinallyInvoiced` |  | |  | `final_invoice` |  |  |
| `BusinessPartner` |  | |  | `partner` |  |  |
| `RevnAcctgSalesOrganization` |  | |  | `sales_org` |  |  |
| `CompanyCode` |  | |  | `company_code` |  |  |
| `AccountingPrinciple` |  | |  | `acct_principle` |  |  |
| `PerfOblgnCreatedByUser` |  | |  | `cast(created_by as fis_cc_erfnm preserving type)` |  |  |
| `PerfOblgnCreationDate` |  | |  | `cast(created_on as fis_cc_erfdt preserving type)` |  |  |
| `PerfOblgnLastChangeDate` |  | |  | `last_changed_on` |  |  |
| `PerfOblgnLastChangedByUsr` |  | |  | `cast(last_changed_by as fis_aufaenam preserving type)` |  |  |
| `PerfOblgnIsExclFromPriceAlloc` |  | |  | `cast(prevent_alloc as farr_cds_exclude_allocation preserving type)` |  |  |
| `PerfOblgnPostingIsSusp` |  | |  | `rev_rec_block` |  |  |
| `OplContractualPrcInSlsDocCrcy` |  | |  | `distributed_org_price` |  |  |
| `PerfOblgnHasContrModification` |  | |  | `cast(has_pro_change as farr_cds_has_pro_change preserving type)` |  |  |
| `RAHigherLevelPerfOblgn` |  | |  | `hi_level_pob_id` |  |  |
| `PerfOblgnIsSoftDeleted` |  | |  | `soft_deleted` |  |  |
| `RAPerfOblgnInvoiceEffectType` |  | |  | `invoice_effect_type` |  |  |
| `RAFulfillmentIsValueBased` |  | |  | `cast(value_based_fulfillments as farr_cds_ful_based_on_value preserving type)` |  |  |
| `RevnAcctgPerfOblgnStatus` |  | |  | `cast(status as farr_cds_pob_status preserving type)` |  |  |
| `RAPerfOblgnCompletionDate` |  | |  | `cast(completion_date as farr_cds_pob_completion_date preserving type)` |  |  |
| `Customer` |  | |  | `customer_id` |  |  |
| `RAPerformanceObligationType` |  | |  | `cast(pob_type as farr_cds_pob_type preserving type)` |  |  |
| `RAPerfOblgnCategory` |  | |  | `cast(pob_category as farr_cds_pob_category preserving type)` |  |  |
| `RAPerfOblgnAccruedCostAccount` |  | |  | `accrued_cost_account` |  |  |
| `RAPerfOblgnDeferredCostAccount` |  | |  | `deferred_cost_account` |  |  |
| `RAContractAssetAccount` |  | |  | `asset_account` |  |  |
| `RAContractLiabilityAccount` |  | |  | `liability_account` |  |  |
| `RAPerfOblgnIsManuallyChanged` |  | |  | `manual_changed` |  |  |
| `RAPerfOblgnIsManuallyCreated` |  | |  | `manual_created` |  |  |
| `RAPerfOblgnIsManuallyDeleted` |  | |  | `manual_deleted` |  |  |
| `RAPerfOblgnCostAmtInSlsDocCrcy` |  | |  | `cost` |  |  |
| `CostCurrency` |  | |  | `cost_curk` |  |  |
| `RAPerfOblgnDistinctType` |  | |  | `distinct_type` |  |  |
| `RAPerfOblgnIsCostRecognizable` |  | |  | `cost_recognition` |  |  |
| `RAInitialEffectiveDate` |  | |  | `initial_effective_date` |  |  |
| `RootPerformanceObligationInBOM` |  | |  | `bom_pob_id` |  |  |
| `_RevenueAccountingContract` | | ✓ | | | | |
| `_Mapping` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_CostCurrency` | | ✓ | | | | |
| `_PerfOblgnEffectiveQtyUnit` | | ✓ | | | | |
| `_PerfOblgnContractualQtyUnit` | | ✓ | | | | |
| `_FulfillmentType` | | ✓ | | | | |
| `_PerfObligationEventType` | | ✓ | | | | |
| `_PerfOblgnStartDateType` | | ✓ | | | | |
| `_RAPerfOblgnStatus` | | ✓ | | | | |
| `_CreatedByUser` | | ✓ | | | | |
| `_ChangedByUser` | | ✓ | | | | |
| `_Customer` | | ✓ | | | | |
| `_IndicatorManuallyChgd` | | ✓ | | | | |
| `_PerfOblgnDistinctType` | | ✓ | | | | |
| `_RAPerfOblgnCategory` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RevenueAccountingContract` | `I_RevenueAccountingContract` | [1..1] |
| `_Mapping` | `I_RevenueAccountingMapping` | [1..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_CostCurrency` | `I_Currency` | [0..1] |
| `_PerfOblgnEffectiveQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PerfOblgnContractualQtyUnit` | `I_UnitOfMeasure` | [0..1] |
| `_FulfillmentType` | `I_RAPerfOblgnFlfmtType` | [1..1] |
| `_PerfObligationEventType` | `I_RAPerfObligationEventType` | [0..1] |
| `_PerfOblgnStartDateType` | `I_RAPerfOblgnStartDateType` | [0..1] |
| `_RAPerfOblgnStatus` | `I_RAPerfOblgnStatus` | [1..1] |
| `_CreatedByUser` | `I_User` | [1..1] |
| `_ChangedByUser` | `I_User` | [1..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_IndicatorManuallyChgd` | `I_Indicator` | [1..1] |
| `_PerfOblgnDistinctType` | `I_RAPerfOblgnDistinctType` | [1..1] |
| `_RAPerfOblgnCategory` | `I_RAPerfOblgnCategory` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations: [ '_CreatedByUser', '_ChangedByUser' ]

@Analytics.technicalName: 'IRAPOBWHOACTASG'

@EndUserText.label: 'RA Perf Oblgn Without Acct Assgmt'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'PerformanceObligation'
@ObjectModel.semanticKey: [ 'PerformanceObligation' ]
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #XXL, dataClass: #TRANSACTIONAL }

@VDM.viewType: #BASIC

define view entity I_RAPerfOblgnWithoutAcctAssgmt
  as select from farr_d_pob

  association [1..1] to I_RevenueAccountingContract as _RevenueAccountingContract   on $projection.RevenueAccountingContract = _RevenueAccountingContract.RevenueAccountingContract
  association [1..*] to I_RevenueAccountingMapping  as _Mapping                     on $projection.PerformanceObligation = _Mapping.PerformanceObligation
  association [1..1] to I_CompanyCode               as _CompanyCode                 on $projection.CompanyCode = _CompanyCode.CompanyCode
  association [1..1] to I_AccountingPrinciple       as _AccountingPrinciple         on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple
  association [0..1] to I_BusinessPartner           as _BusinessPartner             on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
  association [0..1] to I_Currency                  as _Currency                    on $projection.SalesDocumentCurrency = _Currency.Currency
  association [0..1] to I_Currency                  as _CostCurrency                on $projection.CostCurrency = _CostCurrency.Currency
  association [0..1] to I_UnitOfMeasure             as _PerfOblgnEffectiveQtyUnit   on $projection.PerfOblgnEffectiveQuantityUnit = _PerfOblgnEffectiveQtyUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure             as _PerfOblgnContractualQtyUnit on $projection.PerfOblgnContractualQtyUnit = _PerfOblgnContractualQtyUnit.UnitOfMeasure
  association [1..1] to I_RAPerfOblgnFlfmtType      as _FulfillmentType             on $projection.PerfOblgnFulfillmentType = _FulfillmentType.PerfOblgnFulfillmentType
  association [0..1] to I_RAPerfObligationEventType as _PerfObligationEventType     on $projection.PerfOblgnEventType = _PerfObligationEventType.PerfOblgnEventType
  association [0..1] to I_RAPerfOblgnStartDateType  as _PerfOblgnStartDateType      on $projection.PerfOblgnStartDateType = _PerfOblgnStartDateType.PerfOblgnStartDateType
  association [1..1] to I_RAPerfOblgnStatus         as _RAPerfOblgnStatus           on $projection.RevnAcctgPerfOblgnStatus = _RAPerfOblgnStatus.RevnAcctgPerfOblgnStatus
  association [1..1] to I_User                      as _CreatedByUser               on $projection.PerfOblgnCreatedByUser = _CreatedByUser.UserID
  association [1..1] to I_User                      as _ChangedByUser               on $projection.PerfOblgnLastChangedByUsr = _ChangedByUser.UserID
  association [0..1] to I_Customer                  as _Customer                    on $projection.Customer = _Customer.Customer
  association [1..1] to I_Indicator                 as _IndicatorManuallyChgd       on $projection.RAPerfOblgnIsManuallyChanged = _IndicatorManuallyChgd.IndicatorValue
  association [1..1] to I_RAPerfOblgnDistinctType   as _PerfOblgnDistinctType       on $projection.RAPerfOblgnDistinctType = _PerfOblgnDistinctType.RAPerfOblgnDistinctType
  association [1..1] to I_RAPerfOblgnCategory       as _RAPerfOblgnCategory         on $projection.RAPerfOblgnCategory = _RAPerfOblgnCategory.RAPerfOblgnCategory
  association [0..1] to I_SalesOrganization         as _SalesOrganization           on $projection.RevnAcctgSalesOrganization = _SalesOrganization.SalesOrganization

{
      @ObjectModel.text.element: [ 'PerformanceObligationClass' ]
  key cast(pob_id as farr_cds_pob_id preserving type)                               as PerformanceObligation,

      @Semantics.text: true
      cast(pob_name as farr_cds_pob_name preserving type)                           as PerformanceObligationClass,

      @ObjectModel.foreignKey.association: '_RevenueAccountingContract'
      cast(contract_id as farr_cds_contract_id preserving type)                     as RevenueAccountingContract,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      alloc_amt                                                                     as AllocatedPriceInSalesDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(trx_price as farr_cds_contractual_price preserving type)                 as ContractualPrcInSlsDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(unit_ssp as farr_cds_unit_ssp preserving type)                           as PerUnitSSPriceInSlsDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(ssp as farr_cds_standalone_price preserving type)                        as SSPriceInSalesDocCrcy,

      cast(ssp_range_perc as farr_cds_ssp_range_percentage preserving type)         as SSPriceTolerancePercent,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      ssp_range_amount                                                              as SSPriceToleranceAmount,

      @ObjectModel.foreignKey.association: '_Currency'
      alloc_amt_curk                                                                as SalesDocumentCurrency,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnContractualQtyUnit'
      cast(quantity as farr_cds_contractual_quantity)                               as PerfOblgnContractualQuantity,

      @ObjectModel.foreignKey.association: '_PerfOblgnContractualQtyUnit'
      quantity_unit                                                                 as PerfOblgnContractualQtyUnit,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnEffectiveQuantityUnit'
      // cast(effective_qty as abap.dec(18, 3)) as PerfOblgnEffectiveQuantity,
      cast(effective_qty as farr_cds_effective_quantity)                            as PerfOblgnEffectiveQuantity,

      @ObjectModel.foreignKey.association: '_PerfOblgnEffectiveQtyUnit'
      effective_qty_unit                                                            as PerfOblgnEffectiveQuantityUnit,

      @ObjectModel.foreignKey.association: '_FulfillmentType'
      fulfill_type                                                                  as PerfOblgnFulfillmentType,

      cast(residual_pob as farr_cds_residual_pob preserving type)                   as RAPerfOblgnIsResidual,

      @ObjectModel.foreignKey.association: '_PerfObligationEventType'
      event_type                                                                    as PerfOblgnEventType,

      @Semantics.businessDate.from: true
      start_date                                                                    as PerformanceObligationStartDate,

      @Semantics.businessDate.to: true
      end_date                                                                      as PerformanceObligationEndDate,

      final_date                                                                    as RAPerfOblgnFinalizationDate,

      deferral_method                                                               as PerfObligationDeferralMethod,

      @ObjectModel.foreignKey.association: '_PerfOblgnStartDateType'
      start_date_type                                                               as PerfOblgnStartDateType,

      cast(fully_fulfilled as farr_cds_fully_fulfilled preserving type)             as PerfOblgnIsFullyFulfilled,

      final_invoice                                                                 as PerfOblgnIsFinallyInvoiced,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      partner                                                                       as BusinessPartner,

      // No dimension view can be used as sales organization of Revenue accounting is compatible for different component
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      sales_org                                                                     as RevnAcctgSalesOrganization,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      company_code                                                                  as CompanyCode,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      acct_principle                                                                as AccountingPrinciple,

      @Semantics.user.createdBy: true
      cast(created_by as fis_cc_erfnm preserving type)                              as PerfOblgnCreatedByUser,

      @Semantics.systemDate.createdAt: true
      cast(created_on as fis_cc_erfdt preserving type)                              as PerfOblgnCreationDate,

      @Semantics.systemDate.lastChangedAt: true
      last_changed_on                                                               as PerfOblgnLastChangeDate,

      @Semantics.user.lastChangedBy: true
      cast(last_changed_by as fis_aufaenam preserving type)                         as PerfOblgnLastChangedByUsr,

      cast(prevent_alloc as farr_cds_exclude_allocation preserving type)            as PerfOblgnIsExclFromPriceAlloc,

      rev_rec_block                                                                 as PerfOblgnPostingIsSusp,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      distributed_org_price                                                         as OplContractualPrcInSlsDocCrcy,

      cast(has_pro_change as farr_cds_has_pro_change preserving type)               as PerfOblgnHasContrModification,

      hi_level_pob_id                                                               as RAHigherLevelPerfOblgn,

      soft_deleted                                                                  as PerfOblgnIsSoftDeleted,

      invoice_effect_type                                                           as RAPerfOblgnInvoiceEffectType,

      cast(value_based_fulfillments as farr_cds_ful_based_on_value preserving type) as RAFulfillmentIsValueBased,

      @ObjectModel.foreignKey.association: '_RAPerfOblgnStatus'
      cast(status as farr_cds_pob_status preserving type)                           as RevnAcctgPerfOblgnStatus,

      cast(completion_date as farr_cds_pob_completion_date preserving type)         as RAPerfOblgnCompletionDate,

      @ObjectModel.foreignKey.association: '_Customer'
      customer_id                                                                   as Customer,

      cast(pob_type as farr_cds_pob_type preserving type)                           as RAPerformanceObligationType,

      @ObjectModel.foreignKey.association: '_RAPerfOblgnCategory'
      cast(pob_category as farr_cds_pob_category preserving type)                   as RAPerfOblgnCategory,

      accrued_cost_account                                                          as RAPerfOblgnAccruedCostAccount,

      deferred_cost_account                                                         as RAPerfOblgnDeferredCostAccount,

      asset_account                                                                 as RAContractAssetAccount,

      liability_account                                                             as RAContractLiabilityAccount,

      manual_changed                                                                as RAPerfOblgnIsManuallyChanged,

      manual_created                                                                as RAPerfOblgnIsManuallyCreated,

      manual_deleted                                                                as RAPerfOblgnIsManuallyDeleted,

      @Semantics.amount.currencyCode: 'CostCurrency'
      cost                                                                          as RAPerfOblgnCostAmtInSlsDocCrcy,

      @ObjectModel.foreignKey.association: '_CostCurrency'
      cost_curk                                                                     as CostCurrency,

      @ObjectModel.foreignKey.association: '_PerfOblgnDistinctType'
      distinct_type                                                                 as RAPerfOblgnDistinctType,

      @Semantics.booleanIndicator: true
      cost_recognition                                                              as RAPerfOblgnIsCostRecognizable,

      initial_effective_date                                                        as RAInitialEffectiveDate,

      bom_pob_id                                                                    as RootPerformanceObligationInBOM,

      /* association */
      _RevenueAccountingContract,
      _Mapping,
      _CompanyCode,
      _AccountingPrinciple,
      _BusinessPartner,
      _Currency,
      _CostCurrency,
      _PerfOblgnContractualQtyUnit,
      _PerfOblgnEffectiveQtyUnit,
      _FulfillmentType,
      _PerfObligationEventType,
      _PerfOblgnStartDateType,
      _RAPerfOblgnStatus,
      _CreatedByUser,
      _ChangedByUser,
      _Customer,
      _IndicatorManuallyChgd,
      _PerfOblgnDistinctType,
      _RAPerfOblgnCategory,
      _SalesOrganization

}
```
