---
name: I_SRVCQTANITMFUPSRVCORDTP
description: "Srvcqtanitmfupsrvcordtp"
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
# I_SRVCQTANITMFUPSRVCORDTP

**Srvcqtanitmfupsrvcordtp**

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
| `ServiceQuotationItem` | ✓ | |  |  |  |  |
| `ServiceOrder` | ✓ | |  |  |  |  |
| `ServiceOrderItem` | ✓ | |  |  |  |  |
| `_ServiceQuotationItemTP` | | ✓ | | | | |
| `_ServiceQuotationTP` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Service Order - TP'
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
   usageType: {
     dataClass:      #TRANSACTIONAL,
     serviceQuality: #C,
     sizeCategory:   #L
   },
    modelingPattern:        #TRANSACTIONAL_INTERFACE,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER]  
}
define view entity I_SrvcQtanItmFUPSrvcOrdTP
  as projection on R_SrvcQtanItmFUPSrvcOrdTP
{
  key ServiceQuotation,
  key ServiceQuotationItem,
  key ServiceOrder,
  key ServiceOrderItem,
  
      /* Associations */
      _ServiceQuotationItemTP : redirected to parent I_ServiceQuotationItemTP,
      _ServiceQuotationTP     : redirected to I_ServiceQuotationTP
}
```
