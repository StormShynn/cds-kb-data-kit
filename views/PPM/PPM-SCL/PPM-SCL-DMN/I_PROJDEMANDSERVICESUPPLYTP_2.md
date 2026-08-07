---
name: I_PROJDEMANDSERVICESUPPLYTP_2
description: Projdemandservicesupplytp 2
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
  - service
  - component:PPM-SCL-DMN
  - lob:Other
---
# I_PROJDEMANDSERVICESUPPLYTP_2

**Projdemandservicesupplytp 2**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-DMN` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProjectDemandServiceSupplyUUID` | ✓ | |  |  |  |  |
| `ProjectDemandServiceUUID` |  | |  |  |  |  |
| `ProjectDemandUUID` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `_Service` | | ✓ | | | | |
| `_Root` | | ✓ | | | | |

## Source Code

```abap
@VDM.viewType: #TRANSACTIONAL
@VDM.lifecycle.contract.type:  #PUBLIC_LOCAL_API
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@ObjectModel: { modelingPattern       : #TRANSACTIONAL_INTERFACE,
                semanticKey           : ['PurchaseRequisition', 'PurchaseRequisitionItem'],
                representativeKey     : 'ProjectDemandServiceSupplyUUID',
                supportedCapabilities : [#TRANSACTIONAL_PROVIDER],
                usageType             : { serviceQuality : #A,
                                          dataClass      : #TRANSACTIONAL,
                                          sizeCategory   : #XL } }
@Metadata.ignorePropagatedAnnotations: true
@EndUserText.label: 'Supply Data of Service Demand – TP'

define view entity I_ProjDemandServiceSupplyTP_2
  as projection on I_ProjectDemandServiceSupplyTP as ServiceSupply
{
  key ProjectDemandServiceSupplyUUID,
      ProjectDemandServiceUUID,
      ProjectDemandUUID,
      PurchaseRequisition,
      PurchaseRequisitionItem,

      _Service : redirected to parent I_ProjectDemandServiceTP_2,
      _Root    : redirected to I_ProjectDemandTP_2
}
```
