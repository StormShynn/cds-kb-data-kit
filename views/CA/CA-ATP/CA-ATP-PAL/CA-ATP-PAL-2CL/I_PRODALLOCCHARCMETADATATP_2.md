---
name: I_PRODALLOCCHARCMETADATATP_2
description: Prodalloccharcmetadatatp 2
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
# I_PRODALLOCCHARCMETADATATP_2

**Prodalloccharcmetadatatp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `CharacteristicsMetaDataUUID` | ✓ | |  |  |
| `ProductAllocationObjectUUID` |  | |  |  |
| `ProdAllocCharcCtlgPathIntID` |  | |  | `ProdAllocCharcPathDescComIntID` |
| `ProdAllocCharcCtlgPathUUID` |  | |  |  |
| `ProdAllocOrdinalNumberValue` |  | |  |  |
| `_ProdAllocationObjectTP` | | ✓ | | |

## Source Code

```abap
@ObjectModel.representativeKey: 'CharacteristicsMetaDataUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@ObjectModel.sapObjectNodeType.name: 'ProdAllocCharcMetaData'

@EndUserText.label: 'Product Allocation Object Meta Data'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_ProdAllocCharcMetaDataTP_2 
	as projection on I_ProdAllocCharcMetaDataTP
	
{	 
	key CharacteristicsMetaDataUUID,
	ProductAllocationObjectUUID,	
//	@Consumption.hidden: true
  @EndUserText.label: 'Characteristc Internal ID'
	ProdAllocCharcPathDescComIntID as ProdAllocCharcCtlgPathIntID,
	ProdAllocCharcCtlgPathUUID,	
	ProdAllocOrdinalNumberValue,
		
	_ProdAllocationObjectTP: redirected to parent I_ProdAllocationObjectTP_2 //,

  //@Consumption.hidden: true	
	//_ProdAllocCharcText

}
```
