---
name: I_BR_MATERIALUSAGETEXT
description: "BR Materialusagetext"
semantic_vi: "View I_BR_MATERIALUSAGETEXT cung cấp mô tả văn bản cho việc sử dụng vật liệu trong bối cảnh kinh doanh, thường được sử dụng khi hiển thị hoặc báo cáo thông tin về việc sử dụng vật liệu."
keywords:
  - "material usage"
  - "mô tả vật liệu"
  - "text view"
  - "view"
  - "material"
  - "sử dụng vật liệu"
  - "fi-loc-lo-br"
  - "fi"
  - "fi-loc"
  - "fi-loc-lo"
  - "interface-view"
  - "text-view"
semantic_en: "The I_BR_MATERIALUSAGETEXT view provides text descriptions for material usage in a business context, typically used when displaying or reporting on material usage information."
app_component: FI-LOC-LO-BR
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
  - FI
  - FI-LOC
  - FI-LOC-LO
  - interface-view
  - text-view
  - material
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:Material
---
# I_BR_MATERIALUSAGETEXT

**BR Materialusagetext**

| Property | Value |
|---|---|
| App Component | `FI-LOC-LO-BR` |
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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type )` |  |  |
| `BR_MaterialUsage` | ✓ | |  | `cast ( domvalue_l as logbr_matuse )` |  |  |
| `BR_MaterialUsageDesc` |  | |  | `cast ( ddtext as logbr_matusedesc preserving type )` |  |  |
| `_BR_MaterialUsage` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_MaterialUsage` | `I_BR_MaterialUsage` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil Material Usage - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics: {dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRMATUSET'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#EXTRACTION_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.representativeKey: 'BR_MaterialUsage'
@AbapCatalog.preserveKey:true 
@Search.searchable: true

define view I_BR_MaterialUsageText as select from dd07t
  association [1..1] to I_BR_MaterialUsage as _BR_MaterialUsage on $projection.BR_MaterialUsage = _BR_MaterialUsage.BR_MaterialUsage
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{

  @Semantics.language: true
  key cast( ddlanguage as spras preserving type ) as Language,
  
  @ObjectModel.foreignKey.association: '_BR_MaterialUsage'
  key cast ( domvalue_l as logbr_matuse ) as BR_MaterialUsage,
  
  @Search.defaultSearchElement:true
  @Search.ranking: #HIGH
  @Semantics.text: true
  cast ( ddtext as logbr_matusedesc preserving type ) as BR_MaterialUsageDesc,
  _BR_MaterialUsage,
  _Language
}
where domname = 'J_1BMATUSE' 
 and as4local = 'A'
```
