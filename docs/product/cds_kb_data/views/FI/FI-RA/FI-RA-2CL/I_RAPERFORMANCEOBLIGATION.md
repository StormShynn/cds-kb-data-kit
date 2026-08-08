---
name: I_RAPERFORMANCEOBLIGATION
description: "Raperformanceobligation"
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
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RAPERFORMANCEOBLIGATION

**Raperformanceobligation**

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
| `Segment` |  | |  | `segment` |  |  |
| `ControllingArea` |  | | `_CompanyCode` | `ControllingArea` |  |  |
| `ProfitCenter` |  | |  | `prctr` |  |  |
| `AllocatedPriceInSalesDocCrcy` |  | |  | `alloc_amt` |  |  |
| `ContractualPrcInSlsDocCrcy` |  | |  | `cast(trx_price as farr_cds_contractual_price preserving type)` |  |  |
| `RATotalInterestAmtInSlsDocCrcy` |  | |  | `cast(total_interest_amount as farr_cds_total_interest_amount preserving type)` |  |  |
| `PerUnitSSPriceInSlsDocCrcy` |  | |  | `cast(unit_ssp as farr_cds_unit_ssp preserving type)` |  |  |
| `SSPriceInSalesDocCrcy` |  | |  | `cast(ssp as farr_cds_standalone_price preserving type)` |  |  |
| `SSPriceTolerancePercent` |  | |  | `cast(ssp_range_perc as farr_cds_ssp_range_percentage preserving type)` |  |  |
| `SSPriceToleranceAmount` |  | |  | `ssp_range_amount` |  |  |
| `SalesDocumentCurrency` |  | |  | `cast(alloc_amt_curk as waerk preserving type)` |  |  |
| `PerfOblgnContractualQuantity` |  | |  | `cast(quantity as farr_cds_contractual_quantity)` |  |  |
| `PerfOblgnContractualQtyUnit` |  | |  | `quantity_unit` |  |  |
| `PerfOblgnEffectiveQuantity` |  | |  | `cast(effective_qty as farr_cds_effective_quantity)` |  |  |
| `PerfOblgnEffectiveQuantityUnit` |  | |  | `effective_qty_unit` |  |  |
| `PerfOblgnFulfillmentType` |  | |  | `cast(fulfill_type as farr_fulfill_type preserving type)` |  |  |
| `RAPerfOblgnIsResidual` |  | |  | `cast(residual_pob as farr_cds_residual_pob preserving type)` |  |  |
| `PerfOblgnEventType` |  | |  | `event_type` |  |  |
| `PerformanceObligationStartDate` |  | |  | `start_date` |  |  |
| `PerformanceObligationEndDate` |  | |  | `end_date` |  |  |
| `RAPerfOblgnFinalizationDate` |  | |  | `final_date` |  |  |
| `PerfObligationDeferralMethod` |  | |  | `deferral_method` |  |  |
| `PerfOblgnStartDateType` |  | |  | `start_date_type` |  |  |
| `PerfObligationDuration` |  | |  | `duration` |  |  |
| `PerfObligationDurationUnit` |  | |  | `duration_unit` |  |  |
| `PerfOblgnIsFullyFulfilled` |  | |  | `cast(fully_fulfilled as farr_cds_fully_fulfilled preserving type)` |  |  |
| `PerfOblgnIsFinallyInvoiced` |  | |  | `final_invoice` |  |  |
| `BusinessPartner` |  | |  | `partner` |  |  |
| `CostCenter` |  | |  | `kostl` |  |  |
| `WBSElementExternalID` |  | | `_InternalWBSElement` | `WBSElementExternalID` |  |  |
| `WBSElementInternalID` |  | |  | `cast(ps_psp_pnr as ps_s4_pspnr preserving type)` |  |  |
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
| `FunctionalArea` |  | |  | `fkber` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `ProfitabilitySegment` |  | |  | `cast(case when paobjnr > '9999999999' then '9999999999' else lpad(paobjnr, 10, '0') end as rkeobjnr_numc)` |  |  |
| `ProfitabilitySegment_2` |  | |  | `cast(paobjnr as rkeobjnr_char preserving type)` |  |  |
| `OrderID` |  | |  | `aufnr` |  |  |
| `SalesOrder` |  | |  | `cast(kdauf as farr_cds_acct_assmt_so preserving type)` |  |  |
| `SalesOrderItem` |  | |  | `cast(kdpos as farr_cds_acct_assmt_so_item preserving type)` |  |  |
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
| `RAPerfOblgnIsCostRecognizable` |  | |  | `cast(cost_recognition as farr_cds_cost_recognition preserving type)` |  |  |
| `RAInitialEffectiveDate` |  | |  | `initial_effective_date` |  |  |
| `RootPerformanceObligationInBOM` |  | |  | `bom_pob_id` |  |  |
| `PerfOblgnDeliveredQuantity` |  | |  | `cast(delivered_quantity as farr_cds_delivered_quantity)` |  |  |
| `RAItemDifferenceToDeliveredQty` |  | |  | `cast(delivered_qty_diff as farr_cds_diff_to_delivered_qty)` |  |  |
| `PerformanceObligationRole` |  | |  | `cast(pob_role as farr_cds_pob_role preserving type)` |  |  |
| `LeadingPerformanceObligation` |  | |  | `cast(leading_pob_id as farr_cds_leading_pob_id preserving type)` |  |  |
| `RAPerfOblgnInceptionDate` |  | |  | `inception_date` |  |  |
| `RevnAcctgSuspensionDate` |  | |  | `suspension_date` |  |  |
| `RevnAcctgSuspensionReason` |  | |  | `suspension_reason` |  |  |
| `PerfOblgnHasManualSpreading` |  | |  | `manual_spreading` |  |  |
| `PerfOblgnHasSprdgConflict` |  | |  | `spread_conflict` |  |  |
| `RAAttributeHasConflict` |  | |  | `attr_conflict` |  |  |
| `RAUnivRevnRecgnIntegType` |  | |  | `urr_integration_type` |  |  |
| `RevnAcctgReceivablesAccount` |  | |  | `receivable_account` |  |  |
| `BusinessSolutionOrder` |  | |  | `solution_order_id` |  |  |
| `BusinessSolutionOrderItem` |  | |  | `solution_order_item_id` |  |  |
| `_RevenueAccountingContract` | | ✓ | | | | |
| `_Mapping` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_AccountingPrinciple` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |
| `_ProfitCenter` | | ✓ | | | | |
| `_CurrentProfitCenter` | | ✓ | | | | |
| `_CostCenter` | | ✓ | | | | |
| `_CurrentCostCenter` | | ✓ | | | | |
| `_WBSElement` | | ✓ | | | | |
| `_InternalWBSElement` | | ✓ | | | | |
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
| `_FunctionalArea` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Order` | | ✓ | | | | |
| `_SalesOrder` | | ✓ | | | | |
| `_SalesOrderItem` | | ✓ | | | | |
| `_IndicatorManuallyChgd` | | ✓ | | | | |
| `_PerfOblgnDistinctType` | | ✓ | | | | |
| `_PerformanceObligationRole` | | ✓ | | | | |
| `_RAPerfOblgnCategory` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_RAUnivRevnRecgnIntegType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_RevenueAccountingContract` | `I_RevenueAccountingContract` | [1..1] |
| `_Mapping` | `I_RevenueAccountingMapping` | [1..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_AccountingPrinciple` | `I_AccountingPrinciple` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_ControllingArea` | `I_ControllingArea` | [0..1] |
| `_ProfitCenter` | `I_ProfitCenter` | [0..*] |
| `_CurrentProfitCenter` | `I_ProfitCenter` | [0..1] |
| `_CostCenter` | `I_CostCenter` | [0..*] |
| `_CurrentCostCenter` | `I_CostCenter` | [0..1] |
| `_WBSElement` | `I_WBSElementByExternalID` | [0..1] |
| `_InternalWBSElement` | `I_WBSElementBasicData` | [0..1] |
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
| `_FunctionalArea` | `I_FunctionalArea` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Order` | `I_Order` | [0..1] |
| `_SalesOrder` | `I_SalesOrder` | [0..1] |
| `_SalesOrderItem` | `I_SalesOrderItem` | [0..1] |
| `_IndicatorManuallyChgd` | `I_Indicator` | [1..1] |
| `_PerfOblgnDistinctType` | `I_RAPerfOblgnDistinctType` | [1..1] |
| `_PerformanceObligationRole` | `I_PerformanceObligationRole` | [0..1] |
| `_RAPerfOblgnCategory` | `I_RAPerfOblgnCategory` | [1..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_RAUnivRevnRecgnIntegType` | `I_RAUnivRevnRecgnIntegType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')
@AccessControl.privilegedAssociations:  [ '_CreatedByUser', '_ChangedByUser' ]

@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRAPERFOBLGN'

@EndUserText.label: 'RA Performance Obligation'

@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true // C1 release shall be annotated with this

@ObjectModel.representativeKey: 'PerformanceObligation'
@ObjectModel.semanticKey: [ 'PerformanceObligation' ]
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #B, sizeCategory: #XXL, dataClass: #TRANSACTIONAL }

@VDM.viewType: #BASIC

define view entity I_RAPerformanceObligation
  as select from farr_d_pob

  association [1..1] to I_RevenueAccountingContract as _RevenueAccountingContract
    on $projection.RevenueAccountingContract = _RevenueAccountingContract.RevenueAccountingContract

  association [1..*] to I_RevenueAccountingMapping  as _Mapping
    on $projection.PerformanceObligation = _Mapping.PerformanceObligation

  association [1..1] to I_CompanyCode               as _CompanyCode
    on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_AccountingPrinciple       as _AccountingPrinciple
    on $projection.AccountingPrinciple = _AccountingPrinciple.AccountingPrinciple

  association [0..1] to I_BusinessPartner           as _BusinessPartner
    on $projection.BusinessPartner = _BusinessPartner.BusinessPartner

  association [0..1] to I_Segment                   as _Segment
    on $projection.Segment = _Segment.Segment

  association [0..1] to I_ControllingArea           as _ControllingArea
    on $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_ProfitCenter              as _ProfitCenter
    on  $projection.ControllingArea = _ProfitCenter.ControllingArea
    and $projection.ProfitCenter    = _ProfitCenter.ProfitCenter

  association [0..1] to I_ProfitCenter              as _CurrentProfitCenter
    on  $projection.ControllingArea             = _CurrentProfitCenter.ControllingArea
    and $projection.ProfitCenter                = _CurrentProfitCenter.ProfitCenter
    and _CurrentProfitCenter.ValidityStartDate <= $session.system_date
    and _CurrentProfitCenter.ValidityEndDate   >= $session.system_date

  association [0..*] to I_CostCenter                as _CostCenter
    on  $projection.ControllingArea = _CostCenter.ControllingArea
    and $projection.CostCenter      = _CostCenter.CostCenter

  association [0..1] to I_CostCenter                as _CurrentCostCenter
    on  $projection.ControllingArea           = _CurrentCostCenter.ControllingArea
    and $projection.CostCenter                = _CurrentCostCenter.CostCenter
    and _CurrentCostCenter.ValidityStartDate <= $session.system_date
    and _CurrentCostCenter.ValidityEndDate   >= $session.system_date

  association [0..1] to I_WBSElementByExternalID    as _WBSElement
    on $projection.WBSElementExternalID = _WBSElement.WBSElementExternalID

  // update association to internal wbs element
  association [0..1] to I_WBSElementBasicData       as _InternalWBSElement
    on $projection.WBSElementInternalID = _InternalWBSElement.WBSElementInternalID

  association [0..1] to I_Currency                  as _Currency
    on $projection.SalesDocumentCurrency = _Currency.Currency

  association [0..1] to I_Currency                  as _CostCurrency
    on $projection.CostCurrency = _CostCurrency.Currency

  association [0..1] to I_UnitOfMeasure             as _PerfOblgnEffectiveQtyUnit
    on $projection.PerfOblgnEffectiveQuantityUnit = _PerfOblgnEffectiveQtyUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure             as _PerfOblgnContractualQtyUnit
    on $projection.PerfOblgnContractualQtyUnit = _PerfOblgnContractualQtyUnit.UnitOfMeasure

  association [1..1] to I_RAPerfOblgnFlfmtType      as _FulfillmentType
    on $projection.PerfOblgnFulfillmentType = _FulfillmentType.PerfOblgnFulfillmentType

  association [0..1] to I_RAPerfObligationEventType as _PerfObligationEventType
    on $projection.PerfOblgnEventType = _PerfObligationEventType.PerfOblgnEventType

  association [0..1] to I_RAPerfOblgnStartDateType  as _PerfOblgnStartDateType
    on $projection.PerfOblgnStartDateType = _PerfOblgnStartDateType.PerfOblgnStartDateType

  association [1..1] to I_RAPerfOblgnStatus         as _RAPerfOblgnStatus
    on $projection.RevnAcctgPerfOblgnStatus = _RAPerfOblgnStatus.RevnAcctgPerfOblgnStatus

  association [1..1] to I_User                      as _CreatedByUser
    on $projection.PerfOblgnCreatedByUser = _CreatedByUser.UserID

  association [1..1] to I_User                      as _ChangedByUser
    on $projection.PerfOblgnLastChangedByUsr = _ChangedByUser.UserID

  association [0..1] to I_Customer                  as _Customer
    on $projection.Customer = _Customer.Customer

  association [0..1] to I_FunctionalArea            as _FunctionalArea
    on $projection.FunctionalArea = _FunctionalArea.FunctionalArea

  association [0..1] to I_BusinessArea              as _BusinessArea
    on $projection.BusinessArea = _BusinessArea.BusinessArea

  association [0..1] to I_Order                     as _Order
    on $projection.OrderID = _Order.OrderID

  association [0..1] to I_SalesOrder                as _SalesOrder
    on $projection.SalesOrder = _SalesOrder.SalesOrder

  association [0..1] to I_SalesOrderItem            as _SalesOrderItem
    on  $projection.SalesOrder     = _SalesOrderItem.SalesOrder
    and $projection.SalesOrderItem = _SalesOrderItem.SalesOrderItem

  association [1..1] to I_Indicator                 as _IndicatorManuallyChgd
    on $projection.RAPerfOblgnIsManuallyChanged = _IndicatorManuallyChgd.IndicatorValue

  association [1..1] to I_RAPerfOblgnDistinctType   as _PerfOblgnDistinctType
    on $projection.RAPerfOblgnDistinctType = _PerfOblgnDistinctType.RAPerfOblgnDistinctType

  association [0..1] to I_PerformanceObligationRole as _PerformanceObligationRole
    on $projection.PerformanceObligationRole = _PerformanceObligationRole.PerformanceObligationRole

  association [1..1] to I_RAPerfOblgnCategory       as _RAPerfOblgnCategory
    on $projection.RAPerfOblgnCategory = _RAPerfOblgnCategory.RAPerfOblgnCategory

  association [0..1] to I_SalesOrganization         as _SalesOrganization
    on $projection.RevnAcctgSalesOrganization = _SalesOrganization.SalesOrganization

  association [1..1] to I_RAUnivRevnRecgnIntegType  as _RAUnivRevnRecgnIntegType
    on $projection.RAUnivRevnRecgnIntegType = _RAUnivRevnRecgnIntegType.RAUnivRevnRecgnIntegType
  // association [0..1] to I_RAPerfOblgnDeferralMethod as _PerfOblgnDeferralMethod     on  $projection.PerfObligationDeferralMethod  = _PerfOblgnDeferralMethod.PerfObligationDeferralMethod
  // association [0..1] to I_RAPerfOblgnInvcEffctType  as _PerfOblgnInvcEffctType      on  $projection.RAPerfOblgnInvoiceEffectType  = _PerfOblgnInvcEffctType.RAPerfOblgnInvoiceEffectType

{
      @ObjectModel.text.element: [ 'PerformanceObligationClass' ]
  key cast(pob_id as farr_cds_pob_id preserving type)                               as PerformanceObligation,

      @Semantics.text: true
      cast(pob_name as farr_cds_pob_name preserving type)                           as PerformanceObligationClass,

      @ObjectModel.foreignKey.association: '_RevenueAccountingContract'
      cast(contract_id as farr_cds_contract_id preserving type)                     as RevenueAccountingContract,

      @ObjectModel.foreignKey.association: '_Segment'
      segment                                                                       as Segment,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      _CompanyCode.ControllingArea                                                  as ControllingArea,

      @ObjectModel.foreignKey.association: '_ProfitCenter'
      prctr                                                                         as ProfitCenter,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      alloc_amt                                                                     as AllocatedPriceInSalesDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(trx_price as farr_cds_contractual_price preserving type)                 as ContractualPrcInSlsDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(total_interest_amount as farr_cds_total_interest_amount preserving type) as RATotalInterestAmtInSlsDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(unit_ssp as farr_cds_unit_ssp preserving type)                           as PerUnitSSPriceInSlsDocCrcy,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      cast(ssp as farr_cds_standalone_price preserving type)                        as SSPriceInSalesDocCrcy,

      cast(ssp_range_perc as farr_cds_ssp_range_percentage preserving type)         as SSPriceTolerancePercent,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      ssp_range_amount                                                              as SSPriceToleranceAmount,

      @ObjectModel.foreignKey.association: '_Currency'
      cast(alloc_amt_curk as waerk preserving type)                                 as SalesDocumentCurrency,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnContractualQtyUnit'
      cast(quantity as farr_cds_contractual_quantity)                               as PerfOblgnContractualQuantity,

      @ObjectModel.foreignKey.association: '_PerfOblgnContractualQtyUnit'
      quantity_unit                                                                 as PerfOblgnContractualQtyUnit,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnEffectiveQuantityUnit'
      // cast(effective_qty as abap.dec(18, 2)) as PerfOblgnEffectiveQuantity,
      cast(effective_qty as farr_cds_effective_quantity)                            as PerfOblgnEffectiveQuantity,

      @ObjectModel.foreignKey.association: '_PerfOblgnEffectiveQtyUnit'
      effective_qty_unit                                                            as PerfOblgnEffectiveQuantityUnit,

      @ObjectModel.foreignKey.association: '_FulfillmentType'
      cast(fulfill_type as farr_fulfill_type preserving type)                       as PerfOblgnFulfillmentType,

      cast(residual_pob as farr_cds_residual_pob preserving type)                   as RAPerfOblgnIsResidual,

      @ObjectModel.foreignKey.association: '_PerfObligationEventType'
      event_type                                                                    as PerfOblgnEventType,

      @Semantics.businessDate.from: true
      start_date                                                                    as PerformanceObligationStartDate,

      @Semantics.businessDate.to: true
      end_date                                                                      as PerformanceObligationEndDate,

      final_date                                                                    as RAPerfOblgnFinalizationDate,

      // @ObjectModel.foreignKey.association: '_PerfOblgnDeferralMethod'
      deferral_method                                                               as PerfObligationDeferralMethod,

      @ObjectModel.foreignKey.association: '_PerfOblgnStartDateType'
      start_date_type                                                               as PerfOblgnStartDateType,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnEffectiveQuantityUnit'
      duration                                                                      as PerfObligationDuration,

      duration_unit                                                                 as PerfObligationDurationUnit,

      cast(fully_fulfilled as farr_cds_fully_fulfilled preserving type)             as PerfOblgnIsFullyFulfilled,

      final_invoice                                                                 as PerfOblgnIsFinallyInvoiced,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      partner                                                                       as BusinessPartner,

      @ObjectModel.foreignKey.association: '_CostCenter'
      kostl                                                                         as CostCenter,

      @ObjectModel.foreignKey.association: '_WBSElement'
      _InternalWBSElement.WBSElementExternalID                                      as WBSElementExternalID,

      @ObjectModel.foreignKey.association: '_InternalWBSElement'
      cast(ps_psp_pnr as ps_s4_pspnr preserving type)                               as WBSElementInternalID,

      // No dimension view can be used as sales organization of Revenue accounting is compatible for different component
      // @ObjectModel.foreignKey.association:'_SalesOrganization'
      sales_org                                                                     as RevnAcctgSalesOrganization,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      company_code                                                                  as CompanyCode,

      @ObjectModel.foreignKey.association: '_AccountingPrinciple'
      acct_principle                                                                as AccountingPrinciple,

      @Semantics.user.createdBy: true
      // @ObjectModel.foreignKey.association: '_CreatedByUser' //C1 released view cannot use ForeignKey Association of View without Representative key
      cast(created_by as fis_cc_erfnm preserving type)                              as PerfOblgnCreatedByUser,

      @Semantics.systemDate.createdAt: true
      cast(created_on as fis_cc_erfdt preserving type)                              as PerfOblgnCreationDate,

      @Semantics.systemDate.lastChangedAt: true
      last_changed_on                                                               as PerfOblgnLastChangeDate,

      @Semantics.user.lastChangedBy: true
      // @ObjectModel.foreignKey.association: '_ChangedByUser'
      cast(last_changed_by as fis_aufaenam preserving type)                         as PerfOblgnLastChangedByUsr,

      cast(prevent_alloc as farr_cds_exclude_allocation preserving type)            as PerfOblgnIsExclFromPriceAlloc,

      rev_rec_block                                                                 as PerfOblgnPostingIsSusp,

      @Semantics.amount.currencyCode: 'SalesDocumentCurrency'
      distributed_org_price                                                         as OplContractualPrcInSlsDocCrcy,

      cast(has_pro_change as farr_cds_has_pro_change preserving type)               as PerfOblgnHasContrModification,

      hi_level_pob_id                                                               as RAHigherLevelPerfOblgn,

      soft_deleted                                                                  as PerfOblgnIsSoftDeleted,

      // @ObjectModel.foreignKey.association:'_PerfOblgnInvcEffctType'
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

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      fkber                                                                         as FunctionalArea,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                                         as BusinessArea,

      @API.element: { releaseState: #DECOMMISSIONED, successor: 'ProfitabilitySegment_2' }
      cast(case when paobjnr > '9999999999' then '9999999999' else lpad(paobjnr, 10, '0')
           end as rkeobjnr_numc)                                                    as ProfitabilitySegment,

      cast(paobjnr as rkeobjnr_char preserving type)                                as ProfitabilitySegment_2,

      @ObjectModel.foreignKey.association: '_Order'
      aufnr                                                                         as OrderID,

      @ObjectModel.foreignKey.association: '_SalesOrder'
      cast(kdauf  as farr_cds_acct_assmt_so preserving type)                        as SalesOrder,

      @ObjectModel.foreignKey.association: '_SalesOrderItem'
      cast(kdpos  as farr_cds_acct_assmt_so_item preserving type)                   as SalesOrderItem,


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

      cast(cost_recognition as farr_cds_cost_recognition preserving type)           as RAPerfOblgnIsCostRecognizable,

      initial_effective_date                                                        as RAInitialEffectiveDate,

      bom_pob_id                                                                    as RootPerformanceObligationInBOM,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnContractualQtyUnit'
      cast(delivered_quantity as farr_cds_delivered_quantity)                       as PerfOblgnDeliveredQuantity,

      @Semantics.quantity.unitOfMeasure: 'PerfOblgnContractualQtyUnit'
      cast(delivered_qty_diff as farr_cds_diff_to_delivered_qty)                    as RAItemDifferenceToDeliveredQty,

      cast(pob_role as farr_cds_pob_role preserving type)                           as PerformanceObligationRole,

      cast(leading_pob_id as farr_cds_leading_pob_id preserving type)               as LeadingPerformanceObligation,

      inception_date                                                                as RAPerfOblgnInceptionDate,

      suspension_date                                                               as RevnAcctgSuspensionDate,
      suspension_reason                                                             as RevnAcctgSuspensionReason,

      manual_spreading                                                              as PerfOblgnHasManualSpreading,

      spread_conflict                                                               as PerfOblgnHasSprdgConflict,

      attr_conflict                                                                 as RAAttributeHasConflict,

      urr_integration_type                                                          as RAUnivRevnRecgnIntegType,

      receivable_account                                                            as RevnAcctgReceivablesAccount,
      
      solution_order_id                                                             as BusinessSolutionOrder,
      
      solution_order_item_id                                                        as BusinessSolutionOrderItem,

      /* association */
      _RevenueAccountingContract,
      _Mapping,
      _CompanyCode,
      _AccountingPrinciple,
      _BusinessPartner,
      _Segment,
      _WBSElement,
      _ControllingArea,
      _CurrentProfitCenter,
      _ProfitCenter,
      _CurrentCostCenter,
      _CostCenter,
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
      _FunctionalArea,
      _BusinessArea,
      _Order,
      _SalesOrder,
      _SalesOrderItem,
      _IndicatorManuallyChgd,
      _PerfOblgnDistinctType,
      _PerformanceObligationRole,
      _RAPerfOblgnCategory,
      _RAUnivRevnRecgnIntegType,
      _SalesOrganization,

      _InternalWBSElement
      // _PerfOblgnDeferralMethod,
      // _PerfOblgnInvcEffctType
}
```
