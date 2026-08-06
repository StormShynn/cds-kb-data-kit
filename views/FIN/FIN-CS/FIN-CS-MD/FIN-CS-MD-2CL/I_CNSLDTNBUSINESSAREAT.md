---
name: I_CNSLDTNBUSINESSAREAT
description: Cnsldtnbusinessareat
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
# I_CNSLDTNBUSINESSAREAT

**Cnsldtnbusinessareat**

| Property | Value |
|---|---|
| App Component | `FIN-CS-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( _Source.Language as spras preserving type )` |
| key `BusinessArea` | `cast( _Source.BusinessArea as fincs_businessarea preserving type )` |
| `AdditionalMasterDataSource` | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |
| `AdditionalMasterDataText` | `cast( _Source.BusinessAreaName as fincs_description_text_30 preserving type )` |
| `BusinessAreaName` | `cast( _Source.BusinessAreaName as fincs_businessareaname preserving type )` |
| `CnsldtnIsAdditionalMasterData` | `_Source.CnsldtnIsAdditionalMasterData` |
| `_Language` | *Association* |
| `_BusinessArea` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_BusinessArea` | `I_CnsldtnBusinessArea` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSBUSAREAT'
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
  representativeKey: 'BusinessArea',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnBusinessAreaText'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Cnsldtn Combined Business Area - Text'

// C1 Released for Cloud Dev since 2208, C1 Released for Key User Apps since 2020

define view I_CnsldtnBusinessAreaT
  as select distinct from P_CnsldtnBusinessAreaT as _Source

    inner join            I_CnsldtnBusinessArea  as _Main on  _Main.BusinessArea                  = _Source.BusinessArea
                                                          and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language            as _Language     on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnBusinessArea as _BusinessArea on $projection.BusinessArea = _BusinessArea.BusinessArea

{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )                                    as Language,

      @ObjectModel.foreignKey.association: '_BusinessArea'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnBusinessAreaVH',
          element: 'BusinessArea'
        }
      }]
  key cast( _Source.BusinessArea as fincs_businessarea preserving type )                   as BusinessArea,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'BusinessAreaName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'BusinessAreaName' }
      cast( _Source.BusinessAreaName as fincs_description_text_30 preserving type )        as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.BusinessAreaName as fincs_businessareaname preserving type )           as BusinessAreaName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _BusinessArea
}
where
  _Source.Language is not null
```
