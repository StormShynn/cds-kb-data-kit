---
name: I_ADDRESSMANAGEMENTURITYPE
description: "Addressmanagementuritype"
semantic_vi: "Chỉ ra các loại URI quản lý địa chỉ, được sử dụng để xác định và phân loại địa chỉ trong hệ thống. View này hữu ích cho các nhà phát triển cần làm việc với dữ liệu địa chỉ trong ứng dụng SAP."
keywords:
  - "address management"
  - "uri type"
  - "address data"
  - "sap application"
  - "bc-srv-adr"
  - "address management uri type"
  - "domain value"
  - "address management uri"
  - "sap cds view"
semantic_en: "Exposes address management URI types, which are used to identify and categorize addresses in a system. This view is useful for developers who need to work with address data in SAP applications."
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
# I_ADDRESSMANAGEMENTURITYPE

**Addressmanagementuritype**

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
| `AddressManagementURIType` | ✓ | |  | `cast ( domvalue_l as ad_uritype )` | `CHAR(3)` | URI type flag |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddressManagementURITypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Address Management URI Type'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'AddressManagementURIType'
@Analytics.technicalName: 'IADMANAGEURITYPE'
@ObjectModel.sapObjectNodeType.name: 'AddressManagementURIType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_AddressManagementURIType
  as select from dd07l
  association [0..*] to I_AddressManagementURITypeText as _Text on $projection.AddressManagementURIType = _Text.AddressManagementURIType
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as ad_uritype ) as AddressManagementURIType,
      domvalue_l                        as DomainValue,
      _Text
}
where
      as4local = 'A'
  and domname  = 'AD_URITYPE'
```
