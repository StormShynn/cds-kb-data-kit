---
name: I_EXTPRODGRPTEXT
description: Extprodgrptext
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - text-view
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_EXTPRODGRPTEXT

**Extprodgrptext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ExternalProductGroup` | ✓ | |  | `cast(extwg as externalproductgroup preserving type )` |
| `Language` | ✓ | |  | `spras` |
| `ExternalProductGroupName` |  | |  | `cast(ewbez as externalproductgroupname preserving type )` |
| `_ExternalProductGroup` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ExternalProductGroup` | `I_ExtProdGrp` | [1..1] |
| `_Language` | `I_Language` | [1..1] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IEXTPRODGRPTXT',
  compiler.compareFilter: true,
  preserveKey: true
}

@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'External Product Group - Text'
@ObjectModel:{
  representativeKey: 'ExternalProductGroup',
  usageType:{
    serviceQuality: #A,
    sizeCategory : #S,
    dataClass: #CUSTOMIZING
  },
  dataCategory: #TEXT,
  sapObjectNodeType.name:'ExternalProductGroupText',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #SEARCHABLE_ENTITY,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #EXTRACTION_DATA_SOURCE
  ]
}
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
define view I_ExtProdGrpText
  as select from twewt
  association [1..1] to I_ExtProdGrp as _ExternalProductGroup on $projection.ExternalProductGroup = _ExternalProductGroup.ExternalProductGroup
  association [1..1] to I_Language   as _Language             on $projection.Language = _Language.Language
{

      @ObjectModel.foreignKey.association: '_ExternalProductGroup'
  key cast(extwg as externalproductgroup preserving type )     as ExternalProductGroup,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key spras                                                    as Language,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast(ewbez as externalproductgroupname preserving type ) as ExternalProductGroupName,

      _ExternalProductGroup,
      _Language

}
```
