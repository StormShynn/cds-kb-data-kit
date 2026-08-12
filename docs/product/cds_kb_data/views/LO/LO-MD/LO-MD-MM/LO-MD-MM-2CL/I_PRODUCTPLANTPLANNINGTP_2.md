---
name: I_PRODUCTPLANTPLANNINGTP_2
description: "Productplantplanningtp 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTPLANNINGTP_2

**Productplantplanningtp 2**

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
| `Plant` | ✓ | |  |  |  |  |
| `PlanningMaterial` |  | |  |  |  |  |
| `PlanningPlant` |  | |  |  |  |  |
| `ProdPlntPlngMatlConversionFctr` |  | |  |  |  |  |
| `_ProductPlant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Plant Planning - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #M,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true
@Feature: 'SW:CMD_PM_PLANT_PLANNING_RAP'
define view entity I_ProductPlantPlanningTP_2
  as projection on R_ProductPlantPlanningTP as ProductPlantPlanning
{

  key Product,
  key Plant,
      PlanningMaterial,
      PlanningPlant,
      ProdPlntPlngMatlConversionFctr,
      /* Associations */
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _Product      : redirected to I_ProductTP_2

}
```
