---
name: I_PURCHASINGINFORECORDTP
description: "Purchasinginforecordtp"
app_component: MM-PUR-VM-REC-2CL
software_component: SAPSCORE
release_state: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-PUR
  - MM-PUR-VM
  - interface-view
  - transactional-processing
  - component:MM-PUR-VM-REC-2CL
  - lob:Sourcing & Procurement
---
# I_PURCHASINGINFORECORDTP

**Purchasinginforecordtp**

| Property | Value |
|---|---|
| App Component | `MM-PUR-VM-REC-2CL` |
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
| `PurgInfoRecNonStockItmSortTerm` |  | |  |  |  |  |
| `PurgDocOrderQuantityUnit` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyNmrtr` |  | |  |  |  |  |
| `OrderItemQtyToBaseQtyDnmntr` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `SupplierRespSalesPersonName` |  | |  |  |  |  |
| `SupplierPhoneNumber` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `SupplierMaterialGroup` |  | |  |  |  |  |
| `PriorSupplier` |  | |  |  |  |  |
| `AvailabilityStartDate` |  | |  |  |  |  |
| `AvailabilityEndDate` |  | |  |  |  |  |
| `VarblPurOrdUnitIsActive` |  | |  |  |  |  |
| `Manufacturer` |  | |  |  |  |  |
| `IsRegularSupplier` |  | |  |  |  |  |
| `SupplierSubrange` |  | |  |  |  |  |
| `NoDaysReminder1` |  | |  |  |  |  |
| `NoDaysReminder2` |  | |  |  |  |  |
| `NoDaysReminder3` |  | |  |  |  |  |
| `ProductPurchasePointsQty` |  | |  |  |  |  |
| `ProductPurchasePointsQtyUnit` |  | |  |  |  |  |
| `SupplierSubrangeSortNumber` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `IsEndOfPurposeBlocked` |  | |  |  |  |  |
| `_BaseUnit` | | ✓ | | | | |
| `_Material` | | ✓ | | | | |
| `_MaterialGroup` | | ✓ | | | | |
| `_PurgDocOrderQuantityUnit` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_PurgInfoRecdOrgPlntData` | | ✓ | | | | |

## Source Code

```abap
@EndUserText.label: 'Purchasing Information Record - TP'
@AccessControl.authorizationCheck: #CHECK
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #TRANSACTIONAL

@ObjectModel.supportedCapabilities: [#TRANSACTIONAL_PROVIDER]

@ObjectModel.modelingPattern: #TRANSACTIONAL_INTERFACE

@ObjectModel.semanticKey: ['PurchasingInfoRecord']

@ObjectModel.usageType.dataClass: #TRANSACTIONAL
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #L

@ObjectModel.sapObjectNodeType.name: 'PurchasingInfoRecord'
@AccessControl.personalData.blocking: #BLOCKED_DATA_EXCLUDED
@Metadata.ignorePropagatedAnnotations: true
define root view entity I_PurchasingInfoRecordTP  
provider contract transactional_interface
as projection on R_PurchasingInfoRecordTP as _PurchasingInfoRecordTP
 {
 key PurchasingInfoRecord,
 Supplier,
 Material,
 MaterialGroup,
 CreationDate,
 IsDeleted,
 PurchasingInfoRecordDesc,
 PurgInfoRecNonStockItmSortTerm, //Introducing Sort Term field in 2508CE
 PurgDocOrderQuantityUnit,
 OrderItemQtyToBaseQtyNmrtr,
 OrderItemQtyToBaseQtyDnmntr,
 SupplierMaterialNumber,
 SupplierRespSalesPersonName,
 SupplierPhoneNumber,
 BaseUnit,
 SupplierMaterialGroup,
 PriorSupplier,
 AvailabilityStartDate,
 AvailabilityEndDate,
 VarblPurOrdUnitIsActive,  // replace with VarblPurOrdUnitActvtnStatus
 Manufacturer,
 IsRegularSupplier,
 SupplierSubrange,
 NoDaysReminder1,
 NoDaysReminder2,
 NoDaysReminder3,
 @Semantics.quantity.unitOfMeasure: 'ProductPurchasePointsQtyUnit'
 ProductPurchasePointsQty,
 ProductPurchasePointsQtyUnit,
 SupplierSubrangeSortNumber,
 @Semantics.systemDateTime.lastChangedAt: true
 LastChangeDateTime,
 @Semantics.booleanIndicator 
 IsEndOfPurposeBlocked,
 
 //    Composition Entities
//     _PurgInfoRecdOrgPlntData, 
 /* Associations */
 _BaseUnit,
 _Material,
 _MaterialGroup,
 _PurgDocOrderQuantityUnit,
  _Supplier,
  _PurgInfoRecdOrgPlntData : redirected to composition child I_PurgInfoRecdOrgPlntDataTP
}
```
