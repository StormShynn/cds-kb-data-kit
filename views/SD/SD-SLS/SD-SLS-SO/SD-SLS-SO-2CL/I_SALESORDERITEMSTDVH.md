---
name: I_SALESORDERITEMSTDVH
description: Sales OrderITEMSTDVH
app_component: SD-SLS-SO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - SD
  - SD-SLS
  - SD-SLS-SO
  - interface-view
  - value-help
  - standard-value-help
  - sales-order
  - item-level
  - component:SD-SLS-SO-2CL
  - lob:Sales & Distribution
  - bo:SalesOrder
---
# I_SALESORDERITEMSTDVH

**Sales OrderITEMSTDVH**

| Property | Value |
|---|---|
| App Component | `SD-SLS-SO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `SalesOrder` | ✓ | |  |  |
| `SalesOrderItem` | ✓ | |  |  |
| `SalesOrderItemText` |  | |  |  |
| `_SalesOrder` | | ✓ | | |

## Source Code

```abap
//GENERATED:005:GFBfhyK17kY1w9JfZmsJU0
@AbapCatalog.sqlViewName: 'ISDSLSORDITMVH'
@AbapCatalog.compiler.compareFilter: true

@VDM.viewType: #COMPOSITE

@ObjectModel: {
    dataCategory: #VALUE_HELP,
    representativeKey: 'SalesOrderItem',
    usageType:{
        dataClass: #TRANSACTIONAL,
        serviceQuality: #B,
        sizeCategory: #XL
    },
    supportedCapabilities: [ #SEARCHABLE_ENTITY, #VALUE_HELP_PROVIDER ]
}

@AccessControl.authorizationCheck: #CHECK
@AccessControl.personalData.blocking: #('TRANSACTIONAL_DATA')

@ClientHandling.algorithm: #SESSION_VARIABLE

@Metadata.ignorePropagatedAnnotations: true

@Search.searchable: true

@EndUserText.label: 'Sales Order Item'
define view I_SalesOrderItemStdVH as select from I_SalesOrderItem {
  @Search.defaultSearchElement: true 
  @Search.ranking: #HIGH
  @ObjectModel.foreignKey.association: '_SalesOrder'
  key SalesOrder,
  @ObjectModel.text.element: ['SalesOrderItemText']
  key SalesOrderItem,

  @Search:{
    defaultSearchElement: true,
    fuzzinessThreshold: 0.8,
    ranking: #MEDIUM
  }
  SalesOrderItemText,

  @Consumption.hidden: true
  _SalesOrder
}
```
