---
name: I_CNSLDTNTSKLGITMCRCYTRNSLTN
description: "Cnsldtntsklgitmcrcytrnsltn"
app_component: FIN-CS-COR-IS-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-COR
  - interface-view
  - component:FIN-CS-COR-IS-2CL
  - lob:Other
---
# I_CNSLDTNTSKLGITMCRCYTRNSLTN

**Cnsldtntsklgitmcrcytrnsltn**

| Property | Value |
|---|---|
| App Component | `FIN-CS-COR-IS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CnsldtnTaskLogUUID` | ✓ | |  |  |  |  |
| `CnsldtnTaskLogItemUUID` | ✓ | |  |  |  |  |
| `CnsldtnTaskLogItemType` |  | |  |  |  |  |
| `ConsolidationGroup` |  | |  |  |  |  |
| `ConsolidationUnit` |  | |  |  |  |  |
| `CnsldtnFinancialStatementItem` |  | |  |  |  |  |
| `SubItemCategory` |  | |  |  |  |  |
| `SubItem` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtLoclCrcy` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtInLoclCrcy` |  | |  | `case when item.CnsldtnTaskLogItemType = 'CU' then cast(item.CnsldtnJrnlEntryAmtInLoclCrcy as fins_vhcur12 preserving type) else cast('0' as fins_vhcur12) end` |  |  |
| `CnsldtnJrnlEntryAmtGrpCrcy` |  | |  |  |  |  |
| `CnsldtnJrnlEntryAmtInGrpCrcy` |  | |  |  |  |  |
| `SequenceNumber` |  | |  |  |  |  |
| `CnsldtnCrcyTranslationMethod` |  | |  | `ConsolidationMethod` |  |  |
| `CnsldtnRefExchangeRateType` |  | |  |  |  |  |
| `CnsldtnRefExchangeRateValue` |  | |  |  |  |  |
| `CnsldtnExchangeRateType` |  | |  |  |  |  |
| `CnsldtnExchangeRateValue` |  | |  |  |  |  |
| `CnsldtnCrcyTranslationKey` |  | |  |  |  |  |
| `CnsldtnCrcyTrnsltnDiffFSItem` |  | |  |  |  |  |
| `CnsldtnCrcyTrnsltnDiffSubitem` |  | |  |  |  |  |
| `CalculatedDiffAmount` |  | |  | `case when item.CnsldtnTaskLogItemType = 'CU' then item.CalculatedDiffAmount else cast('0' as fincs_diffamount) end` |  |  |
| `CalculatedRefAmount` |  | |  | `case when item.CnsldtnTaskLogItemType = 'CU' then item.CalculatedRefAmount else cast('0' as fincs_refamount) end` |  |  |
| `ConsolidationSelection` |  | |  |  |  |  |
| `FinancialServicesBranch` |  | |  |  |  |  |
| `GHGScope2CalculationMethod` |  | |  |  |  |  |
| `CashLedgerAccount` |  | |  |  |  |  |
| `CnsldtnCashLedgerChartOfAccts` |  | |  |  |  |  |
| `GHGScope2ContractualInstrument` |  | |  |  |  |  |
| `FinancialDataSource` |  | |  |  |  |  |
| `FinancialManagementArea` |  | |  |  |  |  |
| `Fund` |  | |  |  |  |  |
| `GHGCategory` |  | |  |  |  |  |
| `GHGScope` |  | |  |  |  |  |
| `GrantID` |  | |  |  |  |  |
| `SustainabilityModeOfTransport` |  | |  |  |  |  |
| `FinancialServicesProductGroup` |  | |  |  |  |  |
| `_ConsolidationTaskLog` | | ✓ | | | | |
| `_CnsldtnGroup` | | ✓ | | | | |
| `_CnsldtnUnit` | | ✓ | | | | |
| `_CnsldtnSubitemCategory` | | ✓ | | | | |
| `_CnsldtnSubItem` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtLoclCrcy` | | ✓ | | | | |
| `_CnsldtnJrnlEntryAmtGrpCrcy` | | ✓ | | | | |
| `_CnsldtnMethod` | | ✓ | | | | |
| `_CnsldtnItemDiff` | | ✓ | | | | |
| `_CnsldtnGHGScp2CalcMethod` | | ✓ | | | | |
| `_CnsldtnCashLedgerAccount` | | ✓ | | | | |
| `_CnsldtnCashLedgerChartOfAccts` | | ✓ | | | | |
| `_CnsldtnGHGScp2CntrctlInstr` | | ✓ | | | | |
| `_CnsldtnGHGCategory` | | ✓ | | | | |
| `_CnsldtnGHGScope` | | ✓ | | | | |
| `_CnsldtnSustModeOfTransport` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ConsolidationTaskLog` | `I_ConsolidationTaskLog` | [1..1] |
| `_CnsldtnGroup` | `I_CnsldtnGroup_3` | [0..1] |
| `_CnsldtnUnit` | `I_CnsldtnUnit_4` | [0..1] |
| `_CnsldtnSubitemCategory` | `I_CnsldtnSubitemCategory_2` | [0..1] |
| `_CnsldtnSubItem` | `I_CnsldtnSubitem_2` | [0..1] |
| `_CnsldtnJrnlEntryAmtLoclCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnJrnlEntryAmtGrpCrcy` | `I_Currency` | [0..1] |
| `_CnsldtnMethod` | `I_CnsldtnMethod` | [0..1] |
| `_CnsldtnItemDiff` | `I_CnsldtnSubitem_2` | [0..1] |
| `_CnsldtnGHGScp2CalcMethod` | `I_CnsldtnGHGScp2CalcMethod` | [0..1] |
| `_CnsldtnCashLedgerAccount` | `I_CnsldtnGLAccount_2` | [0..1] |
| `_CnsldtnCashLedgerChartOfAccts` | `I_CnsldtnGLChartOfAccounts` | [0..1] |
| `_CnsldtnGHGScp2CntrctlInstr` | `I_CnsldtnGHGScp2CntrctlInstr` | [0..1] |
| `_CnsldtnGHGCategory` | `I_CnsldtnGHGCategory` | [0..1] |
| `_CnsldtnGHGScope` | `I_CnsldtnGHGScope` | [0..1] |
| `_CnsldtnSustModeOfTransport` | `I_CnsldtnSustModeOfTransport` | [0..1] |
| `_Extension` | `E_CnsldtnTskLogItemDataProcess` | [1..1] |

