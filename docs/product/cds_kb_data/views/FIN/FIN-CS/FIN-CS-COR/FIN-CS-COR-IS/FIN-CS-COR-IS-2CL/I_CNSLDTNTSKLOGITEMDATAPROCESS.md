---
name: I_CNSLDTNTSKLOGITEMDATAPROCESS
description: "Cnsldtntsklogitemdataprocess"
app_component: FIN-CS-COR-IS-2CL
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
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - item-level
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CNSLDTNTSKLOGITEMDATAPROCESS

**Cnsldtntsklogitemdataprocess**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
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
| `CnsldtnTaskLogUUID` | ✓ | |  | `cnsldtnlognumber` |  |  |
| `CnsldtnTaskLogItemUUID` | ✓ | |  | `cnsldtnlogitemnumber` |  |  |
| `CnsldtnTaskLogItemType` |  | |  | `cnsldtnlineitemtype` |  |  |
| `ConsolidationGroup` |  | |  | `cast(cnsldtngroup as fincs_md_congr preserving type)` |  |  |
| `ConsolidationUnit` |  | |  | `cast(cnsldtnunit as fincs_consolidationunit preserving type)` |  |  |
| `CnsldtnFinancialStatementItem` |  | |  | `cast(cnsldtnfinstmntitm as fincs_md_finstatementitem preserving type)` |  |  |
| `SubItemCategory` |  | |  | `cast(cnsldtnfinstmntsubitmcat as fincs_subitemcategory preserving type)` |  |  |
| `SubItem` |  | |  | `cast(cnsldtnfinstmntsubitm as fincs_subitem preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtLoclCrcy` |  | |  | `cast(cnsldtnlocalcurrency as fincs_lcurr_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtInLoclCrcy` |  | |  | `cast(amountinlocalcrcy as fincs_lc_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtGrpCrcy` |  | |  | `cast(cnsldtngroupcurrency as fincs_gcurr_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtInGrpCrcy` |  | |  | `cast(amountingroupcrcy as fincs_gc_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtTransCrcy` |  | |  | `cast(transactioncurrency as fincs_tcurr_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryAmtInTransCrcy` |  | |  | `cast(amountintransactioncrcy as fincs_tc_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryQtyBaseUnit` |  | |  | `cast(baseunit as fincs_base_unit_doc preserving type)` |  |  |
| `CnsldtnJrnlEntryQtyInBsUnt` |  | |  | `cast(quantityinbaseunit as fincs_quan_doc preserving type)` |  |  |
| `CnsldtnTriggeringAmtLoclCrcy` |  | |  | `cast(cnsldtnlocalcurrency as fincs_lcurr_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtInLoclCrcy` |  | |  | `cast(amountinlocalcrcy as fincs_lc_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtGrpCrcy` |  | |  | `cast(cnsldtngroupcurrency as fincs_gcurr_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtInGrpCrcy` |  | |  | `cast(amountingroupcrcy as fincs_gc_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtTransCrcy` |  | |  | `cast(transactioncurrency as fincs_tcurr_tri preserving type)` |  |  |
| `CnsldtnTriggeringAmtInTC` |  | |  | `cast(amountintransactioncrcy as fincs_tc_tri preserving type)` |  |  |
| `CnsldtnTriggeringQtyBaseUnit` |  | |  | `cast(baseunit as fincs_base_unit_tri preserving type)` |  |  |
| `CnsldtnTriggeringQtyInBsUnt` |  | |  | `cast(quantityinbaseunit as fincs_quan_tri preserving type)` |  |  |
| `SequenceNumber` |  | |  | `cast(seqno as fincs_seqno)` |  |  |
| `ConsolidationMethod` |  | |  | `cast(cnsldtnmethod as fincs_method preserving type)` |  |  |
| `CnsldtnRclassfctnRecdType` |  | |  | `cast(recordindicator as fincs_stindicator preserving type)` |  |  |
| `CnsldtnRefExchangeRateType` |  | |  | `cast(reexchangerateindicator as fincs_rerin preserving type)` |  |  |
| `CnsldtnRefExchangeRateValue` |  | |  | `cast(reexchagerate as fincs_rrate preserving type)` |  |  |
| `CnsldtnExchangeRateType` |  | |  | `cast(exchangerateindicator as fincs_exrind preserving type)` |  |  |
| `CnsldtnExchangeRateValue` |  | |  | `cast(exchangerate as fincs_erate preserving type)` |  |  |
| `CnsldtnCrcyTranslationKey` |  | |  | `cast(currencytranskey as fincs_ctkey preserving type)` |  |  |
| `CnsldtnCrcyTrnsltnDiffFSItem` |  | |  | `cast(cnsldtnfinstmntitmr as fincs_md_finstatementitem preserving type)` |  |  |
| `CnsldtnCrcyTrnsltnDiffSubitem` |  | |  | `cast(cnsldtnfinstmntsubitmr as fincs_subitem preserving type)` |  |  |
| `CalculatedDiffAmount` |  | |  | `cast(diffamount as fincs_diffamount preserving type)` |  |  |
| `CalculatedRefAmount` |  | |  | `cast(reffamount as fincs_refamount preserving type)` |  |  |
| `ConsolidationSelection` |  | |  | `cast(selection_id as fincs_sel_id preserving type)` |  |  |
| `FinancialServicesBranch` |  | |  | `branch_id` |  |  |
| `GHGScope2CalculationMethod` |  | |  | `cast(ghgscp2calcmeth as fincs_ghgscp2calculationmethod preserving type)` |  |  |
| `CashLedgerAccount` |  | |  | `re_account` |  |  |
| `CnsldtnCashLedgerChartOfAccts` |  | |  | `cast(re_ktopl as fincs_re_ktopl preserving type)` |  |  |
| `GHGScope2ContractualInstrument` |  | |  | `cast(ghgscp2contrinstr as fincs_ghgscp2cntrctlinstrument preserving type)` |  |  |
| `FinancialDataSource` |  | |  | `datasource_id` |  |  |
| `FinancialManagementArea` |  | |  | `fikrs` |  |  |
| `Fund` |  | |  | `rfund` |  |  |
| `GHGCategory` |  | |  | `cast(ghgcategory as fincs_ghgcategory preserving type)` |  |  |
| `GHGScope` |  | |  | `cast(ghgscope as fincs_ghgscope preserving type)` |  |  |
| `GrantID` |  | |  | `rgrant_nbr` |  |  |
| `SustainabilityModeOfTransport` |  | |  | `cast(susmodeoftransport as fincs_sustmodeoftransport preserving type)` |  |  |
| `FinancialServicesProductGroup` |  | |  | `fs_product_group` |  |  |
| `ConsolidationDocumentNumber` |  | |  | `cast(cnsldtndocumentnumber as fincs_docnr preserving type)` |  |  |
| `ConsolidationPostingItem` |  | |  | `cnsldtnpostingitem` |  |  |
| `CurrencyConversionsDiffType` |  | |  | `cast(cnsldtncrcycnvrsndifftype as fincs_currencycnvrsnsdifftype preserving type)` |  |  |
| `ConsolidationApportionment` |  | |  | `cast(cnsldtnapportionment as fincs_apportionment preserving type)` |  |  |
| `ConsolidationPostgItemAutoFlag` |  | |  | `cast(cnsldtnisautoposting as fincs_autom preserving type)` |  |  |
| `PartnerConsolidationUnit` |  | |  | `cast(cnsldtnpartnerunit as fincs_consolidationunit preserving type)` |  |  |
| `ConsolidationCurrencySetIdn` |  | |  | `cast(cnsldtnsetidentification as fincs_selid preserving type)` |  |  |
| `CnsldtnPercent` |  | |  | `cast(percentage as fincs_taxrate preserving type)` |  |  |
| `PartnerCostCenter` |  | |  | `cast(partnercostcenter as fincs_skost preserving type)` |  |  |
| `FinancialTransactionType` |  | |  | `cast(financialtransactiontype as fincs_financialtransactiontype preserving type)` |  |  |
| `SoldMaterial` |  | |  | `soldmaterial` |  |  |
| `CustomerGroup` |  | |  | `cast(customergroup as fincs_customergroup preserving type)` |  |  |
| `CustomerSupplierCountry` |  | |  | `cast(customersuppliercountry as fincs_country preserving type)` |  |  |
| `SoldProductGroup` |  | |  | `soldproductgroup` |  |  |
| `AssignmentReference` |  | |  | `assignmentreference` |  |  |
| `CnsldtnTskLgNode` |  | |  | `node` |  |  |
| `CnsldtnTskLgParNode` |  | |  | `parentnode` |  |  |
| `ChartOfAccounts` |  | |  | `chartofaccounts` |  |  |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnSubitemCategory` | | ✓ | | | | |
| `_CnsldtnSubItem` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtLoclCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtGrpCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtTransCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryQtyBaseUnit` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtLoclCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtGrpCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringAmtTransCrcy` | | ✓ | | | | |
| `_CnsldtnTriggeringQtyBaseUnit` | | ✓ | | | | |
| `_CnsldtnMethod` | | ✓ | | | | |
| `_CnsldtnItemDiff` | | ✓ | | | | |
| `_CnsldtnGHGScp2CalcMethod` | | ✓ | | | | |
| `_CnsldtnCashLedgerAccount` | | ✓ | | | | |
| `_CnsldtnCashLedgerChartOfAccts` | | ✓ | | | | |
| `_CnsldtnGHGScp2CntrctlInstr` | | ✓ | | | | |
| `_CnsldtnGHGCategory` | | ✓ | | | | |
| `_CnsldtnGHGScope` | | ✓ | | | | |
| `_CnsldtnSustModeOfTransport` | | ✓ | | | | |
| `_CnsldtnCrcyCnvrsnDiffType` | | ✓ | | | | |
| `_CnsldtnApportionment` | | ✓ | | | | |
| `_CnsldtnUnitPartner` | | ✓ | | | | |
| `_CnsldtnFinTransType` | | ✓ | | | | |
| `_CnsldtnMaterial` | | ✓ | | | | |
| `_CnsldtnCustomerGroup` | | ✓ | | | | |
| `_CnsldtnCountry` | | ✓ | | | | |
| `_CnsldtnProductGroup` | | ✓ | | | | |
| `_CnsldtnGLChartOfAccounts` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnGroup` | `I_CnsldtnGroup_3` | [0..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnSubitemCategory` | `I_CnsldtnSubitemCategory_2` | [0..1] |
| `_CnsldtnSubItem` | `I_CnsldtnSubitem_2` | [0..1] |
| `_CnsldtnJrnlEntryAmtLoclCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryAmtGrpCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryAmtTransCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryQtyBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CnsldtnTriggeringAmtLoclCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringAmtGrpCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringAmtTransCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnTriggeringQtyBaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CnsldtnMethod` | `I_CnsldtnMethod` | [0..1] |
| `_CnsldtnItemDiff` | `I_CnsldtnSubitem_2` | [0..1] |
| `_CnsldtnGHGScp2CalcMethod` | `I_CnsldtnGHGScp2CalcMethod` | [0..1] |
| `_CnsldtnCashLedgerAccount` | `I_CnsldtnGLAccount_2` | [0..1] |
| `_CnsldtnCashLedgerChartOfAccts` | `I_CnsldtnGLChartOfAccounts` | [0..1] |
| `_CnsldtnGHGScp2CntrctlInstr` | `I_CnsldtnGHGScp2CntrctlInstr` | [0..1] |
| `_CnsldtnGHGCategory` | `I_CnsldtnGHGCategory` | [0..1] |
| `_CnsldtnGHGScope` | `I_CnsldtnGHGScope` | [0..1] |
| `_CnsldtnSustModeOfTransport` | `I_CnsldtnSustModeOfTransport` | [0..1] |
| `_CnsldtnCrcyCnvrsnDiffType` | `I_CnsldtnCrcyCnvrsnDiffType` | [0..1] |
| `_CnsldtnApportionment` | `I_CnsldtnApportionment` | [0..1] |
| `_CnsldtnUnitPartner` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnFinTransType` | `I_CnsldtnFinTransType` | [0..1] |
| `_CnsldtnMaterial` | `I_CnsldtnMaterial` | [0..1] |
| `_CnsldtnCustomerGroup` | `I_CnsldtnCustomerGroup` | [0..1] |
| `_CnsldtnCountry` | `I_CnsldtnCountry` | [0..1] |
| `_CnsldtnProductGroup` | `I_CnsldtnProductGroup` | [0..1] |
| `_CnsldtnGLChartOfAccounts` | `I_CnsldtnGLChartOfAccounts` | [0..1] |
| `_Extension` | `E_CnsldtnTskLogItemDataProcess` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED }

