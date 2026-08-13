---
name: I_ADDITIONALCUSTOMERGROUP2TEXT
description: "Additionalcustomergroup 2TEXT"
semantic_vi: "Chỉ ra tên nhóm khách hàng bổ sung 2 trong nhiều ngôn ngữ, được sử dụng để lấy mô tả văn bản cho nhóm khách hàng 2 trong bán hàng và phân phối."
keywords:
  - "additional customer group"
  - "customer group 2"
  - "sales and distribution"
  - "text view"
  - "customer"
  - "language"
  - "sap"
  - "sd-md-mm-2cl"
semantic_en: "Exposes additional customer group 2 names in multiple languages, used to retrieve text descriptions for customer group 2 in sales and distribution."
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
  - customer
  - text
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_ADDITIONALCUSTOMERGROUP2TEXT

**Additionalcustomergroup 2TEXT**

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
| `AdditionalCustomerGroup2` | ✓ | |  | `kvgr2` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AdditionalCustomerGroup2Name` |  | |  | `bezei` |  |  |
| `_AdditionalCustomerGroup2` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AdditionalCustomerGroup2` | `I_AdditionalCustomerGroup2` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AdditionalCustomerGroup2'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Additional Customer Group 2 - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDADDLCUSTGRP2T'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AdditionalCustomerGroup2Text
as select from tvv2t

association[0..1] to I_AdditionalCustomerGroup2 as _AdditionalCustomerGroup2 on $projection.AdditionalCustomerGroup2 = _AdditionalCustomerGroup2.AdditionalCustomerGroup2
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup2'
    key kvgr2 as AdditionalCustomerGroup2,
    @Semantics.language:true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Semantics.text:true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW    
    bezei as AdditionalCustomerGroup2Name,
    
    //Associations
    _AdditionalCustomerGroup2,
    _Language    
};
```
