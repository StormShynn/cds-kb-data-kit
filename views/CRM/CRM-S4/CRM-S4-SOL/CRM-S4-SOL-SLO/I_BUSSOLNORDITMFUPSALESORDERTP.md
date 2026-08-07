---
name: I_BUSSOLNORDITMFUPSALESORDERTP
description: BUSSOLNORDITMFUPSales OrderTP
app_component: CRM-S4-SOL-SLO
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CRM
  - interface-view
  - transactional-processing
  - sales-order
  - component:CRM-S4-SOL-SLO
  - lob:Other
  - bo:SalesOrder
---
# I_BUSSOLNORDITMFUPSALESORDERTP

**BUSSOLNORDITMFUPSales OrderTP**

| Property | Value |
|---|---|
| App Component | `CRM-S4-SOL-SLO` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BusinessSolutionOrder` | ✓ | |  |  |
| `BusinessSolutionOrderItem` | ✓ | |  |  |
| `SalesOrder` | ✓ | |  |  |
| `SalesOrderItem` | ✓ | |  |  |
| `_BusinessSolutionOrderItemTP` | | ✓ | | |
| `_BusinessSolutionOrderTP` | | ✓ | | |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #CHECK,
  personalData.blocking: #('TRANSACTIONAL_DATA')
}

@ObjectModel: {
  usageType:{
    dataClass:      #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory:   #L
  }
}

@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@EndUserText.label: 'Business Solution Order Item Follow up Sales Order - TP'

define view entity I_BusSolnOrdItmFUPSalesOrderTP
  as projection on R_BusSolnOrdItmFUPSalesOrderTP
{
  key BusinessSolutionOrder,
  key BusinessSolutionOrderItem,
  key SalesOrder,
  key SalesOrderItem,

      // Associations
      _BusinessSolutionOrderItemTP : redirected to parent I_BusinessSolutionOrderItemTP,
      _BusinessSolutionOrderTP     : redirected to I_BusinessSolutionOrderTP
}
```