@EndUserText.label: 'Consolidation Task Log Item Data Process'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'CnsldtnTaskLogItemDataProcess',
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass:      #TRANSACTIONAL,
                             serviceQuality: #A,
                             sizeCategory:   #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #BASIC }

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */

define view entity I_CnsldtnTskLogItemDataProcess
  as select from fincs_log_item

  association [0..1] to I_CnsldtnGroup_3             as _CnsldtnGroup                  on $projection.ConsolidationGroup = _CnsldtnGroup.ConsolidationGroup
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnit                   on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit
  association [0..1] to I_CnsldtnSubitemCategory_2   as _CnsldtnSubitemCategory        on $projection.SubItemCategory = _CnsldtnSubitemCategory.CnsldtnSubitemCategory
  association [0..1] to I_CnsldtnSubitem_2           as _CnsldtnSubItem                on $projection.SubItemCategory = _CnsldtnSubItem.CnsldtnSubitemCategory and $projection.SubItem = _CnsldtnSubItem.CnsldtnSubitem
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtLoclCrcy   on $projection.CnsldtnJrnlEntryAmtLoclCrcy = _CnsldtnJrnlEntryAmtLoclCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtGrpCrcy    on $projection.CnsldtnJrnlEntryAmtGrpCrcy = _CnsldtnJrnlEntryAmtGrpCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtTransCrcy  on $projection.CnsldtnJrnlEntryAmtTransCrcy = _CnsldtnJrnlEntryAmtTransCrcy.Currency
  association [0..1] to I_UnitOfMeasure              as _CnsldtnJrnlEntryQtyBaseUnit   on $projection.CnsldtnJrnlEntryQtyBaseUnit = _CnsldtnJrnlEntryQtyBaseUnit.UnitOfMeasure
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtLoclCrcy  on $projection.CnsldtnTriggeringAmtLoclCrcy = _CnsldtnTriggeringAmtLoclCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtGrpCrcy   on $projection.CnsldtnTriggeringAmtGrpCrcy = _CnsldtnTriggeringAmtGrpCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnTriggeringAmtTransCrcy on $projection.CnsldtnTriggeringAmtTransCrcy = _CnsldtnTriggeringAmtTransCrcy.Currency
  association [0..1] to I_UnitOfMeasure              as _CnsldtnTriggeringQtyBaseUnit  on $projection.CnsldtnTriggeringQtyBaseUnit = _CnsldtnTriggeringQtyBaseUnit.UnitOfMeasure
  association [0..1] to I_CnsldtnMethod              as _CnsldtnMethod                 on $projection.ConsolidationMethod = _CnsldtnMethod.ConsolidationMethod
  association [0..1] to I_CnsldtnSubitem_2           as _CnsldtnItemDiff               on $projection.SubItemCategory = _CnsldtnItemDiff.CnsldtnSubitemCategory and $projection.CnsldtnCrcyTrnsltnDiffSubitem = _CnsldtnItemDiff.CnsldtnSubitem
  association [0..1] to I_CnsldtnGHGScp2CalcMethod   as _CnsldtnGHGScp2CalcMethod      on $projection.GHGScope2CalculationMethod = _CnsldtnGHGScp2CalcMethod.GHGScope2CalculationMethod
  association [0..1] to I_CnsldtnGLAccount_2         as _CnsldtnCashLedgerAccount      on $projection.CnsldtnCashLedgerChartOfAccts = _CnsldtnCashLedgerAccount.ChartOfAccounts and $projection.CashLedgerAccount = _CnsldtnCashLedgerAccount.GLAccount
  association [0..1] to I_CnsldtnGLChartOfAccounts   as _CnsldtnCashLedgerChartOfAccts on $projection.CnsldtnCashLedgerChartOfAccts = _CnsldtnCashLedgerChartOfAccts.ChartOfAccounts
  association [0..1] to I_CnsldtnGHGScp2CntrctlInstr as _CnsldtnGHGScp2CntrctlInstr    on $projection.GHGScope2ContractualInstrument = _CnsldtnGHGScp2CntrctlInstr.GHGScope2ContractualInstrument
  association [0..1] to I_CnsldtnGHGCategory         as _CnsldtnGHGCategory            on $projection.GHGCategory = _CnsldtnGHGCategory.GHGCategory
  association [0..1] to I_CnsldtnGHGScope            as _CnsldtnGHGScope               on $projection.GHGScope = _CnsldtnGHGScope.GHGScope
  association [0..1] to I_CnsldtnSustModeOfTransport as _CnsldtnSustModeOfTransport    on $projection.SustainabilityModeOfTransport = _CnsldtnSustModeOfTransport.SustainabilityModeOfTransport
  association [0..1] to I_CnsldtnCrcyCnvrsnDiffType  as _CnsldtnCrcyCnvrsnDiffType     on $projection.CurrencyConversionsDiffType = _CnsldtnCrcyCnvrsnDiffType.CurrencyConversionsDiffType
  association [0..1] to I_CnsldtnApportionment       as _CnsldtnApportionment          on $projection.ConsolidationApportionment = _CnsldtnApportionment.ConsolidationApportionment
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnitPartner            on $projection.PartnerConsolidationUnit = _CnsldtnUnitPartner.ConsolidationUnit
  association [0..1] to I_CnsldtnFinTransType        as _CnsldtnFinTransType           on $projection.FinancialTransactionType = _CnsldtnFinTransType.FinancialTransactionType
  association [0..1] to I_CnsldtnMaterial            as _CnsldtnMaterial               on $projection.SoldMaterial = _CnsldtnMaterial.Material
  association [0..1] to I_CnsldtnCustomerGroup       as _CnsldtnCustomerGroup          on $projection.CustomerGroup = _CnsldtnCustomerGroup.CustomerGroup
  association [0..1] to I_CnsldtnCountry             as _CnsldtnCountry                on $projection.CustomerSupplierCountry = _CnsldtnCountry.Country
  association [0..1] to I_CnsldtnProductGroup        as _CnsldtnProductGroup           on $projection.SoldProductGroup = _CnsldtnProductGroup.ProductGroup
  association [0..1] to I_CnsldtnGLChartOfAccounts   as _CnsldtnGLChartOfAccounts      on $projection.ChartOfAccounts = _CnsldtnGLChartOfAccounts.ChartOfAccounts

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnTskLogItemDataProcess as _Extension                   on $projection.CnsldtnTaskLogUUID = _Extension.CnsldtnTaskLogUUID and $projection.CnsldtnTaskLogItemUUID = _Extension.CnsldtnTaskLogItemUUID

