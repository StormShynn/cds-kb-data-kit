---
name: I_ADDITIONALMATERIALGROUP4TEXT
description: "ADDITIONALMaterial Group 4TEXT"
semantic_vi: "Cung cấp tên nhóm vật liệu bổ sung 4 trong các ngôn ngữ khác nhau cho việc sử dụng trong các quy trình kinh doanh liên quan đến vật liệu."
keywords:
  - "material"
  - "additional material group"
  - "language"
  - "material group name"
  - "sap"
  - "sd-md-mm"
  - "sales and distribution"
  - "lob sales & distribution"
  - "bo material"
  - "ekko"
semantic_en: "Provides additional material group 4 names in different languages for use in material-related business processes."
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
  - text-view
  - material
  - text
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Material
---
# I_ADDITIONALMATERIALGROUP4TEXT

**ADDITIONALMaterial Group 4TEXT**

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
| `Language` | ✓ | |  | `spras` |  |  |
| `AdditionalMaterialGroup4Name` |  | |  | `bezei` |  |  |
| `_AdditionalMaterialGroup4` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AdditionalMaterialGroup4` | `I_AdditionalMaterialGroup4` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AdditionalMaterialGroup4'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Additional Material Group 4 - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDADDLMATLGRP4T'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AdditionalMaterialGroup4Text
as select from tvm4t

association[0..1] to I_AdditionalMaterialGroup4 as _AdditionalMaterialGroup4 on $projection.AdditionalMaterialGroup4 = _AdditionalMaterialGroup4.AdditionalMaterialGroup4
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{ 
    @ObjectModel.foreignKey.association: '_AdditionalMaterialGroup4'
    key mvgr4 as AdditionalMaterialGroup4,
    @Semantics.language:true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Semantics.text:true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    bezei as AdditionalMaterialGroup4Name,
    
    //Associations
    _AdditionalMaterialGroup4,
    _Language    
};
```
