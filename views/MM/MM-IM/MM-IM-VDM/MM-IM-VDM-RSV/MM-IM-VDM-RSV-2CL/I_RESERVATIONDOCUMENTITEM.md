---
name: I_RESERVATIONDOCUMENTITEM
description: Reservationdocumentitem
app_component: MM-IM-VDM-RSV-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - MM
  - MM-IM
  - MM-IM-VDM
  - interface-view
  - document
  - item-level
  - component:MM-IM-VDM-RSV-2CL
  - lob:Sourcing & Procurement
---
# I_RESERVATIONDOCUMENTITEM

**Reservationdocumentitem**

| Property | Value |
|---|---|
| App Component | `MM-IM-VDM-RSV-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Reservation` | `_ReservationItem.Reservation` |
| key `ReservationItem` | `_ReservationItem.ReservationItem` |
| key `RecordType` | `_ReservationItem.RecordType` |
| `Plant` | `_ReservationItem.Plant` |
| `StorageLocation` | `_ReservationItem.StorageLocation` |
| `Product` | `_ReservationItem.Material` |
| `Batch` | `_ReservationItem.Batch` |
| `RealProductBatch` | `cast( case when ( _ProductPlant.ValuationCategory <> '' and _ProductPlant.IsBatchManagementRequired = '' ) then ( '' ) else ( _BatchPlant.Batch ) end as charg_d )` |
| `ValuationType` | `cast( case when _ProductPlant.ValuationCategory <> '' and _ProductPlant.IsBatchManagementRequired = '' then _ReservationItem.Batch when _ProductPlant.ValuationCategory <> '' and _ProductPlant.IsBatchManagementRequired = 'X' then _BatchPlant.InventoryValuationType else '' end as bwtar_d preserving type )` |
| `InventorySpecialStockType` | `_ReservationItem.InventorySpecialStockType` |
| `SpecialStockIdfgWBSElement` | `_ReservationItem.SpecialStockIdfgWBSElement` |
| `GoodsMovementType` | `_ReservationItem.GoodsMovementType` |
| `RequirementType` | `_ReservationItem.RequirementType` |
| `ReservationItemCreationCode` | `_ReservationItem.ReservationItemCreationCode` |
| `MatlCompRequirementDate` | `_ReservationItem.MatlCompRequirementDate` |
| `ManufacturingOrderOperation` | `_ReservationItem.ManufacturingOrderOperation` |
| `GoodsMovementIsAllowed` | `_ReservationItem.GoodsMovementIsAllowed` |
| `DebitCreditCode` | `_ReservationItem.DebitCreditCode` |
| `BaseUnit` | `_ReservationItem.BaseUnit` |
| `GLAccount` | `_ReservationItem.GLAccount` |
| `ResvnAccountIsEnteredManually` | `_ReservationItem.ResvnAccountIsEnteredManually` |
| `EntryUnit` | `_ReservationItem.EntryUnit` |
| `QuantityIsFixed` | `_ReservationItem.QuantityIsFixed` |
| `CompanyCodeCurrency` | `_ReservationItem.CompanyCodeCurrency` |
| `IssuingOrReceivingPlant` | `_ReservationItem.IssuingOrReceivingPlant` |
| `IssuingOrReceivingStorageLoc` | `_ReservationItem.IssuingOrReceivingStorageLoc` |
| `PurchasingDocument` | `_ReservationItem.PurchasingDocument` |
| `PurchasingDocumentItem` | `_ReservationItem.PurchasingDocumentItem` |
| `ResvnItmRequiredQtyInBaseUnit` | `_ReservationItem.ResvnItmRequiredQtyInBaseUnit` |
| `ConfdQtyForATPInBaseUoM` | `_ReservationItem.ConfdQtyForATPInBaseUoM` |
| `ReservationItemIsFinallyIssued` | `_ReservationItem.ReservationItemIsFinallyIssued` |
| `ReservationItmIsMarkedForDeltn` | `_ReservationItem.ReservationItmIsMarkedForDeltn` |
| `ResvnItmRequiredQtyInEntryUnit` | `_ReservationItem.ResvnItmRequiredQtyInEntryUnit` |
| `ResvnItmWithdrawnQtyInBaseUnit` | `_ReservationItem.ResvnItmWithdrawnQtyInBaseUnit` |
| `ResvnItmWithdrawnAmtInCCCrcy` | `_ReservationItem.ResvnItmWithdrawnAmtInCCCrcy` |
| `Supplier` | `_ReservationItem.Supplier` |
| `MaterialGroup` | `_ReservationItem.MaterialGroup` |
| `MaterialCompIsProcuredDirectly` | `_ReservationItem.MaterialCompIsProcuredDirectly` |
| `GoodsRecipientName` | `_ReservationItem.GoodsRecipientName` |
| `UnloadingPointName` | `_ReservationItem.UnloadingPointName` |
| `ReservationItemText` | `_ReservationItem.ReservationItemText` |
| `RecipientLocationCode` | `_ReservationItem.RecipientLocationCode` |
| `MatlCompIsMarkedForBackflush` | `_ReservationItem.MatlCompIsMarkedForBackflush` |
| `ServiceObjectType` | `_ReservationItem.ServiceObjectType` |
| `ServiceDocument` | `_ReservationItem.ServiceDocument` |
| `ServiceDocumentItem` | `_ReservationItem.ServiceDocumentItem` |
| `ResvnItmSrvcDocTypeAsAcctAsgt` | `_ReservationItem.ResvnItmSrvcDocTypeAsAcctAsgt` |
| `ResvnItmSrvcDocAsAcctAsgt` | `_ReservationItem.ResvnItmSrvcDocAsAcctAsgt` |
| `ResvnItmSrvcDocItmAsAcctAsgt` | `_ReservationItem.ResvnItmSrvcDocItmAsAcctAsgt` |
| `AccountAssignmentCategory` | `_ReservationItem.AccountAssignmentCategory` |
| `ConsumptionPosting` | `_ReservationItem.ConsumptionPosting` |
| `InventorySpecialStockValnType` | `_ReservationItem.InventorySpecialStockValnType` |
| `PurchaseRequisition` | `_ReservationItem.PurchaseRequisition` |
| `PurchaseRequisitionItem` | `_ReservationItem.PurchaseRequisitionItem` |
| `_ReservationDocumentHeader` | *Association* |
| `_ReservationDocRecordType` | *Association* |
| `_Product` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ReservationDocumentHeader` | `I_ReservationDocumentHeader` | [1..1] |
| `_ReservationDocRecordType` | `I_ReservationDocRecordType` | [0..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ProductPlant` | `P_ProductPlantBasic` | [1..1] |
| `_BatchPlant` | `I_BatchPlant` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Reservation Document Item'
@AccessControl: {
                  authorizationCheck: #CHECK,
                  personalData.blocking: #BLOCKED_DATA_EXCLUDED
                }