{
  key cnsldtnlognumber                                                                 as CnsldtnTaskLogUUID,
  key cnsldtnlogitemnumber                                                             as CnsldtnTaskLogItemUUID,

      cnsldtnlineitemtype                                                              as CnsldtnTaskLogItemType,

      @ObjectModel: { foreignKey.association: '_CnsldtnGroup',
                      sapObjectNodeTypeReference: 'ConsolidationGroup' }
      cast(cnsldtngroup as fincs_md_congr preserving type)                             as ConsolidationGroup,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnit',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      cast(cnsldtnunit as fincs_consolidationunit preserving type)                     as ConsolidationUnit,

      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem'
      cast(cnsldtnfinstmntitm as fincs_md_finstatementitem preserving type)            as CnsldtnFinancialStatementItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnSubitemCategory',
                      sapObjectNodeTypeReference: 'ConsolidationSubitemCategory' }
      cast(cnsldtnfinstmntsubitmcat as fincs_subitemcategory preserving type)          as SubItemCategory,

      @ObjectModel.foreignKey.association: '_CnsldtnSubItem'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationSubitem'
      cast(cnsldtnfinstmntsubitm as fincs_subitem preserving type)                     as SubItem,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtLoclCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtnlocalcurrency as fincs_lcurr_doc preserving type)                    as CnsldtnJrnlEntryAmtLoclCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtLoclCrcy'
      cast(amountinlocalcrcy as fincs_lc_doc preserving type)                          as CnsldtnJrnlEntryAmtInLoclCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtGrpCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtngroupcurrency as fincs_gcurr_doc preserving type)                    as CnsldtnJrnlEntryAmtGrpCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtGrpCrcy'
      cast(amountingroupcrcy as fincs_gc_doc preserving type)                          as CnsldtnJrnlEntryAmtInGrpCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtTransCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(transactioncurrency as fincs_tcurr_doc preserving type)                     as CnsldtnJrnlEntryAmtTransCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtTransCrcy'
      cast(amountintransactioncrcy as fincs_tc_doc preserving type)                    as CnsldtnJrnlEntryAmtInTransCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryQtyBaseUnit'
