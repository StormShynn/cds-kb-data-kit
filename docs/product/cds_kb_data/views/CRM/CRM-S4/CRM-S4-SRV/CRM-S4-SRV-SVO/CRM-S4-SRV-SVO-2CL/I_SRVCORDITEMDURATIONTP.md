---
name: I_SRVCORDITEMDURATIONTP
description: "Srvcorditemdurationtp"
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - item-level
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITEMDURATIONTP

**Srvcorditemdurationtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |  |  |
| `ServiceOrderItem` | ✓ | |  |  |  |  |
| `SrvcDocDurationType` | ✓ | |  |  |  |  |
| `SrvcDocDurationValue` |  | |  |  |  |  |
| `SrvcDocDurationUnit` |  | |  |  |  |  |
| `_ServiceOrderItemTP` | | ✓ | | | | |
| `_ServiceOrderTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Item Duration - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdItemDurationTP
  as projection on R_SrvcOrdItemDurationTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key SrvcDocDurationType,
      SrvcDocDurationValue,
      SrvcDocDurationUnit,
      /* Associations */
      _ServiceOrderItemTP : redirected to parent I_ServiceOrderItemTP,
      _ServiceOrderTP     : redirected to I_ServiceOrderTP
}
```
