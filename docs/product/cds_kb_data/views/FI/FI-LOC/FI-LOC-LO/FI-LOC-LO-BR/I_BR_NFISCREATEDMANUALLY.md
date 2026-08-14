---
name: I_BR_NFISCREATEDMANUALLY
description: "BR Nfiscreatedmanually"
semantic_vi: "View BR Nfiscreatedmanually hiển thị dữ liệu kinh doanh liên quan đến việc tạo tài liệu kinh doanh được tạo thủ công trong thành phần FI-LOC-LO-BR. Nó có thể được sử dụng để phân tích hoặc báo cáo về việc tạo tài liệu như vậy."
keywords:
  - "business document"
  - "tài liệu kinh doanh"
  - "fi-loc-lo-br"
  - "manual creation"
  - "tạo thủ công"
  - "business document creation"
  - "tạo tài liệu kinh doanh"
  - "sap fi"
  - "fi-loc"
  - "fi-loc-lo"
semantic_en: "The BR Nfiscreatedmanually view exposes business data related to the creation of manually created business documents in the FI-LOC-LO-BR component. It can be used to analyze or report on the creation of such documents."
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
# I_BR_NFISCREATEDMANUALLY

**BR Nfiscreatedmanually**

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
| `BR_NFIsCreatedManually` | ✓ | |  | `cast ( substring( domvalue_l, 1, 1 ) as logbr_manual preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BR_NFIsCreatedManuallyText` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Brazil Nota Fiscal Created Manually Ind'
@AbapCatalog.compiler.compareFilter: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IBRNFICMANUA'
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@ObjectModel.representativeKey: 'BR_NFIsCreatedManually'
@ObjectModel.compositionRoot: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE]
@AbapCatalog.preserveKey:true
@Metadata.ignorePropagatedAnnotations: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view I_BR_NFIsCreatedManually 
  as select from dd07l
  association [0..*] to I_BR_NFIsCreatedManuallyText as _Text on $projection.BR_NFIsCreatedManually = _Text.BR_NFIsCreatedManually
{
  @Semantics.booleanIndicator: true
  @ObjectModel.text.association: '_Text'
  key cast ( substring( domvalue_l, 1, 1 ) as logbr_manual preserving type ) as BR_NFIsCreatedManually,
  @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
  _Text
}
where domname = 'J_1BMANUAL' 
  and as4local = 'A'
```
