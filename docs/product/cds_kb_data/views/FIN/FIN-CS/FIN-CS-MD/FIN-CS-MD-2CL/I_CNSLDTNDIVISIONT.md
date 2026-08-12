---
name: I_CNSLDTNDIVISIONT
description: "Cnsldtndivisiont"
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
  - component:FIN-CS-MD-2CL
  - lob:Other
---
# I_CNSLDTNDIVISIONT

**Cnsldtndivisiont**

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
| `Division` | ✓ | |  | `cast( _Source.Division as fincs_division preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast( _Source.DivisionName as fincs_description_text_20 preserving type )` |  |  |
| `DivisionName` |  | |  | `cast( _Source.DivisionName as fincs_divisionname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_Division` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Division` | `I_CnsldtnDivision` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'ICSDIVISIONT'
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
    sizeCategory: #S },
  representativeKey: 'Division',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnDivisionText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Combined Division - Text'
define view I_CnsldtnDivisionT
  as select distinct from P_CnsldtnDivisionT as _Source

    inner join            I_CnsldtnDivision  as _Main on  _Main.Division                      = _Source.Division
                                                      and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language        as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnDivision as _Division on $projection.Division = _Division.Division
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_Division'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnDivisionVH',
          element: 'Division'
        }
      }]
  key cast( _Source.Division as fincs_division preserving type )                           as Division,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast( _Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'DivisionName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'DivisionName' }
      cast( _Source.DivisionName as fincs_description_text_20 preserving type )            as AdditionalMasterDataText,

      @Semantics.text
      cast( _Source.DivisionName as fincs_divisionname preserving type )                   as DivisionName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Division
}
where
  _Source.Language is not null;
```
