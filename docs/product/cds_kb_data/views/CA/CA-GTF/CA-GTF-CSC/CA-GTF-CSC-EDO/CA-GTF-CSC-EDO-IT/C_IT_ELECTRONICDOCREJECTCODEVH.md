---
name: C_IT_ELECTRONICDOCREJECTCODEVH
description: "IT Electronicdocrejectcodevh"
semantic_vi: "View CDS IT Electronicdocrejectcodevh cung cấp mã từ chối tài liệu điện tử và văn bản tương ứng trong các ngôn ngữ khác nhau. Nó được sử dụng để lấy mã từ chối cho tài liệu điện tử."
keywords:
  - "electronic document"
  - "rejection code"
  - "language"
  - "text"
  - "sap cds view"
  - "cds view"
  - "electronic document rejection code"
  - "tài liệu điện tử"
  - "mã từ chối"
  - "ngôn ngữ"
  - "tên"
  - "sap"
semantic_en: "The IT Electronicdocrejectcodevh CDS view provides electronic document rejection codes and their corresponding text in different languages. It is used to retrieve rejection codes for electronic documents."
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
# C_IT_ELECTRONICDOCREJECTCODEVH

**IT Electronicdocrejectcodevh**

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
| `IT_ElectronicDocRejectionCode` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `IT_ElectronicDocRejectCodeText` |  | |  |  |  |  |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Italy Electronic Rejection Code'
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
@ObjectModel.representativeKey:'IT_ElectronicDocRejectionCode'
@Search.searchable: true
@ObjectModel.modelingPattern:  #VALUE_HELP_PROVIDER  
@Consumption.ranked: true
define view entity C_IT_ElectronicDocRejectCodeVH as select from I_IT_ElectronicDocRejectCode
{
 
  @ObjectModel.text.element: ['IT_ElectronicDocRejectCodeText']
  key IT_ElectronicDocRejectionCode,
  
  @Semantics.language
  @UI.hidden: true
  key Language, 

  @Semantics.text: true
  @Search: { defaultSearchElement: true, ranking: #HIGH }
  @Search.fuzzinessThreshold: 0.8
  IT_ElectronicDocRejectCodeText
}
```
