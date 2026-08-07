---
name: I_BILLOFOPERATIONSGROUP
description: "Billofoperationsgroup"
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
# I_BILLOFOPERATIONSGROUP

**Billofoperationsgroup**

| Property | Value |
|---|---|
| App Component | `PP-VDM-MD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BillOfOperationsType` | ✓ | |  | `cast(plnty as billofoperationstype preserving type)` |  |  |
| `BillOfOperationsGroup` | ✓ | |  | `cast(plnnr as billofoperationsgroup preserving type)` |  |  |
| `_BillOfOperationsType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_BillOfOperationsType` | `I_BillOfOperationsType` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPBOOGROUP'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #M, dataClass: #MASTER }
@ObjectModel.representativeKey: 'BillOfOperationsGroup'
@ObjectModel.semanticKey: ['BillOfOperationsType', 'BillOfOperationsGroup']
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'Bill of Operations Group'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_BillOfOperationsGroup
  as select distinct from plko

  association [1..1] to I_BillOfOperationsType as _BillOfOperationsType on $projection.BillOfOperationsType = _BillOfOperationsType.BillOfOperationsType

{
      @ObjectModel.foreignKey.association: '_BillOfOperationsType'
  key cast(plnty as billofoperationstype preserving type)  as BillOfOperationsType,
  key cast(plnnr as billofoperationsgroup preserving type) as BillOfOperationsGroup,

      // Associations
      _BillOfOperationsType
};
```
