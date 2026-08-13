---
name: I_ADDITIONALCUSTOMERGROUP3TEXT
description: "Additionalcustomergroup 3TEXT"
semantic_vi: "Cung cấp dữ liệu văn bản nhóm khách hàng bổ sung 3 cho khách hàng, cho phép hiển thị tên nhóm khách hàng trong các ngôn ngữ cụ thể."
keywords:
  - "customer"
  - "customer group"
  - "text view"
  - "additional customer group 3"
  - "language"
  - "sap"
  - "sd-md-mm-2cl"
  - "sales & distribution"
  - "customer data"
semantic_en: "Provides additional customer group 3 text data for customers, enabling the display of customer group names in specific languages."
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
# I_ADDITIONALCUSTOMERGROUP3TEXT

**Additionalcustomergroup 3TEXT**

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
| `AdditionalCustomerGroup3` | ✓ | |  | `kvgr3` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `AdditionalCustomerGroup3Name` |  | |  | `bezei` |  |  |
| `_AdditionalCustomerGroup3` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_AdditionalCustomerGroup3` | `I_AdditionalCustomerGroup3` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'AdditionalCustomerGroup3'
@ObjectModel.usageType.dataClass: #CUSTOMIZING 
@ObjectModel.usageType.serviceQuality: #A 
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.modelingPattern:         #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #EXTRACTION_DATA_SOURCE ]
@EndUserText.label: 'Additional Customer Group 3 - Text'
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDADDLCUSTGRP3T'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true

define view I_AdditionalCustomerGroup3Text
as select from tvv3t

association[0..1] to I_AdditionalCustomerGroup3 as _AdditionalCustomerGroup3 on $projection.AdditionalCustomerGroup3 = _AdditionalCustomerGroup3.AdditionalCustomerGroup3
association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
    
    @ObjectModel.foreignKey.association: '_AdditionalCustomerGroup3'
    key kvgr3 as AdditionalCustomerGroup3,
    @Semantics.language:true
    @ObjectModel.foreignKey.association: '_Language'
    key spras as Language,
    @Semantics.text:true
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #LOW
    bezei as AdditionalCustomerGroup3Name,
    
    //Associations
    _AdditionalCustomerGroup3,
    _Language    
};
```
