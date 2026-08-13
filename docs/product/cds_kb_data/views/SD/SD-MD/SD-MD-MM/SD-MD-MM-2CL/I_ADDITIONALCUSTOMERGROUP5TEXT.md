---
name: I_ADDITIONALCUSTOMERGROUP5TEXT
description: "Additionalcustomergroup 5TEXT"
semantic_vi: "Chứa thông tin nhóm khách hàng bổ sung 5, bao gồm tên nhóm trong các ngôn ngữ khác nhau. Sử dụng view này để truy cập chi tiết nhóm khách hàng cho mục đích bán hàng và phân phối."
keywords:
  - "additional customer group"
  - "customer group"
  - "sales and distribution"
  - "customer"
  - "language"
  - "sap"
  - "sd-md-mm-2cl"
  - "sales distribution"
  - "customer group 5"
  - "khách hàng"
  - "nhóm khách hàng"
  - "bán hàng"
semantic_en: "Exposes additional customer group 5 information, including the group name in different languages. Use this view to access customer group details for sales and distribution purposes."
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
# I_ADDITIONALCUSTOMERGROUP5TEXT

**Additionalcustomergroup 5TEXT**

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
| `AdditionalCustomerGroup5` | ✓ | |  | `kvgr5` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AdditionalCustomerGroup5Name` |  | |  | `bezei` |  |  |
| `_AdditionalCustomerGroup5` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AdditionalCustomerGroup5` | `I_AdditionalCustomerGroup5` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AdditionalCustomerGroup5'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Additional Customer Group 5 - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDADDLCUSTGRP5T'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AdditionalCustomerGroup5Text
as select from tvv5t

association[0..1] to I_AdditionalCustomerGroup5 as _AdditionalCustomerGroup5 on $projection.AdditionalCustomerGroup5 = _AdditionalCustomerGroup5.AdditionalCustomerGroup5
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    
    @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup5'
    key kvgr5 as AdditionalCustomerGroup5,
    @Semantics.language:true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Semantics.text:true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    bezei as AdditionalCustomerGroup5Name,
    
    //Associations
    _AdditionalCustomerGroup5,
    _Language    
};
```
