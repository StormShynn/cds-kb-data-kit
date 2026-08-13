---
name: C_IT_ELECTRONICDOCPARTSTATVH
description: "IT Electronicdocpartstatvh"
semantic_vi: "View C_IT_ELECTRONICDOCPARTSTATVH hiển thị dữ liệu trạng thái phần của tài liệu điện tử, có thể sử dụng khi làm việc với tài liệu điện tử trong hệ thống SAP."
keywords:
  - "electronic document"
  - "part status"
  - "electronicdocpartstat"
  - "value help"
  - "ca-gtf"
  - "csc-edo-it"
  - "cross-application components"
  - "lob"
  - "consumption view"
  - "tài liệu điện tử"
  - "trạng thái phần"
semantic_en: "The C_IT_ELECTRONICDOCPARTSTATVH view exposes electronic document part status data, which is useful when working with electronic documents in SAP systems."
app_component: CA-GTF-CSC-EDO-IT
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
  - CA
  - CA-GTF
  - CA-GTF-CSC
  - consumption-view
  - value-help
  - component:CA-GTF-CSC-EDO-IT
  - lob:Cross-Application Components
---
# C_IT_ELECTRONICDOCPARTSTATVH

**IT Electronicdocpartstatvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-IT` |
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
| `IT_ElectronicDocPartStat` | ✓ | |  |  |  |  |
| `IT_ElectronicDocPartStatText` |  | |  | `_Text[1:Language = $session.system_language].IT_ElectronicDocPartStatText` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Italy status of edocument Partner - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.usageType:{
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #ORGANIZATIONAL
}

@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #VALUE_HELP_PROVIDER,
                                     #SEARCHABLE_ENTITY]


@VDM.viewType: #CONSUMPTION
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey:'IT_ElectronicDocPartStat'
@Search.searchable: true
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
@Consumption.ranked: true
define view entity C_IT_ElectronicDocPartStatVH as select from I_IT_ElectronicDocStatPart
{
  @ObjectModel.text.element: ['IT_ElectronicDocPartStatText']
  @Search: { defaultSearchElement: true, ranking: #LOW }
  key IT_ElectronicDocPartStat,

  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #HIGH }
  @Search.fuzzinessThreshold: 0.8
  _Text[1:Language = $session.system_language].IT_ElectronicDocPartStatText as IT_ElectronicDocPartStatText
}
```