//      @ObjectModel.sapObjectNodeTypeReference: 'UnitOfMeasure'
      cast(baseunit as fincs_base_unit_doc preserving type)                            as CnsldtnJrnlEntryQtyBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'CnsldtnJrnlEntryQtyBaseUnit'
      cast(quantityinbaseunit as fincs_quan_doc preserving type)                       as CnsldtnJrnlEntryQtyInBsUnt,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtLoclCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtnlocalcurrency as fincs_lcurr_tri preserving type)                    as CnsldtnTriggeringAmtLoclCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtLoclCrcy'
      cast(amountinlocalcrcy as fincs_lc_tri preserving type)                          as CnsldtnTriggeringAmtInLoclCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtGrpCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(cnsldtngroupcurrency as fincs_gcurr_tri preserving type)                    as CnsldtnTriggeringAmtGrpCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtGrpCrcy'
      cast(amountingroupcrcy as fincs_gc_tri preserving type)                          as CnsldtnTriggeringAmtInGrpCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringAmtTransCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      cast(transactioncurrency as fincs_tcurr_tri preserving type)                     as CnsldtnTriggeringAmtTransCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnTriggeringAmtTransCrcy'
      cast(amountintransactioncrcy as fincs_tc_tri preserving type)                    as CnsldtnTriggeringAmtInTC,

      @ObjectModel.foreignKey.association: '_CnsldtnTriggeringQtyBaseUnit'