@ObjectModel: {
                usageType: {
                             sizeCategory: #L,
                             serviceQuality: #B,
                             dataClass:#TRANSACTIONAL
                           },
                representativeKey: 'ReservationItem',
                semanticKey: ['Reservation', 'ReservationItem', 'RecordType'],
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE]
}
@VDM: {
        lifecycle.contract.type: #PUBLIC_LOCAL_API, 
        viewType: #BASIC
      }
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IRESVNDOCITM'
@Metadata: {
             ignorePropagatedAnnotations:true,
             allowExtensions: true
           }

define view entity I_ReservationDocumentItem 

as select from I_ReservationItem as _ReservationItem
inner join I_ReservationDocumentHeader as _rkpf on _ReservationItem.Reservation = _rkpf.Reservation

association [1..1] to I_ReservationDocumentHeader         as _ReservationDocumentHeader             on  $projection.Reservation = _ReservationDocumentHeader.Reservation
association [0..1] to I_ReservationDocRecordType          as _ReservationDocRecordType              on  $projection.RecordType  = _ReservationDocRecordType.RecordType
association [1..1] to I_Product                           as _Product                               on  $projection.Product     = _Product.Product
association [1..1] to P_ProductPlantBasic                 as _ProductPlant                          on  $projection.Product     = _ProductPlant.Product
                                                                                                   and  $projection.Plant       = _ProductPlant.Plant
