---
name: I_BR_ICMSSTBASEDETNTEXT
description: "BR Icmsstbasedetntext"
semantic_vi: "View I_BR_ICMSSTBASEDETNTEXT cung cấp các mô tả về cơ sở xác định thuế ICMS Brazil trong nhiều ngôn ngữ. Nó được sử dụng để lấy dữ liệu văn bản cho các xác định thuế ICMS."
keywords:
  - "icms"
  - "tax"
  - "determination"
  - "description"
  - "language"
  - "brazil"
  - "fi-loc-lo-br"
  - "sap"
  - "cds"
  - "view"
  - "finance"
  - "taxation"
semantic_en: "The I_BR_ICMSSTBASEDETNTEXT view provides Brazilian ICMS tax base determination descriptions in multiple languages. It is used to retrieve text data for ICMS tax base determinations."
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
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_ICMSSTBASEDETNTEXT

**BR Icmsstbasedetntext**

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
| `BR_ICMSSTBaseDetermination` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_icst_base_det preserving type )` |  |  |
| `BR_ICMSSTBaseDeterminationDesc` |  | |  | `ddtext` |  |  |
| `_BR_ICMSSTBaseDetermination` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_ICMSSTBaseDetermination` | `I_BR_ICMSSTBaseDetn` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil ICMS ST Base Determination - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRICMSSTBDETT'
@ObjectModel.representativeKey: 'BR_ICMSSTBaseDetermination'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@AbapCatalog.preserveKey:true

define view I_BR_ICMSSTBaseDetnText as select from dd07t
  association [1..1] to I_BR_ICMSSTBaseDetn as _BR_ICMSSTBaseDetermination on $projection.BR_ICMSSTBaseDetermination = _BR_ICMSSTBaseDetermination.BR_ICMSSTBaseDetermination
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type ) as Language,
  @ObjectModel.foreignKey.association: '_BR_ICMSSTBaseDetermination'
  key cast( substring(domvalue_l, 1, 1) as logbr_icst_base_det preserving type ) as BR_ICMSSTBaseDetermination,
  @Semantics.text
  ddtext as BR_ICMSSTBaseDeterminationDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT] 
  _BR_ICMSSTBaseDetermination, 
  _Language 
}
where domname = 'J_1B_ICST_BASE_DET'  
  and as4local = 'A'
```