//      @ObjectModel.sapObjectNodeTypeReference: 'UnitOfMeasure'
      cast(baseunit as fincs_base_unit_tri preserving type)                            as CnsldtnTriggeringQtyBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'CnsldtnTriggeringQtyBaseUnit'
      cast(quantityinbaseunit as fincs_quan_tri preserving type)                       as CnsldtnTriggeringQtyInBsUnt,

      cast(seqno as fincs_seqno)                                                       as SequenceNumber,

      @ObjectModel: { foreignKey.association: '_CnsldtnMethod',
                      sapObjectNodeTypeReference: 'ConsolidationMethod' }
      cast(cnsldtnmethod as fincs_method preserving type)                              as ConsolidationMethod,

      cast(recordindicator as fincs_stindicator preserving type)                       as CnsldtnRclassfctnRecdType,
      cast(reexchangerateindicator as fincs_rerin preserving type)                     as CnsldtnRefExchangeRateType,
      cast(reexchagerate as fincs_rrate preserving type)                               as CnsldtnRefExchangeRateValue,
      cast(exchangerateindicator as fincs_exrind preserving type)                      as CnsldtnExchangeRateType,
      cast(exchangerate as fincs_erate preserving type)                                as CnsldtnExchangeRateValue,
      cast(currencytranskey as fincs_ctkey preserving type)                            as CnsldtnCrcyTranslationKey,

