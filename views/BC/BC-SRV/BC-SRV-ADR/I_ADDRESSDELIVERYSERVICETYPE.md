---
name: I_ADDRESSDELIVERYSERVICETYPE
description: Addressdeliveryservicetype
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ADR
  - interface-view
  - delivery
  - service
  - address
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRESSDELIVERYSERVICETYPE

**Addressdeliveryservicetype**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `DeliveryServiceTypeCode` | ✓ | |  | `deli_serv_type` |
| `DeliveryServiceTypeName` |  | |  | `deli_serv_text` |
| `_Text` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AddrDeliveryServiceTypeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Delivery Service Types'
@Analytics: { dataCategory: #DIMENSION, dataExtraction.enabled: true }
@ObjectModel.representativeKey: 'DeliveryServiceTypeCode'
@Analytics.technicalName: 'IADDELIVSRVCTYPE'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE]
@VDM.viewType: #BASIC
@ObjectModel.sapObjectNodeType.name: 'DeliveryServiceTypeCode'
define view entity I_AddressDeliveryServiceType
  as select from addrc_deli_serv
  association [0..*] to I_AddrDeliveryServiceTypeText as _Text on $projection.DeliveryServiceTypeCode = _Text.DeliveryServiceTypeCode {
      @ObjectModel.text.element: ['DeliveryServiceTypeName']
      key deli_serv_type as DeliveryServiceTypeCode,
      deli_serv_text as DeliveryServiceTypeName,
      /* Associations */
      _Text
}
```
