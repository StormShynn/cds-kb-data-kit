---
name: I_PRODALLOCOBJTIMESERIESTP_2
description: Prodallocobjtimeseriestp 2
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - transactional-processing
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_PRODALLOCOBJTIMESERIESTP_2

**Prodallocobjtimeseriestp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProdAllocationTimeSeriesUUID` | `ProdAllocationTimeSeriesUUID` |
| `ProductAllocationObjectUUID` | `ProductAllocationObjectUUID` |
| `CharcValueCombinationUUID` | `CharcValueCombinationUUID` |
| `ProdAllocPerdStartUTCDateTime` | `ProdAllocPerdStartUTCDateTime` |
| `ProdAllocPeriodStartTimeZone` | `ProdAllocPeriodStartTimeZone` |
| `ProdAllocPeriodEndUTCDateTime` | `ProdAllocPeriodEndUTCDateTime` |
| `ProdAllocPeriodEndTimeZone` | `ProdAllocPeriodEndTimeZone` |
| `ProductAllocationQuantity` | `ProductAllocationQuantity` |
| `ProductAllocationQuantityUnit` | `ProductAllocationQuantityUnit` |
| `_ProdAllocationObjectTP` | *Association* |
| `_ProdAllocCharcValCombnTP` | *Association* |

## Source Code

```abap
@ObjectModel.representativeKey: 'ProdAllocationTimeSeriesUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.sapObjectNodeType.name: 'ProdAllocObjTimeSeries'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@EndUserText.label: 'Product Allocation Object Time Series'
@AccessControl.authorizationCheck: #MANDATORY

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_ProdAllocObjTimeSeriesTP_2 
	as projection on I_ProdAllocObjTimeSeriesTP

{	
	key ProdAllocationTimeSeriesUUID,	
	ProductAllocationObjectUUID,	
	CharcValueCombinationUUID,	
	ProdAllocPerdStartUTCDateTime,
	ProdAllocPeriodStartTimeZone,
	ProdAllocPeriodEndUTCDateTime,
	ProdAllocPeriodEndTimeZone,
	@Semantics.quantity.unitOfMeasure: 'ProductAllocationQuantityUnit'	
	ProductAllocationQuantity,
	ProductAllocationQuantityUnit,	
	
	_ProdAllocationObjectTP: redirected to I_ProdAllocationObjectTP_2,	
	_ProdAllocCharcValCombnTP: redirected to parent I_ProdAllocCharcValCombnTP_2
}
```
