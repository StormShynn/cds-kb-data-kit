---
name: C_CH_ELECTRONICDOCTYPETEXTVH
description: "CH Electronicdoctypetextvh"
semantic_vi: "View CH Electronicdoctypetextvh cung cấp danh sách các loại tài liệu điện tử và mô tả văn bản tương ứng, có thể được sử dụng để lọc hoặc hiển thị các loại tài liệu điện tử trong các ứng dụng kinh doanh khác nhau."
keywords:
  - "electronic document"
  - "document type"
  - "text description"
  - "value help"
  - "ca-gtf-csc-edo-ch"
  - "cross-application components"
  - "lob:cross-application components"
  - "ca-gtf"
  - "ca-gtf-csc"
  - "consumption-view"
  - "text"
  - "component:ca-gtf-csc-edo-ch"
semantic_en: "The CH Electronicdoctypetextvh view provides a list of electronic document types and their corresponding text descriptions, which can be used to filter or display electronic document types in various business applications."
app_component: CA-GTF-CSC-EDO-CH
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
  - text
  - component:CA-GTF-CSC-EDO-CH
  - lob:Cross-Application Components
---
# C_CH_ELECTRONICDOCTYPETEXTVH

**CH Electronicdoctypetextvh**

| Property | Value |
|---|---|
| App Component | `CA-GTF-CSC-EDO-CH` |
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
| `CH_ElectronicDocAcctgDocType` | ✓ | |  |  |  |  |
| `CH_ElectronicDocTypeText` |  | |  | `_Text[1:Language = $session.system_language].CH_ElectronicDocTypeText` |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label:'Switzerland Document Type - Text'
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
@ObjectModel.representativeKey:'CH_ElectronicDocAcctgDocType'
@Search.searchable: true
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
@Consumption.ranked: true
define view entity C_CH_ElectronicDocTypeTextVH as select from I_CH_ElectronicDocType
{ 
  @ObjectModel.text.element: ['CH_ElectronicDocTypeText']
  @Search: { defaultSearchElement: true, ranking: #HIGH }
  key CH_ElectronicDocAcctgDocType,
  
  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #LOW }
  @Search.fuzzinessThreshold: 0.8
  _Text[1:Language = $session.system_language].CH_ElectronicDocTypeText as CH_ElectronicDocTypeText 
}
```
