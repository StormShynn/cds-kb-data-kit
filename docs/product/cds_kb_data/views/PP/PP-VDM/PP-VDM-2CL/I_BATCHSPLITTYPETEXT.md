---
name: I_BATCHSPLITTYPETEXT
description: "Batchsplittypetext"
semantic_vi: "View Batchsplittypetext cung cấp mô tả văn bản cho các loại tách lô trong ngữ cảnh lập kế hoạch sản xuất và sản xuất. Nó được sử dụng để lấy tên các loại tách lô trong các ngôn ngữ khác nhau."
keywords:
  - "batch"
  - "split"
  - "type"
  - "text"
  - "production"
  - "planning"
  - "manufacturing"
  - "batchsplittypetext"
  - "pp-vdm"
  - "pp"
  - "vdm"
  - "sap"
semantic_en: "The Batchsplittypetext view provides text descriptions for batch split types in the context of production planning and manufacturing. It is used to retrieve the names of batch split types in different languages."
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
  - text-view
  - batch
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_BATCHSPLITTYPETEXT

**Batchsplittypetext**

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
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `BatchSplitType` | ✓ | |  | `cast(substring( domvalue_l, 1, 1) as vdm_chsplit preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `BatchSplitTypeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_BatchSplitType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataExtraction.enabled: true
@Analytics.technicalName: 'IBATCHSPLTTYPTXT'
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE, #EXTRACTION_DATA_SOURCE]
@ObjectModel.representativeKey: 'BatchSplitType'
@ObjectModel.sapObjectNodeType.name: 'BatchSplitTypeText'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Batch Split Type - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_BatchSplitTypeText as select from dd07t as t
  association to parent I_BatchSplitType as _BatchSplitType on $projection.BatchSplitType = _BatchSplitType.BatchSplitType
  association [0..1] to I_Language       as _Language       on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                       as Language,
      @ObjectModel.foreignKey.association: '_BatchSplitType'  
      @ObjectModel.text.element: ['BatchSplitTypeName']
  key cast(substring( domvalue_l, 1, 1) as vdm_chsplit preserving type) as BatchSplitType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      t.domvalue_l                                                      as DomainValue,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      t.ddtext                                                          as BatchSplitTypeName,
  
      // Associations
      _BatchSplitType,
      _Language
}
  where t.domname = 'CHSPLIT'
    and t.as4local = 'A'
    and t.as4vers  = '0000';
```