//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem'
      cast(cnsldtnfinstmntitmr  as fincs_md_finstatementitem preserving type)          as CnsldtnCrcyTrnsltnDiffFSItem,

      @ObjectModel.foreignKey.association: '_CnsldtnItemDiff'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationSubitem'
      cast(cnsldtnfinstmntsubitmr as fincs_subitem preserving type)                    as CnsldtnCrcyTrnsltnDiffSubitem,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtGrpCrcy'
      cast(diffamount as fincs_diffamount preserving type)                             as CalculatedDiffAmount,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtGrpCrcy'
      cast(reffamount as fincs_refamount preserving type)                              as CalculatedRefAmount,

      cast(selection_id as fincs_sel_id preserving type)                               as ConsolidationSelection,
      branch_id                                                                        as FinancialServicesBranch,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScp2CalcMethod',
                      sapObjectNodeTypeReference: 'CnsldtnGHGScp2CalcMethod' }
      cast(ghgscp2calcmeth as fincs_ghgscp2calculationmethod preserving type)          as GHGScope2CalculationMethod,

      @ObjectModel.foreignKey.association: '_CnsldtnCashLedgerAccount'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLAccount'
      re_account                                                                       as CashLedgerAccount,

      @ObjectModel.foreignKey.association: '_CnsldtnCashLedgerChartOfAccts'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLChartOfAccounts'
      cast(re_ktopl as fincs_re_ktopl preserving type)                                 as CnsldtnCashLedgerChartOfAccts,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScp2CntrctlInstr',
                      sapObjectNodeTypeReference: 'CnsldtnGHGScp2CntrctlInstr' }
      cast(ghgscp2contrinstr as fincs_ghgscp2cntrctlinstrument preserving type)        as GHGScope2ContractualInstrument,

      datasource_id                                                                    as FinancialDataSource,
      fikrs                                                                            as FinancialManagementArea,
      rfund                                                                            as Fund,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGCategory',
                      sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasCategory' }
      cast(ghgcategory as fincs_ghgcategory preserving type)                           as GHGCategory,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScope',
                      sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasScope' }
      cast(ghgscope as fincs_ghgscope preserving type)                                 as GHGScope,

      rgrant_nbr                                                                       as GrantID,

      @ObjectModel: { foreignKey.association: '_CnsldtnSustModeOfTransport',
                      sapObjectNodeTypeReference: 'CnsldtnSustModeOfTransport' }
      cast(susmodeoftransport as fincs_sustmodeoftransport preserving type)            as SustainabilityModeOfTransport,

      fs_product_group                                                                 as FinancialServicesProductGroup,
      cast(cnsldtndocumentnumber as fincs_docnr preserving type)                       as ConsolidationDocumentNumber,
      cnsldtnpostingitem                                                               as ConsolidationPostingItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnCrcyCnvrsnDiffType',
                      sapObjectNodeTypeReference: 'CnsldtnCrcyConversionDiffType' }
      cast(cnsldtncrcycnvrsndifftype as fincs_currencycnvrsnsdifftype preserving type) as CurrencyConversionsDiffType,

      @ObjectModel: { foreignKey.association: '_CnsldtnApportionment',
                      sapObjectNodeTypeReference: 'ConsolidationApportionment' }
      cast(cnsldtnapportionment as fincs_apportionment preserving type)                as ConsolidationApportionment,

      cast(cnsldtnisautoposting as fincs_autom preserving type)                        as ConsolidationPostgItemAutoFlag,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnitPartner',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      cast(cnsldtnpartnerunit as fincs_consolidationunit preserving type)              as PartnerConsolidationUnit,

      cast(cnsldtnsetidentification as fincs_selid preserving type)                    as ConsolidationCurrencySetIdn,
      cast(percentage as fincs_taxrate preserving type)                                as CnsldtnPercent,

