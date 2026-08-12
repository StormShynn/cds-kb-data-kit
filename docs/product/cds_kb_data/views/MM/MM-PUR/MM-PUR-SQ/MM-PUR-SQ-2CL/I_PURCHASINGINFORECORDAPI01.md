---
name: I_PURCHASINGINFORECORDAPI01
description: "Purchasinginforecordapi 01"
app_component: MM-PUR-SQ-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
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
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
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
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |  |  |
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
