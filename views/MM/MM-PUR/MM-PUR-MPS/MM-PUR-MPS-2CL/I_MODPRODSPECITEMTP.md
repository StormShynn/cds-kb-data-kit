---
name: I_MODPRODSPECITEMTP
description: Modprodspecitemtp
app_component: MM-PUR-MPS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-MPS
  - interface-view
  - transactional-processing
  - item-level
  - component:MM-PUR-MPS-2CL
  - lob:Sourcing & Procurement
---
# I_MODPRODSPECITEMTP

**Modprodspecitemtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-MPS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ModProdSpecItemUUID` | ✓ | |  |  |  |  |
| `ModelProductSpecificationUUID` |  | |  |  |  |  |
| `ModelProductSpecification` |  | |  |  |  |  |
| `ModelProductSpecificationItem` |  | |  |  |  |  |
| `ModProdSpecAlternativeItemID` |  | |  |  |  |  |
| `ModProdSpecFormattedItemID` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ModProdSpecItemParentID` |  | |  |  |  |  |
| `PurchasingIsItemSet` |  | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `ModProdSpecItemDescription` |  | |  |  |  |  |
| `Product` |  | |  |  |  |  |
| `ProductTypeCode` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `OrderQuantity` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `CreationDateTime` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `LastChangedByUser` |  | |  |  |  |  |
| `HierarchyNode` |  | |  |  |  |  |
| `HierarchyParentNode` |  | |  |  |  |  |
| `HierarchyDistanceFromRoot` |  | |  |  |  |  |
| `HierarchyDescendantCount` |  | |  |  |  |  |
| `HierarchyNodeOrdinalNumber` |  | |  |  |  |  |
| `_ModelProductSpecificationTP` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |
| `_UnitValueHelp` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Model Product Specification Item - TP'
@AccessControl.authorizationCheck: #MANDATORY

@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_PROJECTED_ENTITY

@ObjectModel.semanticKey: ['ModelProductSpecification', 'ModelProductSpecificationItem']
@ObjectModel.representativeKey: 'ModProdSpecItemUUID'

@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
}
@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'MAE',
  dataSources: ['_ModProdSpecItemTP'],
  quota: {
    maximumFields: 730,
    maximumBytes: 14592
 }
}
@Metadata.ignorePropagatedAnnotations: true
define view entity I_ModProdSpecItemTP
  as projection on R_ModProdSpecItemTP as _ModProdSpecItemTP
{
  key ModProdSpecItemUUID,
      @ObjectModel.foreignKey.association: '_ModelProductSpecificationTP'
      ModelProductSpecificationUUID,
      ModelProductSpecification,
      ModelProductSpecificationItem,
      ModProdSpecAlternativeItemID,
      ModProdSpecFormattedItemID,
      Plant,
      ModProdSpecItemParentID,
      PurchasingIsItemSet,
      PurchasingDocumentItemCategory,
      @Semantics.text: true
      ModProdSpecItemDescription,
      Product,
      ProductTypeCode,
      MaterialGroup,
      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      OrderQuantity,
      OrderQuantityUnit,
      CreationDateTime,
      CreatedByUser,
      LastChangeDateTime,
      LastChangedByUser,
      HierarchyNode,
      HierarchyParentNode,
      HierarchyDistanceFromRoot,
      HierarchyDescendantCount,
//      HierarchyDrillState,
      HierarchyNodeOrdinalNumber,

      /* Associations */
      _ModelProductSpecificationTP: redirected to parent I_ModelProductSpecificationTP,
      _MaterialGroup,
//      _Parent,
      _Plant,
      _Product,
      _ProductTypeCode,
      _PurgDocumentItemCategory,
      _UnitValueHelp
}
```
