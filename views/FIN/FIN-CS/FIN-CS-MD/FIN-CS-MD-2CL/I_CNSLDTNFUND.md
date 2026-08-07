---
name: I_CNSLDTNFUND
description: "Cnsldtnfund"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFUND

**Cnsldtnfund**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinancialManagementArea` | ✓ | |  | `cast(_source.FinancialManagementArea as fincs_financialmanagementarea preserving type )` |  |  |
| `Fund` | ✓ | |  | `cast( _source.Fund as fincs_fund preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( _source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast( min ( _source.CreationDateTime ) as fincs_creationdatetime preserving type )` |  |  |
| `_FinancialManagementArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_FinancialManagementArea` | `I_CnsldtnFinManagementArea` | [1..1] |
| `_Text` | `I_CnsldtnFundT` | [0..*] |
| `_HierarchyNode` | `I_CnsldtnFundHierarchyNode` | [0..*] |

## Source Code

```abap
@Analytics: {
 dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata:{
allowExtensions:true,
ignorePropagatedAnnotations: true
}
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M},
  representativeKey: 'Fund',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnFund'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Fund'

define view entity I_CnsldtnFund
  as select distinct from P_CnsldtnFund           as _source
  //  prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_PS_FIELDS'
                                                                     and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'

  association [1..1] to I_CnsldtnFinManagementArea as _FinancialManagementArea on  $projection.FinancialManagementArea = _FinancialManagementArea.FinancialManagementArea


  association [0..*] to I_CnsldtnFundT             as _Text                    on  $projection.FinancialManagementArea = _Text.FinancialManagementArea
                                                                               and $projection.Fund                    = _Text.Fund

  association [0..*] to I_CnsldtnFundHierarchyNode as _HierarchyNode           on  $projection.FinancialManagementArea = _HierarchyNode.FinancialManagementArea
                                                                               and $projection.Fund                    = _HierarchyNode.Fund

{
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinManagementAreaVH',
            element: 'FinancialManagementArea'
          }
      }]
      @ObjectModel.foreignKey.association: '_FinancialManagementArea'
  key cast(_source.FinancialManagementArea as fincs_financialmanagementarea preserving type )               as FinancialManagementArea,

      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFundVH',
          element: 'Fund'},
        additionalBinding: [{ localElement: 'FinancialManagementArea', element: 'FinancialManagementArea', usage: #FILTER_AND_RESULT }]
      }]
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @ObjectModel.text.association: '_Text'
  key cast( _source.Fund as fincs_fund preserving type )                                                    as Fund,

      cast( max ( _source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      @Semantics.systemDateTime.createdAt
      cast( min ( _source.CreationDateTime ) as fincs_creationdatetime preserving type )                    as CreationDateTime,


      /* associations */
      _Text,
      _HierarchyNode,
      _FinancialManagementArea

}
where
      _source.FinancialManagementArea is not initial //required to avoid access to corrupt database entries
  and _source.Fund                    is not initial
group by
  _source.FinancialManagementArea,
  _source.Fund
```
