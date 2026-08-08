---
name: I_PRODALLOCATIONOBJECTTXTTP_2
description: "Prodallocationobjecttxttp 2"
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
# I_PRODALLOCATIONOBJECTTXTTP_2

**Prodallocationobjecttxttp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductAllocationObjectUUID` | ✓ | |  |  |  |  |
| `Language` | ✓ | |  |  |  |  |
| `ProdAllocObjectDescription` |  | |  |  |  |  |
| `_ProdAllocationObjectTP` | | ✓ | | | | |

## Source Code

```abap
@ObjectModel.representativeKey: 'ProductAllocationObjectUUID'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.sapObjectNodeType.name: 'ProductAllocationObjectText'

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@EndUserText.label: 'Product Allocation Object - Text'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

define view entity I_ProdAllocationObjectTxtTP_2 
	as projection on I_ProdAllocationObjectTTP

{	
	key ProductAllocationObjectUUID,
	@Semantics.language: true
	key Language,	
	@Semantics.text: true
	ProdAllocObjectDescription,	
	_ProdAllocationObjectTP: redirected to parent I_ProdAllocationObjectTP_2

}
```
