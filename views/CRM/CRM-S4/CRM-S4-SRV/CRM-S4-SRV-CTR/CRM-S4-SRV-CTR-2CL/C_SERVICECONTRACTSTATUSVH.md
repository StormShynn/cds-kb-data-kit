---
name: C_SERVICECONTRACTSTATUSVH
description: Servicecontractstatusvh
app_component: CRM-S4-SRV-CTR-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - consumption-view
  - value-help
  - service
  - contract
  - status
  - component:CRM-S4-SRV-CTR-2CL
  - lob:Other
---
# C_SERVICECONTRACTSTATUSVH

**Servicecontractstatusvh**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-CTR-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ServiceContractStatus` | `cast( ServiceDocumentStatus as crms4_stat_lifecycle )` |
| `ServiceContractStatusName` | `ServiceDocumentStatusName` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@VDM.viewType: #CONSUMPTION

@ObjectModel: {
  dataCategory: #VALUE_HELP,
  representativeKey: 'ServiceContractStatus',
  usageType: {
    dataClass:      #META,
    serviceQuality: #B,
    sizeCategory:   #S
  },
  resultSet: {
    sizeCategory: #XS
  },
  supportedCapabilities: [ #VALUE_HELP_PROVIDER ]
}
@EndUserText.label: 'Life Cycle Status of Service Contract'
@Metadata.ignorePropagatedAnnotations: true

define view entity C_ServiceContractStatusVH 
  as select from I_ServiceDocumentStatusText 

{
      
      @UI.textArrangement: #TEXT_ONLY
      @ObjectModel.text.element: [ 'ServiceContractStatusName' ]  
  key cast( ServiceDocumentStatus as crms4_stat_lifecycle ) as ServiceContractStatus,
      @UI.hidden: true
      @Semantics.text: true
      ServiceDocumentStatusName                             as ServiceContractStatusName
}
where Language = $session.system_language
```
