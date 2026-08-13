---
name: I_ADDRESSREPRESENTATION
description: "Addressrepresentation"
semantic_vi: "View I_ADDRESSREPRESENTATION cung cấp một đại diện tiêu chuẩn của địa chỉ, có thể được sử dụng để lưu trữ và truy xuất dữ liệu địa chỉ trong một định dạng nhất quán. Nó hữu ích khi làm việc với dữ liệu địa chỉ trong ứng dụng SAP."
keywords:
  - "address"
  - "address representation"
  - "sap"
  - "cds view"
  - "bc-srv-adr"
  - "basis components"
  - "address data"
  - "data standardization"
  - "địa chỉ"
  - "đại diện địa chỉ"
semantic_en: "The I_ADDRESSREPRESENTATION view provides a standardized representation of addresses, which can be used to store and retrieve address data in a consistent format. It is useful when working with address-related data in SAP applications."
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
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSREPRESENTATION

**Addressrepresentation**

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
| `AddressRepresentationCode` | ✓ | |  | `nation` | `CHAR(1)` | Version ID for International Addresses |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddressRepresentationText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@VDM.viewType: #BASIC
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.representativeKey: 'AddressRepresentationCode'
@Analytics.technicalName: 'IADDRSCRPT'
@ObjectModel.sapObjectNodeType.name: 'AddressRepresentationCode'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@EndUserText.label: 'Represented names of language scripts'
define view entity I_AddressRepresentation
  as select from tsadv
  association [0..*] to I_AddressRepresentationText as _Text on $projection.AddressRepresentationCode = _Text.AddressRepresentationCode
{
      @ObjectModel.text.association: '_Text'
  key tsadv.nation as AddressRepresentationCode,
      _Text
}
```
