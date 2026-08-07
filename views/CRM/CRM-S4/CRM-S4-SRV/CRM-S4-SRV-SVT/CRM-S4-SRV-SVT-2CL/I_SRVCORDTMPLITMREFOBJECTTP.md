---
name: I_SRVCORDTMPLITMREFOBJECTTP
description: "Srvcordtmplitmrefobjecttp"
app_component: CRM-S4-SRV-SVT-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVT-2CL
  - lob:Other
---
# I_SRVCORDTMPLITMREFOBJECTTP

**Srvcordtmplitmrefobjecttp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceOrderTemplate` | ✓ | |  |  |  |  |
| `ServiceOrderTemplateItem` | ✓ | |  |  |  |  |
| `ServiceRefObjectSequenceNumber` | ✓ | |  |  |  |  |
| `SerialNumber` |  | |  |  |  |  |
| `ServiceReferenceEquipment` |  | |  |  |  |  |
| `ServiceRefFunctionalLocation` |  | |  |  |  |  |
| `ServiceReferenceProduct` |  | |  |  |  |  |
| `SrvcRefObjIsMainObject` |  | |  |  |  |  |
| `_ServiceOrderTemplateItemTP` | | ✓ | | | | |
| `_ServiceOrderTemplateTP` | | ✓ | | | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Template Item Ref Obj - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
  
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdTmplItmRefObjectTP 
as projection on R_SrvcOrdTmplItmRefObjectTP
{
  key ServiceOrderTemplate,
  key ServiceOrderTemplateItem,
  key ServiceRefObjectSequenceNumber,
      SerialNumber,
      ServiceReferenceEquipment,
      ServiceRefFunctionalLocation,
      ServiceReferenceProduct,
      SrvcRefObjIsMainObject,
      /* Associations */
      _ServiceOrderTemplateItemTP : redirected to parent I_ServiceOrderTemplateItemTP,
      _ServiceOrderTemplateTP     : redirected to I_ServiceOrderTemplateTP
}
```
