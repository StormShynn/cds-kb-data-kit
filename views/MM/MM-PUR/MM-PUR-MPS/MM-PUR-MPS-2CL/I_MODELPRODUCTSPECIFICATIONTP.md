---
name: I_MODELPRODUCTSPECIFICATIONTP
description: Modelproductspecificationtp
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
  - product
  - component:MM-PUR-MPS-2CL
  - lob:Sourcing & Procurement
---
# I_MODELPRODUCTSPECIFICATIONTP

**Modelproductspecificationtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-MPS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ModelProductSpecificationUUID` | `ModelProductSpecificationUUID` |
| `ModelProductSpecification` | `ModelProductSpecification` |
| `ModelProductSpecificationName` | `ModelProductSpecificationName` |
| `ModProdSpecGroupingCode` | `ModProdSpecGroupingCode` |
| `ModProdSpecSearchTermText` | `ModProdSpecSearchTermText` |
| `ModProdSpecActvtnStatusCode` | `ModProdSpecActvtnStatusCode` |
| `Language` | `Language` |
| `IsDeleted` | `IsDeleted` |
| `CreationDateTime` | `CreationDateTime` |
| `CreatedByUser` | `CreatedByUser` |
| `LastChangeDateTime` | `LastChangeDateTime` |
| `LastChangedByUser` | `LastChangedByUser` |
| `_ModProdSpecItemTP` | *Association* |
| `_ChangedByUser` | *Association* |
| `_CreatedByUser` | *Association* |
| `_ModProdSpecGroupingCode` | *Association* |
| `_ModProdSpecStatusText` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Model Product Specification Header - TP'
@AccessControl: {
  authorizationCheck:    #MANDATORY,
  privilegedAssociations: [ '_CreatedByUser', '_ChangedByUser' ] }
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['ModelProductSpecificationUUID']
@ObjectModel.representativeKey: 'ModelProductSpecificationUUID'

@ObjectModel.usageType:{
    serviceQuality: #A,
    sizeCategory: #M,
    dataClass: #MASTER
}

@AbapCatalog.extensibility: {
  extensible: true,
  elementSuffix: 'MEA',
  dataSources: ['_ModelProductSpecificationTP'],
  quota: {
    maximumFields: 730,
    maximumBytes: 14592
 }
}

@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'ModelProductSpecification'

define root view entity I_ModelProductSpecificationTP
  provider contract transactional_interface
  as projection on R_ModelProductSpecificationTP as _ModelProductSpecificationTP
{
  key ModelProductSpecificationUUID,
      ModelProductSpecification,
      ModelProductSpecificationName,
      ModProdSpecGroupingCode,
      ModProdSpecSearchTermText,
      ModProdSpecActvtnStatusCode,
      Language,
      @Semantics.booleanIndicator:true
      IsDeleted,
      CreationDateTime,
      CreatedByUser,
      LastChangeDateTime,
      LastChangedByUser,

      /* Associations */
      _ModProdSpecItemTP: redirected to composition child I_ModProdSpecItemTP,
      _ChangedByUser,
      _CreatedByUser,
      _ModProdSpecGroupingCode,
      _ModProdSpecStatusText
}
```
