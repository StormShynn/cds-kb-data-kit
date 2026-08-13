---
name: I_ADDRDELIVERYSERVICETYPETEXT
description: "Addrdeliveryservicetypetext"
semantic_vi: "View I_ADDRDELIVERYSERVICETYPETEXT cung cấp mô tả văn bản cho các loại dịch vụ giao hàng, có thể được sử dụng để hiển thị thông tin chi tiết về dịch vụ giao hàng trong các ứng dụng."
keywords:
  - "delivery service"
  - "dịch vụ giao hàng"
  - "service type"
  - "loại dịch vụ"
  - "text description"
  - "mô tả văn bản"
  - "sap cds view"
  - "view"
  - "basis components"
  - "components"
  - "delivery"
  - "service"
semantic_en: "The I_ADDRDELIVERYSERVICETYPETEXT view provides text descriptions for delivery service types, which can be used to display detailed information about delivery services in applications."
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
  - delivery
  - service
  - text
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRDELIVERYSERVICETYPETEXT

**Addrdeliveryservicetypetext**

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
| `DeliveryServiceTypeCode` | ✓ | |  | `deli_serv_type` | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceTypeDescription` |  | |  | `deli_serv_dscr` | `CHAR(40)` | Delivery Service Description |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Description of Delivery Service Types'
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IADDELIVSRVCTYPT'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S 
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE,#CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET,#LANGUAGE_DEPENDENT_TEXT]
@Search.searchable: true
@VDM.viewType: #BASIC
define view entity I_AddrDeliveryServiceTypeText 
  as select from addrc_deli_servt {
    @Semantics.language: true
    key langu     as Language,
    key deli_serv_type as DeliveryServiceTypeCode,
//    @Semantics.text: true
    @Search.defaultSearchElement: true
    deli_serv_dscr as DeliveryServiceTypeDescription
}
```
