---
name: I_ADDRESSOBJECTTYPE
description: "Addressobjecttype"
semantic_vi: "View I_ADDRESSOBJECTTYPE hiển thị các loại đối tượng địa chỉ, được sử dụng để phân loại các loại địa chỉ khác nhau trong hệ thống. Nó có thể được sử dụng để lấy hoặc thao tác các loại đối tượng địa chỉ trong các kịch bản kinh doanh khác nhau."
keywords:
  - "address"
  - "object"
  - "type"
  - "categorize"
  - "retrieve"
  - "manipulate"
  - "addressobjecttype"
  - "sap"
  - "cds"
  - "view"
  - "business"
  - "scenario"
semantic_en: "The I_ADDRESSOBJECTTYPE CDS view exposes address object types, which are used to categorize different types of addresses in the system. It can be used to retrieve or manipulate address object types in various business scenarios."
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
# I_ADDRESSOBJECTTYPE

**Addressobjecttype**

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
| `AddressObjectType` | ✓ | |  | `cast ( domvalue_l as ad_adrtype )` | `CHAR(1)` | Address type (1=Organization, 2=Person, 3=Contact person) |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddressObjectTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@EndUserText.label: 'Address Object Type'
@ObjectModel.representativeKey: 'AddressObjectType'
@Analytics.technicalName: 'IADDROBJTYPE'
@ObjectModel.sapObjectNodeType.name: 'AddressObjectType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
define view entity I_AddressObjectType
  as select from dd07l
  association [0..*] to I_AddressObjectTypeText as _Text on $projection.AddressObjectType = _Text.AddressObjectType
{
      @ObjectModel.text.association: '_Text'
  key cast ( domvalue_l as ad_adrtype ) as AddressObjectType,
      _Text
}
where
      as4local = 'A'
  and domname  = 'AD_ADRTYPE'
```
