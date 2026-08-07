---
name: I_CNSLDTNPLANTT
description: "Cnsldtnplantt"
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
# I_CNSLDTNPLANTT

**Cnsldtnplantt**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( _Source.Language as spras preserving type )` |  |  |
| `Plant` | ✓ | |  | `cast( _Source.Plant as fincs_plant preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.PlantName as fincs_description_text_30 preserving type )` |  |  |
| `PlantName` |  | |  | `cast( _Source.PlantName as fincs_plantname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Plant` | `I_CnsldtnPlant` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSPLANTT',
  compiler.compareFilter: true
}
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #L},
  representativeKey: 'Plant',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnPlantText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined Plant - Text'
define view I_CnsldtnPlantT
  as select distinct from P_CnsldtnPlantT as _Source

    inner join            I_CnsldtnPlant  as _Main on  _Main.Plant                         = _Source.Plant
                                                   and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language     as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnPlant as _Plant    on $projection.Plant = _Plant.Plant

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_Plant'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnPlantVH',
          element: 'Plant'
        }
      }]
  key cast( _Source.Plant as fincs_plant preserving type )                                 as Plant,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'PlantName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'PlantName' }
      cast( _Source.PlantName as fincs_description_text_30 preserving type )               as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.PlantName as fincs_plantname preserving type )                         as PlantName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Plant

}
where
  _Source.Language is not null
```
