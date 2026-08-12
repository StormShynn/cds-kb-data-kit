---
name: I_INTNTNLARTNMBCAT
description: "Intntnlartnmbcat"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_INTNTNLARTNMBCAT

**Intntnlartnmbcat**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternationalArticleNumberCat` | ✓ | |  | `cast(numtp as internationalarticlenumbercat preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_Intntnlartnmbcattext` | [0..*] |

## Source Code

```abap
@AbapCatalog:{
  sqlViewName: 'INTNTNLCATVH',
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
@ObjectModel.representativeKey: 'InternationalArticleNumberCat'
@EndUserText.label: 'International Article Number Category'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #VALUE_HELP_PROVIDER,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@Consumption.ranked: true
@ObjectModel.sapObjectNodeType.name:'GlobalTradeItemNumberCategory'

define view I_Intntnlartnmbcat
  as select from tntp

  association [0..*] to I_Intntnlartnmbcattext as _Text on $projection.InternationalArticleNumberCat = _Text.InternationalArticleNumberCat
{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key cast(numtp as internationalarticlenumbercat preserving type ) as InternationalArticleNumberCat,

      _Text

}
```
