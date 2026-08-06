---
name: I_CNSLDTNFINSRVCSPRODUCTGROUP
description: Cnsldtnfinsrvcsproductgroup
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
  - product
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNFINSRVCSPRODUCTGROUP

**Cnsldtnfinsrvcsproductgroup**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FinancialServicesProductGroup` | `cast( _Source.FinancialServicesProductGroup as fincs_finsrvcsproductgroup preserving type )` |
| `CnsldtnIsAdditionalMasterData` | `cast( max ( _Source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |
| `_Text` | *Association* |
| `_HierarchyNode` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnFinSrvcsProductGroupT` | [0..*] |
| `_HierarchyNode` | `I_CnsldtnFinSProdGrpHierNode` | [0..*] |

## Source Code

```abap
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'ICSFSPRDGRP'
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
    sizeCategory: #M
  },
  representativeKey: 'FinancialServicesProductGroup',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnFinServicesProductGroup'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Financial Services Product Group'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view entity I_CnsldtnFinSrvcsProductGroup
  as select distinct from P_CnsldtnFinSrvcsProductGroup as _Source

  // prevent exposure of result set in case the assigned business switch is disabled
    inner join            I_CnsldtnBusinessSwitch       as _BusinessSwitch on  _BusinessSwitch.ConsolidationBusinessSwitch    = 'FINCS_ENABLE_FS_FIELDS'
                                                                           and _BusinessSwitch.CnsldtnBusinessSwitchIsEnabled = 'X'


  association [0..*] to I_CnsldtnFinSrvcsProductGroupT as _Text          on $projection.FinancialServicesProductGroup = _Text.FinancialServicesProductGroup

  association [0..*] to I_CnsldtnFinSProdGrpHierNode   as _HierarchyNode on $projection.FinancialServicesProductGroup = _HierarchyNode.FinancialServicesProductGroup

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFinSrvcsProdGroupVH',
          element: 'FinancialServicesProductGroup'
        }
      }]
  key cast( _Source.FinancialServicesProductGroup as fincs_finsrvcsproductgroup preserving type )           as FinancialServicesProductGroup,

      cast( max ( _Source.CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _Text,
      _HierarchyNode
}
where
  _Source.FinancialServicesProductGroup is not initial //required to avoid access to corrupt database entries
group by
  _Source.FinancialServicesProductGroup
```
