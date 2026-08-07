---
name: I_MAINTENANCEORDERPARTNERTP
description: Maintenance OrderPARTNERTP
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - transactional-processing
  - maintenance-order
  - partner
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
  - bo:MaintenanceOrder
---
# I_MAINTENANCEORDERPARTNERTP

**Maintenance OrderPARTNERTP**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrder` | ✓ | |  |  |  |  |
| `PartnerFunction` | ✓ | |  |  |  |  |
| `MaintenanceOrderPartner` | ✓ | |  |  |  |  |
| `_MaintenanceOrder` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Maintenance Order Partners - TP'
@AccessControl: { authorizationCheck: #MANDATORY, personalData.blocking: #BLOCKED_DATA_EXCLUDED }
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]
@ObjectModel.usageType: { serviceQuality: #C, sizeCategory: #XL, dataClass: #MIXED }
@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_MaintenanceOrderPartnerTP
  as projection on R_MaintenanceOrderPartnerTP
{
  key  MaintenanceOrder,
  key  PartnerFunction,
  key  MaintenanceOrderPartner,

       _MaintenanceOrder : redirected to parent I_MaintenanceOrderTP
}
```
