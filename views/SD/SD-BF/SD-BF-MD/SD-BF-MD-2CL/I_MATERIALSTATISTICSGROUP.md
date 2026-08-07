---
name: I_MATERIALSTATISTICSGROUP
description: Materialstatisticsgroup
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
  - material
  - component:SD-BF-MD-2CL
  - lob:Sales & Distribution
  - bo:Material
---
# I_MATERIALSTATISTICSGROUP

**Materialstatisticsgroup**

| Property | Value |
|---|---|
| App Component | `SD-BF-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialStatisticsGroup` | ✓ | |  | `stgma` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaterialStatisticsGroupText` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel:{ representativeKey: 'MaterialStatisticsGroup',
               usageType.dataClass: #META,
               usageType.serviceQuality: #A,
               usageType.sizeCategory: #S }
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck:#NOT_REQUIRED
@Search.searchable: true
@AbapCatalog.sqlViewName: 'ISDMATLSTSTCGRP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@EndUserText.label: 'Material Statistics Group'
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.dataCategory:#VALUE_HELP
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY   ]
@ObjectModel.sapObjectNodeType.name: 'MaterialStatisticsGroup'                                        
define view I_MaterialStatisticsGroup as select from tvsm
association [0..*] to I_MaterialStatisticsGroupText as _Text on $projection.MaterialStatisticsGroup = _Text.MaterialStatisticsGroup
 {
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key stgma as MaterialStatisticsGroup,
  
      _Text
}
```