//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnCostCenter'
      cast(partnercostcenter as fincs_skost preserving type)                           as PartnerCostCenter,

      @ObjectModel: { foreignKey.association: '_CnsldtnFinTransType',
                      sapObjectNodeTypeReference: 'CnsldtnFinTransactionType' }
      cast(financialtransactiontype as fincs_financialtransactiontype preserving type) as FinancialTransactionType,

      @ObjectModel.foreignKey.association: '_CnsldtnMaterial'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnProduct'
      soldmaterial                                                                     as SoldMaterial,

      @ObjectModel: { foreignKey.association: '_CnsldtnCustomerGroup',
                      sapObjectNodeTypeReference: 'CnsldtnCustomerGroup' }
      cast(customergroup as fincs_customergroup preserving type)                       as CustomerGroup,

      @ObjectModel.foreignKey.association: '_CnsldtnCountry'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnCountry'
      cast(customersuppliercountry as fincs_country preserving type)                   as CustomerSupplierCountry,

      @ObjectModel.foreignKey.association: '_CnsldtnProductGroup'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnProductGroup' 
      soldproductgroup                                                                 as SoldProductGroup,

      assignmentreference                                                              as AssignmentReference,
      node                                                                             as CnsldtnTskLgNode,
      parentnode                                                                       as CnsldtnTskLgParNode,

      @ObjectModel.foreignKey.association: '_CnsldtnGLChartOfAccounts'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLChartOfAccounts'
      chartofaccounts                                                                  as ChartOfAccounts,

      _CnsldtnGroup,
      _CnsldtnUnit,
      _CnsldtnSubitemCategory,
      _CnsldtnSubItem,
      _CnsldtnJrnlEntryAmtLoclCrcy,
      _CnsldtnJrnlEntryAmtGrpCrcy,
      _CnsldtnJrnlEntryAmtTransCrcy,
      _CnsldtnJrnlEntryQtyBaseUnit,
      _CnsldtnTriggeringAmtLoclCrcy,
      _CnsldtnTriggeringAmtGrpCrcy,
      _CnsldtnTriggeringAmtTransCrcy,
      _CnsldtnTriggeringQtyBaseUnit,
      _CnsldtnMethod,
      _CnsldtnItemDiff,
      _CnsldtnGHGScp2CalcMethod,
      _CnsldtnCashLedgerAccount,
      _CnsldtnCashLedgerChartOfAccts,
      _CnsldtnGHGScp2CntrctlInstr,
      _CnsldtnGHGCategory,
      _CnsldtnGHGScope,
      _CnsldtnSustModeOfTransport,
      _CnsldtnCrcyCnvrsnDiffType,
      _CnsldtnApportionment,
      _CnsldtnUnitPartner,
      _CnsldtnFinTransType,
      _CnsldtnMaterial,
      _CnsldtnCustomerGroup,
      _CnsldtnCountry,
      _CnsldtnProductGroup,
      _CnsldtnGLChartOfAccounts
}
```