## Source Code

```abap
@AccessControl: { authorizationCheck: #MANDATORY,
                  personalData.blocking: #NOT_REQUIRED }

@EndUserText.label: 'Cnsldtn Tsk Lg Item Currency Translation'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                sapObjectNodeType.name: 'CnsldtnTskLgItmCrcyTranslation',
                supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                         #CDS_MODELING_ASSOCIATION_TARGET,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass:      #MIXED,
                             serviceQuality: #C,
                             sizeCategory:   #XL } }

@VDM: { lifecycle.contract.type: #PUBLIC_LOCAL_API,
        viewType: #COMPOSITE }

define root view entity I_CnsldtnTskLgItmCrcyTrnsltn
  as select from I_CnsldtnTskLogItemDataProcess as item

  association [1..1] to I_ConsolidationTaskLog       as _ConsolidationTaskLog          on $projection.CnsldtnTaskLogUUID = _ConsolidationTaskLog.CnsldtnTaskLogUUID

  association [0..1] to I_CnsldtnGroup_3             as _CnsldtnGroup                  on $projection.ConsolidationGroup = _CnsldtnGroup.ConsolidationGroup
  association [0..1] to I_CnsldtnUnit_4              as _CnsldtnUnit                   on $projection.ConsolidationUnit = _CnsldtnUnit.ConsolidationUnit
  association [0..1] to I_CnsldtnSubitemCategory_2   as _CnsldtnSubitemCategory        on $projection.SubItemCategory = _CnsldtnSubitemCategory.CnsldtnSubitemCategory
  association [0..1] to I_CnsldtnSubitem_2           as _CnsldtnSubItem                on $projection.SubItemCategory = _CnsldtnSubItem.CnsldtnSubitemCategory and $projection.SubItem = _CnsldtnSubItem.CnsldtnSubitem
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtLoclCrcy   on $projection.CnsldtnJrnlEntryAmtLoclCrcy = _CnsldtnJrnlEntryAmtLoclCrcy.Currency
  association [0..1] to I_Currency                   as _CnsldtnJrnlEntryAmtGrpCrcy    on $projection.CnsldtnJrnlEntryAmtGrpCrcy = _CnsldtnJrnlEntryAmtGrpCrcy.Currency
  association [0..1] to I_CnsldtnMethod              as _CnsldtnMethod                 on $projection.CnsldtnCrcyTranslationMethod = _CnsldtnMethod.ConsolidationMethod
  association [0..1] to I_CnsldtnSubitem_2           as _CnsldtnItemDiff               on $projection.SubItemCategory = _CnsldtnItemDiff.CnsldtnSubitemCategory and $projection.CnsldtnCrcyTrnsltnDiffSubitem = _CnsldtnItemDiff.CnsldtnSubitem
  association [0..1] to I_CnsldtnGHGScp2CalcMethod   as _CnsldtnGHGScp2CalcMethod      on $projection.GHGScope2CalculationMethod = _CnsldtnGHGScp2CalcMethod.GHGScope2CalculationMethod
  association [0..1] to I_CnsldtnGLAccount_2         as _CnsldtnCashLedgerAccount      on $projection.CnsldtnCashLedgerChartOfAccts = _CnsldtnCashLedgerAccount.ChartOfAccounts and $projection.CashLedgerAccount = _CnsldtnCashLedgerAccount.GLAccount
  association [0..1] to I_CnsldtnGLChartOfAccounts   as _CnsldtnCashLedgerChartOfAccts on $projection.CnsldtnCashLedgerChartOfAccts = _CnsldtnCashLedgerChartOfAccts.ChartOfAccounts
  association [0..1] to I_CnsldtnGHGScp2CntrctlInstr as _CnsldtnGHGScp2CntrctlInstr    on $projection.GHGScope2ContractualInstrument = _CnsldtnGHGScp2CntrctlInstr.GHGScope2ContractualInstrument
  association [0..1] to I_CnsldtnGHGCategory         as _CnsldtnGHGCategory            on $projection.GHGCategory = _CnsldtnGHGCategory.GHGCategory
  association [0..1] to I_CnsldtnGHGScope            as _CnsldtnGHGScope               on $projection.GHGScope = _CnsldtnGHGScope.GHGScope
  association [0..1] to I_CnsldtnSustModeOfTransport as _CnsldtnSustModeOfTransport    on $projection.SustainabilityModeOfTransport = _CnsldtnSustModeOfTransport.SustainabilityModeOfTransport

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnTskLogItemDataProcess as _Extension                   on $projection.CnsldtnTaskLogUUID = _Extension.CnsldtnTaskLogUUID and $projection.CnsldtnTaskLogItemUUID = _Extension.CnsldtnTaskLogItemUUID

{
  key item.CnsldtnTaskLogUUID,
  key item.CnsldtnTaskLogItemUUID,

//      _ConsolidationTaskLog.ConsolidationChartOfAccounts,
//      _ConsolidationTaskLog.ConsolidationVersion,

      item.CnsldtnTaskLogItemType,

      @ObjectModel: { foreignKey.association: '_CnsldtnGroup',
                      sapObjectNodeTypeReference: 'ConsolidationGroup' }
      item.ConsolidationGroup,

      @ObjectModel: { foreignKey.association: '_CnsldtnUnit',
                      sapObjectNodeTypeReference: 'ConsolidationUnit' }
      item.ConsolidationUnit,

      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem'
      item.CnsldtnFinancialStatementItem,

      @ObjectModel: { foreignKey.association: '_CnsldtnSubitemCategory',
                      sapObjectNodeTypeReference: 'ConsolidationSubitemCategory' }
      item.SubItemCategory,

      @ObjectModel.foreignKey.association: '_CnsldtnSubItem'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationSubitem'
      item.SubItem,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtLoclCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      item.CnsldtnJrnlEntryAmtLoclCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtLoclCrcy'
      case
        when item.CnsldtnTaskLogItemType = 'CU' then cast(item.CnsldtnJrnlEntryAmtInLoclCrcy as fins_vhcur12 preserving type)
        else cast('0' as fins_vhcur12)
      end                                  as CnsldtnJrnlEntryAmtInLoclCrcy,

      @ObjectModel.foreignKey.association: '_CnsldtnJrnlEntryAmtGrpCrcy'
//      @ObjectModel.sapObjectNodeTypeReference: 'Currency'
      item.CnsldtnJrnlEntryAmtGrpCrcy,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtGrpCrcy'
      item.CnsldtnJrnlEntryAmtInGrpCrcy,

      item.SequenceNumber,

      @ObjectModel.foreignKey.association: '_CnsldtnMethod'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationMethod'
      item.ConsolidationMethod             as CnsldtnCrcyTranslationMethod,

      item.CnsldtnRefExchangeRateType,
      item.CnsldtnRefExchangeRateValue,
      item.CnsldtnExchangeRateType,
      item.CnsldtnExchangeRateValue,
      item.CnsldtnCrcyTranslationKey,

//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem'
      item.CnsldtnCrcyTrnsltnDiffFSItem,

      @ObjectModel.foreignKey.association: '_CnsldtnItemDiff'
//      @ObjectModel.sapObjectNodeTypeReference: 'ConsolidationSubitem'
      item.CnsldtnCrcyTrnsltnDiffSubitem,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtGrpCrcy'
      case
        when item.CnsldtnTaskLogItemType = 'CU' then item.CalculatedDiffAmount
        else cast('0' as fincs_diffamount)
      end                                  as CalculatedDiffAmount,

      @Semantics.amount.currencyCode: 'CnsldtnJrnlEntryAmtGrpCrcy'
      case
        when item.CnsldtnTaskLogItemType = 'CU' then item.CalculatedRefAmount
        else cast('0' as fincs_refamount)
      end                                  as CalculatedRefAmount,

      item.ConsolidationSelection,
      item.FinancialServicesBranch,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScp2CalcMethod',
                      sapObjectNodeTypeReference: 'CnsldtnGHGScp2CalcMethod' }
      item.GHGScope2CalculationMethod,

      @ObjectModel.foreignKey.association: '_CnsldtnCashLedgerAccount'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLAccount'
      item.CashLedgerAccount,

      @ObjectModel.foreignKey.association: '_CnsldtnCashLedgerChartOfAccts'
//      @ObjectModel.sapObjectNodeTypeReference: 'CnsldtnGLChartOfAccounts'
      item.CnsldtnCashLedgerChartOfAccts,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScp2CntrctlInstr',
                      sapObjectNodeTypeReference: 'CnsldtnGHGScp2CntrctlInstr' }
      item.GHGScope2ContractualInstrument,

      item.FinancialDataSource,
      item.FinancialManagementArea,
      item.Fund,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGCategory',
                      sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasCategory' }
      item.GHGCategory,

      @ObjectModel: { foreignKey.association: '_CnsldtnGHGScope',
                      sapObjectNodeTypeReference: 'CnsldtnGreenhouseGasScope' }
      item.GHGScope,

      item.GrantID,

      @ObjectModel: { foreignKey.association: '_CnsldtnSustModeOfTransport',
                      sapObjectNodeTypeReference: 'CnsldtnSustModeOfTransport' }
      item.SustainabilityModeOfTransport,

      item.FinancialServicesProductGroup,

      _ConsolidationTaskLog,
      _CnsldtnGroup,
      _CnsldtnUnit,
      _CnsldtnSubitemCategory,
      _CnsldtnSubItem,
      _CnsldtnJrnlEntryAmtLoclCrcy,
      _CnsldtnJrnlEntryAmtGrpCrcy,
      _CnsldtnMethod,
      _CnsldtnItemDiff,
      _CnsldtnGHGScp2CalcMethod,
      _CnsldtnCashLedgerAccount,
      _CnsldtnCashLedgerChartOfAccts,
      _CnsldtnGHGScp2CntrctlInstr,
      _CnsldtnGHGCategory,
      _CnsldtnGHGScope,
      _CnsldtnSustModeOfTransport
}

where _ConsolidationTaskLog.ConsolidationTaskCategory = '05'
  and (    not item.CnsldtnTaskLogItemType = '$'
       and not item.CnsldtnTaskLogItemType = '##')
```
