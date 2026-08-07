---
name: I_CNSLDTNFUNCTIONALAREAT
description: Cnsldtnfunctionalareat
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
# I_CNSLDTNFUNCTIONALAREAT

**Cnsldtnfunctionalareat**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_Source` | `Language` |  |  |
| `FunctionalArea` | ✓ | |  | `cast( _Source.FunctionalArea as fincs_functionalarea preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.FunctionalAreaName as fincs_description_text_25 preserving type )` |  |  |
| `FunctionalAreaName` |  | |  | `cast( _Source.FunctionalAreaName as fincs_functionalareaname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_FunctionalArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_FunctionalArea` | `I_CnsldtnFunctionalArea` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSFUNCAREAT',
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
  representativeKey: 'FunctionalArea',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnFunctionalAreaText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Combined Functional Area - Text'

// C1 Released for Cloud Dev since Jan 2022, C1 Released for Key User Apps since Dec 2019

define view I_CnsldtnFunctionalAreaT
  as select distinct from P_CnsldtnFunctionalAreaT as _Source

    inner join            I_CnsldtnFunctionalArea  as _Main on  _Main.FunctionalArea                = _Source.FunctionalArea
                                                            and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language              as _Language       on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnFunctionalArea as _FunctionalArea on $projection.FunctionalArea = _FunctionalArea.FunctionalArea
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_FunctionalArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnFunctionalAreaVH',
          element: 'FunctionalArea'
        }
      }]
  key cast( _Source.FunctionalArea as fincs_functionalarea preserving type )               as FunctionalArea,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'FunctionalAreaName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'FunctionalAreaName' }
      cast( _Source.FunctionalAreaName as fincs_description_text_25 preserving type )      as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.FunctionalAreaName as fincs_functionalareaname preserving type )       as FunctionalAreaName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _FunctionalArea
}
where
  _Source.Language is not null
```
