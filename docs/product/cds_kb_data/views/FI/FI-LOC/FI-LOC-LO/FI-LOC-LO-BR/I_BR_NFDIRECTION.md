---
name: I_BR_NFDIRECTION
description: "BR Nfdirection"
semantic_vi: "View BR Nfdirection hiển thị dữ liệu kinh doanh liên quan đến hướng kim loại phi sắt, có liên quan khi làm việc với dữ liệu tài chính và logistics trong thành phần FI-LOC-LO-BR của SAP."
keywords:
  - "non-ferrous metal direction"
  - "kim loại phi sắt"
  - "finance"
  - "logistics"
  - "fi-loc-lo-br"
  - "sap"
  - "direction"
  - "kim loại"
  - "tài chính"
  - "loại"
semantic_en: "The BR Nfdirection view exposes business data related to non-ferrous metal direction, which is relevant when working with finance and logistics data in SAP FI-LOC-LO-BR component."
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
  - component:FI-LOC-LO-BR
  - lob:Finance
---
# I_BR_NFDIRECTION

**BR Nfdirection**

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
| `BR_NFDirection` | ✓ | |  | `cast( substring(domvalue_l, 1, 1) as logbr_nfdirection preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFDirectionText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Direction'
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFDIR'
@ObjectModel.representativeKey: 'BR_NFDirection'
@ObjectModel.compositionRoot: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ClientHandling.algorithm: #SESSION_VARIABLE
@AbapCatalog.compiler.compareFilter: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true 

define view I_BR_NFDirection as select from dd07l
  association [0..*] to I_BR_NFDirectionText as _Text on $projection.BR_NFDirection = _Text.BR_NFDirection
{
  @ObjectModel.text.association: '_Text'
  key cast( substring(domvalue_l, 1, 1) as logbr_nfdirection preserving type ) as BR_NFDirection,  
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BDIRECT' and as4local = 'A'
```
