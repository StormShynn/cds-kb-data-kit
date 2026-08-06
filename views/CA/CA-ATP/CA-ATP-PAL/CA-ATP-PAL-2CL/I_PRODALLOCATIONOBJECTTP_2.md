---
name: I_PRODALLOCATIONOBJECTTP_2
description: Prodallocationobjecttp 2
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
# I_PRODALLOCATIONOBJECTTP_2

**Prodallocationobjecttp 2**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProductAllocationObjectUUID` | `ProductAllocationObjectUUID` |
| `ProductAllocationObject` | `ProductAllocationObject` |
| `ProductAllocationPeriodType` | `ProductAllocationPeriodType` |
| `ProdAllocationPeriodTimeZone` | `ProdAllocationPeriodTimeZone` |
| `FactoryCalendar` | `FactoryCalendar` |
| `ProdAllocCheckDateTimeType` | `ProdAllocCheckDateTimeType` |
| `ProductAllocationQuantityUnit` | `ProductAllocationQuantityUnit` |
| `CollectiveAllocationType` | `CollectiveAllocationType` |
| `IsSalesOrderAllocObj` | `IsSalesOrderAllocObj` |
| `IsStockTransferOrderAllocObj` | `IsStockTransferOrderAllocObj` |
| `ProdAllocationLifecycleStatus` | `ProdAllocationLifecycleStatus` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `_ProdAllocCharcValCombnTP` | *Association* |
| `_ProdAllocCharcMetaDataTP` | *Association* |
| `_ProdAllocationObjectTTP` | *Association* |

## Source Code

```abap
@ObjectModel.representativeKey: 'ProductAllocationObjectUUID'
@ObjectModel.semanticKey: ['ProductAllocationObject']

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.sapObjectNodeType.name: 'ProductAllocationObject'

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE
@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C

@EndUserText.label: 'Product Allocation Object'
@AccessControl.authorizationCheck: #NOT_REQUIRED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

/*
@AbapCatalog.extensibility: {
  extensible: true,
  dataSources: ['Document'],
  elementSuffix: 'PAO',
  quota: {
    maximumFields: 204,
    maximumBytes: 2040
  }
}
*/

define root view entity I_ProdAllocationObjectTP_2
  provider contract transactional_interface 
	as projection on I_ProdAllocationObjectTP as Document

{	
	key ProductAllocationObjectUUID,
	ProductAllocationObject,	
	ProductAllocationPeriodType,
	ProdAllocationPeriodTimeZone,
	FactoryCalendar,	
	ProdAllocCheckDateTimeType,
	ProductAllocationQuantityUnit,	
	CollectiveAllocationType,
	IsSalesOrderAllocObj,
	IsStockTransferOrderAllocObj,	
	ProdAllocationLifecycleStatus,	
	CreationDateTime,	
	CreatedByUser,	
	LastChangeDateTime,	
	LastChangedByUser,
	_ProdAllocCharcValCombnTP: redirected to composition child I_ProdAllocCharcValCombnTP_2,	
	_ProdAllocCharcMetaDataTP: redirected to composition child I_ProdAllocCharcMetaDataTP_2,	
	_ProdAllocationObjectTTP: redirected to composition child I_ProdAllocationObjectTxtTP_2

} 
where ProdAllocationLifecycleStatus = '02'
```
