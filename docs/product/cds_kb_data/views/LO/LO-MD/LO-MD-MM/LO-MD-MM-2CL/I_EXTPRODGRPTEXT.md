---
name: I_EXTPRODGRPTEXT
description: "Extprodgrptext"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ExternalProductGroup` | ✓ | |  | `cast(extwg as externalproductgroup preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ExternalProductGroupName` |  | |  | `cast(ewbez as externalproductgroupname preserving type )` |  |  |
| `_ExternalProductGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

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
