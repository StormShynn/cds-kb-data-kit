---
name: I_PROJDEMANDMATERIALSUPPLYTP_2
description: "Projdemandmaterialsupplytp 2"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-DMN
  - interface-view
  - transactional-processing
  - material
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Material
---
# I_PROJDEMANDMATERIALSUPPLYTP_2

**Projdemandmaterialsupplytp 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjDemandMaterialSupplyUUID` | ✓ | |  |  |  |  |
| `ProjectDemandMaterialUUID` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `ProjectDemandReservation` |  | |  |  |  |  |
| `ProjectDemandReservationItem` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `_Material` | | ✓ | | | | |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck    : #CHECK
@AccessControl.personalData.blocking : #BLOCKED_DATA_EXCLUDED
@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                semanticKey           : [ 'PurchaseRequisition', 'PurchaseRequisitionItem' ],
                representativeKey     : 'ProjDemandMaterialSupplyUUID',
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality : #A,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL  } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Supply Data of Material Demand – TP'

define view entity I_ProjDemandMaterialSupplyTP_2
  as projection on I_ProjDemandMaterialSupplyTP as DemandMaterialSupply
{
  key ProjDemandMaterialSupplyUUID,
      ProjectDemandMaterialUUID,
      PurchaseRequisition,
      PurchaseRequisitionItem,
      ProjectDemandReservation,
      ProjectDemandReservationItem, 
      ProjectDemandUUID,

      _Material : redirected to parent I_ProjectDemandMaterialTP_2,
      _Root     : redirected to I_ProjectDemandTP_2
}
```
