---
name: I_PRODALLOCCHARCVALCOMBNTP_2
description: Prodalloccharcvalcombntp 2
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
# I_PRODALLOCCHARCVALCOMBNTP_2

**Prodalloccharcvalcombntp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CharcValueCombinationUUID` | ✓ | |  |  |  |  |
| `ProductAllocationObjectUUID` |  | |  |  |  |  |
| `ProductAllocationObject` |  | |  |  |  |  |
| `ProdAllocCharc01` |  | |  |  |  |  |
| `ProdAllocCharc02` |  | |  |  |  |  |
| `ProdAllocCharc03` |  | |  |  |  |  |
| `ProdAllocCharc04` |  | |  |  |  |  |
| `ProdAllocCharc05` |  | |  |  |  |  |
| `ProdAllocCharc06` |  | |  |  |  |  |
| `ProdAllocCharc07` |  | |  |  |  |  |
| `ProdAllocCharc08` |  | |  |  |  |  |
| `ProdAllocCharc09` |  | |  |  |  |  |
| `ProdAllocCharc10` |  | |  |  |  |  |
| `ProdAllocCharcValueCombnCmnt` |  | |  |  |  |  |
| `ProdAllocCharcConstraintStatus` |  | |  |  |  |  |
| `ProdAllocationActivationStatus` |  | |  |  |  |  |
| `CharcValAuthznGroup` |  | |  |  |  |  |
| `_ProdAllocationObjectTP` | | ✓ | | | | |
| `_ProdAllocObjTimeSeriesTP` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.representativeKey: 'CharcValueCombinationUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@ObjectModel.sapObjectNodeType.name: 'ProdAllocCharcValCombn'

@EndUserText.label: 'Product Allocation Characteristic Value Combination'
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_ProdAllocCharcValCombnTP_2 
	as projection on I_ProdAllocCharcValCombnTP

{	
	key CharcValueCombinationUUID,	
	ProductAllocationObjectUUID,	
	ProductAllocationObject,	
	ProdAllocCharc01,	
	ProdAllocCharc02,	
	ProdAllocCharc03,	
	ProdAllocCharc04,	
	ProdAllocCharc05,	
	ProdAllocCharc06,	
	ProdAllocCharc07,	
	ProdAllocCharc08,	
	ProdAllocCharc09,	
	ProdAllocCharc10,	
	ProdAllocCharcValueCombnCmnt,	
	ProdAllocCharcConstraintStatus,	
	ProdAllocationActivationStatus,	
	CharcValAuthznGroup,
		
	_ProdAllocationObjectTP: redirected to parent I_ProdAllocationObjectTP_2,	
	_ProdAllocObjTimeSeriesTP: redirected to composition child I_ProdAllocObjTimeSeriesTP_2
	
} //exclude blocked CVCs     
 where ProdAllocationActivationStatus <> '03'
```
