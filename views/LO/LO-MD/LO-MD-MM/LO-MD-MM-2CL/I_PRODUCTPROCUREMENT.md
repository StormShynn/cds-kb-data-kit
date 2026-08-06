---
name: I_PRODUCTPROCUREMENT
description: Productprocurement
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
# I_PRODUCTPROCUREMENT

**Productprocurement**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Product` | `mara.matnr` |
| `PurchaseOrderQuantityUnit` | `mara.bstme` |
| `VarblPurOrdUnitStatus` | `mara.vabme` |
| `PurchasingAcknProfile` | `mara.ekwsl` |
| `ProcurementRule` | `mara.bwvor` |
| `SourceOfSupplyCategory` | `mara.bwscl` |
| `PurchasingGroup` | `_ProductRetail.PurchasingGroup` |
| `IsActiveEntity` | `cast( 'X' as sdraft_is_active preserving type )` |
| `AuthorizationGroup` | `mara.begru` |
| `_Product` | *Association* |
| `_ProductRetail` | *Association* |
| `_PurchaseOrderQuantityUnit` | *Association* |
| `_PurchaseOrderUnitText` | *Association* |
| `_SourceOfSupplyCategory` | *Association* |
| `_SourceOfSupplyCategoryText` | *Association* |
| `_VarblPurOrdUnitActvStatus` | *Association* |
| `_VarblPurOrdUnitActvStatusText` | *Association* |
| `_ProductDescription` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Product` | `I_Product` | [1..1] |
| `_ProductRetail` | `I_ProductRetail` | [0..1] |
| `_ProdProcExt` | `E_Product` | [0..1] |
| `_PurchaseOrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PurchaseOrderUnitText` | `I_UnitOfMeasureText` | [0..*] |
| `_SourceOfSupplyCategory` | `I_SourceOfSupplyCategory` | [0..1] |
| `_SourceOfSupplyCategoryText` | `I_SourceOfSupplyCategoryT` | [0..*] |
| `_VarblPurOrdUnitActvStatus` | `I_VarblPurOrdUnitActvStatus` | [0..1] |
| `_VarblPurOrdUnitActvStatusText` | `I_VarblPurOrdUnitActvStatusTxt` | [0..*] |
| `_ProductDescription` | `I_ProductDescription_2` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRDPROC'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Product Procurement'

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory : #L
@ObjectModel.usageType.dataClass: #MASTER
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction: {
enabled: true,
delta.changeDataCapture:{
mapping: [{
        viewElement: ['PRODUCT'],
        role: #MAIN,
        table: 'MARA',
        tableElement: ['MATNR']
        },
        {
        viewElement: ['PRODUCT'],
        role: #LEFT_OUTER_TO_ONE_JOIN,
        table: 'MAW1',
        tableElement: ['MATNR']
        }]
}
}
@ObjectModel.representativeKey: 'Product'
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #CDS_MODELING_ASSOCIATION_TARGET,
                                      #ANALYTICAL_DIMENSION,
                                      #EXTRACTION_DATA_SOURCE
]
@ObjectModel.sapObjectNodeType.name:'ProductProcurement'

define view I_Productprocurement
  as select from mara
  //    left outer join maw1 on mara.matnr = maw1.matnr
  association [1..1] to I_Product                      as _Product                       on $projection.Product = _Product.Product
  association [0..1] to I_ProductRetail                as _ProductRetail                 on $projection.Product = _ProductRetail.Product //added for VH "PSTAT Changes
  association [0..1] to E_Product                      as _ProdProcExt                   on $projection.Product = _ProdProcExt.Product
  association [0..1] to I_UnitOfMeasure                as _PurchaseOrderQuantityUnit     on $projection.PurchaseOrderQuantityUnit = _PurchaseOrderQuantityUnit.UnitOfMeasure
  association [0..*] to I_UnitOfMeasureText            as _PurchaseOrderUnitText         on $projection.PurchaseOrderQuantityUnit = _PurchaseOrderUnitText.UnitOfMeasure
  association [0..1] to I_SourceOfSupplyCategory       as _SourceOfSupplyCategory        on $projection.SourceOfSupplyCategory = _SourceOfSupplyCategory.SourceOfSupplyCategory
  association [0..*] to I_SourceOfSupplyCategoryT      as _SourceOfSupplyCategoryText    on $projection.SourceOfSupplyCategory = _SourceOfSupplyCategoryText.SourceOfSupplyCategory
  // The association is present in the I_ProductRetail and is directly added to I_ProductProcurementWD
  //    association [0..1] to I_PurchasingGroup   as _PurchasingGroup           on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup
  association [0..1] to I_VarblPurOrdUnitActvStatus    as _VarblPurOrdUnitActvStatus     on $projection.VarblPurOrdUnitStatus = _VarblPurOrdUnitActvStatus.VarblPurOrdUnitIsActive
  association [0..*] to I_VarblPurOrdUnitActvStatusTxt as _VarblPurOrdUnitActvStatusText on $projection.VarblPurOrdUnitStatus = _VarblPurOrdUnitActvStatusText.VarblPurOrdUnitIsActive
  association [0..*] to I_ProductDescription_2         as _ProductDescription            on  $projection.Product = _ProductDescription.Product
 
{
  key mara.matnr                                      as Product,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association:'_PurchaseOrderQuantityUnit'
      @ObjectModel.text.association: '_PurchaseOrderUnitText'
      mara.bstme                                      as PurchaseOrderQuantityUnit,
      _PurchaseOrderUnitText,
      _PurchaseOrderQuantityUnit,
      @ObjectModel.foreignKey.association:'_VarblPurOrdUnitActvStatus'
      @ObjectModel.text.association: '_VarblPurOrdUnitActvStatusText'
      mara.vabme                                      as VarblPurOrdUnitStatus,
      mara.ekwsl                                      as PurchasingAcknProfile,
      //      mara.mfrnr  as ManufacturerNumber,  Moved to I_ProductWD
      mara.bwvor                                      as ProcurementRule, //pstat changes

      //        Retail Fields
      @ObjectModel.foreignKey.association:'_SourceOfSupplyCategory'
      @ObjectModel.text.association: '_SourceOfSupplyCategoryText'
      mara.bwscl                                      as SourceOfSupplyCategory, // Ref Handling fields  for MARC
      _SourceOfSupplyCategory,
      _SourceOfSupplyCategoryText,
      //********************************************************************************//
      // The association is present in the I_ProductRetail and is directly added to I_ProductProcurementWD
      //            @ObjectModel.foreignKey.association:'_PurchasingGroup'
      _ProductRetail.PurchasingGroup                  as PurchasingGroup, // ref. handling for MARC

      _ProductRetail._PurchasingGroup,
      //********************************************************************************//
      cast( 'X' as sdraft_is_active preserving type ) as IsActiveEntity, // to enbale extensibility in Draft 2.0
      mara.begru                                      as AuthorizationGroup,

      _ProductRetail, //PSTAT Changes,
      _VarblPurOrdUnitActvStatus,
      _VarblPurOrdUnitActvStatusText,
      _Product,
      _ProductDescription



}
```
