---
name: I_CNSLDTNPLANT
description: "Cnsldtnplant"
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
  - plant
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Plant
---
# I_CNSLDTNPLANT

**Cnsldtnplant**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Plant` | ✓ | |  | `cast( Plant as fincs_plant preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |
| `_HierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnPlantT` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |
| `_HierarchyNode` | `I_CnsldtnPlantHierarchyNode` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPLANT',
  compiler.compareFilter: true,
  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
  }
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
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
    serviceQuality: #B,
    sizeCategory: #L},
  representativeKey: 'Plant',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnPlant'
  }
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Consolidation Combined Plant'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnPlant
  as select distinct from P_CnsldtnPlant

  association [0..*] to I_CnsldtnPlantT             as _Text          on $projection.Plant = _Text.Plant

  association [1..1] to I_CnsldtnMDSource           as _MDSource      on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

  association [0..*] to I_CnsldtnPlantHierarchyNode as _HierarchyNode on $projection.Plant = _HierarchyNode.Plant

{

      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy.association: '_HierarchyNode'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnPlantVH',
          element: 'Plant'
        }
      }]
  key cast( Plant as fincs_plant preserving type )                                                  as Plant,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,


      /* associations */
      _Text,
      _MDSource,
      _HierarchyNode

}
where
  Plant is not initial //required to avoid access to corrupt database entries
group by
  Plant
```
