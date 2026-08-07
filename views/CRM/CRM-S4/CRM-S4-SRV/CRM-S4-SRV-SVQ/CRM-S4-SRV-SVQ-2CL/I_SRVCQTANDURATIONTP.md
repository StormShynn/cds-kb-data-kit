---
name: I_SRVCQTANDURATIONTP
description: "Srvcqtandurationtp"
app_component: CRM-S4-SRV-SVQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVQ-2CL
  - lob:Other
---
# I_SRVCQTANDURATIONTP

**Srvcqtandurationtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ServiceQuotation` | ✓ | |  |  |  |  |
| `SrvcDocDurationType` | ✓ | |  |  |  |  |
| `SrvcDocDurationValue` |  | |  |  |  |  |
| `SrvcDocDurationUnit` |  | |  |  |  |  |
| `_ServiceQuotationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Service Quotation Duration - TP'
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: {
  usageType: {dataClass:      #TRANSACTIONAL,
                serviceQuality: #B,
                sizeCategory:   #L},
  modelingPattern:        #TRANSACTIONAL_INTERFACE,
  supportedCapabilities: [#TRANSACTIONAL_PROVIDER]                  
}

define view entity I_SrvcQtanDurationTP
  as projection on R_SrvcQtanDurationTP
{
  key ServiceQuotation,
  key SrvcDocDurationType,
      SrvcDocDurationValue,
      SrvcDocDurationUnit,

      /* Associations */
      _ServiceQuotationTP : redirected to parent I_ServiceQuotationTP
}
```
