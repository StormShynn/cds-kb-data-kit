---
name: I_ADDITIONALMATERIALGROUP4
description: "ADDITIONALMaterial Group 4"
semantic_vi: "Cung cấp truy cập vào các nhóm vật liệu bổ sung, cụ thể là nhóm 4, được sử dụng trong quản lý vật liệu để phân loại vật liệu."
keywords:
  - "material management"
  - "additional material group"
  - "group 4"
  - "material"
  - "categorize materials"
  - "quản lý vật liệu"
  - "nhóm vật liệu bổ sung"
  - "nhóm 4"
  - "vật liệu"
  - "phân loại vật liệu"
semantic_en: "Provides access to additional material groups, specifically group 4, which is used in material management to categorize materials."
app_component: SD-MD-MM-2CL
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
  - SD
  - SD-MD
  - SD-MD-MM
  - interface-view
  - material
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Material
---
# I_ADDITIONALMATERIALGROUP4

**ADDITIONALMaterial Group 4**

| Property | Value |
|---|---|
| App Component | `SD-MD-MM-2CL` |
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
| `AdditionalMaterialGroup4` | ✓ | |  | `mvgr4` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AdditionalMaterialGroup4Text` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'AdditionalMaterialGroup4'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #EXTRACTION_DATA_SOURCE,
                                      #SQL_DATA_SOURCE,
                                      #VALUE_HELP_PROVIDER ]
@EndUserText.label: 'Additional Material Group 4'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDADDLMATLGRP4'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'AdditionalProductGroup4'
@Search.searchable: true
@Consumption.ranked: true

define view I_AdditionalMaterialGroup4
as select from tvm4

association [0..*] to I_AdditionalMaterialGroup4Text as _Text on $projection.AdditionalMaterialGroup4  = _Text.AdditionalMaterialGroup4
{
    @ObjectModel.text.association: '_Text'
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    key mvgr4 as AdditionalMaterialGroup4,
    
    //Associations
    _Text
};
```
