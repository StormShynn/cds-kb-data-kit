---
name: I_ADDRDELIVERYSERVICETYPEVH
description: "Addrdeliveryservicetypevh"
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
  - value-help
  - delivery
  - service
  - component:BC-SRV-ADR
  - lob:Basis Components
---
# I_ADDRDELIVERYSERVICETYPEVH

**Addrdeliveryservicetypevh**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ADR` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryServiceTypeCode` | ✓ | |  |  | `CHAR(4)` | Type of Delivery Service |
| `DeliveryServiceTypeName` |  | |  |  | `CHAR(40)` | Delivery Service Text |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Delivery Service Types'
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY]
@Search.searchable: true
@VDM.viewType: #BASIC

define view entity I_AddrDeliveryServiceTypeVH 
  as select from I_AddressDeliveryServiceType {  
    @ObjectModel.text.element: ['DeliveryServiceTypeName']
    @Search.defaultSearchElement: true   
    key DeliveryServiceTypeCode,
    @Search.defaultSearchElement: true
    DeliveryServiceTypeName,
    /* Associations */
      _Text
}
```
