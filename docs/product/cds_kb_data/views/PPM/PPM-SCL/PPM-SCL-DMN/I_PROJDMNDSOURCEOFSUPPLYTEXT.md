---
name: I_PROJDMNDSOURCEOFSUPPLYTEXT
description: "Projdmndsourceofsupplytext"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - text-view
  - text
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDMNDSOURCEOFSUPPLYTEXT

**Projdmndsourceofsupplytext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` |  |  |
| `ProjectDemandSourceOfSupply` | ✓ | |  | `cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_source_of_supply )` |  |  |
| `ProjDmndSourceOfSupplyText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_SourceOfSupply` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{ representativeKey: 'ProjectDemandSourceOfSupply',
               usageType.dataClass: #CUSTOMIZING,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S,
               dataCategory: #TEXT,
               supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #LANGUAGE_DEPENDENT_TEXT],
               modelingPattern: #LANGUAGE_DEPENDENT_TEXT }
@VDM:{ viewType: #BASIC,
       lifecycle.contract.type: #PUBLIC_LOCAL_API }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Rsce Assgmt Source for Proj Dmnds - Text'

define view entity I_ProjDmndSourceOfSupplyText
  as select from dd07t
  association        to parent I_ProjDmndSourceOfSupply as _SourceOfSupply on $projection.ProjectDemandSourceOfSupply = _SourceOfSupply.ProjectDemandSourceOfSupply
  association [0..1] to I_Language                      as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type )                     as Language,
      @ObjectModel.foreignKey.association: '_SourceOfSupply'
      @ObjectModel.text.element: ['ProjDmndSourceOfSupplyText']
  key cast( substring(domvalue_l, 1, 2 ) as tv_proj_dmnd_source_of_supply ) as ProjectDemandSourceOfSupply,
      @Semantics.text: true
      dd07t.ddtext                                                          as ProjDmndSourceOfSupplyText,

      _SourceOfSupply,
      _Language
}
where
      domname  = 'PROJ_DMND_SOURCE_OF_SUPPLY'
  and as4local = 'A'
```
