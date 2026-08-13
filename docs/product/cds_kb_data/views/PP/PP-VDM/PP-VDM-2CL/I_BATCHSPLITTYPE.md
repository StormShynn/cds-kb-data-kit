---
name: I_BATCHSPLITTYPE
description: "Batchsplittype"
semantic_vi: "View BatchSplitType cung cấp thông tin về các loại tách lô được sử dụng trong kế hoạch sản xuất, cho phép các nhà phát triển truy cập và sử dụng dữ liệu này trong các ứng dụng của họ."
keywords:
  - "batch"
  - "split"
  - "type"
  - "production"
  - "planning"
  - "pp-vdm"
  - "interface-view"
  - "component"
  - "pp-vdm-2cl"
  - "manufacturing"
  - "splits"
semantic_en: "The BatchSplitType view provides information about batch split types used in production planning, allowing developers to access and utilize this data in their applications."
app_component: PP-VDM-2CL
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
  - PP
  - PP-VDM
  - interface-view
  - batch
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_BATCHSPLITTYPE

**Batchsplittype**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
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
| `BatchSplitType` | ✓ | |  | `cast(substring(l.domvalue_l, 1, 1) as vdm_chsplit preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IBATCHSPLITTYPE'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, 
                                     #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BatchSplitType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.sapObjectNodeType.name: 'BatchSplitType'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Batch Split Type'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define root view entity I_BatchSplitType
  as select from dd07l as l
  composition [0..*] of I_BatchSplitTypeText as _Text
{ 
      @ObjectModel.text.association: '_Text'
      --cast to data element
  key cast(substring(l.domvalue_l, 1, 1) as vdm_chsplit preserving type) as BatchSplitType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      l.domvalue_l                                                       as DomainValue,
  
      // Composition
      _Text
  }
  where l.domname = 'CHSPLIT'
    and l.as4local = 'A'
    and l.as4vers  = '0000';
```
