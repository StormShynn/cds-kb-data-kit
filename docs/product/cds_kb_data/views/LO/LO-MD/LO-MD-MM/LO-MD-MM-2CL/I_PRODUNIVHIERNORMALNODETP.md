---
name: I_PRODUNIVHIERNORMALNODETP
description: "Produnivhiernormalnodetp"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
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
# I_PRODUNIVHIERNORMALNODETP

**Produnivhiernormalnodetp**

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
| `ProdHierarchyValidityStartDate` |  | |  |  |  |  |
| `ParentNode` |  | |  |  |  |  |
| `NodeType` |  | |  |  |  |  |
| `ProdUnivHierLastChangeDateTime` |  | |  |  |  |  |
| `_ProdUnivHierProdByHierNode` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Product Hierarchy Normal Node - TP'
@VDM: {
  viewType: #TRANSACTIONAL,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}
@ObjectModel: {
    usageType.serviceQuality: #A,
    usageType.sizeCategory : #XL,
    usageType.dataClass: #MASTER,
    supportedCapabilities: [#TRANSACTIONAL_PROVIDER],
    modelingPattern: #TRANSACTIONAL_INTERFACE
    }
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ProductUniversalHierarchy'

define root view entity I_ProdUnivHierNormalNodeTP  
provider contract transactional_interface
  as projection on R_ProdUnivHierNormalNodeTP
{
  key ProdUnivHierarchy,
  key HierarchyNode,
  key ProdHierarchyValidityEndDate,
  ProdHierarchyValidityStartDate,
  ParentNode,
  NodeType,
  ProdUnivHierLastChangeDateTime,
  /* Associations */
  _ProdUnivHierProdByHierNode: redirected to composition child I_ProdUnivHierProdsByNodeTP
}
```
