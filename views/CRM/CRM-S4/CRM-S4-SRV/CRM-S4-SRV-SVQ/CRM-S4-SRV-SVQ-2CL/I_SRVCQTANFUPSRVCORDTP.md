---
name: I_SRVCQTANFUPSRVCORDTP
description: Srvcqtanfupsrvcordtp
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
# I_SRVCQTANFUPSRVCORDTP

**Srvcqtanfupsrvcordtp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceQuotation` | ✓ | |  |  |
| `ServiceOrder` | ✓ | |  |  |
| `_ServiceQuotationTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Follow-Up Service Order - TP'
@AbapCatalog.viewEnhancementCategory: [#NONE]
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
usageType:{
  serviceQuality: #C,
  sizeCategory: #L,
  dataClass: #TRANSACTIONAL
},
 modelingPattern:        #TRANSACTIONAL_INTERFACE,
 supportedCapabilities: [#TRANSACTIONAL_PROVIDER]  
}

define view entity I_SrvcQtanFUPSrvcOrdTP
  as projection on R_SrvcQtanFUPSrvcOrdTP
{
  key ServiceQuotation,
  key ServiceOrder,
  
      /* Associations */
      _ServiceQuotationTP  : redirected to parent I_ServiceQuotationTP
}
```
