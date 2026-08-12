---
name: I_PROJECTDEMANDMATERIALTP_2
description: "Projectdemandmaterialtp 2"
app_component: PPM-SCL-DMN
software_component: SAPSCORE
release_state: released
atc_state: released
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
  - project
  - component:PPM-SCL-DMN
  - lob:Other
  - bo:Material
  - bo:Project
---
# I_PROJECTDEMANDMATERIALTP_2

**Projectdemandmaterialtp 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandMaterialUUID` | ✓ | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `MaterialPlannedDeliveryDurn` |  | |  |  |  |  |
| `_MaterialText` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_MaterialGroupText` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurchasingInfoRecord` | | ✓ | | | | |
| `_RootTP` | | ✓ | | | | |
| `_MaterialSupply` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                semanticKey           : ['Material'],
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality : #B,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Project Demand for Material – TP'

define view entity I_ProjectDemandMaterialTP_2
  as projection on I_ProjectDemandMaterialTP as DemandMaterial
{
  key ProjectDemandMaterialUUID,
      ProjectDemandUUID,
      Material,
      StorageLocation,
      MaterialGroup,
      Supplier,
      PurchasingInfoRecord,
      PurchaseContract,
      PurchaseContractItem,
      MaterialPlannedDeliveryDurn,

      _MaterialText,
      _MaterialGroup,
      _MaterialGroupText,
      _Supplier,
      _PurchasingInfoRecord,

      _RootTP         : redirected to parent I_ProjectDemandTP_2,
      _MaterialSupply : redirected to composition child I_ProjDemandMaterialSupplyTP_2
}
```
