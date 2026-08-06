---
name: I_SRVCORDTMPLDURATIONTP
description: Srvcordtmpldurationtp
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
# I_SRVCORDTMPLDURATIONTP

**Srvcordtmpldurationtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVT-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceOrderTemplate` | `ServiceOrderTemplate` |
| key `SrvcDocDurationType` | `SrvcDocDurationType` |
| `SrvcDocDurationValue` | `SrvcDocDurationValue` |
| `SrvcDocDurationUnit` | `SrvcDocDurationUnit` |
| `_ServiceOrderTemplateTP` | *Association* |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@EndUserText.label: 'Service Order Template Duration - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
//   representativeKey: 'ServiceOrder',
   usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdTmplDurationTP as projection on R_SrvcOrdTmplDurationTP {
  key ServiceOrderTemplate,
  key SrvcDocDurationType,
  SrvcDocDurationValue,
  SrvcDocDurationUnit,
  /* Associations */
  _ServiceOrderTemplateTP : redirected to parent I_ServiceOrderTemplateTP
}
```
