---
name: I_BR_CTESERVICETYPETEXT
description: "BR Cteservicetypetext"
semantic_vi: "View I_BR_CTESERVICETYPETEXT cung cấp mô tả văn bản cho các loại dịch vụ kinh doanh, có thể được sử dụng để hiển thị thông tin chi tiết về dịch vụ trong bối cảnh tài chính."
keywords:
  - "service type"
  - "dịch vụ loại"
  - "text description"
  - "mô tả văn bản"
  - "financial context"
  - "bối cảnh tài chính"
  - "sap fi"
  - "fi sap"
  - "cds view"
  - "view cds"
  - "business service"
  - "dịch vụ kinh doanh"
semantic_en: "The I_BR_CTESERVICETYPETEXT view provides text descriptions for business service types, which can be used to display detailed information about services in a financial context."
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
  - service
  - text
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_CTESERVICETYPETEXT

**BR Cteservicetypetext**

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
| `BR_CTeServiceType` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_srv_typ_cte preserving type )` |  |  |
| `BR_CTeServiceTypeDesc` |  | |  | `ddtext` |  |  |
| `_BR_CTeServiceType` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BR_CTeServiceType` | `I_BR_CTeServiceType` | [1..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Brazil CT-e Service Type - Text'
@ObjectModel.dataCategory: #TEXT
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRCTESERVTYPTXT'
@ObjectModel.representativeKey: 'BR_CTeServiceType'
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


define view I_BR_CTeServiceTypeText
  as select from dd07t
  association [1..1] to I_BR_CTeServiceType as _BR_CTeServiceType on $projection.BR_CTeServiceType = _BR_CTeServiceType.BR_CTeServiceType
  association [0..1] to I_Language          as _Language          on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras preserving type) as Language,
  @ObjectModel.foreignKey.association: '_BR_CTeServiceType'
  key cast( substring(domvalue_l, 1, 1) as logbr_srv_typ_cte preserving type ) as BR_CTeServiceType,
  @Semantics.text
  ddtext as BR_CTeServiceTypeDesc,
  @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
  _BR_CTeServiceType,
  _Language
}
where domname  = 'J_1BCTE_SERV_TP'
  and as4local = 'A'
```
