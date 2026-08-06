---
name: I_PURCHASINGINFORECORDAPI01
description: Purchasinginforecordapi 01
app_component: MM-PUR-SQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-SQ
  - interface-view
  - component:MM-PUR-SQ-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASINGINFORECORDAPI01

**Purchasinginforecordapi 01**

| Property | Value |
|---|---|
| App Component | `MM-PUR-SQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `PurchasingInfoRecord` | `I_PurchasingInfoRecord.PurchasingInfoRecord` |
| `Supplier` | `I_PurchasingInfoRecord.Supplier` |
| `Material` | `I_PurchasingInfoRecord.Material` |
| `MaterialGroup` | `I_PurchasingInfoRecord.MaterialGroup` |
| `CreationDate` | `I_PurchasingInfoRecord.CreationDate` |
| `IsDeleted` | `I_PurchasingInfoRecord.IsDeleted` |
| `PurchasingInfoRecordDesc` | `I_PurchasingInfoRecord.PurchasingInfoRecordDesc` |
| `PurgDocOrderQuantityUnit` | `I_PurchasingInfoRecord.PurgDocOrderQuantityUnit` |
| `OrderItemQtyToBaseQtyNmrtr` | `I_PurchasingInfoRecord.OrderItemQtyToBaseQtyNmrtr` |
| `OrderItemQtyToBaseQtyDnmntr` | `I_PurchasingInfoRecord.OrderItemQtyToBaseQtyDnmntr` |
| `SupplierMaterialNumber` | `I_PurchasingInfoRecord.SupplierMaterialNumber` |
| `SupplierRespSalesPersonName` | `I_PurchasingInfoRecord.SupplierRespSalesPersonName` |
| `SupplierPhoneNumber` | `I_PurchasingInfoRecord.SupplierPhoneNumber` |
| `BaseUnit` | `I_PurchasingInfoRecord.BaseUnit` |
| `SupplierMaterialGroup` | `I_PurchasingInfoRecord.SupplierMaterialGroup` |
| `PriorSupplier` | `I_PurchasingInfoRecord.PriorSupplier` |
| `VarblPurOrdUnitIsActive` | `I_PurchasingInfoRecord.VarblPurOrdUnitIsActive` |
| `Manufacturer` | `I_PurchasingInfoRecord.Manufacturer` |
| `IsRegularSupplier` | `I_PurchasingInfoRecord.IsRegularSupplier` |
| `SupplierSubrange` | `I_PurchasingInfoRecord.SupplierSubrange` |
| `NoDaysReminder1` | `I_PurchasingInfoRecord.NoDaysReminder1` |
| `NoDaysReminder2` | `I_PurchasingInfoRecord.NoDaysReminder2` |
| `NoDaysReminder3` | `I_PurchasingInfoRecord.NoDaysReminder3` |
| `ProductPurchasePointsQty` | `I_PurchasingInfoRecord.ProductPurchasePointsQty` |
| `ProductPurchasePointsQtyUnit` | `I_PurchasingInfoRecord.ProductPurchasePointsQtyUnit` |
| `ReturnAgreement` | `I_PurchasingInfoRecord.ReturnAgreement` |
| `SupplierCertOriginCat` | `I_PurchasingInfoRecord.SupplierCertOriginCat` |
| `SupplierCertOriginNumber` | `I_PurchasingInfoRecord.SupplierCertOriginNumber` |
| `SupplierCertValidityEndDate` | `I_PurchasingInfoRecord.SupplierCertValidityEndDate` |
| `SupplierCertOriginCountry` | `I_PurchasingInfoRecord.SupplierCertOriginCountry` |
| `SupplierCertOriginRegion` | `I_PurchasingInfoRecord.SupplierCertOriginRegion` |
| `SuplrCertOriginClassfctnNumber` | `I_PurchasingInfoRecord.SuplrCertOriginClassfctnNumber` |
| `SupplierSubrangeSortNumber` | `I_PurchasingInfoRecord.SupplierSubrangeSortNumber` |
| `_PurgInfoRecdOrgPlntDataApi01` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurgInfoRecdOrgPlntDataApi01` | `I_PurgInfoRecdOrgPlntDataApi01` | [1..*] |
| `_Extension` | `E_PurchasingInforecord` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPURGINFORECD'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Purchasing Info Record'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.dataClass: #MASTER
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@Analytics: { dataCategory: #DIMENSION }
@ObjectModel.representativeKey: 'PurchasingInfoRecord'
@Metadata.allowExtensions:true
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET, #ANALYTICAL_DIMENSION ]

define view I_PurchasingInfoRecordApi01
  as select from I_PurchasingInfoRecord
  association [1..*] to I_PurgInfoRecdOrgPlntDataApi01 as _PurgInfoRecdOrgPlntDataApi01 on $projection.PurchasingInfoRecord = _PurgInfoRecdOrgPlntDataApi01.PurchasingInfoRecord
  association        to E_PurchasingInforecord         as _Extension                    on $projection.PurchasingInfoRecord = _Extension.PurchasingInfoRecord

{
  key I_PurchasingInfoRecord.PurchasingInfoRecord,
      I_PurchasingInfoRecord.Supplier,
      I_PurchasingInfoRecord.Material,
      I_PurchasingInfoRecord.MaterialGroup,
      I_PurchasingInfoRecord.CreationDate,
      I_PurchasingInfoRecord.IsDeleted,
      I_PurchasingInfoRecord.PurchasingInfoRecordDesc,
      I_PurchasingInfoRecord.PurgDocOrderQuantityUnit,
      I_PurchasingInfoRecord.OrderItemQtyToBaseQtyNmrtr,
      I_PurchasingInfoRecord.OrderItemQtyToBaseQtyDnmntr,
      I_PurchasingInfoRecord.SupplierMaterialNumber,
      I_PurchasingInfoRecord.SupplierRespSalesPersonName,
      I_PurchasingInfoRecord.SupplierPhoneNumber,
      I_PurchasingInfoRecord.BaseUnit,
      I_PurchasingInfoRecord.SupplierMaterialGroup,
      I_PurchasingInfoRecord.PriorSupplier,
      I_PurchasingInfoRecord.VarblPurOrdUnitIsActive,
      I_PurchasingInfoRecord.Manufacturer,
      I_PurchasingInfoRecord.IsRegularSupplier,
      I_PurchasingInfoRecord.SupplierSubrange,
      I_PurchasingInfoRecord.NoDaysReminder1,
      I_PurchasingInfoRecord.NoDaysReminder2,
      I_PurchasingInfoRecord.NoDaysReminder3,
      @Semantics.quantity.unitOfMeasure: 'ProductPurchasePointsQtyUnit'
      I_PurchasingInfoRecord.ProductPurchasePointsQty,
      I_PurchasingInfoRecord.ProductPurchasePointsQtyUnit,
      I_PurchasingInfoRecord.ReturnAgreement,
      I_PurchasingInfoRecord.SupplierCertOriginCat,
      I_PurchasingInfoRecord.SupplierCertOriginNumber,
      I_PurchasingInfoRecord.SupplierCertValidityEndDate,
      I_PurchasingInfoRecord.SupplierCertOriginCountry,
      I_PurchasingInfoRecord.SupplierCertOriginRegion,
      I_PurchasingInfoRecord.SuplrCertOriginClassfctnNumber,
      I_PurchasingInfoRecord.SupplierSubrangeSortNumber,
      _PurgInfoRecdOrgPlntDataApi01
}
```
