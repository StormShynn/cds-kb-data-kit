---
name: I_BOOOPERATIONINTERNALID
description: Boooperationinternalid
app_component: PP-VDM-MD-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - PP-VDM-MD
  - interface-view
  - component:PP-VDM-MD-2CL
  - lob:Manufacturing
---
# I_BOOOPERATIONINTERNALID

**Boooperationinternalid**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  | `plnty` |
| `BillOfOperationsGroup` | ✓ | |  | `plnnr` |
| `BOOOperationInternalID` | ✓ | |  | `plnkn` |
| `_BillOfOperationsType` | | ✓ | | |
| `_BillOfOperationsGroup` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |
| `_BillOfOperationsGroup` | `I_BillOfOperationsGroup` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IPPBOOOPINTID'
//@AbapCatalog.compiler.compareFilter: true
//@AbapCatalog.preserveKey:true 
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@ClientHandling.type: #CLIENT_DEPENDENT
@ObjectModel.representativeKey: 'BOOOperationInternalID'
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #L, dataClass: #MASTER }
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Bill of Operations Operation Internal ID'
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities:[#ANALYTICAL_DIMENSION,#CDS_MODELING_ASSOCIATION_TARGET]
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
//define view I_BOOOperationInternalID
define view entity I_BOOOperationInternalID
  as select distinct from plpo

  association [1..1] to I_BillOfOperationsType  as _BillOfOperationsType  on  $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType
  association [1..1] to I_BillOfOperationsGroup as _BillOfOperationsGroup on  $projection.BillOfOperationsType  = _BillOfOperationsGroup.BillOfOperationsType
                                                                          and $projection.BillOfOperationsGroup = _BillOfOperationsGroup.BillOfOperationsGroup

{
      // Key
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key plpo.plnty                                           as BillOfOperationsType,
      @ObjectModel.foreignKey.association: '_BillOfOperationsGroup'
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
  key plpo.plnnr                                           as BillOfOperationsGroup,

  key plpo.plnkn                                           as BOOOperationInternalID,
  
      // Associations
      _BillOfOperationsType,
      _BillOfOperationsGroup
};
```
