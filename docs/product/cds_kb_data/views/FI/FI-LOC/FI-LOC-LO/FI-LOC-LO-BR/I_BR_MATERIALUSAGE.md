---
name: I_BR_MATERIALUSAGE
description: "BR Materialusage"
semantic_vi: "View I_BR_MATERIALUSAGE cung cấp dữ liệu sử dụng vật liệu cho báo cáo kinh doanh, thường được sử dụng khi phân tích mức tiêu thụ vật liệu và mức tồn kho."
keywords:
  - "material usage"
  - "dữ liệu sử dụng vật liệu"
  - "business reporting"
  - "báo cáo kinh doanh"
  - "material consumption"
  - "mức tiêu thụ vật liệu"
  - "inventory levels"
  - "mức tồn kho"
  - "sap cds view"
  - "view i_br_materialusage"
  - "fi-loc-lo-br"
  - "finance"
semantic_en: "The I_BR_MATERIALUSAGE view provides material usage data for business reporting, typically used when analyzing material consumption and inventory levels."
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
  - material
  - component:FI-LOC-LO-BR
  - lob:Finance
  - bo:Material
---
# I_BR_MATERIALUSAGE

**BR Materialusage**

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
| `BR_MaterialUsage` | ✓ | |  | `cast ( domvalue_l as logbr_matuse )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_MaterialUsageText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBRMATUSE'
@EndUserText.label: 'Brazil Material Usage'
@VDM.viewType: #BASIC
@ObjectModel.representativeKey: 'BR_MaterialUsage'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE, #ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@Analytics.dataCategory: #DIMENSION 
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true 
@Search.searchable: true
@Metadata.allowExtensions:true

define view I_BR_MaterialUsage as select from dd07l
  association [0..*] to I_BR_MaterialUsageText as _Text on $projection.BR_MaterialUsage = _Text.BR_MaterialUsage
{
  @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as logbr_matuse ) as BR_MaterialUsage,
  @Consumption.hidden: true
  @Search.defaultSearchElement:true
  @Search.ranking: #HIGH
  dd07l.domvalue_l as DomainValue, 
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BMATUSE' and as4local = 'A'
```
