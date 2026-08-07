---
name: I_INTNTNLARTNMBCATTEXT
description: Intntnlartnmbcattext
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
# I_INTNTNLARTNMBCATTEXT

**Intntnlartnmbcattext**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
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
