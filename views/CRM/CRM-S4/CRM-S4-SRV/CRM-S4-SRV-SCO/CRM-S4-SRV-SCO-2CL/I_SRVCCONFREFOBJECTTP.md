---
name: I_SRVCCONFREFOBJECTTP
description: Srvcconfrefobjecttp
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
  - component:CRM-S4-SRV-SCO-2CL
  - lob:Other
---
# I_SRVCCONFREFOBJECTTP

**Srvcconfrefobjecttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SCO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceConfirmation` | ✓ | |  |  |  |  |
| `ServiceRefObjectSequenceNumber` | ✓ | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `ServiceReferenceEquipment` |  | |  |  |  |  |
| `ServiceRefFunctionalLocation` |  | |  |  |  |  |
| `ServiceReferenceProduct` |  | |  |  |  |  |
| `SrvcRefObjIsMainObject` |  | |  |  |  |  |
| `_ServiceConfirmationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Confirmation Ref Object - TP'
@AccessControl.authorizationCheck: #CHECK

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL
@ObjectModel: {
   
   usageType: { dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY

@Metadata.ignorePropagatedAnnotations: true
define view entity I_SrvcConfRefObjectTP as projection on R_SrvcConfRefObjectTP 
{
 
  key  ServiceConfirmation,
  key  ServiceRefObjectSequenceNumber,
       SerialNumber,
       ServiceReferenceEquipment,
       ServiceRefFunctionalLocation,
       ServiceReferenceProduct,
       SrvcRefObjIsMainObject,

      //Associations
      _ServiceConfirmationTP : redirected to parent I_ServiceConfirmationTP
 
}
```
