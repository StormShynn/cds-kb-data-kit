---
name: I_ADDITIONALMATERIALGROUP1
description: "ADDITIONALMaterial Group 1"
semantic_vi: "View Additional Material Group 1 hiển thị dữ liệu nhóm vật liệu phụ trong ứng dụng Sales và Distribution. Nó được sử dụng để truy cập và thao tác dữ liệu này trong phát triển ABAP và đám mây."
keywords:
  - "additional material"
  - "material group"
  - "sales and distribution"
  - "abap"
  - "cloud development"
  - "sap"
  - "material"
  - "sales"
  - "distribution"
  - "additionalmaterialgroup1"
semantic_en: "The Additional Material Group 1 view exposes material group data for additional materials in the Sales and Distribution application. It is used to access and manipulate this data in ABAP and cloud development."
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
# I_ADDITIONALMATERIALGROUP1

**ADDITIONALMaterial Group 1**

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
| `AdditionalMaterialGroup1` | ✓ | |  | `mvgr1` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AdditionalMaterialGroup1Text` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'AdditionalMaterialGroup1'
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
@EndUserText.label: 'Additional Material Group 1'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDADDLMATLGRP1'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'AdditionalProductGroup1'
@Search.searchable: true
@Consumption.ranked: true

define view I_AdditionalMaterialGroup1
as select from tvm1

association [0..*] to I_AdditionalMaterialGroup1Text as _Text on $projection.AdditionalMaterialGroup1  = _Text.AdditionalMaterialGroup1
{
    @ObjectModel.text.association: '_Text'
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    key mvgr1 as AdditionalMaterialGroup1,
    
    //Associations
    _Text
};
```
