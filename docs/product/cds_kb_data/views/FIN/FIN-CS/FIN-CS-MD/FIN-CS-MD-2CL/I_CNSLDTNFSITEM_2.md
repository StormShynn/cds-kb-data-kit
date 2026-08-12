---
name: I_CNSLDTNFSITEM_2
description: "Cnsldtnfsitem 2"
app_component: FIN-CS-MD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_CNSLDTNFSITEM_2

**Cnsldtnfsitem 2**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ConsolidationChartOfAccounts` | ✓ | |  | `cast( itclg as fincs_conschartofaccounts preserving type )` |  |  |
| `CnsldtnFinancialStatementItem` | ✓ | |  | `cast ( item as fincs_consolidationfsitem preserving type )` |  |  |
| `ConsolidationFSItemType` |  | |  | `cast ( itclass as fincs_fsitemtype preserving type )` |  |  |
| `ConsolidationBreakdownCategory` |  | |  | `cast( itbrkdwn as fincs_consbreakdowncategory preserving type )` |  |  |
| `CnsldtnFSItemIsForCnsldtnOnly` |  | |  | `cast( itcitem as fincs_fsitemisforcnsldtnonly preserving type )` |  |  |
| `CnsldtnFSItemPostingIsBlocked` |  | |  | `cast( itblkd as fincs_fsitempostingisblocked preserving type )` |  |  |
| `CnsldtnFSItemIsNetBalCarryFwd` |  | |  | `cast (itnbcf as fincs_fsitemisnetbalcarryfwd preserving type )` |  |  |
| `CnsldtnFSItemLink` |  | |  | `cast( link as fincs_md_link preserving type )` |  |  |
| `CnsldtnFSItemLinkLabel` |  | |  | `cast( linklabel as fincs_md_link_label preserving type )` |  |  |
| `ETag` |  | |  | `etag` |  |  |
| `CreationDateTime` |  | |  | `created_at` |  |  |
| `CnsldtnSignLogicIsFSItemSpcfc` |  | |  | `cast( case _GlobalSetting.CnsldtnCustomSignLogicIsActive when 'X' then is_sign_item_specific else ' ' end as fincs_signlogicisfsitemspcfc preserving type )` |  |  |
| `ConsolidationSignLogicType` |  | |  | `cast( case when _GlobalSetting.CnsldtnCustomSignLogicIsActive = 'X' and is_sign_item_specific = 'X' then sign else _CnsldtnFSItemTypeSignLogic.ConsolidationSignLogicType end as fincs_signlogictype preserving type )` |  |  |
| `_CnsldtnChartOfAccounts` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |
| `_FSItemByTimeVersion` | | ✓ | | | | |
| `_FSItemType` | | ✓ | | | | |
| `_SignLogicType` | | ✓ | | | | |
| `_BreakdownCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CnsldtnChartOfAccounts` | `I_CnsldtnChartOfAccounts` | [1..1] |
| `_Text` | `I_CnsldtnFSItemText_2` | [0..*] |
| `_HierarchyNode` | `I_CnsldtnFSItemHierNode_2` | [0..*] |
| `_FSItemByTimeVersion` | `I_CnsldtnFSItemByTimeVersion` | [0..*] |
| `_FSItemType` | `I_CnsldtnFinStmntItemType` | [0..1] |
| `_CnsldtnFSItemTypeSignLogic` | `I_CnsldtnFSItemTypeSignLogic` | [0..1] |
| `_SignLogicType` | `I_CnsldtnSignLogicType` | [0..1] |
| `_BreakdownCategory` | `I_CnsldtnBreakdownCategory` | [0..1] |
| `_GlobalSetting` | `I_CnsldtnGlobalSetting` | [0..1] |
| `_Extension` | `E_CnsldtnFSItem` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSFSITEM2'
}
@AccessControl.authorizationCheck: #MANDATORY
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations:true
}
@ObjectModel:{
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'CnsldtnFinancialStatementItem',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#ANALYTICAL_DIMENSION ,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #CDS_MODELING_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #SQL_DATA_SOURCE
                          ],
  sapObjectNodeType.name: 'CnsldtnFinancialStatementItem'
}
@Search.searchable: true
@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Financial Statement Item'

define view entity I_CnsldtnFSItem_2
  as select from fincs_fsitem

  association [1..1] to I_CnsldtnChartOfAccounts     as _CnsldtnChartOfAccounts     on  $projection.ConsolidationChartOfAccounts = _CnsldtnChartOfAccounts.ConsolidationChartOfAccounts

  association [0..*] to I_CnsldtnFSItemText_2        as _Text                       on  $projection.ConsolidationChartOfAccounts  = _Text.ConsolidationChartOfAccounts
                                                                                    and $projection.CnsldtnFinancialStatementItem = _Text.CnsldtnFinancialStatementItem

  association [0..*] to I_CnsldtnFSItemHierNode_2    as _HierarchyNode              on  $projection.ConsolidationChartOfAccounts  = _HierarchyNode.ConsolidationChartOfAccounts
                                                                                    and $projection.CnsldtnFinancialStatementItem = _HierarchyNode.CnsldtnFinancialStatementItem

  association [0..*] to I_CnsldtnFSItemByTimeVersion as _FSItemByTimeVersion        on  $projection.ConsolidationChartOfAccounts  = _FSItemByTimeVersion.ConsolidationChartOfAccounts
                                                                                    and $projection.CnsldtnFinancialStatementItem = _FSItemByTimeVersion.CnsldtnFinancialStatementItem

  association [0..1] to I_CnsldtnFinStmntItemType    as _FSItemType                 on  $projection.ConsolidationFSItemType = _FSItemType.ConsolidationFSItemType

  association [0..1] to I_CnsldtnFSItemTypeSignLogic as _CnsldtnFSItemTypeSignLogic on  $projection.ConsolidationFSItemType = _CnsldtnFSItemTypeSignLogic.ConsolidationFSItemType

  association [0..1] to I_CnsldtnSignLogicType       as _SignLogicType              on  $projection.ConsolidationSignLogicType = _SignLogicType.ConsolidationSignLogicType

  association [0..1] to I_CnsldtnBreakdownCategory   as _BreakdownCategory          on  $projection.ConsolidationChartOfAccounts   = _BreakdownCategory.ConsolidationChartOfAccounts
                                                                                    and $projection.ConsolidationBreakdownCategory = _BreakdownCategory.ConsolidationBreakdownCategory

  association [0..1] to I_CnsldtnGlobalSetting       as _GlobalSetting              on  _GlobalSetting.SequenceNumber = '1'

  //do not expose this association in the projection list of the view
  association [1..1] to E_CnsldtnFSItem              as _Extension                  on  $projection.ConsolidationChartOfAccounts  = _Extension.ConsolidationChartOfAccounts
                                                                                    and $projection.CnsldtnFinancialStatementItem = _Extension.CnsldtnFinancialStatementItem

{

      @ObjectModel: {
        foreignKey.association: '_CnsldtnChartOfAccounts',
        sapObjectNodeTypeReference: 'ConsolidationChartOfAccounts' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnChartOfAccountsVH',
                                           element: 'ConsolidationChartOfAccounts' } }]
  key cast( itclg as fincs_conschartofaccounts preserving type )      as ConsolidationChartOfAccounts,

      @ObjectModel:{
        text.association: '_Text',
        hierarchy.association: '_HierarchyNode'
        }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnFSItemVH', element: 'CnsldtnFinancialStatementItem' },
                    additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #HIGH }
  key cast ( item as fincs_consolidationfsitem preserving type )      as CnsldtnFinancialStatementItem,

      @ObjectModel: {
        foreignKey.association: '_FSItemType',
        sapObjectNodeTypeReference: 'CnsldtnFinStatementItemType' }
      cast ( itclass as fincs_fsitemtype preserving type )            as ConsolidationFSItemType,

      @ObjectModel:{
        foreignKey.association: '_BreakdownCategory',
        sapObjectNodeTypeReference: 'ConsolidationBreakdownCategory' }
      @Consumption.valueHelpDefinition: [{ entity: { name: 'I_CnsldtnBreakdownCategoryVH', element: 'ConsolidationBreakdownCategory' },
         additionalBinding: [{ localElement: 'ConsolidationChartOfAccounts', element: 'ConsolidationChartOfAccounts', usage: #FILTER_AND_RESULT }]
      }]
      cast( itbrkdwn as fincs_consbreakdowncategory preserving type ) as ConsolidationBreakdownCategory,

      cast( itcitem as fincs_fsitemisforcnsldtnonly preserving type ) as CnsldtnFSItemIsForCnsldtnOnly,

      cast( itblkd as fincs_fsitempostingisblocked preserving type )  as CnsldtnFSItemPostingIsBlocked,

      cast (itnbcf as fincs_fsitemisnetbalcarryfwd preserving type )  as CnsldtnFSItemIsNetBalCarryFwd,

      cast( link as fincs_md_link preserving type )                   as CnsldtnFSItemLink,

      cast( linklabel as fincs_md_link_label preserving type )        as CnsldtnFSItemLinkLabel,

      @Analytics.hidden: true
      etag                                                            as ETag,

      @Semantics.systemDateTime.createdAt
      created_at                                                      as CreationDateTime,

      cast( case _GlobalSetting.CnsldtnCustomSignLogicIsActive
        when 'X'
          then is_sign_item_specific
        else
          ' '
      end as fincs_signlogicisfsitemspcfc preserving type )           as CnsldtnSignLogicIsFSItemSpcfc,

      @ObjectModel:{
        foreignKey.association: '_SignLogicType',
        sapObjectNodeTypeReference: 'ConsolidationSignLogicType' }
      @Consumption.valueHelpDefinition: [ {
        entity : {
          name:'I_CnsldtnSignLogicTypeVH',
          element:'ConsolidationSignLogicType' }
      } ]
      cast( case
        when _GlobalSetting.CnsldtnCustomSignLogicIsActive = 'X'
         and is_sign_item_specific = 'X'
          then sign
        else
          _CnsldtnFSItemTypeSignLogic.ConsolidationSignLogicType
      end as fincs_signlogictype preserving type )                    as ConsolidationSignLogicType,


      _CnsldtnChartOfAccounts,
      _Text,
      _HierarchyNode,
      _FSItemByTimeVersion,
      _FSItemType,
      _BreakdownCategory,
      _SignLogicType
}
```
