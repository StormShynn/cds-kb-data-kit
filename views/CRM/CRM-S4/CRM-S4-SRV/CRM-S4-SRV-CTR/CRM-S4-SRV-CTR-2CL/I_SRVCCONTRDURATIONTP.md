---
name: I_SRVCCONTRDURATIONTP
description: Srvccontrdurationtp
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# I_SRVCCONTRDURATIONTP

**Srvccontrdurationtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContract` | `ServiceContract` |
| key `SrvcDocDurationType` | `SrvcDocDurationType` |
| `SrvcDocDurationValue` | `SrvcDocDurationValue` |
| `SrvcDocDurationUnit` | `SrvcDocDurationUnit` |
| `_DurationText` | *Association* |
| `_ServiceContractTP` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Service Contract Duration - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
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

define view entity I_SrvcContrDurationTP as projection on R_SrvcContrDurationTP {
  key ServiceContract,
  @Consumption.valueHelpDefinition: [ { entity: { name: 'I_SrvcDocDurationType', element: 'SrvcDocDurationType' },
                                        useAsTemplate: true } ]
  @ObjectModel.text.association: '_DurationText'
  key SrvcDocDurationType,
  SrvcDocDurationValue,
  SrvcDocDurationUnit,

  /* Associations */
  _DurationText,
  _ServiceContractTP : redirected to parent I_ServiceContractTP
}
```
