---
name: I_PRODUCTPLANTQTMANAGEMENT
description: Productplantqtmanagement
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
  - product
  - plant
  - component:LO-MD-MM-2CL
  - lob:Logistics General
  - bo:Plant
---
# I_PRODUCTPLANTQTMANAGEMENT

**Productplantqtmanagement**

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
| `MaximumStoragePeriod` |  | |  |  |
| `QualityMgmtCtrlKey` |  | |  |  |
| `MatlQualityAuthorizationGroup` |  | |  |  |
| `HasPostToInspectionStock` |  | |  | `PlantQualityMgmt. HasPostToInspectionStock` |
| `IsActiveEntity` |  | |  | `cast( 'X' as sdraft_is_active preserving type )` |
| `InspLotDocumentationIsRequired` |  | |  |  |
| `SuplrQualityManagementSystem` |  | |  |  |
| `RecrrgInspIntervalTimeInDays` |  | |  |  |
| `ProductQualityCertificateType` |  | |  |  |
| `ProductPlantHasInspectionSetup` |  | |  |  |
| `_Product` | | ✓ | | |
| `_QualityMgmtCtrlKey` | | ✓ | | |
| `_Plant` | | ✓ | | |
| `_ProductDescription` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_QualityMgmtCtrlKey` | `I_QualityMgmtCtrlKey` | [0..1] |
| `_ProdPlantQtMgmtExt` | `E_Productplant` | [0..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_QualityCertificateType` | `I_QualityCertificateType` | [1..1] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDPLANTQM',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Plant QM'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #XL
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
       delta.changeDataCapture.automatic: true
    }
}
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #EXTRACTION_DATA_SOURCE
]
@Metadata.allowExtensions:true
@ObjectModel.representativeKey: 'Product'
@ObjectModel.sapObjectNodeType.name:'ProductPlantQualityManagement'
define view I_Productplantqtmanagement
  as select from P_ProductPlantBasic as PlantQualityMgmt
  association [1..1] to I_Product                as _Product                on  $projection.Product = _Product.Product
  association [0..1] to I_QualityMgmtCtrlKey     as _QualityMgmtCtrlKey     on  $projection.QualityMgmtCtrlKey = _QualityMgmtCtrlKey.QualityMgmtCtrlKey
  
  association [0..1] to E_Productplant           as _ProdPlantQtMgmtExt     on  $projection.Product = _ProdPlantQtMgmtExt.Product
                                                                            and $projection.Plant   = _ProdPlantQtMgmtExt.Plant
  association [1..1] to I_Plant                  as _Plant                  on  $projection.Plant = _Plant.Plant
  
  association [1..1] to I_QualityCertificateType as _QualityCertificateType on $projection.ProductQualityCertificateType = _QualityCertificateType.QualityCertificateType
  association [0..*] to I_ProductDescription_2   as _ProductDescription     on  $projection.Product = _ProductDescription.Product
{
  key PlantQualityMgmt.Product,
      @ObjectModel.foreignKey.association: '_Plant'
  key PlantQualityMgmt.Plant,
      PlantQualityMgmt.MaximumStoragePeriod,
      @ObjectModel.foreignKey.association:'_QualityMgmtCtrlKey'
      PlantQualityMgmt.QualityMgmtCtrlKey,
      _QualityMgmtCtrlKey,
      PlantQualityMgmt.MatlQualityAuthorizationGroup,
      PlantQualityMgmt. HasPostToInspectionStock,
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0

      // New fields from MDG model, as part of unified API development
      PlantQualityMgmt.InspLotDocumentationIsRequired,
      //PlantQualityMgmt.qmata                                        as MatlQualityAuthorizationGroup,
      PlantQualityMgmt.SuplrQualityManagementSystem,
      PlantQualityMgmt.RecrrgInspIntervalTimeInDays,
      PlantQualityMgmt.ProductQualityCertificateType,
      PlantQualityMgmt.ProductPlantHasInspectionSetup,

      _Product,
      _Plant,
      _ProductDescription
}
```
