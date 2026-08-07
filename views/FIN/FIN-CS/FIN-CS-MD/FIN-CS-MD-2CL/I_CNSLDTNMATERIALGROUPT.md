---
name: I_CNSLDTNMATERIALGROUPT
description: "CNSLDTNMaterial GroupT"
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
# I_CNSLDTNMATERIALGROUPT

**CNSLDTNMaterial GroupT**

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
| `MaterialGroup` | ✓ | |  | `cast ( _Source.MaterialGroup as fincs_materialgroup preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.MaterialGroupName as fincs_description_text_20 preserving type )` |  |  |
| `MaterialGroupName` |  | |  | `cast( _Source.MaterialGroupName as fincs_materialgroupname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_MaterialGroup` | `I_CnsldtnMaterialGroup` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSMTGROUPT',
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
    sizeCategory: #M},
  representativeKey: 'MaterialGroup',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnMaterialGroupText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Combined Material Group - Text'

define view I_CnsldtnMaterialGroupT
  as select distinct from P_CnsldtnMaterialGroupT as _Source

    inner join            I_CnsldtnMaterialGroup  as _Main on  _Main.MaterialGroup                 = _Source.MaterialGroup
                                                           and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language             as _Language      on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnMaterialGroup as _MaterialGroup on $projection.MaterialGroup = _MaterialGroup.MaterialGroup
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_MaterialGroup'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnMaterialGroupVH',
          element: 'MaterialGroup'
        }
      }]
  key cast ( _Source.MaterialGroup as fincs_materialgroup preserving type )                as MaterialGroup,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'MaterialGroupName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'MaterialGroupName' }
      cast( _Source.MaterialGroupName as fincs_description_text_20 preserving type )       as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.MaterialGroupName as fincs_materialgroupname preserving type )         as MaterialGroupName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _MaterialGroup
}
where
  _Source.Language is not null
```
