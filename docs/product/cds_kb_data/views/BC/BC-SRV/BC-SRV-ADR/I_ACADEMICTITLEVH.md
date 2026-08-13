---
name: I_ACADEMICTITLEVH
description: "Academictitlevh"
semantic_vi: "Cung cấp danh sách các tiêu đề học thuật và tên tương ứng, hữu ích cho hỗ trợ giá trị trong ứng dụng nơi chứng chỉ học thuật có liên quan."
keywords:
  - "academic title"
  - "tiêu đề học thuật"
  - "value help"
  - "hỗ trợ giá trị"
  - "sap cds"
  - "cds view"
  - "academic credentials"
  - "chứng chỉ học thuật"
  - "basis components"
  - "bc-srv-adr"
semantic_en: "Provides a list of academic titles and their corresponding names, useful for value help in applications where academic credentials are relevant."
app_component: BC-SRV-ADR
software_component: SAP_BASIS
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
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - value-help
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ACADEMICTITLEVH

**Academictitlevh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AcademicTitle` | ✓ | |  |  | `CHAR(4)` | Academic Title: Key |
| `AcademicTitleName` |  | |  |  | `CHAR(20)` | Academic Title: Written Form |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Academic Title'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_AcademicTitleVH
  as select from I_AcademicTitle
{
      @Search.defaultSearchElement: true
  key AcademicTitle,      
      @EndUserText.label: 'Academic Title Name'
      @Search.defaultSearchElement: true
      AcademicTitleName,
      _Text
}
```
