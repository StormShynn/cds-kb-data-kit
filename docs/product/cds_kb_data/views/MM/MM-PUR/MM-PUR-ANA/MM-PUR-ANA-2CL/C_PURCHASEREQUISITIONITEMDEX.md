---
name: C_PURCHASEREQUISITIONITEMDEX
description: "Purchase RequisitionUISITIONITEMDEX"
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
  - purchase-requisition
  - item-level
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_PURCHASEREQUISITIONITEMDEX

**Purchase RequisitionUISITIONITEMDEX**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PurchaseRequisition` | ✓ | |  |  |  |  |
| `PurchaseRequisitionItem` | ✓ | |  |  |  |  |
| `PurchaseReqnItemUniqueID` |  | |  |  |  |  |
| `PurchasingDocument` |  | |  |  |  |  |
| `PurchasingDocumentItem` |  | |  |  |  |  |
| `PurReqnReleaseStatus` |  | |  |  |  |  |
| `PurchaseRequisitionType` |  | |  |  |  |  |
| `PurchasingDocumentSubtype` |  | |  |  |  |  |
| `PurchasingDocumentItemCategory` |  | |  |  |  |  |
| `PurchaseRequisitionItemText` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchaseRequisitionPrice` |  | |  |  |  |  |
| `MaterialGoodsReceiptDuration` |  | |  |  |  |  |
| `ReleaseCode` |  | |  |  |  |  |
| `PurchaseRequisitionReleaseDate` |  | |  |  |  |  |
| `PurchasingOrganization` |  | |  |  |  |  |
| `PurchasingGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `SourceOfSupplyIsAssigned` |  | |  |  |  |  |
| `SupplyingPlant` |  | |  |  |  |  |
| `PurReqnLimitConsumptionAmt` |  | |  |  |  |  |
| `DeliveryDate` |  | |  |  |  |  |
| `CreationDate` |  | |  |  |  |  |
| `ProcessingStatus` |  | |  |  |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `Supplier` |  | |  |  |  |  |
| `IsDeleted` |  | |  |  |  |  |
| `FixedSupplier` |  | |  |  |  |  |
| `RequisitionerName` |  | |  |  |  |  |
| `CreatedByUser` |  | |  |  |  |  |
| `PurReqCreationDate` |  | |  |  |  |  |
| `DeliveryAddressID` |  | |  | `cast ( DeliveryAddressID as adrn2_ll preserving type)` |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `PurReqnItemCurrency` |  | |  |  |  |  |
| `MaterialPlannedDeliveryDurn` |  | |  |  |  |  |
| `DelivDateCategory` |  | |  |  |  |  |
| `MultipleAcctAssgmtDistribution` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `PurReqnSSPRequestor` |  | |  |  |  |  |
| `PurReqnSSPAuthor` |  | |  |  |  |  |
| `PurchaseContract` |  | |  |  |  |  |
| `PurReqnSourceOfSupplyType` |  | |  |  |  |  |
| `PurchaseContractItem` |  | |  |  |  |  |
| `ConsumptionPosting` |  | |  |  |  |  |
| `PurReqnOrigin` |  | |  |  |  |  |
| `PurReqnSSPCatalog` |  | |  |  |  |  |
| `PurReqnSSPCatalogItem` |  | |  |  |  |  |
| `PurReqnSSPCrossCatalogItem` |  | |  |  |  |  |
| `IsPurReqnBlocked` |  | |  |  |  |  |
| `ItemDeliveryAddressID` |  | |  |  |  |  |
| `Language` |  | |  |  |  |  |
| `IsClosed` |  | |  |  |  |  |
| `ReleaseIsNotCompleted` |  | |  |  |  |  |
| `ServicePerformer` |  | |  |  |  |  |
| `ProductType` |  | |  | `cast(ProductType as abap.char(4))` |  |  |
| `PurchaseRequisitionStatus` |  | |  |  |  |  |
| `ReleaseStrategy` |  | |  |  |  |  |
| `PerformancePeriodStartDate` |  | |  |  |  |  |
| `PerformancePeriodEndDate` |  | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `Batch` |  | |  |  |  |  |
| `MaterialRevisionLevel` |  | |  | `MaterialRevisionLevel_2` |  |  |
| `MinRemainingShelfLife` |  | |  |  |  |  |
| `ItemNetAmount` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `MRPController` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `PurchaseRequisitionIsFixed` |  | |  |  |  |  |
| `AddressID` |  | |  |  |  |  |
| `LastChangeDateTime` |  | |  |  |  |  |
| `ProcurementHubSourceSystem` |  | |  |  |  |  |
| `ExtPurgOrgForPurg` |  | |  |  |  |  |
| `ExtCompanyCodeForPurg` |  | |  |  |  |  |
| `ExtPlantForPurg` |  | |  |  |  |  |
| `ExtInfoRecordForPurg` |  | |  |  |  |  |
| `ExtContractItemForPurg` |  | |  |  |  |  |
| `ExtContractForPurg` |  | |  |  |  |  |
| `ExtDesiredSupplierForPurg` |  | |  |  |  |  |
| `ExtFixedSupplierForPurg` |  | |  |  |  |  |
| `ExtMaterialForPurg` |  | |  |  |  |  |
| `RequestedQuantity` |  | |  |  |  |  |
| `PurReqnPriceQuantity` |  | |  |  |  |  |
| `BaseUnit` |  | |  |  |  |  |
| `IsPurReqnCmplt` |  | |  |  |  |  |
| `PurReqnItemBlockingReasonText` |  | |  |  |  |  |
| `InventorySpecialStockType` |  | |  |  |  |  |
| `QuotaArrangement` |  | |  |  |  |  |
| `QuotaArrangementItem` |  | |  |  |  |  |
| `_PurchasingDocumentType` | | ✓ | | | | |
| `_PurgDocumentItemCategory` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_PurchasingObjectCategory` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_SupplyingPlant` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |
| `_FixedSupplier` | | ✓ | | | | |
| `_DeliveryAddress` | | ✓ | | | | |
| `_ManualDeliveryAddress` | | ✓ | | | | |
| `_Currency` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_ItemDeliveryAddress` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_BusinessPartner` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_MRPController` | | ✓ | | | | |
| `_Address` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_InventorySpecialStockType` | | ✓ | | | | |
| `_PurchaseContract` | | ✓ | | | | |
| `_PurchaseContractItem` | | ✓ | | | | |
| `_PurchasingInfoRecord` | | ✓ | | | | |
| `_PurchaseRequisition` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_PurchasingDocumentType` | `I_PurchasingDocumentType` | [1..1] |
| `_PurgDocumentItemCategory` | `I_PurgDocumentItemCategory` | [1..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [1..1] |
| `_PurchasingObjectCategory` | `I_PurchasingObjectCategory` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [0..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_SupplyingPlant` | `I_Plant` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_FixedSupplier` | `I_Supplier` | [0..1] |
| `_DeliveryAddress` | `I_Address_2` | [0..1] |
| `_ManualDeliveryAddress` | `I_Address_2` | [0..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [1..1] |
| `_ItemDeliveryAddress` | `I_Address_2` | [0..1] |
| `_Language` | `I_Language` | [1..1] |
| `_BusinessPartner` | `I_BusinessPartner` | [0..1] |
| `_ProductTypeCode` | `I_ProductTypeCode` | [0..1] |
| `_CompanyCode` | `I_CompanyCode` | [0..1] |
| `_MRPController` | `I_MRPController` | [0..1] |
| `_Address` | `I_Address_2` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [1..1] |
| `_InventorySpecialStockType` | `I_InventorySpecialStockType` | [0..1] |
| `_PurchaseContract` | `C_PurchaseContractDEX` | [1..1] |
| `_PurchaseContractItem` | `C_PurchaseContractItemDEX` | [1..1] |
| `_PurchasingInfoRecord` | `C_PurchasingInfoRecordDEX` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMPRITMDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{ authorizationCheck             : #CHECK,
                 personalData.blocking          : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label: 'Data Extraction for Purchase Requisition Item'

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
                    mapping:[ { table           : 'eban', role: #MAIN,
                                viewElement     : ['PurchaseRequisition', 'PurchaseRequisitionItem'],
                                tableElement    : ['banfn', 'bnfpo']
                              }
                            ]
                }
              }
}
@ObjectModel.sapObjectNodeType.name: 'PurchaseRequisitionItem'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_PurchaseRequisitionItemDEX
  as select from I_PurchaseRequisitionItemAPI01

  association [1..1] to I_PurchasingDocumentType    as _PurchasingDocumentType    on  $projection.PurchasingDocumentCategory = _PurchasingDocumentType.PurchasingDocumentCategory
                                                                                  and $projection.PurchaseRequisitionType    = _PurchasingDocumentType.PurchasingDocumentType

  association [1..1] to I_PurgDocumentItemCategory  as _PurgDocumentItemCategory  on  $projection.PurchasingDocumentItemCategory = _PurgDocumentItemCategory.PurchasingDocumentItemCategory

  association [0..1] to I_Product                   as _Product                   on  $projection.Material = _Product.Product

  association [1..1] to I_ProductGroup_2            as _ProductGroup              on  $projection.MaterialGroup = _ProductGroup.ProductGroup

  association [0..1] to I_PurchasingObjectCategory  as _PurchasingObjectCategory  on  $projection.PurchasingDocumentCategory = _PurchasingObjectCategory.PurchasingDocumentCategory

  association [0..1] to I_PurchasingOrganization    as _PurchasingOrganization    on  $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchasingGroup           as _PurchasingGroup           on  $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_Plant                     as _Plant                     on  $projection.Plant = _Plant.Plant

  association [0..1] to I_Plant                     as _SupplyingPlant            on  $projection.SupplyingPlant = _SupplyingPlant.Plant

  association [0..1] to I_Supplier                  as _Supplier                  on  $projection.Supplier = _Supplier.Supplier

  association [0..1] to I_Supplier                  as _FixedSupplier             on  $projection.FixedSupplier = _FixedSupplier.Supplier

  association [0..1] to I_Address_2                 as _DeliveryAddress           on  $projection.DeliveryAddressID              = _DeliveryAddress.AddressID
                                                                                  and _DeliveryAddress.AddressPersonID           = ''
                                                                                  and _DeliveryAddress.AddressRepresentationCode = ''

  association [0..1] to I_Address_2                 as _ManualDeliveryAddress     on  $projection.ManualDeliveryAddressID              = _ManualDeliveryAddress.AddressID
                                                                                  and _ManualDeliveryAddress.AddressPersonID           = ''
                                                                                  and _ManualDeliveryAddress.AddressRepresentationCode = ''

  association [0..1] to I_Currency                  as _Currency                  on  $projection.PurReqnItemCurrency = _Currency.Currency

  association [1..1] to I_StorageLocation           as _StorageLocation           on  $projection.Plant           = _StorageLocation.Plant
                                                                                  and $projection.StorageLocation = _StorageLocation.StorageLocation
  
  association [0..1] to I_Address_2                 as _ItemDeliveryAddress       on  $projection.ItemDeliveryAddressID              = _ItemDeliveryAddress.AddressID
                                                                                  and _ItemDeliveryAddress.AddressPersonID           = ''
                                                                                  and _ItemDeliveryAddress.AddressRepresentationCode = ''

  association [1..1] to I_Language                  as _Language                  on  $projection.Language = _Language.Language

  association [0..1] to I_BusinessPartner           as _BusinessPartner           on  $projection.ServicePerformer = _BusinessPartner.BusinessPartner

  association [0..1] to I_ProductTypeCode           as _ProductTypeCode           on  $projection.ProductType = _ProductTypeCode.ProductTypeCode

  association [0..1] to I_CompanyCode               as _CompanyCode               on  $projection.CompanyCode = _CompanyCode.CompanyCode

  association [0..1] to I_MRPController             as _MRPController             on  $projection.Plant         = _MRPController.Plant
                                                                                  and $projection.MRPController = _MRPController.MRPController

  association [0..1] to I_Address_2                 as _Address                   on  $projection.AddressID              = _Address.AddressID
                                                                                  and _Address.AddressPersonID           = ''
                                                                                  and _Address.AddressRepresentationCode = ''

  association [1..1] to I_UnitOfMeasure             as _UnitOfMeasure             on  $projection.BaseUnit = _UnitOfMeasure.UnitOfMeasure

  association [0..1] to I_InventorySpecialStockType as _InventorySpecialStockType on  $projection.InventorySpecialStockType = _InventorySpecialStockType.InventorySpecialStockType

  association [1..1] to C_PurchaseContractDEX       as _PurchaseContract          on  $projection.PurchaseContract = _PurchaseContract.PurchaseContract

  association [1..1] to C_PurchaseContractItemDEX   as _PurchaseContractItem      on  $projection.PurchaseContract     = _PurchaseContractItem.PurchaseContract
                                                                                  and $projection.PurchaseContractItem = _PurchaseContractItem.PurchaseContractItem

  association [1..1] to C_PurchasingInfoRecordDEX   as _PurchasingInfoRecord      on  $projection.PurchasingInfoRecord = _PurchasingInfoRecord.PurchasingInfoRecord
{
  key PurchaseRequisition                                   as PurchaseRequisition,
  key PurchaseRequisitionItem                               as PurchaseRequisitionItem,
      PurchaseReqnItemUniqueID                              as PurchaseReqnItemUniqueID,

      PurchasingDocument                                    as PurchasingDocument,

      PurchasingDocumentItem                                as PurchasingDocumentItem,

      PurReqnReleaseStatus                                  as PurReqnReleaseStatus,

      @ObjectModel.foreignKey.association: '_PurchasingDocumentType'
      PurchaseRequisitionType                               as PurchaseRequisitionType,

      PurchasingDocumentSubtype                             as PurchasingDocumentSubtype,

      @ObjectModel.foreignKey.association: '_PurgDocumentItemCategory'
      PurchasingDocumentItemCategory                        as PurchasingDocumentItemCategory,

      @Semantics.text: true
      PurchaseRequisitionItemText                           as PurchaseRequisitionItemText,

      AccountAssignmentCategory                             as AccountAssignmentCategory,

      @ObjectModel.foreignKey.association: '_Product'
      Material                                              as Material,

      @ObjectModel.foreignKey.association: '_ProductGroup'
      MaterialGroup                                         as MaterialGroup,

      @ObjectModel.foreignKey.association: '_PurchasingObjectCategory'
      PurchasingDocumentCategory                            as PurchasingDocumentCategory,

      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      PurchaseRequisitionPrice                              as PurchaseRequisitionPrice,

      MaterialGoodsReceiptDuration                          as MaterialGoodsReceiptDuration,

      ReleaseCode                                           as ReleaseCode,

      @Semantics.businessDate.at: true
      PurchaseRequisitionReleaseDate                        as PurchaseRequisitionReleaseDate,

      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      PurchasingOrganization                                as PurchasingOrganization,

      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      PurchasingGroup                                       as PurchasingGroup,

      @ObjectModel.foreignKey.association: '_Plant'
      Plant                                                 as Plant,

      SourceOfSupplyIsAssigned                              as SourceOfSupplyIsAssigned,

      @ObjectModel.foreignKey.association: '_SupplyingPlant'
      SupplyingPlant                                        as SupplyingPlant,

      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      PurReqnLimitConsumptionAmt                            as PurReqnLimitConsumptionAmt,

      @Semantics.businessDate.at: true
      DeliveryDate                                          as DeliveryDate,

      @Semantics.systemDate.createdAt: true
      CreationDate                                          as CreationDate,

      ProcessingStatus                                      as ProcessingStatus,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchasingInfoRecord'
      PurchasingInfoRecord                                  as PurchasingInfoRecord,

      @ObjectModel.foreignKey.association: '_Supplier'
      Supplier                                              as Supplier,

      @Semantics.booleanIndicator:true
      IsDeleted                                             as IsDeleted,

      @ObjectModel.foreignKey.association: '_FixedSupplier'
      FixedSupplier                                         as FixedSupplier,

      RequisitionerName                                     as RequisitionerName,

      @Semantics.user.createdBy: true
      CreatedByUser                                         as CreatedByUser,

      @Semantics.businessDate.at: true
      PurReqCreationDate                                    as PurReqCreationDate,

      @ObjectModel.foreignKey.association: '_DeliveryAddress'
      cast ( DeliveryAddressID as adrn2_ll preserving type) as DeliveryAddressID,

      @ObjectModel.foreignKey.association: '_ManualDeliveryAddress'
      ManualDeliveryAddressID                               as ManualDeliveryAddressID,

      @ObjectModel.foreignKey.association: '_Currency'
      @Semantics.currencyCode: true
      PurReqnItemCurrency                                   as PurReqnItemCurrency,

      MaterialPlannedDeliveryDurn                           as MaterialPlannedDeliveryDurn,

      DelivDateCategory                                     as DelivDateCategory,
      MultipleAcctAssgmtDistribution                        as MultipleAcctAssgmtDistribution,

      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation                                       as StorageLocation,

      PurReqnSSPRequestor                                   as PurReqnSSPRequestor,

      PurReqnSSPAuthor                                      as PurReqnSSPAuthor,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContract'
      PurchaseContract                                      as PurchaseContract,

      PurReqnSourceOfSupplyType                             as PurReqnSourceOfSupplyType,

      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseContractItem'
      PurchaseContractItem                                  as PurchaseContractItem,

      ConsumptionPosting                                    as ConsumptionPosting,
      PurReqnOrigin                                         as PurReqnOrigin,
      PurReqnSSPCatalog                                     as PurReqnSSPCatalog,
      PurReqnSSPCatalogItem                                 as PurReqnSSPCatalogItem,
      PurReqnSSPCrossCatalogItem                            as PurReqnSSPCrossCatalogItem,

      @Semantics.booleanIndicator:true
      IsPurReqnBlocked                                      as IsPurReqnBlocked,

      @ObjectModel.foreignKey.association: '_ItemDeliveryAddress'
      ItemDeliveryAddressID                                 as ItemDeliveryAddressID,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
      Language                                              as Language,

      IsClosed                                              as IsClosed,

      ReleaseIsNotCompleted                                 as ReleaseIsNotCompleted,

      @ObjectModel.foreignKey.association: '_BusinessPartner'
      ServicePerformer                                      as ServicePerformer,

      @ObjectModel.foreignKey.association: '_ProductTypeCode'
      cast(ProductType as abap.char(4))                     as ProductType,

      PurchaseRequisitionStatus                             as PurchaseRequisitionStatus,
      ReleaseStrategy                                       as ReleaseStrategy,
      PerformancePeriodStartDate                            as PerformancePeriodStartDate,
      PerformancePeriodEndDate                              as PerformancePeriodEndDate,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode                                           as CompanyCode,

      SupplierMaterialNumber                                as SupplierMaterialNumber,

      Batch                                                 as Batch,

      MaterialRevisionLevel_2                               as MaterialRevisionLevel,
      MinRemainingShelfLife                                 as MinRemainingShelfLife,

      @Semantics.amount.currencyCode: 'PurReqnItemCurrency'
      ItemNetAmount                                         as ItemNetAmount,

      GoodsReceiptIsExpected                                as GoodsReceiptIsExpected,

      InvoiceIsExpected                                     as InvoiceIsExpected,

      GoodsReceiptIsNonValuated                             as GoodsReceiptIsNonValuated,

      RequirementTracking                                   as RequirementTracking,

      @ObjectModel.foreignKey.association: '_MRPController'
      MRPController                                         as MRPController,

      TaxCode                                               as TaxCode,

      PurchaseRequisitionIsFixed                            as PurchaseRequisitionIsFixed,

      @ObjectModel.foreignKey.association: '_Address'
      AddressID                                             as AddressID,

      @Semantics.systemDateTime.lastChangedAt: true
      LastChangeDateTime                                    as LastChangeDateTime,

      ProcurementHubSourceSystem                            as ProcurementHubSourceSystem,
      ExtPurgOrgForPurg                                     as ExtPurgOrgForPurg,
      ExtCompanyCodeForPurg                                 as ExtCompanyCodeForPurg,
      ExtPlantForPurg                                       as ExtPlantForPurg,
      ExtInfoRecordForPurg                                  as ExtInfoRecordForPurg,
      ExtContractItemForPurg                                as ExtContractItemForPurg,
      ExtContractForPurg                                    as ExtContractForPurg,
      ExtDesiredSupplierForPurg                             as ExtDesiredSupplierForPurg,
      ExtFixedSupplierForPurg                               as ExtFixedSupplierForPurg,
      ExtMaterialForPurg                                    as ExtMaterialForPurg,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      RequestedQuantity                                     as RequestedQuantity,

      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      PurReqnPriceQuantity                                  as PurReqnPriceQuantity,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      BaseUnit                                              as BaseUnit,

      IsPurReqnCmplt                                        as IsPurReqnCmplt,

      @Semantics.text: true
      PurReqnItemBlockingReasonText                         as PurReqnItemBlockingReasonText,

      @ObjectModel.foreignKey.association: '_InventorySpecialStockType'
      InventorySpecialStockType                             as InventorySpecialStockType,

      QuotaArrangement                                      as QuotaArrangement,
      QuotaArrangementItem                                  as QuotaArrangementItem,

      _PurchaseRequisition,
      _PurchasingDocumentType,
      _PurgDocumentItemCategory,
      _Product,
      _ProductGroup,
      _PurchasingObjectCategory,
      _PurchasingOrganization,
      _PurchasingGroup,
      _Plant,
      _SupplyingPlant,
      _Supplier,
      _FixedSupplier,
      _DeliveryAddress,
      _ManualDeliveryAddress,
      _Currency,
      _StorageLocation,
      _ItemDeliveryAddress,
      _Language,
      _BusinessPartner,
      _ProductTypeCode,
      _CompanyCode,
      _MRPController,
      _Address,
      _UnitOfMeasure,
      _InventorySpecialStockType,
      _PurchaseContract,
      _PurchaseContractItem,
      _PurchasingInfoRecord
}
where
        not(
          IsOutline    = 'X'
          and Material = ''
        )
```
