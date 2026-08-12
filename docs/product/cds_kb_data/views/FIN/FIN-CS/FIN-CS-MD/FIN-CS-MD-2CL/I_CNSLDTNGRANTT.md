---
name: I_CNSLDTNGRANTT
description: "Cnsldtngrantt"
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
# I_CNSLDTNGRANTT

**Cnsldtngrantt**

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
| `GrantID` | ✓ | |  | `cast( _Source.GrantID as fincs_grant preserving type )` |  |  |
| `GrantName` |  | |  | `cast( _Source.GrantName as fincs_grantname preserving type )` |  |  |
| `CnsldtnIsAdditionalMasterData` |  | | `_Source` | `CnsldtnIsAdditionalMasterData` |  |  |
| `_Language` | | ✓ | | | | |
| `_Grant` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [1..1] |
| `_Grant` | `I_CnsldtnGrant` | [1..1] |

## Source Code

```abap
@Analytics: {
  dataExtraction.enabled: true
}
@AccessControl:{
  authorizationCheck: #MANDATORY
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel:{
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #C,
    sizeCategory: #M
  },
  representativeKey: 'GrantID',
  dataCategory: #TEXT,
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [#CDS_MODELING_DATA_SOURCE,
                          #CDS_MODELING_ASSOCIATION_TARGET,
                          #SQL_DATA_SOURCE,
                          #EXTRACTION_DATA_SOURCE,
                          #LANGUAGE_DEPENDENT_TEXT ],
  sapObjectNodeType.name: 'CnsldtnGrantText'
}
@VDM:{
  viewType: #COMPOSITE,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@EndUserText.label: 'Consolidation Grant - Text'

define view entity I_CnsldtnGrantT
  as select distinct from P_CnsldtnGrantT as _Source

    inner join            I_CnsldtnGrant  as _Main on  _Main.GrantID                       = _Source.GrantID
                                                   and _Main.CnsldtnIsAdditionalMasterData = _Source.CnsldtnIsAdditionalMasterData

  association [1..1] to I_Language     as _Language on $projection.Language = _Language.Language

  association [1..1] to I_CnsldtnGrant as _Grant    on $projection.GrantID = _Grant.GrantID
{

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key cast( _Source.Language as spras preserving type )             as Language,

      @ObjectModel.foreignKey.association: '_Grant'
      @Consumption.valueHelpDefinition: [{
        entity: {
          name: 'I_CnsldtnGrantVH',
          element: 'GrantID'
        }
      }]
  key cast( _Source.GrantID as fincs_grant preserving type )        as GrantID,

      @Semantics.text
      cast( _Source.GrantName  as fincs_grantname preserving type ) as GrantName,

      _Source.CnsldtnIsAdditionalMasterData,


      /* associations */
      _Language,
      _Grant
}
where
  _Source.Language is not null
```
