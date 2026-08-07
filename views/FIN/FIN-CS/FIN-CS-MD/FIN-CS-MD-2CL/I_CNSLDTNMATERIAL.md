---
name: I_CNSLDTNMATERIAL
description: "Cnsldtnmaterial"
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
  - material
  - component:FIN-CS-MD-2CL
  - lob:Other
  - bo:Material
---
# I_CNSLDTNMATERIAL

**Cnsldtnmaterial**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Material` | ✓ | |  | `cast(Material as fincs_material preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | |  | `cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type )` |  |  |
| `_Text` | | ✓ | | | | |
| `_MaterialHierNode` | | ✓ | | | | |
| `_MDSource` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CnsldtnMaterialT` | [0..*] |
| `_MaterialHierNode` | `I_CnsldtnMaterialHierNode` | [0..*] |
| `_MDSource` | `I_CnsldtnMDSource` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSMATERIAL'
//  compiler.compareFilter: true,
//  viewEnhancementCategory: [ #PROJECTION_LIST, #GROUP_BY ]
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
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'Material',
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #ANALYTICAL_DIMENSION],
  sapObjectNodeType.name: 'CnsldtnMaterial'
}
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Consolidation Combined Material'

// expose only additional master data entity in case of homonymous non-additional master data entity existence

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_CnsldtnMaterial
  as select distinct from P_CnsldtnMaterial

  association [0..*] to I_CnsldtnMaterialT        as _Text             on $projection.Material = _Text.Material

  association [0..*] to I_CnsldtnMaterialHierNode as _MaterialHierNode on $projection.Material = _MaterialHierNode.Material

  association [1..1] to I_CnsldtnMDSource         as _MDSource         on $projection.AdditionalMasterDataSource = _MDSource.AdditionalMasterDataSource

{
      @ObjectModel.text.association: '_Text'
      @ObjectModel.hierarchy: {
        association: '_MaterialHierNode'
      }
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnMaterialVH',
          element: 'Material'
        }
      }]
  key cast(Material as fincs_material preserving type )                                             as Material,

      @ObjectModel.foreignKey.association: '_MDSource'
      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( max ( AdditionalMasterDataSource ) as fincs_masterdatasource preserving type )          as AdditionalMasterDataSource,

      cast( max ( CnsldtnIsAdditionalMasterData ) as fincs_isadditionalmasterdata preserving type ) as CnsldtnIsAdditionalMasterData,

      _Text,
      _MaterialHierNode,
      _MDSource
}
where
  Material is not initial //required to avoid access to corrupt database entries
group by
  Material
```
