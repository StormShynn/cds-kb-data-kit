---
name: I_INDUSTRYSECTORTEXT_2
description: "Industrysectortext 2"
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
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_INDUSTRYSECTORTEXT_2

**Industrysectortext 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `IndustrySector` | ✓ | |  | `mbrsh` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `IndustrySectorName` |  | |  | `mbbez` |  |  |
| `_IndustrySector` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_IndustrySector` | `I_IndustrySector` | [0..1] |

## Source Code

```abap
@AbapCatalog: {
   sqlViewName : 'IINDSECTORTXT2',
   preserveKey : true ,
   compiler : {
     compareFilter : true
   }
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Industry Sector - Text'
@VDM.viewType: #BASIC
@Search.searchable: true
@ObjectModel: {
   dataCategory: #TEXT,
   representativeKey: 'IndustrySector',
   usageType:{
      serviceQuality: #A,
      sizeCategory  : #S,
      dataClass     : #CUSTOMIZING
   },
   sapObjectNodeType.name:'IndustrySectorText',
   supportedCapabilities: [ #SQL_DATA_SOURCE,
                            #CDS_MODELING_DATA_SOURCE,
                            #CDS_MODELING_ASSOCIATION_TARGET,
                            #SEARCHABLE_ENTITY,
                            #LANGUAGE_DEPENDENT_TEXT,
                            #EXTRACTION_DATA_SOURCE
                          ]
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

define view I_IndustrySectorText_2
  as select from t137t as IndustryText
  association [0..1] to I_IndustrySector as _IndustrySector on $projection.IndustrySector = _IndustrySector.IndustrySector
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.foreignKey.association: '_IndustrySector'
  key IndustryText.mbrsh as IndustrySector,

      @Semantics.language: true
  key IndustryText.spras as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.7
      @Search.ranking: #HIGH
      IndustryText.mbbez as IndustrySectorName,

      _IndustrySector

}
```
