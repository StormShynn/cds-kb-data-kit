---
name: I_CABILLGPLNITEM
description: "Cabillgplnitem"
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
  - item-level
  - component:FI-CA-INV-2CL
  - lob:Finance
---
# I_CABILLGPLNITEM

**Cabillgplnitem**

| Property | Value |
|---|---|
| App Component | `FI-CA-INV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CABillgPlnNumber` | ✓ | |  | `billplanno` |  |  |
| `CABillgPlnItem` | ✓ | |  | `billplanitem` |  |  |
| `CABillgPlnItmCat` |  | |  | `bipitemcat` |  |  |
| `CABillgPlnItmType` |  | |  | `bipitemtype` |  |  |
| `CABillgPlnItmTxt` |  | |  | `bipitemtext` |  |  |
| `CABillgPlnItemExtRef` |  | |  | `bipitemref` |  |  |
| `CABillgPlnItemAmount` |  | |  | `betrw` |  |  |
| `TransactionCurrency` |  | |  | `waers` |  |  |
| `CATaxIsIncluded` |  | |  | `tax_included` |  |  |
| `CABillgPlnItemQuantity` |  | |  | `bip_quantity` |  |  |
| `CABillgPlnItemQuantityUnit` |  | |  | `bip_qty_unit` |  |  |
| `CATaxDeterminationCode` |  | |  | `ermwskz` |  |  |
| `TaxCode` |  | |  | `mwskz` |  |  |
| `CABillgPlnItemStartDate` |  | |  | `valid_from` |  |  |
| `CABillgPlnItmEndDate` |  | |  | `valid_to` |  |  |
| `CABillgPlnItemTermStartDate` |  | |  | `term_from` |  |  |
| `CABillgPlnItemTermEndDate` |  | |  | `term_to` |  |  |
| `CABillgPlnItemRecurring` |  | |  | `recurring` |  |  |
| `CABillgCycle` |  | |  | `cycle` |  |  |
| `CAStartDateForBillingPeriod` |  | |  | `cycle_startdate` |  |  |
| `CAConditionType` |  | |  | `kschl` |  |  |
| `CABillgPlnItemAmountDetnType` |  | |  | `cast(amount_det_type as bip_amount_det_type_gfn_kk preserving type )` |  |  |
| `CABillgPlnItemAmountDateType` |  | |  | `cast(amount_date_type as bip_amount_date_type_gfn_kk preserving type )` |  |  |
| `CABillgPlnItemPriceDateType` |  | |  | `price_date_type` |  |  |
| `CAContract` |  | |  | `vtref` |  |  |
| `CAProviderContractItemNumber` |  | |  | `vtpos` |  |  |
| `CASubApplication` |  | |  | `subap` |  |  |
| `CAProviderContractItemUUID` |  | |  | `vtpid` |  |  |
| `Division` |  | |  | `spart` |  |  |
| `CompanyCode` |  | |  | `bukrs` |  |  |
| `BusinessArea` |  | |  | `gsber` |  |  |
| `Segment` |  | |  | `segment` |  |  |
| `CAMainTransaction` |  | |  | `hvorg` |  |  |
| `CASubTransaction` |  | |  | `tvorg` |  |  |
| `CABillgPlnItemServiceType` |  | |  | `service_type` |  |  |
| `CADependentItemType` |  | |  | `cast(dittype as dittype_gfn_kk preserving type )` |  |  |
| `Material` |  | |  | `matnr` |  |  |
| `SalesOrganization` |  | |  | `vkorg` |  |  |
| `DistributionChannel` |  | |  | `vtweg` |  |  |
| `CAAccountDeterminationCode` |  | |  | `kofiz` |  |  |
| `CAInvcgOffsettingAction` |  | |  | `offset_action` |  |  |
| `CAInvcgOffsettingCategory` |  | |  | `offset_cat` |  |  |
| `CAInvcgOffsettingProcedure` |  | |  | `offset_proc` |  |  |
| `CAInvcgOffsettingReferenceKey` |  | |  | `offset_refid` |  |  |
| `CABillgPlnItemReqDteLast` |  | |  | `requestdate_last` |  |  |
| `CABillgPlnItemReqDteNext` |  | |  | `requestdate_next` |  |  |
| `CABillgPlnDvtgNextRequestDate` |  | |  | `requestdate_next_dev` |  |  |
| `CABillgPlnItemRequestedToDte` |  | |  | `requested_to` |  |  |
| `CABillgPlnItemCanceled` |  | |  | `cancelled` |  |  |
| `CABillgPlnSubItmExist` |  | |  | `subitem_exists` |  |  |
| `CABillgPlnItemMain` |  | |  | `main_bipitem` |  |  |
| `CABillgPlnItmExcptnReason` |  | |  | `item_excreason` |  |  |
| `CABillgPlnItemChildExist` |  | |  | `child_exists` |  |  |
| `CABillgPlnItemParent` |  | |  | `parent_bipitem` |  |  |
| `CABillgPlnItemStatus` |  | |  | `status` |  |  |
| `CABillgPlnItemNrOfBllbleItm` |  | |  | `bit_number` |  |  |
| `CAIsRevnAcctgTransfRecordRlvt` |  | |  | `raoirel` |  |  |
| `ConditionType` |  | |  | `condition_type` |  |  |
| `ConditionIsForStatistics` |  | |  | `condition_statistic` |  |  |
| `CANetDueDate` |  | |  | `faedn` |  |  |
| `CABillgPlnItmIsNotToBeReqd` |  | |  | `cast(case when norequest is initial then '' else 'X' end as xfeld preserving type)` |  |  |
| `CABllbleItmCostType` |  | |  | `cast(co_type as co_type_gfn_kk preserving type)` |  |  |
| `CABllbleItmCostSubType` |  | |  | `cast(co_subtype as co_subtype_gfn_kk preserving type)` |  |  |
| `CAIntcoCompanyCodeRequesting` |  | |  | `ico_bukrs_req` |  |  |
| `CAIntcoCompanyCodeSupplying` |  | |  | `ico_bukrs_sup` |  |  |
| `CAIntcoType` |  | |  | `cast(ico_type as ico_type_gfn_kk preserving type)` |  |  |
| `CAIntcoSubtype` |  | |  | `cast(ico_subtype as ico_subtype_gfn_kk preserving type)` |  |  |
| `_CAConditionType` |  | |  | `_ConditionType` |  |  |
| `_CABillgPln` | | ✓ | | | | |
| `_CABillgPlnItmType` | | ✓ | | | | |
| `_CABillgPlnItmCat` | | ✓ | | | | |
| `_TransactionCurrency` | | ✓ | | | | |
| `_CABillgCycle` | | ✓ | | | | |
| `_CABillgPlnItmStatus` | | ✓ | | | | |
| `_ExcptnRsn` | | ✓ | | | | |
| `_CABillgPlnItmAmtDetnType` | | ✓ | | | | |
| `_CABillgPlnItmAmtDateType` | | ✓ | | | | |
| `_CABillgPlnItmPrcDateType` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_SubApplication` | | ✓ | | | | |
| `_ProviderContract` | | ✓ | | | | |
| `_CAProviderContractItem` | | ✓ | | | | |
| `_ConditionType` | | ✓ | | | | |
| `_CondType` | | ✓ | | | | |
| `_CARevnAcctgServiceType` | | ✓ | | | | |
| `_CADependentItemType` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_BusinessArea` | | ✓ | | | | |
| `_Segment` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_SalesOrganization` | | ✓ | | | | |
| `_DistributionChannel` | | ✓ | | | | |
| `_CAAccountDetnCode` | | ✓ | | | | |
| `_CAInvcgOffsettingAction` | | ✓ | | | | |
| `_CAInvcgOffsettingCategory` | | ✓ | | | | |
| `_CAInvcgOffsettingProcedure` | | ✓ | | | | |
| `_CABllbleItmCostType` | | ✓ | | | | |
| `_CABllbleItmCostSubtype` | | ✓ | | | | |
| `_CAIntcoCompanyCodeRequesting` | | ✓ | | | | |
| `_CAIntcoCompanyCodeSupplying` | | ✓ | | | | |
| `_CAIntcoType` | | ✓ | | | | |
| `_CAIntcoSubtype` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CABillgPln` | `I_CABillgPln` | [1..1] |
| `_CABillgPlnItmType` | `I_CABillgPlnItmType` | [0..1] |
| `_CABillgPlnItmCat` | `I_CABillgPlnItmCat` | [0..1] |
| `_TransactionCurrency` | `I_Currency` | [0..1] |
| `_CABillgCycle` | `I_CABillgCycle` | [0..1] |
| `_CABillgPlnItmStatus` | `I_CABillgPlnItmStatus` | [0..1] |
| `_ExcptnRsn` | `I_CABillgPlnItmExcptnReason` | [0..1] |
| `_CABillgPlnItmAmtDetnType` | `I_CABillgPlnItmAmtDetnType` | [0..1] |
| `_CABillgPlnItmAmtDateType` | `I_CABillgPlnItmAmtDateType` | [0..1] |
| `_CABillgPlnItmPrcDateType` | `I_CABillgPlnItmPrcDateType` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_SubApplication` | `I_CASubApplication` | [0..1] |
| `_ProviderContract` | `I_CAProviderContractHeader` | [0..1] |
| `_CAProviderContractItem` | `I_CAProviderContractItem` | [0..1] |
| `_ConditionType` | `I_ConditionType` | [0..1] |
| `_CondType` | `I_ConditionType` | [0..1] |
| `_CARevnAcctgServiceType` | `I_CARevnAcctgServiceType` | [0..1] |
| `_CADependentItemType` | `I_CADependentItemType` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_BusinessArea` | `I_BusinessArea` | [0..1] |
| `_Segment` | `I_Segment` | [0..1] |
| `_Division` | `I_Division` | [0..1] |
| `_Material` | `I_Material` | [0..1] |
| `_SalesOrganization` | `I_SalesOrganization` | [0..1] |
| `_DistributionChannel` | `I_DistributionChannel` | [0..1] |
| `_CAAccountDetnCode` | `I_CAAccountDetnCode` | [0..1] |
| `_CAInvcgOffsettingAction` | `I_CAInvcgOffsettingAction` | [0..1] |
| `_CAInvcgOffsettingCategory` | `I_CAInvcgOffsettingCategory` | [0..1] |
| `_CAInvcgOffsettingProcedure` | `I_CAInvcgOffsettingProcedure` | [0..1] |
| `_CABllbleItmCostType` | `I_CABllbleItmCostType` | [0..1] |
| `_CABllbleItmCostSubtype` | `I_CABllbleItmCostSubtype` | [0..1] |
| `_CAIntcoCompanyCodeRequesting` | `I_CompanyCode` | [0..1] |
| `_CAIntcoCompanyCodeSupplying` | `I_CompanyCode` | [0..1] |
| `_CAIntcoType` | `I_CAIntcoType` | [0..1] |
| `_CAIntcoSubtype` | `I_CAIntcoSubtype` | [0..1] |
| `_Extension` | `E_CABillgPlnItem` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #REQUIRED
@Analytics: {
  dataExtraction: {
    enabled: true,
    delta.changeDataCapture: {
      mapping: [ {
          table: 'dfkkbix_bip_i', 
          role: #MAIN,
          viewElement: ['CABillgPlnNumber', 'CABillgPlnItem'],
          tableElement: ['billplanno', 'billplanitem']
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
  representativeKey: 'CABillgPlnItem',
  sapObjectNodeType.name: 'ContrAcctgBillingPlanItem',
  supportedCapabilities: [
    #SQL_DATA_SOURCE,
    #CDS_MODELING_DATA_SOURCE,
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE 
  ]
}
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Abrechnungsplanposition'
define view entity I_CABillgPlnItem
  as select from dfkkbix_bip_i
  association [1..1] to I_CABillgPln                 as _CABillgPln                   on  $projection.CABillgPlnNumber = _CABillgPln.CABillgPlnNumber
  association [0..1] to I_CABillgPlnItmType          as _CABillgPlnItmType            on  $projection.CABillgPlnItmType = _CABillgPlnItmType.CABillgPlnItmType
  association [0..1] to I_CABillgPlnItmCat           as _CABillgPlnItmCat             on  $projection.CABillgPlnItmCat = _CABillgPlnItmCat.CABillgPlnItmCat
  association [0..1] to I_Currency                   as _TransactionCurrency          on  $projection.TransactionCurrency = _TransactionCurrency.Currency
  association [0..1] to I_CABillgCycle               as _CABillgCycle                 on  $projection.CABillgCycle = _CABillgCycle.CABillgCycle
  association [0..1] to I_CABillgPlnItmStatus        as _CABillgPlnItmStatus          on  $projection.CABillgPlnItemStatus = _CABillgPlnItmStatus.CABillgPlnItemStatus
  association [0..1] to I_CABillgPlnItmExcptnReason  as _ExcptnRsn                    on  $projection.CABillgPlnItmExcptnReason = _ExcptnRsn.CABillgPlnItmExcptnReason
  association [0..1] to I_CABillgPlnItmAmtDetnType   as _CABillgPlnItmAmtDetnType     on  $projection.CABillgPlnItemAmountDetnType = _CABillgPlnItmAmtDetnType.CABillgPlnItemAmountDetnType
  association [0..1] to I_CABillgPlnItmAmtDateType   as _CABillgPlnItmAmtDateType     on  $projection.CABillgPlnItemAmountDateType = _CABillgPlnItmAmtDateType.CABillgPlnItemAmountDateType
  association [0..1] to I_CABillgPlnItmPrcDateType   as _CABillgPlnItmPrcDateType     on  $projection.CABillgPlnItemPriceDateType = _CABillgPlnItmPrcDateType.CABillgPlnItemPriceDateType
  association [0..1] to I_UnitOfMeasure              as _UnitOfMeasure                on  $projection.CABillgPlnItemQuantityUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_CASubApplication           as _SubApplication               on  $projection.CASubApplication = _SubApplication.CASubApplication
  association [0..1] to I_CAProviderContractHeader   as _ProviderContract             on  $projection.CASubApplication = 'P'
                                                                                      and $projection.CAContract       = _ProviderContract.CAProviderContract
  association [0..1] to I_CAProviderContractItem     as _CAProviderContractItem       on  $projection.CAContract                   = _CAProviderContractItem.CAProviderContract
                                                                                      and $projection.CAProviderContractItemNumber = _CAProviderContractItem.CAProviderContractItemNumber

  -- outdated
  association [0..1] to I_ConditionType              as _ConditionType                on  $projection.CAConditionType         = _ConditionType.ConditionType
                                                                                      and _ConditionType.ConditionUsage       = 'A'
                                                                                      and _ConditionType.ConditionApplication = 'V'

  association [0..1] to I_ConditionType              as _CondType                     on  $projection.ConditionType      = _CondType.ConditionType
                                                                                      and _CondType.ConditionUsage       = 'A'
                                                                                      and _CondType.ConditionApplication = 'V'
  association [0..1] to I_CARevnAcctgServiceType     as _CARevnAcctgServiceType       on  $projection.CABillgPlnItemServiceType = _CARevnAcctgServiceType.CARevenueAccountingServiceType
  association [0..1] to I_CADependentItemType        as _CADependentItemType          on  $projection.CADependentItemType = _CADependentItemType.CADependentItemType

  association [0..1] to I_CompanyCode                as _CompanyCode                  on  $projection.CompanyCode = _CompanyCode.CompanyCode
  association [0..1] to I_BusinessArea               as _BusinessArea                 on  $projection.BusinessArea = _BusinessArea.BusinessArea
  association [0..1] to I_Segment                    as _Segment                      on  $projection.Segment = _Segment.Segment
  association [0..1] to I_Division                   as _Division                     on  $projection.Division = _Division.Division
  association [0..1] to I_Material                   as _Material                     on  $projection.Material = _Material.Material
  association [0..1] to I_SalesOrganization          as _SalesOrganization            on  $projection.SalesOrganization = _SalesOrganization.SalesOrganization
  association [0..1] to I_DistributionChannel        as _DistributionChannel          on  $projection.DistributionChannel = _DistributionChannel.DistributionChannel

  association [0..1] to I_CAAccountDetnCode          as _CAAccountDetnCode            on  $projection.CAAccountDeterminationCode = _CAAccountDetnCode.CAAccountDeterminationCode
  association [0..1] to I_CAInvcgOffsettingAction    as _CAInvcgOffsettingAction      on  $projection.CAInvcgOffsettingAction = _CAInvcgOffsettingAction.CAInvcgOffsettingAction
  association [0..1] to I_CAInvcgOffsettingCategory  as _CAInvcgOffsettingCategory    on  $projection.CAInvcgOffsettingCategory = _CAInvcgOffsettingCategory.CAInvcgOffsettingCategory
  association [0..1] to I_CAInvcgOffsettingProcedure as _CAInvcgOffsettingProcedure   on  $projection.CAInvcgOffsettingProcedure = _CAInvcgOffsettingProcedure.CAInvcgOffsettingProcedure


  association [0..1] to I_CABllbleItmCostType        as _CABllbleItmCostType          on  $projection.CABllbleItmCostType = _CABllbleItmCostType.CABllbleItmCostType
  association [0..1] to I_CABllbleItmCostSubtype     as _CABllbleItmCostSubtype       on  $projection.CABllbleItmCostType    = _CABllbleItmCostSubtype.CABllbleItmCostType
                                                                                      and $projection.CABllbleItmCostSubType = _CABllbleItmCostSubtype.CABllbleItmCostSubType
  association [0..1] to I_CompanyCode                as _CAIntcoCompanyCodeRequesting on  $projection.CAIntcoCompanyCodeRequesting = _CAIntcoCompanyCodeRequesting.CompanyCode
  association [0..1] to I_CompanyCode                as _CAIntcoCompanyCodeSupplying  on  $projection.CAIntcoCompanyCodeSupplying = _CAIntcoCompanyCodeSupplying.CompanyCode
  association [0..1] to I_CAIntcoType                as _CAIntcoType                  on  $projection.CAIntcoType = _CAIntcoType.CAIntcoType
  association [0..1] to I_CAIntcoSubtype             as _CAIntcoSubtype               on  $projection.CAIntcoType    = _CAIntcoSubtype.CAIntcoType
                                                                                      and $projection.CAIntcoSubtype = _CAIntcoSubtype.CAIntcoSubtype
  -- extensions
  association [1..1] to E_CABillgPlnItem             as _Extension                    on  $projection.CABillgPlnNumber = _Extension.CABillgPlnNumber
                                                                                      and $projection.CABillgPlnItem   = _Extension.CABillgPlnItem
{
      @ObjectModel.foreignKey.association: '_CABillgPln'
  key billplanno                                                              as CABillgPlnNumber,
  key billplanitem                                                            as CABillgPlnItem,
      @ObjectModel.foreignKey.association: '_CABillgPlnItmCat'
      bipitemcat                                                              as CABillgPlnItmCat,
      @ObjectModel.foreignKey.association: '_CABillgPlnItmType'
      bipitemtype                                                             as CABillgPlnItmType,
      bipitemtext                                                             as CABillgPlnItmTxt,
      bipitemref                                                              as CABillgPlnItemExtRef,

      @Semantics.amount.currencyCode: 'TransactionCurrency'
      betrw                                                                   as CABillgPlnItemAmount,

      @ObjectModel.foreignKey.association: '_TransactionCurrency'
      waers                                                                   as TransactionCurrency,
      tax_included                                                            as CATaxIsIncluded,
      @Semantics.quantity.unitOfMeasure: 'CABillgPlnItemQuantityUnit'
      bip_quantity                                                            as CABillgPlnItemQuantity,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      bip_qty_unit                                                            as CABillgPlnItemQuantityUnit,
      -- fk missing
      ermwskz                                                                 as CATaxDeterminationCode,
      -- fkey on upper view
      mwskz                                                                   as TaxCode,

      valid_from                                                              as CABillgPlnItemStartDate,
      valid_to                                                                as CABillgPlnItmEndDate,
      term_from                                                               as CABillgPlnItemTermStartDate,
      term_to                                                                 as CABillgPlnItemTermEndDate,
      @EndUserText.label: 'Wiederkehrende Position'
      recurring                                                               as CABillgPlnItemRecurring,

      @ObjectModel.foreignKey.association: '_CABillgCycle'
      cycle                                                                   as CABillgCycle,
      cycle_startdate                                                         as CAStartDateForBillingPeriod,
      @ObjectModel.foreignKey.association: '_CAConditionType'
      @EndUserText.label: 'Konditionsart der Preisfindung'
      kschl                                                                   as CAConditionType,

      @ObjectModel.foreignKey.association: '_CABillgPlnItmAmtDetnType'
      cast(amount_det_type as bip_amount_det_type_gfn_kk preserving type )    as CABillgPlnItemAmountDetnType,
      @ObjectModel.foreignKey.association: '_CABillgPlnItmAmtDateType'
      cast(amount_date_type  as bip_amount_date_type_gfn_kk preserving type ) as CABillgPlnItemAmountDateType,
      @ObjectModel.foreignKey.association: '_CABillgPlnItmPrcDateType'
      price_date_type                                                         as CABillgPlnItemPriceDateType,
      -- fkey missing
      vtref                                                                   as CAContract,
      // @ObjectModel.foreignKey.association: '_CAProviderContractItem'
      vtpos                                                                   as CAProviderContractItemNumber,
      @ObjectModel.foreignKey.association: '_SubApplication'
      subap                                                                   as CASubApplication,
      vtpid                                                                   as CAProviderContractItemUUID,
      @ObjectModel.foreignKey.association: '_Division'
      spart                                                                   as Division,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      bukrs                                                                   as CompanyCode,
      @ObjectModel.foreignKey.association: '_BusinessArea'
      gsber                                                                   as BusinessArea,
      @ObjectModel.foreignKey.association: '_Segment'
      segment                                                                 as Segment,
      -- fkey on upper view
      hvorg                                                                   as CAMainTransaction,
      -- fkey on upper view
      tvorg                                                                   as CASubTransaction,
      @ObjectModel.foreignKey.association: '_CARevnAcctgServiceType'
      service_type                                                            as CABillgPlnItemServiceType,
      @ObjectModel.foreignKey.association: '_CADependentItemType'
      cast(dittype as dittype_gfn_kk preserving type )                        as CADependentItemType,
      @ObjectModel.foreignKey.association: '_Material'
      matnr                                                                   as Material,
      @ObjectModel.foreignKey.association: '_SalesOrganization'
      vkorg                                                                   as SalesOrganization,
      @ObjectModel.foreignKey.association: '_DistributionChannel'
      vtweg                                                                   as DistributionChannel,
      @ObjectModel.foreignKey.association: '_CAAccountDetnCode'
      kofiz                                                                   as CAAccountDeterminationCode,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingAction'
      offset_action                                                           as CAInvcgOffsettingAction,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingCategory'
      offset_cat                                                              as CAInvcgOffsettingCategory,
      @ObjectModel.foreignKey.association: '_CAInvcgOffsettingProcedure'
      offset_proc                                                             as CAInvcgOffsettingProcedure,
      offset_refid                                                            as CAInvcgOffsettingReferenceKey,

      requestdate_last                                                        as CABillgPlnItemReqDteLast,
      requestdate_next                                                        as CABillgPlnItemReqDteNext,
      requestdate_next_dev                                                    as CABillgPlnDvtgNextRequestDate,
      requested_to                                                            as CABillgPlnItemRequestedToDte,
      cancelled                                                               as CABillgPlnItemCanceled,
      subitem_exists                                                          as CABillgPlnSubItmExist,
      main_bipitem                                                            as CABillgPlnItemMain,
      @ObjectModel.foreignKey.association: '_ExcptnRsn'
      item_excreason                                                          as CABillgPlnItmExcptnReason,
      child_exists                                                            as CABillgPlnItemChildExist,
      @EndUserText.label: 'Übergeordnete Position'
      parent_bipitem                                                          as CABillgPlnItemParent,

      @ObjectModel.foreignKey.association: '_CABillgPlnItmStatus'
      status                                                                  as CABillgPlnItemStatus,
      bit_number                                                              as CABillgPlnItemNrOfBllbleItm,

      raoirel                                                                 as CAIsRevnAcctgTransfRecordRlvt,
      @ObjectModel.foreignKey.association: '_CondType'
      condition_type                                                          as ConditionType,
      condition_statistic                                                     as ConditionIsForStatistics,
      faedn                                                                   as CANetDueDate,
      @EndUserText.label: 'Position nicht anforderbar'
      cast(case when norequest is initial then ''
                else 'X' end as xfeld preserving type)                        as CABillgPlnItmIsNotToBeReqd,
      @ObjectModel.foreignKey.association: '_CABllbleItmCostType'
      cast(co_type as co_type_gfn_kk preserving type)                         as CABllbleItmCostType,
      @ObjectModel.foreignKey.association: '_CABllbleItmCostSubtype'
      cast(co_subtype as co_subtype_gfn_kk preserving type)                   as CABllbleItmCostSubType,
      @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeRequesting'
      ico_bukrs_req                                                           as CAIntcoCompanyCodeRequesting,
      @ObjectModel.foreignKey.association: '_CAIntcoCompanyCodeSupplying'
      ico_bukrs_sup                                                           as CAIntcoCompanyCodeSupplying,
      @ObjectModel.foreignKey.association: '_CAIntcoType'
      cast(ico_type as ico_type_gfn_kk preserving type)                       as CAIntcoType,
      @ObjectModel.foreignKey.association: '_CAIntcoSubtype'
      cast(ico_subtype as ico_subtype_gfn_kk preserving type)                 as CAIntcoSubtype,

      _CABillgPln,
      _CABillgCycle,
      _CABillgPlnItmType,
      _CABillgPlnItmCat,
      _CABillgPlnItmStatus,
      _ExcptnRsn,
      _TransactionCurrency,
      _CARevnAcctgServiceType,
      _CADependentItemType,
      _Material,
      _SalesOrganization,
      _DistributionChannel,
      _CAAccountDetnCode,
      _CABillgPlnItmAmtDetnType,
      _CABillgPlnItmAmtDateType,
      _CABillgPlnItmPrcDateType,
      _UnitOfMeasure,
      _SubApplication,
      _ProviderContract,
      _CAProviderContractItem,
      _CondType,
      _CompanyCode,
      _BusinessArea,
      _Segment,
      _Division,
      _CAInvcgOffsettingAction,
      _CAInvcgOffsettingCategory,
      _CAInvcgOffsettingProcedure,
      _CABllbleItmCostType,
      _CABllbleItmCostSubtype,
      _CAIntcoCompanyCodeRequesting,
      _CAIntcoCompanyCodeSupplying,
      _CAIntcoType,
      _CAIntcoSubtype,

      _ConditionType                                                          as _CAConditionType,
      @API.element:   { releaseState: #DEPRECATED, successor: '_CAConditionType' }
      @VDM.lifecycle: { status: #DEPRECATED, successor: '_CAConditionType' }
      _ConditionType
}
```
