---
name: I_PRODUCTQM
description: "Productqm"
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
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTQM

**Productqm**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Product` | ✓ | |  | `cast (mara.matnr as productnumber preserving type )` |  |  |
| `QltyMgmtInProcmtIsActive` |  | |  | `qmpur` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `CatalogProfile` |  | |  | `rbnrm` |  |  |
| `_Product` | | ✓ | | | | |
| `_ProductDescription` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProductExt` | `E_Product` | [0..1] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog: {
  sqlViewName: 'IPRDQM',
  compiler.compareFilter: true,
  preserveKey: true
  }
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product QM active core entity'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true
@Analytics:{
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
@AccessControl.personalData.blocking: #NOT_REQUIRED
@ObjectModel.sapObjectNodeType.name:'ProductQualityManagement'
define view I_Productqm
  as select from mara
  association [1..1] to I_Product as _Product    on $projection.Product = _Product.Product
  association [0..1] to E_Product as _ProductExt on mara.matnr = _ProductExt.Product
  association [0..*] to I_ProductDescription_2        as _ProductDescription            on  $projection.Product = _ProductDescription.Product
{
  key cast (mara.matnr as productnumber preserving type ) as Product,
      mara.qmpur                                          as QltyMgmtInProcmtIsActive,
      mara.begru                                          as AuthorizationGroup,
      // new fields for unified api
      @ObjectModel.sapObjectNodeTypeReference:'MaintenanceCatalogProfile'      
      mara.rbnrm                                          as CatalogProfile,
      _Product,
      _ProductDescription
}
```
