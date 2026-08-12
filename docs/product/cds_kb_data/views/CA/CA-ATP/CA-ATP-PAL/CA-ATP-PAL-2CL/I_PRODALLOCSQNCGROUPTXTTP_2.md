---
name: I_PRODALLOCSQNCGROUPTXTTP_2
description: "Prodallocsqncgrouptxttp 2"
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_PRODALLOCSQNCGROUPTXTTP_2

**Prodallocsqncgrouptxttp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdAllocSequenceGroupUUID` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ProdAllocSequenceGroupDesc` |  | |  |  |  |  |
| `ProductAllocationSequenceUUID` |  | |  |  |  |  |
| `_ProdAllocationSequenceTP` | | ✓ | | | | |
| `_ProdAllocSqncGroupTP` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.representativeKey: 'ProdAllocSequenceGroupUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.sapObjectNodeType.name: 'ProdAllocSqncGroupTxt'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@EndUserText.label: 'Product Allocation Sequence Group - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL 

define view entity I_ProdAllocSqncGroupTxtTP_2 
	as projection on I_ProdAllocSqncGroupTTP 

{	
	key ProdAllocSequenceGroupUUID,
	@Semantics.language: true
	key Language,	
	@Semantics.text: true
	ProdAllocSequenceGroupDesc,	
	ProductAllocationSequenceUUID,
	_ProdAllocationSequenceTP: redirected to  I_ProdAllocationSequenceTP_2, 
	_ProdAllocSqncGroupTP: redirected to parent I_ProdAllocSqncGroupTP_2

}
```
