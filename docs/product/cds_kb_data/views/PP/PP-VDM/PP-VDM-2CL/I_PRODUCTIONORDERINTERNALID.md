---
name: I_PRODUCTIONORDERINTERNALID
description: "Production OrderINTERNALID"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - product
  - production-order
  - component:PP-VDM-2CL
  - lob:Manufacturing
  - bo:ProductionOrder
---
# I_PRODUCTIONORDERINTERNALID

**Production OrderINTERNALID**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductionOrderInternalID` | ✓ | |  | `OrderInternalBillOfOperations` |  |  |
| `ProductionOrder` |  | |  | `cast(OrderID as vdm_manufacturingorder preserving type)` |  |  |
| `ProductionOrderType` |  | |  | `cast(OrderType as vdm_prodnordertype preserving type)` |  |  |
| `_ProductionOrder` | | ✓ | | | | |
| `_ProductionOrderType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductionOrder` | `I_ProductionOrder` | [1..1] |
| `_ProductionOrderType` | `I_ProductionOrderType` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPRODNORDINTID'
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #CDS_MODELING_DATA_SOURCE, #SQL_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ProductionOrderInternalID'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #TRANSACTIONAL}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Production Order by Internal ID'
// Basic view with AUFPL (internal ID) as key

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ]  } */
define view entity I_ProductionOrderInternalID
  as select from   I_LogisticsOrder
  
  association [1..1] to I_ProductionOrder     as _ProductionOrder     on $projection.ProductionOrder = _ProductionOrder.ProductionOrder
  association [1..1] to I_ProductionOrderType as _ProductionOrderType on $projection.ProductionOrderType = _ProductionOrderType.ProductionOrderType
{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.9}
  key OrderInternalBillOfOperations                           as ProductionOrderInternalID,

      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderStdVH', element: 'ProductionOrder' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrder'
      cast(OrderID as vdm_manufacturingorder preserving type) as ProductionOrder,
      @Consumption.valueHelpDefinition: [ { entity: { name: 'I_ProductionOrderTypeStdVH', element: 'ProductionOrderType' } } ]
      @ObjectModel.foreignKey.association: '_ProductionOrderType'
      cast(OrderType as vdm_prodnordertype preserving type)   as ProductionOrderType,

      // Associations
      _ProductionOrder,
      _ProductionOrderType
}
  where
    OrderCategory = '10' and 
    OrderInternalBillOfOperations <> '0000000000';
```