association [0..1] to I_BatchPlant                        as _BatchPlant                           on   $projection.Product     = _BatchPlant.Material
                                                                                                   and  $projection.Plant       = _BatchPlant.Plant
                                                                                                   and  $projection.Batch       = _BatchPlant.Batch                                                                                                 
--released PO I-views cannot be assiated because not yet marked as dimension
--association [0..1] to I_PurchaseOrderAPI01                as _PurchaseOrder                 on  $projection.PurchaseOrder = _PurchaseOrder.PurchaseOrder
--association [0..1] to I_PurchaseOrderItemAPI01            as _PurchaseOrderItem             on  $projection.PurchaseOrder     = _PurchaseOrderItem.PurchaseOrder
--                                                                                            and $projection.PurchaseOrderItem = _PurchaseOrderItem.PurchaseOrderItem
{
  @ObjectModel.foreignKey.association: '_ReservationDocumentHeader'
  key  _ReservationItem.Reservation,
  key  _ReservationItem.ReservationItem,
  @ObjectModel.foreignKey.association: '_ReservationDocRecordType'
  key  _ReservationItem.RecordType,

    @ObjectModel.foreignKey.association: '_Plant'
    _ReservationItem.Plant,
    
    @ObjectModel.foreignKey.association: '_StorageLocation'
    _ReservationItem.StorageLocation,
    
    @ObjectModel.foreignKey.association: '_Product'
    _ReservationItem.Material as Product,

    @ObjectModel.foreignKey.association: null
    _ReservationItem.Batch,
    
    cast(
        case when ( _ProductPlant.ValuationCategory <> '' and _ProductPlant.IsBatchManagementRequired = '' )
        then ( '' )
        else ( _BatchPlant.Batch ) end
      as charg_d )                   as RealProductBatch,
    
    cast( case 
    //Split valuated but not batch managed 
    when  _ProductPlant.ValuationCategory <> '' and _ProductPlant.IsBatchManagementRequired = '' 
    then  _ReservationItem.Batch
    
    //Split valuated and batch managed 
    when _ProductPlant.ValuationCategory <> '' and _ProductPlant.IsBatchManagementRequired = 'X' 
    then _BatchPlant.InventoryValuationType
    
    else   ''
    end as bwtar_d preserving type ) as ValuationType,    
    
    @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
    _ReservationItem.InventorySpecialStockType,
    
    _ReservationItem.SpecialStockIdfgWBSElement,
    
    @ObjectModel.foreignKey.association: '_GoodsMovementType'
    _ReservationItem.GoodsMovementType,

    _ReservationItem.RequirementType,
    
    _ReservationItem.ReservationItemCreationCode,
    
    _ReservationItem.MatlCompRequirementDate,
    
    _ReservationItem.ManufacturingOrderOperation,
    
    _ReservationItem.GoodsMovementIsAllowed,
    
    @ObjectModel.foreignKey.association: '_DebitCreditCode'
    _ReservationItem.DebitCreditCode,
    
    @ObjectModel.foreignKey.association: '_BaseUnit'
    _ReservationItem.BaseUnit,
    
    _ReservationItem.GLAccount,

    @Semantics.booleanIndicator: true
    _ReservationItem.ResvnAccountIsEnteredManually,
    
    @ObjectModel.foreignKey.association: '_EntryUnit'
    _ReservationItem.EntryUnit,
    
    _ReservationItem.QuantityIsFixed,
    
    @ObjectModel.foreignKey.association: '_Currency'
    _ReservationItem.CompanyCodeCurrency,
    
    @ObjectModel.foreignKey.association: '_IssuingOrReceivingPlant'
    _ReservationItem.IssuingOrReceivingPlant,
    
    @ObjectModel.foreignKey.association: '_IssuingOrReceivingStorageLoc'
    _ReservationItem.IssuingOrReceivingStorageLoc,

   @ObjectModel.foreignKey.association: '_PurchasingDocument'
    _ReservationItem.PurchasingDocument,   
    
    @ObjectModel.foreignKey.association: '_PurchasingDocumentItem'
    _ReservationItem.PurchasingDocumentItem,
    
    @Semantics.quantity.unitOfMeasure: 'BaseUnit'
    _ReservationItem.ResvnItmRequiredQtyInBaseUnit,
    
    @Semantics.quantity.unitOfMeasure: 'BaseUnit'
    _ReservationItem.ConfdQtyForATPInBaseUoM,
    
    _ReservationItem.ReservationItemIsFinallyIssued,
    
    _ReservationItem.ReservationItmIsMarkedForDeltn,

    @Semantics.quantity.unitOfMeasure: 'EntryUnit'
    _ReservationItem.ResvnItmRequiredQtyInEntryUnit,

    @Semantics.quantity.unitOfMeasure: 'BaseUnit'
    _ReservationItem.ResvnItmWithdrawnQtyInBaseUnit,
    
    @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
    _ReservationItem.ResvnItmWithdrawnAmtInCCCrcy,
    
    @ObjectModel.foreignKey.association: '_Supplier'
    _ReservationItem.Supplier,
    
    _ReservationItem.MaterialGroup, 
    @Semantics.booleanIndicator: true
    _ReservationItem.MaterialCompIsProcuredDirectly,
    
    
    _ReservationItem.GoodsRecipientName,
    _ReservationItem.UnloadingPointName,
    _ReservationItem.ReservationItemText,
    @ObjectModel.foreignKey.association: '_RecipientLocationCode'    
    _ReservationItem.RecipientLocationCode,
    
    _ReservationItem.MatlCompIsMarkedForBackflush,
    
    _ReservationItem.ServiceObjectType,
    _ReservationItem.ServiceDocument,
    _ReservationItem.ServiceDocumentItem,
    _ReservationItem.ResvnItmSrvcDocTypeAsAcctAsgt,
    _ReservationItem.ResvnItmSrvcDocAsAcctAsgt,
    _ReservationItem.ResvnItmSrvcDocItmAsAcctAsgt,   
    
    _ReservationItem.AccountAssignmentCategory,
    _ReservationItem.ConsumptionPosting,
    _ReservationItem.InventorySpecialStockValnType,
    
    _ReservationItem.PurchaseRequisition,
    _ReservationItem.PurchaseRequisitionItem,
    
    _ReservationItem._DebitCreditCode,
    _ReservationItem._Plant,
    _Product,
    _ReservationItem._IssuingOrReceivingPlant,
    _ReservationItem._StorageLocation,
    _ReservationItem._IssuingOrReceivingStorageLoc,
    _ReservationItem._GoodsMovementType,
    _ReservationItem._Currency,
    _ReservationItem._PurchasingDocument,
    _ReservationItem._PurchasingDocumentItem,
    _ReservationItem._BaseUnit,
    _ReservationItem._EntryUnit,
    _ReservationItem._Supplier,
    _ReservationItem._InventorySpecialStockType,
    _ReservationItem._WBSElementBasicData,
    _ReservationItem._Batch,
    @Consumption.hidden: true
    _ReservationItem._SupplierCompanyByPlant,
    
    @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
    _ReservationDocumentHeader,
    _ReservationDocRecordType,
    _ReservationItem._RecipientLocationCode,
    
    _ReservationItem._ServiceDocumentItem   
}
```
