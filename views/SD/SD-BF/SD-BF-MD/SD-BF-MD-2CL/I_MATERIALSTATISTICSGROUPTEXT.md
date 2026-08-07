---
name: I_MATERIALSTATISTICSGROUPTEXT
description: Materialstatisticsgrouptext
app_component: SD-BF-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-BF
  - SD-BF-MD
  - interface-view
  - text-view
  - material
  - text
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
  - bo:Material
---
# I_MATERIALSTATISTICSGROUPTEXT

**Materialstatisticsgrouptext**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `MaterialStatisticsGroup` | ✓ | |  | `stgma` |
| `Language` | ✓ | |  | `spras` |
| `MaterialStatisticsGroupDesc` |  | |  | `bezei20` |
| `_MaterialStatisticsGroup` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MaterialStatisticsGroup` | `I_MaterialStatisticsGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel:{ representativeKey: 'MaterialStatisticsGroup',
               usageType.dataClass: #META,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Search.searchable: true
@AbapCatalog.sqlViewName: 'ISDMATLSTSTCGRPT'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Material Statistics Group - Text'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #SEARCHABLE_ENTITY   ]
define view I_MaterialStatisticsGroupText as select from tvsmt
association [0..1] to I_MaterialStatisticsGroup as _MaterialStatisticsGroup on $projection.MaterialStatisticsGroup = _MaterialStatisticsGroup.MaterialStatisticsGroup
association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
 {
    @ObjectModel.foreignKey.association: '_MaterialStatisticsGroup'
    key stgma as MaterialStatisticsGroup,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Semantics.text: true
    @Search: { defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8 }
    bezei20 as MaterialStatisticsGroupDesc,
    
    _MaterialStatisticsGroup,
    _Language    
};
```
