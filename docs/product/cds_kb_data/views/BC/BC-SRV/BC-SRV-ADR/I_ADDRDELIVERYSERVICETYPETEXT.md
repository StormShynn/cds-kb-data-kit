---
name: I_ADDRDELIVERYSERVICETYPETEXT
description: "Addrdeliveryservicetypetext"
app_component: BC-SRV-ADR
software_component: SAP_BASIS
release_state: released
dev_ext_status: released
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
