---
name: I_ADDITIONALMATERIALGROUP1TEXT
description: "ADDITIONALMaterial Group 1TEXT"
app_component: SD-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - text-view
  - material
  - text
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Material
---
# I_ADDITIONALMATERIALGROUP1TEXT

**ADDITIONALMaterial Group 1TEXT**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AdditionalMaterialGroup1` | ✓ | |  | `mvgr1` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AdditionalMaterialGroup1Name` |  | |  | `bezei` |  |  |
| `_AdditionalMaterialGroup1` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AdditionalMaterialGroup1` | `I_AdditionalMaterialGroup1` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AdditionalMaterialGroup1'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Additional Material Group 1 - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDADDLMATLGRP1T'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AdditionalMaterialGroup1Text
as select from tvm1t

association[0..1] to I_AdditionalMaterialGroup1 as _AdditionalMaterialGroup1 on $projection.AdditionalMaterialGroup1 = _AdditionalMaterialGroup1.AdditionalMaterialGroup1
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup1'
    key mvgr1 as AdditionalMaterialGroup1,
    @Semantics.language:true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Semantics.text:true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    bezei as AdditionalMaterialGroup1Name,
    
    //Associations
    _AdditionalMaterialGroup1,
    _Language    
};
```
