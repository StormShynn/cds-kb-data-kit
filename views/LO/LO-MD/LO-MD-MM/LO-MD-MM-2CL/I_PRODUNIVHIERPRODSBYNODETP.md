---
name: I_PRODUNIVHIERPRODSBYNODETP
description: "Produnivhierprodsbynodetp"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - transactional-processing
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUNIVHIERPRODSBYNODETP

**Produnivhierprodsbynodetp**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProdUnivHierarchy` | ✓ | |  |  |  |  |
| `HierarchyNode` | ✓ | |  |  |  |  |
| `ProdHierarchyValidityEndDate` | ✓ | |  |  |  |  |
| `Product` | ✓ | |  |  |  |  |
| `ProdHierarchyValidityStartDate` |  | |  |  |  |  |
| `ParentNode` |  | |  |  |  |  |
| `HierarchyNodeSequence` |  | |  |  |  |  |
| `NodeType` |  | |  |  |  |  |
| `Product_Text` |  | |  |  |  |  |
| `_ProdUnivHierNormalNode` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Hierarchy Products By Node - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #C,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MIXED,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
}
@Metadata.ignorePropagatedAnnotations: true

define view entity I_ProdUnivHierProdsByNodeTP 
  as projection on R_ProdUnivHierProdsByNodeTP
{
  key ProdUnivHierarchy,
  key HierarchyNode,
  key ProdHierarchyValidityEndDate,
  @ObjectModel.text.association: '_Product._ProductDescription_2'
  @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  ProdHierarchyValidityStartDate,
  ParentNode,
  HierarchyNodeSequence,
  NodeType,
  Product_Text,
  /* Associations */
  _ProdUnivHierNormalNode: redirected to parent I_ProdUnivHierNormalNodeTP,
  @Consumption: { hidden: true }
  _Product
}
```
