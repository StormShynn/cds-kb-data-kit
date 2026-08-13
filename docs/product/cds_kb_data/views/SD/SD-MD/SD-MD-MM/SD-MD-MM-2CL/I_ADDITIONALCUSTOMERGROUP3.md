---
name: I_ADDITIONALCUSTOMERGROUP3
description: "Additionalcustomergroup 3"
semantic_vi: "Chứa thông tin nhóm khách hàng bổ sung cho khách hàng, hữu ích khi quản lý mối quan hệ và phân khúc khách hàng."
keywords:
  - "customer"
  - "customer group"
  - "additional customer group"
  - "khách hàng"
  - "nhóm khách hàng"
  - "sđd"
  - "sales and distribution"
  - "customer relationship"
  - "segmentation"
semantic_en: "Exposes additional customer groups for customers, useful when managing customer relationships and segmentation."
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
  - customer
  - component:SD-MD-MM-2CL
  - lob:Sales & Distribution
  - bo:Customer
---
# I_ADDITIONALCUSTOMERGROUP3

**Additionalcustomergroup 3**

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
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AdditionalCustomerGroup3Text` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.representativeKey: 'AdditionalCustomerGroup3'
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
@EndUserText.label: 'Additional Customer Group 3'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:  #NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDADDLCUSTGRP3'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'AdditionalCustomerGroup3'
@Search.searchable: true
@Consumption.ranked: true
@ObjectModel.dataCategory: #VALUE_HELP

define view I_AdditionalCustomerGroup3
as select from tvv3

association [0..*] to I_AdditionalCustomerGroup3Text as _Text on $projection.AdditionalCustomerGroup3  = _Text.AdditionalCustomerGroup3
{
    @ObjectModel.text.association: '_Text'
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    key kvgr3 as AdditionalCustomerGroup3 ,
    
    //Associations
    _Text
};
```
