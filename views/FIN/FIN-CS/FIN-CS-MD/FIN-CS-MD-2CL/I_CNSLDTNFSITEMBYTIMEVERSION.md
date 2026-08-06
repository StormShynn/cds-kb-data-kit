---
name: I_CNSLDTNFSITEMBYTIMEVERSION
description: Cnsldtnfsitembytimeversion
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-CS
  - FIN-CS-MD
  - interface-view
  - item-level
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFSITEMBYTIMEVERSION

**Cnsldtnfsitembytimeversion**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ConsolidationChartOfAccounts` | `_ByTimeVersion.ConsolidationChartOfAccounts` |
| `CnsldtnFinancialStatementItem` | `}] key _ByTimeVersion.CnsldtnFinancialStatementItem` |
| key `ConsolidationVersion` | `_ByTimeVersion.ConsolidationVersion` |
| key `FromFiscalYearPeriod` | `_ByTimeVersion.FromFiscalYearPeriod` |
| `ToFiscalYearPeriod` | `_ByTimeVersion.ToFiscalYearPeriod` |
| `CnsldtnFSItemRole` | `_ByTimeVersion.CnsldtnFSItemRole` |
| `CnsldtnFSItemDataCollection` | `_ByTimeVersion.CnsldtnFSItemDataCollection` |
| `CnsldtnFSItemCrcyTranslation` | `_ByTimeVersion.CnsldtnFSItemCrcyTranslation` |
| `CnsldtnFSItemElimination` | `_ByTimeVersion.CnsldtnFSItemElimination` |
| `CnsldtnFSItemCashFlow` | `_ByTimeVersion.CnsldtnFSItemCashFlow` |
| `CnsldtnFSItemScope` | `_ByTimeVersion.CnsldtnFSItemScope` |
| `CnsldtnFSItemCustomerSpecific` | `_ByTimeVersion.CnsldtnFSItemCustomerSpecific` |
| `CnsldtnEliminationTargetFSItem` | `}] _ByTimeVersion.CnsldtnEliminationTargetFSItem` |
| `CnsldtnNCITargetFSItem` | `}] _ByTimeVersion.CnsldtnNCITargetFSItem` |
| `CnsldtnPlanningTargetFSItem` | `}] _ByTimeVersion.CnsldtnPlanningTargetFSItem` |
| `CnsldtnOffsettingTargetFSItem` | `}] _ByTimeVersion.CnsldtnOffsettingTargetFSItem` |
| `_CnsldtnElimTargetFSItem` | *Association* |
| `_CnsldtnNCITargetFSItem` | *Association* |
| `_CnsldtnPlanningTargetFSItem` | *Association* |
| `_CnsldtnOffsettingTargetFSItem` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Extension` | `E_CnsldtnFSItemByTimeVersion` | [1..1] |
| `_CnsldtnElimTargetFSItem` | `I_CnsldtnFSItem_2` | [0..1] |
| `_CnsldtnNCITargetFSItem` | `I_CnsldtnFSItem_2` | [0..1] |
| `_CnsldtnPlanningTargetFSItem` | `I_CnsldtnFSItem_2` | [0..1] |
| `_CnsldtnOffsettingTargetFSItem` | `I_CnsldtnFSItem_2` | [0..1] |

## Source Code

