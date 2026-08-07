---
name: I_SRVCORDITMFUPSUPLRINVCTP
description: Srvcorditmfupsuplrinvctp
app_component: CRM-S4-SRV-SVO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - component:CRM-S4-SRV-SVO-2CL
  - lob:Other
---
# I_SRVCORDITMFUPSUPLRINVCTP

**Srvcorditmfupsuplrinvctp**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SRV-SVO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `ServiceOrder` | ✓ | |  |  |
| `ServiceOrderItem` | ✓ | |  |  |
| `SupplierInvoice` | ✓ | |  |  |
| `SupplierInvoiceItem` | ✓ | |  |  |
| `FiscalYear` | ✓ | |  |  |
| `_ServiceOrderItem` | | ✓ | | |
| `_ServiceOrderTP` | | ✓ | | |

## Source Code

```abap
@EndUserText.label: 'Item Follow-Up Supplier Invoice - TP'
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
                serviceQuality: #C,
                sizeCategory:   #L}
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

define view entity I_SrvcOrdItmFUPSuplrInvcTP
as projection on R_SrvcOrdItmFUPSuplrInvcTP
{
  key ServiceOrder,
  key ServiceOrderItem,
  key SupplierInvoice,
  key SupplierInvoiceItem,
  key FiscalYear,
  /* Associations */
  _ServiceOrderItem : redirected to parent I_ServiceOrderItemTP,
  _ServiceOrderTP   : redirected to I_ServiceOrderTP
}
```
