---
name: I_SALESGROUPTEXT
description: "Salesgrouptext"
app_component: SD-CRF-ORG-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-CRF
  - SD-CRF-ORG
  - interface-view
  - text-view
  - text
  - component:SD-CRF-ORG-2CL
  - lob:Sales & Distribution
---
# I_SALESGROUPTEXT

**Salesgrouptext**

| Property | Value |
|---|---|
| App Component | `SD-CRF-ORG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesGroup` | ✓ | |  | `vkgrp` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `SalesGroupName` |  | |  | `cast(bezei as salesgroupname preserving type)` |  |  |
| `_SalesGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SalesGroup` | `I_SalesGroup` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'SalesGroup'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales Group - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSALESGROUPT'
@Search.searchable: true 
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Analytics.dataExtraction.enabled: true 
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern:           #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #LANGUAGE_DEPENDENT_TEXT,
                                        #EXTRACTION_DATA_SOURCE,
                                        #SEARCHABLE_ENTITY   ]
define view I_SalesGroupText
as select from tvgrt

association[0..1] to I_SalesGroup as _SalesGroup on $projection.SalesGroup = _SalesGroup.SalesGroup
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_SalesGroup'
    key vkgrp as SalesGroup,

    @Semantics.language: true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,

    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Semantics.text: true 
    cast(bezei as salesgroupname preserving type) as SalesGroupName,
    
    //Associations
    _SalesGroup,
    _Language  
};
```
