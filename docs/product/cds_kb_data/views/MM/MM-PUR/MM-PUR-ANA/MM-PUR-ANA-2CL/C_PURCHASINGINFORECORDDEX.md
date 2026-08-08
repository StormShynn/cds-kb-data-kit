---
name: C_PURCHASINGINFORECORDDEX
description: "Purchasinginforecorddex"
app_component: MM-PUR-ANA-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-ANA
  - consumption-view
  - data-extraction
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURCHASINGINFORECORDDEX

**Purchasinginforecorddex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchasingInfoRecord` | ✓ | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `PurchasingInfoRecordDesc` |  | |  |  |  |  |
| `PurgDocOrderQuantityUnit` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  | `cast ( OrderItemQtyToBaseQtyNmrtr as umbsz_ll preserving type)` |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `SupplierMaterialGroup` |  | |  |  |  |  |
| `PriorSupplier` |  | |  |  |  |  |
| `VarblPurOrdUnitIsActive` |  | |  |  |  |  |
| `Manufacturer` |  | |  |  |  |  |
| `IsRegularSupplier` |  | |  |  |  |  |
| `SupplierSubrange` |  | |  |  |  |  |
| `NoDaysReminder1` |  | |  |  |  |  |
| `NoDaysReminder2` |  | |  |  |  |  |
| `NoDaysReminder3` |  | |  |  |  |  |
| `ProductPurchasePointsQty` |  | |  |  |  |  |
| `ProductPurchasePointsQtyUnit` |  | |  |  |  |  |
| `ReturnAgreement` |  | |  |  |  |  |
| `SupplierCertOriginCat` |  | |  |  |  |  |
| `SupplierCertOriginNumber` |  | |  |  |  |  |
| `SupplierCertValidityEndDate` |  | |  |  |  |  |
| `SupplierCertOriginCountry` |  | |  |  |  |  |
| `SupplierCertOriginRegion` |  | |  |  |  |  |
| `SuplrCertOriginClassfctnNumber` |  | |  |  |  |  |
| `SupplierSubrangeSortNumber` |  | |  |  |  |  |
| `_PurgInfoRecdOrgPlntDataApi01` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_PurgDocOrderQuantityUnit` | | ✓ | | | | |
| `_BaseUnit` | | ✓ | | | | |
| `_PriorSupplier` | | ✓ | | | | |
| `_Manufacturer` | | ✓ | | | | |
| `_ProductPurchasePointsQtyUnit` | | ✓ | | | | |
| `_Country` | | ✓ | | | | |
| `_Region` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgInfoRecdOrgPlntDataApi01` | `I_PurgInfoRecdOrgPlntDataApi01` | [1..*] |
| `_Supplier` | `I_Supplier` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_PurgDocOrderQuantityUnit` | `I_UnitOfMeasure` | [0..1] |
| `_BaseUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PriorSupplier` | `I_Supplier` | [0..1] |
| `_Manufacturer` | `I_Supplier` | [0..1] |
| `_ProductPurchasePointsQtyUnit` | `I_UnitOfMeasure` | [1..1] |
| `_Country` | `I_Country` | [0..1] |
| `_Region` | `I_Region` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPURINFORECDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{ authorizationCheck             : #CHECK,
                 personalData.blocking          : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label: 'Data Extraction for Purchasing Info Record'

@ClientHandling.algorithm                       : #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass             : #TRANSACTIONAL,
                usageType.sizeCategory          : #L,
                usageType.serviceQuality        : #D,
                supportedCapabilities           : [ #EXTRACTION_DATA_SOURCE ]
              }
@VDM.viewType                                   : #CONSUMPTION

@Metadata.ignorePropagatedAnnotations           : true

@Analytics: { dataCategory                      : #FACT,
              dataExtraction: {
                enabled                         : true,
                delta.changeDataCapture         : {
                    mapping:[ { table           : 'eina', role: #MAIN,
                                viewElement     : ['PurchasingInfoRecord'],
                                tableElement    : ['infnr']
                              }
                            ]
                }
              }
}
@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecord'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_PurchasingInfoRecordDEX
  as select from I_PurchasingInfoRecordApi01
  association [1..*] to I_PurgInfoRecdOrgPlntDataApi01 as _PurgInfoRecdOrgPlntDataApi01 on $projection.PurchasingInfoRecord = _PurgInfoRecdOrgPlntDataApi01.PurchasingInfoRecord
  
  association [1..1] to I_Supplier                     as _Supplier                     on  $projection.Supplier = _Supplier.Supplier
  
  association [0..1] to I_Product                      as _Product                      on  $projection.Material = _Product.Product
  
  association [0..1] to I_ProductGroup_2               as _ProductGroup                 on  $projection.MaterialGroup = _ProductGroup.ProductGroup
  
  association [0..1] to I_UnitOfMeasure                as _PurgDocOrderQuantityUnit     on  $projection.PurgDocOrderQuantityUnit = _PurgDocOrderQuantityUnit.UnitOfMeasure
  
  association [0..1] to I_UnitOfMeasure                as _BaseUnit                     on  $projection.BaseUnit = _BaseUnit.UnitOfMeasure
  
  association [0..1] to I_Supplier                     as _PriorSupplier                on  $projection.PriorSupplier = _PriorSupplier.Supplier
  
  association [0..1] to I_Supplier                     as _Manufacturer                 on  $projection.Manufacturer = _Manufacturer.Supplier
  
  association [1..1] to I_UnitOfMeasure                as _ProductPurchasePointsQtyUnit on  $projection.ProductPurchasePointsQtyUnit = _ProductPurchasePointsQtyUnit.UnitOfMeasure
  
  association [0..1] to I_Country                      as _Country                      on  $projection.SupplierCertOriginCountry = _Country.Country
  
  association [0..1] to I_Region                       as _Region                       on  $projection.SupplierCertOriginCountry = _Region.Country
                                                                                        and $projection.SupplierCertOriginRegion  = _Region.Region
{
  key PurchasingInfoRecord                                 as PurchasingInfoRecord,
  
      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier                                             as Supplier,
      
      @ObjectModel.foreignKey.association: '_Product'
      Material                                             as Material,
      
      @ObjectModel.foreignKey.association: '_ProductGroup'
      MaterialGroup                                        as MaterialGroup,
      
      @Semantics.systemDate.createdAt: true
      CreationDate                                         as CreationDate,
      
      IsDeleted                                            as IsDeleted,
      
      @Semantics.text: true
      PurchasingInfoRecordDesc                             as PurchasingInfoRecordDesc,
      
      @ObjectModel.foreignKey.association: '_PurgDocOrderQuantityUnit'
      PurgDocOrderQuantityUnit                             as PurgDocOrderQuantityUnit,
      
      @Semantics.conversionRate.numerator: true
      cast ( OrderItemQtyToBaseQtyNmrtr as umbsz_ll preserving type) as OrderItemQtyToBaseQtyNmrtr,
      
      @Semantics.conversionRate.denominator: true
      OrderItemQtyToBaseQtyDnmntr                          as OrderItemQtyToBaseQtyDnmntr,
      
      SupplierMaterialNumber                               as SupplierMaterialNumber,
      SupplierRespSalesPersonName                          as SupplierRespSalesPersonName,
      
      @Semantics.telephone.type: [ #WORK ]
      SupplierPhoneNumber                                  as SupplierPhoneNumber,
      
      @ObjectModel.foreignKey.association: '_BaseUnit'
      BaseUnit                                             as BaseUnit,
      
      SupplierMaterialGroup                                as SupplierMaterialGroup,
      
      @ObjectModel.foreignKey.association: '_PriorSupplier'
      PriorSupplier                                        as PriorSupplier,
      
      @Semantics.booleanIndicator: true
      VarblPurOrdUnitIsActive                              as VarblPurOrdUnitIsActive,
      
      @ObjectModel.foreignKey.association: '_Manufacturer'
      Manufacturer                                         as Manufacturer,
      
      IsRegularSupplier                                    as IsRegularSupplier,
      SupplierSubrange                                     as SupplierSubrange,
      NoDaysReminder1                                      as NoDaysReminder1,
      NoDaysReminder2                                      as NoDaysReminder2,
      NoDaysReminder3                                      as NoDaysReminder3,
      
      @Semantics.quantity.unitOfMeasure: 'ProductPurchasePointsQtyUnit'
      ProductPurchasePointsQty                             as ProductPurchasePointsQty,
      
      @ObjectModel.foreignKey.association: '_ProductPurchasePointsQtyUnit'
      ProductPurchasePointsQtyUnit                         as ProductPurchasePointsQtyUnit,
      
      ReturnAgreement                                      as ReturnAgreement,
      SupplierCertOriginCat                                as SupplierCertOriginCat,
      SupplierCertOriginNumber                             as SupplierCertOriginNumber,
      SupplierCertValidityEndDate                          as SupplierCertValidityEndDate,
      
      @ObjectModel.foreignKey.association: '_Country'
      @Semantics.address.country: true
      SupplierCertOriginCountry                            as SupplierCertOriginCountry,
      
      @ObjectModel.foreignKey.association: '_Region'
      @Semantics.address.region: true
      SupplierCertOriginRegion                             as SupplierCertOriginRegion,
      
      SuplrCertOriginClassfctnNumber                       as SuplrCertOriginClassfctnNumber,
      SupplierSubrangeSortNumber                           as SupplierSubrangeSortNumber,
      _PurgInfoRecdOrgPlntDataApi01,
      _Supplier,
      _Product,
      _ProductGroup,
      _PurgDocOrderQuantityUnit,
      _BaseUnit,
      _PriorSupplier,
      _Manufacturer,
      _ProductPurchasePointsQtyUnit,
      _Country,
      _Region



}
```
