---
name: I_PRODUCTCHANGEMASTERTP_2
description: "PRODUCTChange MasterERTP 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - product
  - change-master
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTCHANGEMASTERTP_2

**PRODUCTChange MasterERTP 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  |  |  |  |
| `ChangeNumber` | ✓ | |  |  |  |  |
| `RevisionLevel` |  | |  |  |  |  |
| `_ChangeMaster` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Product Change Master - TP'
@AccessControl.authorizationCheck: #MANDATORY
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #L,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ProductChangeMasterTP_2
  as projection on R_ProductChangeMasterTP as ProductChangeMaster

{
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key ChangeNumber,
      RevisionLevel,

      _ChangeMaster,
      _Product : redirected to parent I_ProductTP_2

}
```
