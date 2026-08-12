---
name: I_INTNTNLARTNMBCATTEXT
description: "Intntnlartnmbcattext"
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
# I_INTNTNLARTNMBCATTEXT

**Intntnlartnmbcattext**

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
| `InternationalArticleNumberCat` | ✓ | |  | `numtp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `IntlArticleNumberCatName` |  | |  | `ntbez` |  |  |
| `_InternationalArticleNumberCat` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_InternationalArticleNumberCat` | `I_Intntnlartnmbcat` | [1..1] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'IEANCATTXT',
  compiler.compareFilter: true,
  preserveKey: true,
  buffering: {
    status: #ACTIVE,
    type: #FULL
  }
}
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true

@EndUserText.label: 'International Article Number Cat - Text'
@ObjectModel.representativeKey: 'InternationalArticleNumberCat'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.sapObjectNodeType.name:'GlobTrdItemNumberCategoryText'
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #EXTRACTION_DATA_SOURCE
  ]
define view I_Intntnlartnmbcattext
  as select from tntpb

  association [1..1] to I_Intntnlartnmbcat as _InternationalArticleNumberCat on $projection.InternationalArticleNumberCat = _InternationalArticleNumberCat.InternationalArticleNumberCat
{

      @ObjectModel.foreignKey.association: '_InternationalArticleNumberCat'
  key numtp       as InternationalArticleNumberCat,
      @Semantics.language: true
  key tntpb.spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      ntbez       as IntlArticleNumberCatName,

      _InternationalArticleNumberCat

}
```
