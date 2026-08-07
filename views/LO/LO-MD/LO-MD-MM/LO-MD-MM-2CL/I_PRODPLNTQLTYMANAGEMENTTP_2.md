---
name: I_PRODPLNTQLTYMANAGEMENTTP_2
description: Prodplntqltymanagementtp 2
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
# I_PRODPLNTQLTYMANAGEMENTTP_2

**Prodplntqltymanagementtp 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Product` | ✓ | |  |  |
| `Plant` | ✓ | |  |  |
| `ProdQltyManagementControlKey` |  | |  |  |
| `HasPostToInspectionStock` |  | |  |  |
| `InspLotDocumentationIsRequired` |  | |  |  |
| `QualityMgmtSystemForSupplier` |  | |  |  |
| `RecrrgInspIntervalTimeInDays` |  | |  |  |
| `ProductQualityCertificateType` |  | |  |  |
| `ProdQualityAuthorizationGroup` |  | |  |  |
| `_Product` | | ✓ | | |
| `_ProductPlant` | | ✓ | | |
| `_ProductDescription` | | ✓ | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant Quality Management - TP'
@Metadata.ignorePropagatedAnnotations: true
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
define view entity I_ProdPlntQltyManagementTP_2
  as projection on R_ProdPlantQualityManagementTP as ProductPlantQualityManagement
{
      @ObjectModel.text.association: '_ProductDescription'
      @Consumption.valueHelpDefinition:[{ entity : { name: 'I_ProductStdVH', element : 'Product'} , useAsTemplate: true }]
  key Product,
  key Plant,
      ProdQltyManagementControlKey,
      @Semantics.booleanIndicator: true
      HasPostToInspectionStock,
      @Semantics.booleanIndicator: true
      InspLotDocumentationIsRequired,
      QualityMgmtSystemForSupplier,
      RecrrgInspIntervalTimeInDays,
      ProductQualityCertificateType,
      ProdQualityAuthorizationGroup,

      /* Associations */
      _Product      : redirected to I_ProductTP_2,
      _ProductPlant : redirected to parent I_ProductPlantTP_2,
      _ProductDescription
}
```