```abap
@Analytics: {
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSFSITEMATVD'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #D,
    sizeCategory: #L},
  representativeKey: 'CnsldtnFinancialStatementItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION ,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #CDS_MODELING_DATA_SOURCE
                          ],
  sapObjectNodeType.name: 'CnsldtnFSItemByTimeVersion'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation FS Item by Time Version'

define view entity I_CnsldtnFSItemByTimeVersion
  as select from P_CnsldtnFSItemByTimeVersion as _ByTimeVersion

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnFSItemByTimeVersion as _Extension                     on  _ByTimeVersion.ConsolidationChartOfAccounts  = _Extension.ConsolidationChartOfAccounts
                                                                                       and _ByTimeVersion.CnsldtnFinancialStatementItem = _Extension.CnsldtnFinancialStatementItem
                                                                                       and _ByTimeVersion.CnsldtnFSItemAttributeVersion = _Extension.CnsldtnFSItemAttributeVersion
                                                                                       and _ByTimeVersion.FromFiscalYearPeriod          = _Extension.FromFiscalYearPeriod

  association [0..1] to I_CnsldtnFSItem_2            as _CnsldtnElimTargetFSItem       on  _CnsldtnElimTargetFSItem.ConsolidationChartOfAccounts  = $projection.ConsolidationChartOfAccounts
                                                                                       and _CnsldtnElimTargetFSItem.CnsldtnFinancialStatementItem = $projection.CnsldtnEliminationTargetFSItem

  association [0..1] to I_CnsldtnFSItem_2            as _CnsldtnNCITargetFSItem        on  _CnsldtnNCITargetFSItem.ConsolidationChartOfAccounts  = $projection.ConsolidationChartOfAccounts
                                                                                       and _CnsldtnNCITargetFSItem.CnsldtnFinancialStatementItem = $projection.CnsldtnNCITargetFSItem

  association [0..1] to I_CnsldtnFSItem_2            as _CnsldtnPlanningTargetFSItem   on  _CnsldtnPlanningTargetFSItem.ConsolidationChartOfAccounts  = $projection.ConsolidationChartOfAccounts
                                                                                       and _CnsldtnPlanningTargetFSItem.CnsldtnFinancialStatementItem = $projection.CnsldtnPlanningTargetFSItem

  association [0..1] to I_CnsldtnFSItem_2            as _CnsldtnOffsettingTargetFSItem on  _CnsldtnOffsettingTargetFSItem.ConsolidationChartOfAccounts  = $projection.ConsolidationChartOfAccounts
                                                                                       and _CnsldtnOffsettingTargetFSItem.CnsldtnFinancialStatementItem = $projection.CnsldtnOffsettingTargetFSItem
{
      @ObjectModel: {
        foreignKey.association: '_CnsldtnChartOfAccounts',
        sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      @Search:{
        ranking: #MEDIUM,
        fuzzinessThreshold: 0.8
      }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnChartOfAccountsVH', element: 'ConsolidationChartOfAccounts' } }]
  key _ByTimeVersion.ConsolidationChartOfAccounts,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      @Search:{ defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefinition: [{ entity:{ name:'I_CnsldtnFSItemVH', element:'CnsldtnFinancialStatementItem'},
        additionalBinding: [ { localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
  key _ByTimeVersion.CnsldtnFinancialStatementItem,

      @ObjectModel:{
        foreignKey.association: '_CnsldtnVersion',
        sapObjectNodeTypeReference: 'ConsolidationVersion' }
      @Search:{ ranking: #MEDIUM, fuzzinessThreshold: 0.8 }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnVersionVH', element: 'ConsolidationVersion' } }]
  key _ByTimeVersion.ConsolidationVersion,

      @Semantics.fiscal.yearPeriod: true
  key _ByTimeVersion.FromFiscalYearPeriod,

      @Semantics.fiscal.yearPeriod: true
      _ByTimeVersion.ToFiscalYearPeriod,

      // selection attributes
      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnFSItemRole',
        foreignKey.association: '_CnsldtnFSItemRole' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemRoleVH', element: 'CnsldtnFSItemRole' } }]
      _ByTimeVersion.CnsldtnFSItemRole,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnFSItemDataCollection',
        foreignKey.association: '_CnsldtnFSItemDataColl' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemDataCollVH', element: 'CnsldtnFSItemDataCollection' } }]
      _ByTimeVersion.CnsldtnFSItemDataCollection,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnFSItemCrcyTranslation',
        foreignKey.association: '_CnsldtnFSItemCrcyTrnsltn' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemCrcyTrnsltnVH', element: 'CnsldtnFSItemCrcyTranslation' } }]
      _ByTimeVersion.CnsldtnFSItemCrcyTranslation,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnFSItemElimination',
        foreignKey.association: '_CnsldtnFSItemElimination' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemEliminationVH', element: 'CnsldtnFSItemElimination' } }]
      _ByTimeVersion.CnsldtnFSItemElimination,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnFSItemCashFlow',
        foreignKey.association: '_CnsldtnFSItemCashFlow' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemCashFlowVH', element: 'CnsldtnFSItemCashFlow' } }]
      _ByTimeVersion.CnsldtnFSItemCashFlow,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnFSItemScope',
        foreignKey.association: '_CnsldtnFSItemScope' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemScopeVH', element: 'CnsldtnFSItemScope' } }]
      _ByTimeVersion.CnsldtnFSItemScope,

      @ObjectModel: {
        sapObjectNodeTypeReference: 'CnsldtnFSItemCustomerSpecific',
        foreignKey.association: '_CnsldtnFSItemCustSpcfc' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemCustSpcfcVH', element: 'CnsldtnFSItemCustomerSpecific' } }]
      _ByTimeVersion.CnsldtnFSItemCustomerSpecific,

      @ObjectModel: { sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      @Consumption.valueHelpDefinition: [{ entity:{ name:'I_CnsldtnFSItemVH', element:'CnsldtnFinancialStatementItem'},
        additionalBinding: [ { localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      _ByTimeVersion.CnsldtnEliminationTargetFSItem,

      @ObjectModel: { sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      @Consumption.valueHelpDefinition: [{ entity:{ name:'I_CnsldtnFSItemVH', element:'CnsldtnFinancialStatementItem'},
        additionalBinding: [ { localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      _ByTimeVersion.CnsldtnNCITargetFSItem,

      @ObjectModel: { sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      @Consumption.valueHelpDefinition: [{ entity:{ name:'I_CnsldtnFSItemVH', element:'CnsldtnFinancialStatementItem'},
        additionalBinding: [ { localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      _ByTimeVersion.CnsldtnPlanningTargetFSItem,

      @ObjectModel: { sapObjectNodeTypeReference: 'CnsldtnFinancialStatementItem' }
      @Consumption.valueHelpDefinition: [{ entity:{ name:'I_CnsldtnFSItemVH', element:'CnsldtnFinancialStatementItem'},
        additionalBinding: [ { localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      _ByTimeVersion.CnsldtnOffsettingTargetFSItem,


      /* associations */
      _ByTimeVersion._CnsldtnChartOfAccounts,
      _ByTimeVersion._CnsldtnVersion,
      _CnsldtnElimTargetFSItem,
      _CnsldtnNCITargetFSItem,
      _CnsldtnPlanningTargetFSItem,
      _CnsldtnOffsettingTargetFSItem,

      //selection attributes
      _ByTimeVersion._CnsldtnFSItemRole,
      _ByTimeVersion._CnsldtnFSItemDataColl,
      _ByTimeVersion._CnsldtnFSItemCrcyTrnsltn,
      _ByTimeVersion._CnsldtnFSItemElimination,
      _ByTimeVersion._CnsldtnFSItemCashFlow,
      _ByTimeVersion._CnsldtnFSItemScope,
      _ByTimeVersion._CnsldtnFSItemCustSpcfc
}
```
