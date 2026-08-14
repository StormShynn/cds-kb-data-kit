---
name: I_BPPROTECTEDADDRESS
description: "Bpprotectedaddress"
semantic_vi: "Chứa địa chỉ đối tác kinh doanh được bảo vệ, được sử dụng để lưu trữ thông tin nhạy cảm về địa chỉ đối tác kinh doanh."
keywords:
  - "business partner"
  - "protected address"
  - "address"
  - "sensitive information"
  - "business partner address"
  - "đối tác kinh doanh"
  - "địa chỉ bảo vệ"
  - "địa chỉ"
  - "thông tin nhạy cảm"
semantic_en: "Exposes protected business partner addresses, which are used to store sensitive information about a business partner's address."
app_component: AP-MD-BP
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
  - AP
  - AP-MD
  - AP-MD-BP
  - interface-view
  - address
  - component:AP-MD-BP
  - lob:Other
---
# I_BPPROTECTEDADDRESS

**Bpprotectedaddress**

| Property | Value |
|---|---|
| App Component | `AP-MD-BP` |
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
| `BusinessPartner` | ✓ | |  |  | `CHAR(10)` | Business Partner Number |
| `AddressID` | ✓ | |  |  | `CHAR(10)` | Address Number |
| `BPAddressIsProtected` |  | |  | `case when BPProtectedAddrUsageCount > 0 then cast('E' as bu_protected) when BPProtectedAddrUsageCount = 0 then cast(' ' as bu_protected) end` | `CHAR(1)` | BP: Sensitivity Indicator |
| `_BusinessPartner` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BusinessPartner` | `I_BusinessPartner` | [1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IBPPROTADDR'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@VDM.viewType: #COMPOSITE
@EndUserText.label: 'Business Partner Protected Addresses'
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@AccessControl.personalData.blocking: #REQUIRED
@Consumption.dbHints: [ 'USE_HEX_PLAN' ]
define view I_BPProtectedAddress
  as select from P_BPProtectedAddrUsageCount  
  association [1] to I_BusinessPartner as _BusinessPartner on $projection.BusinessPartner = _BusinessPartner.BusinessPartner
{
  key BusinessPartner,
  key AddressID,
  case
    when BPProtectedAddrUsageCount > 0
      then cast('E' as bu_protected)
    when BPProtectedAddrUsageCount = 0
      then cast(' ' as bu_protected)
  end as BPAddressIsProtected,
  
  _BusinessPartner
}
```
