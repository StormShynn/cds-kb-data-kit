---
name: I_SRVCCONFITEMREFOBJECTTP
description: Srvcconfitemrefobjecttp
app_component: CRM-S4-SRV-SCO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - item-level
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFITEMREFOBJECTTP

**Srvcconfitemrefobjecttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceConfirmation` | `ServiceConfirmation` |
| key `ServiceConfirmationItem` | `ServiceConfirmationItem` |
| key `ServiceRefObjectSequenceNumber` | `ServiceRefObjectSequenceNumber` |
| `SerialNumber` | `SerialNumber` |
| `ServiceReferenceEquipment` | `ServiceReferenceEquipment` |
| `ServiceRefFunctionalLocation` | `ServiceRefFunctionalLocation` |
| `ServiceReferenceProduct` | `ServiceReferenceProduct` |
| `SrvcRefObjIsMainObject` | `SrvcRefObjIsMainObject` |
| `_ServiceConfirmationItemTP` | *Association* |
| `_SrvcConfTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Itm Ref Object - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
   
   usageType: { dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcConfItemRefObjectTP as projection on R_SrvcConfItemRefObjectTP 
{
      
  key ServiceConfirmation,
  key ServiceConfirmationItem,
  key ServiceRefObjectSequenceNumber,
      SerialNumber,
      ServiceReferenceEquipment,
      ServiceRefFunctionalLocation,
      ServiceReferenceProduct,
      SrvcRefObjIsMainObject,

      //Associations
      _ServiceConfirmationItemTP : redirected to parent I_ServiceConfirmationItemTP,
      _SrvcConfTP : redirected to I_ServiceConfirmationTP 
}
```
