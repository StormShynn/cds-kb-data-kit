---
name: I_CNSLDTNCOSTCENTER
description: "CNSLDTNCost Center"
app_component: FIN-CS-MD-2CL
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
  - FIN-CS-MD
  - interface-view
  - cost-center
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:CostCenter
---
# I_CNSLDTNCOSTCENTER

**CNSLDTNCost Center**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CostCenter` | ✓ | |  | `cast( CostCenter as fincs_costcenter preserving type )` |  |  |
| `ControllingArea` | ✓ | |  | `cast( ControllingArea as fincs_controllingarea preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `CreationDateTime` |  | |  | `cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )` |  |  |
| `_ControllingArea` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |
| `_CostCenterHierNode` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |
| `_Text` | `I_CnsldtnCostCenterT` | [0..*] |
| `_CostCenterHierNode` | `I_CnsldtnCostCenterHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCOSTCENTER',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }

@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true // no full extraction for high volume
}
@AccessControl:{
  authorizationCheck: #MANDATORY
  }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata:{
  allowExtensions:true,
  ignorePropagatedAnnotations: true
  }
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'CostCenter',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnCostCenter'
  }
@VDM: {
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Cost Center'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

define view I_CnsldtnCostCenter
  as select distinct from P_CnsldtnCostCenter

  association [1..1] to I_CnsldtnControllingArea    as _ControllingArea    on  $projection.ControllingArea = _ControllingArea.ControllingArea

  association [0..*] to I_CnsldtnCostCenterT        as _Text               on  $projection.CostCenter      = _Text.CostCenter
                                                                           and $projection.ControllingArea = _Text.ControllingArea

  association [0..*] to I_CnsldtnCostCenterHierNode as _CostCenterHierNode on  $projection.ControllingArea = _CostCenterHierNode.ControllingArea
                                                                           and $projection.CostCenter      = _CostCenterHierNode.CostCenter

  association [1..1] to I_CnsldtnMDSource           as _MDSource           on  $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_CostCenterHierNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnCostCenterVH',
          element: 'CostCenter' },
        additionalBinding: [{ localElement: 'ControllingArea', element: 'ControllingArea', usage: #FILTER_AND_RESULT }]
      }]
  key cast( CostCenter as fincs_costcenter preserving type )                                        as CostCenter,

      @ObjectModel.foreignKey.association: '_ControllingArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnControllingAreaVH',
          element: 'ControllingArea'
        }
      }]
  key cast( ControllingArea as fincs_controllingarea preserving type )                              as ControllingArea,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,
      
      @Semantics.systemDateTime.createdAt
      cast( min ( CreationDateTime ) as fincs_creationdatetime preserving type )                    as CreationDateTime,


      /* associations */
      _ControllingArea,
      _Text,
      _CostCenterHierNode,
      _MDSource
}
where
      ControllingArea is not initial //required to avoid access to corrupt database entries
  and CostCenter      is not initial
group by
  ControllingArea,
  CostCenter
```
