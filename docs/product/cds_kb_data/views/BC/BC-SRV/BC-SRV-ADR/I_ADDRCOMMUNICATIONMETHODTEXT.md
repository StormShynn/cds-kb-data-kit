---
name: I_ADDRCOMMUNICATIONMETHODTEXT
description: "Addrcommunicationmethodtext"
semantic_vi: "View Addrcommunicationmethodtext cung cấp mô tả văn bản cho phương thức liên lạc, chẳng hạn như số điện thoại hoặc địa chỉ email, trong các ngôn ngữ khác nhau. Nó được sử dụng để hiển thị mô tả này trong các ứng dụng."
keywords:
  - "communication method"
  - "đường liên lạc"
  - "text view"
  - "view"
  - "language"
  - "ngôn ngữ"
  - "sap cds"
  - "cds view"
  - "address"
  - "địa chỉ"
  - "basis components"
  - "bc-srv-adr"
semantic_en: "The Addrcommunicationmethodtext view provides text descriptions for communication methods, such as phone numbers or email addresses, in different languages. It is used to display these descriptions in applications."
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
  - text-view
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRCOMMUNICATIONMETHODTEXT

**Addrcommunicationmethodtext**

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
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `CommunicationMediumType` | ✓ | |  | `comm_type` | `CHAR(3)` | Communication Method (Key) (Business Address Services) |
| `CommunicationMediumTypeName` |  | |  | `comm_text` | `CHAR(20)` | Communication type description |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Description of Communication Method'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IADCOMMMETHODTXT'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
 
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_AddrCommunicationMethodText 
  as select from tsact {
    @Semantics.language: true
    key langu     as Language,
    key comm_type as CommunicationMediumType,
    @Semantics.text: true
    @Search.defaultSearchElement: true
    comm_text as CommunicationMediumTypeName
}
```
