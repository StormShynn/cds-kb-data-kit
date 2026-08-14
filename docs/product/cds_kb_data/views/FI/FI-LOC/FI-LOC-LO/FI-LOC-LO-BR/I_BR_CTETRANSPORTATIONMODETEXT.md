---
name: I_BR_CTETRANSPORTATIONMODETEXT
description: "BR Ctetransportationmodetext"
semantic_vi: "Cung cấp dữ liệu văn bản phương thức vận chuyển cho mục đích thuế Brazil, được sử dụng khi hiển thị hoặc xử lý thông tin vận chuyển trong phần mềm FI-LOC-LO-BR."
keywords:
  - "transportation mode"
  - "phương thức vận chuyển"
  - "brazilian tax"
  - "thuế brazil"
  - "fi-loc-lo-br"
  - "sap cds view"
  - "view i_br_ctetransportationmodetext"
  - "lob finance"
  - "interface view"
  - "text view"
semantic_en: "Provides transportation mode text data for Brazilian tax purposes, used when displaying or processing transportation information in FI-LOC-LO-BR component."
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
  - transport
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTETRANSPORTATIONMODETEXT

**BR Ctetransportationmodetext**

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
| `Language` | ✓ | |  | `cast( ddlanguage as spras preserving type)` |  |  |
| `BR_CTeTransportationMode` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_transportation_mode preserving type )` |  |  |
| `BR_CTeTransportationModeDesc` |  | |  | `ddtext` |  |  |
| `_BR_CTeTransportationMode` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CTeTransportationMode` | `I_BR_CTeTransportationMode` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Transportation Mode - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTETRANSTXT'
@ObjectModel.representativeKey: 'BR_CTeTransportationMode'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_CTeTransportationModeText
  as select from dd07t
  association [1..1] to I_BR_CTeTransportationMode as _BR_CTeTransportationMode on $projection.BR_CTeTransportationMode = _BR_CTeTransportationMode.BR_CTeTransportationMode
  association [0..1] to I_Language                 as _Language           on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_CTeTransportationMode'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_transportation_mode preserving type ) as BR_CTeTransportationMode,
  @Semantics.text
  ddtext as BR_CTeTransportationModeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CTeTransportationMode,
  _Language
}
where domname  = 'J_1BCTE_TRANSPTN_MODE'
  and as4local = 'A'
```
