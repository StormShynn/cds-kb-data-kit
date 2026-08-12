---
name: I_PHYSINVTRYBOOKSERIALNMBRTP
description: "Physinvtrybookserialnmbrtp"
app_component: MM-IM-PI-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-PI
  - interface-view
  - transactional-processing
  - component:MM-IM-PI-2CL
  - lob:Sourcing & Procurement
---
# I_PHYSINVTRYBOOKSERIALNMBRTP

**Physinvtrybookserialnmbrtp**

| Property | Value |
|---|---|
| App Component | `MM-IM-PI-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SerialNumber` | ✓ | |  |  |  |  |
| `FiscalYear` | ✓ | |  |  |  |  |
| `PhysicalInventoryDocument` | ✓ | |  |  |  |  |
| `PhysicalInventoryDocumentItem` | ✓ | |  |  |  |  |
| `Equipment` |  | |  |  |  |  |
| `_PhysicalInventoryDocumentItem` | | ✓ | | | | |
| `_PhysInvtryDoc` | | ✓ | | | | |

## Source Code

```abap
@AbapCatalog.viewEnhancementCategory: [#NONE]
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Book Serial Number - TP'
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
   modelingPattern: #TRANSACTIONAL_INTERFACE,
   supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
   usageType: {
      sizeCategory: #XL,
      serviceQuality: #B,
      dataClass: #TRANSACTIONAL
   }
}
@VDM: {
  lifecycle.contract.type: #PUBLIC_LOCAL_API,
  viewType: #TRANSACTIONAL
}
define view entity I_PhysInvtryBookSerialNmbrTP 
  as projection on R_PhysInvtryBookSerialNmbrTP {
  
  key SerialNumber,
  key FiscalYear,
  key PhysicalInventoryDocument,
  key PhysicalInventoryDocumentItem,
      //SerialNumberPhysicalInvtryType,
      Equipment,

      // Association
      _PhysicalInventoryDocumentItem : redirected to parent I_PhysInvtryDocumentItemTP,
      _PhysInvtryDoc : redirected to I_PhysicalInventoryDocumentTP
}
```
