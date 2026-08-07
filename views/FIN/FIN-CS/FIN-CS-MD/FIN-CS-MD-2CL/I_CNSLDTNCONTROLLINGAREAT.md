---
name: I_CNSLDTNCONTROLLINGAREAT
description: Cnsldtncontrollingareat
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
# I_CNSLDTNCONTROLLINGAREAT

**Cnsldtncontrollingareat**

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
| `ControllingArea` | ✓ | |  | `cast(_Source.ControllingArea as fincs_controllingarea preserving type )` |  |  |
| `AdditionalMasterDataSource` |  | |  | `cast(_Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type )` |  |  |
| `AdditionalMasterDataText` |  | |  | `cast(_Source.ControllingAreaName as fincs_description_text_25 preserving type )` |  |  |
| `ControllingAreaName` |  | |  | `cast(_Source.ControllingAreaName as fincs_controllingareaname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_ControllingArea` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_ControllingArea` | `I_CnsldtnControllingArea` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'ICSCTRLAREAT',
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
  representativeKey: 'ControllingArea',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnControllingAreaText'                        
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
  }
@EndUserText.label: 'Cnsldtn Combined Controlling Area - Text'

// Fully C1 Released in CE2111

define view I_CnsldtnControllingAreaT
  as select distinct from P_CnsldtnControllingAreaT as _Source

    inner join            I_CnsldtnControllingArea  as _Main on  _Main.ControllingArea               = _Source.ControllingArea
                                                             and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language               as _Language        on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnControllingArea as _ControllingArea on $projection.ControllingArea = _ControllingArea.ControllingArea
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key _Source.Language,

      @ObjectModel.foreignKey.association: '_ControllingArea'
  key cast(_Source.ControllingArea as fincs_controllingarea preserving type )             as ControllingArea,

      @API.element: {releaseState: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'CnsldtnIsAdditionalMasterData' }
      cast(_Source.AdditionalMasterDataSource as fincs_masterdatasource preserving type ) as AdditionalMasterDataSource,

      @Semantics.text
      @API.element: {releaseState: #DEPRECATED, successor: 'ControllingAreaName'}
      @VDM.lifecycle: {status: #DEPRECATED, successor: 'ControllingAreaName' }
      cast(_Source.ControllingAreaName as fincs_description_text_25 preserving type )     as AdditionalMasterDataText,

      @Semantics.text
      cast(_Source.ControllingAreaName as fincs_controllingareaname preserving type )     as ControllingAreaName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _ControllingArea
}
where
  _Source.Language is not null
```
