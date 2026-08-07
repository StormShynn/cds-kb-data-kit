---
name: I_INDUSTRYSECTOR
description: Industrysector
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_INDUSTRYSECTOR

**Industrysector**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `IndustrySector` | ✓ | |  | `mbrsh` |
| `_Text` | | ✓ | | |
| `_Text_2` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_IndustrySectorText` | [0..*] |
| `_Text_2` | `I_IndustrySectorText_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IINDSECTORV'
@AbapCatalog.preserveKey:true
@EndUserText.label: 'Industry Sector'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'IndustrySector'
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataExtraction: {
        enabled: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SEARCHABLE_ENTITY,
                                      #EXTRACTION_DATA_SOURCE
]
@Search.searchable: true
@ObjectModel.sapObjectNodeType.name:'IndustrySector'

define view I_IndustrySector
  as select from t137 as Industry

  association [0..*] to I_IndustrySectorText   as _Text   on $projection.IndustrySector = _Text.IndustrySector
  association [0..*] to I_IndustrySectorText_2 as _Text_2 on $projection.IndustrySector = _Text_2.IndustrySector

{

      @ObjectModel.text.association:'_Text_2'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key Industry.mbrsh as IndustrySector,

      @VDM.lifecycle: {
        status: #DEPRECATED,
        successor: '_Text_2'
      }
      _Text,
      _Text_2

}
```
