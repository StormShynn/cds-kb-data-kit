---
name: C_SCHEDULEAGREEMENTITEMDEX
description: Scheduleagreementitemdex
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
  - item-level
  - schedule-line
  - component:MM-PUR-ANA-2CL
  - lob:Sourcing & Procurement
---
# C_SCHEDULEAGREEMENTITEMDEX

**Scheduleagreementitemdex**

| Property | Value |
|---|---|
| App Component | `MM-PUR-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SchedulingAgreement` | ✓ | |  |  |  |  |
| `SchedulingAgreementItem` | ✓ | |  |  |  |  |
| `CompanyCode` |  | |  |  |  |  |
| `PurchasingDocumentCategory` |  | |  |  |  |  |
| `PurchasingDocumentItemText` |  | |  |  |  |  |
| `Material` |  | |  |  |  |  |
| `ManufacturerMaterial` |  | |  |  |  |  |
| `SupplierMaterialNumber` |  | |  |  |  |  |
| `MaterialGroup` |  | |  |  |  |  |
| `Plant` |  | |  |  |  |  |
| `ManualDeliveryAddressID` |  | |  |  |  |  |
| `ReferenceDeliveryAddressID` |  | |  |  |  |  |
| `IncotermsClassification` |  | |  |  |  |  |
| `IncotermsTransferLocation` |  | |  |  |  |  |
| `OrderQuantityUnit` |  | |  |  |  |  |
| `WeightUnit` |  | |  |  |  |  |
| `PurchaseRequisition` |  | |  |  |  |  |
| `PurchaseRequisitionItem` |  | |  |  |  |  |
| `SchedAgrmtCumQtyReconcileDate` |  | |  |  |  |  |
| `ItemLastTransmissionDate` |  | |  |  |  |  |
| `NoDaysReminder1` |  | |  |  |  |  |
| `NoDaysReminder2` |  | |  |  |  |  |
| `NoDaysReminder3` |  | |  |  |  |  |
| `SupplierConfirmationControlKey` |  | |  |  |  |  |
| `PurgDocOrderAcknNumber` |  | |  |  |  |  |
| `RequirementTracking` |  | |  |  |  |  |
| `IsOrderAcknRqd` |  | |  |  |  |  |
| `PurchasingPriceIsEstimated` |  | |  | `PurgDocEstimatedPrice` |  |  |
| `PriceIsToBePrinted` |  | |  |  |  |  |
| `AccountAssignmentCategory` |  | |  |  |  |  |
| `DocumentCurrency` |  | |  |  |  |  |
| `NetPriceAmount` |  | |  |  |  |  |
| `NetPriceQuantity` |  | |  |  |  |  |
| `OrderPriceUnit` |  | |  |  |  |  |
| `ProductType` |  | |  | `cast(ProductType as abap.char(4))` |  |  |
| `MaterialType` |  | |  |  |  |  |
| `StorageLocation` |  | |  |  |  |  |
| `PurchasingInfoRecordUpdateCode` |  | |  | `IsInfoRecordUpdated` |  |  |
| `PurchasingInfoRecord` |  | |  |  |  |  |
| `OrdPriceUnitToOrderUnitDnmntr` |  | |  |  |  |  |
| `OrderPriceUnitToOrderUnitNmrtr` |  | |  |  |  |  |
| `PurgDocumentItemDeletionCode` |  | |  | `PurchasingDocumentDeletionCode` |  |  |
| `UnderdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `OverdelivTolrtdLmtRatioInPct` |  | |  |  |  |  |
| `UnlimitedOverdeliveryIsAllowed` |  | |  |  |  |  |
| `StockType` |  | |  |  |  |  |
| `TaxCode` |  | |  |  |  |  |
| `ShippingInstruction` |  | |  |  |  |  |
| `IsInfoAtRegistration` |  | |  |  |  |  |
| `GoodsReceiptIsExpected` |  | |  |  |  |  |
| `GoodsReceiptIsNonValuated` |  | |  |  |  |  |
| `InvoiceIsExpected` |  | |  |  |  |  |
| `InvoiceIsGoodsReceiptBased` |  | |  |  |  |  |
| `EvaldRcptSettlmtIsAllowed` |  | |  |  |  |  |
| `MinRemainingShelfLife` |  | |  |  |  |  |
| `QualityMgmtCtrlKey` |  | |  |  |  |  |
| `QualityCertificateType` |  | |  |  |  |  |
| `SchedAgrmtCumulativeQtyControl` |  | |  |  |  |  |
| `CumulativeQuantityIsNotSent` |  | |  |  |  |  |
| `SchedgAgrmtRelCreationProfile` |  | |  |  |  |  |
| `IsRelevantForJITDelivSchedule` |  | |  |  |  |  |
| `NextFcstDelivSchedSendingDate` |  | |  |  |  |  |
| `NextJITDelivSchedSendingDate` |  | |  |  |  |  |
| `ScheduleLineFirmOrderInDays` |  | |  |  |  |  |
| `SchedLineSemiFirmOrderInDays` |  | |  |  |  |  |
| `FirmTradeOffZoneBindMRP` |  | |  |  |  |  |
| `PurchasingDocumentOrderDate` |  | | `_SchedgAgrmtHdrAPI01` | `PurchasingDocumentOrderDate` |  |  |
| `PurchasingOrganization` |  | | `_SchedgAgrmtHdrAPI01` | `PurchasingOrganization` |  |  |
| `PurchasingGroup` |  | | `_SchedgAgrmtHdrAPI01` | `PurchasingGroup` |  |  |
| `PurchasingDocumentType` |  | | `_SchedgAgrmtHdrAPI01` | `PurchasingDocumentType` |  |  |
| `Supplier` |  | | `_SchedgAgrmtHdrAPI01` | `Supplier` |  |  |
| `ValidityStartDate` |  | | `_SchedgAgrmtHdrAPI01` | `ValidityStartDate` |  |  |
| `ValidityEndDate` |  | | `_SchedgAgrmtHdrAPI01` | `ValidityEndDate` |  |  |
| `PurchasingDocumentDeletionCode` |  | | `_SchedgAgrmtHdrAPI01` | `PurchasingDocumentDeletionCode` |  |  |
| `TargetQuantity` |  | |  |  |  |  |
| `_ScheduleAgreementHdrDEX` | | ✓ | | | | |
| `_SchedAgrmtSchedLineDEX` | | ✓ | | | | |
| `_CompanyCode` | | ✓ | | | | |
| `_PurchasingDocumentCategory` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ManufacturerMaterial` | | ✓ | | | | |
| `_ProductGroup` | | ✓ | | | | |
| `_Plant` | | ✓ | | | | |
| `_ManualDeliveryAddress` | | ✓ | | | | |
| `_ReferenceDeliveryAddress` | | ✓ | | | | |
| `_IncotermsClassification` | | ✓ | | | | |
| `_OrderQuantityUnit` | | ✓ | | | | |
| `_WeightUnit` | | ✓ | | | | |
| `_PurchaseRequisitionItem` | | ✓ | | | | |
| `_DocumentCurrency` | | ✓ | | | | |
| `_OrderPriceUnit` | | ✓ | | | | |
| `_ProductTypeCode` | | ✓ | | | | |
| `_MaterialType` | | ✓ | | | | |
| `_StorageLocation` | | ✓ | | | | |
| `_PurgInfoRecordUpdateCode` | | ✓ | | | | |
| `_PurchasingInfoRecord` | | ✓ | | | | |
| `_StockType` | | ✓ | | | | |
| `_ShippingInstruction` | | ✓ | | | | |
| `_PurchasingOrganization` | | ✓ | | | | |
| `_PurchasingGroup` | | ✓ | | | | |
| `_PurchasingDocumentType` | | ✓ | | | | |
| `_Supplier` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ScheduleAgreementHdrDEX` | `C_ScheduleAgreementHdrDEX` | [1..1] |
| `_SchedAgrmtSchedLineDEX` | `C_SchedAgrmtSchedLineDEX` | [0..*] |
| `_CompanyCode` | `I_CompanyCode` | [1..1] |
| `_PurchasingDocumentCategory` | `I_PurchasingDocumentCategory` | [1..1] |
| `_Product` | `I_Product` | [1..1] |
| `_ManufacturerMaterial` | `I_Product` | [1..1] |
| `_ProductGroup` | `I_ProductGroup_2` | [1..1] |
| `_Plant` | `I_Plant` | [1..1] |
| `_ManualDeliveryAddress` | `I_Address_2` | [0..1] |
| `_ReferenceDeliveryAddress` | `I_Address_2` | [0..1] |
| `_IncotermsClassification` | `I_IncotermsClassification` | [0..1] |
| `_OrderQuantityUnit` | `I_UnitOfMeasure` | [1..1] |
| `_WeightUnit` | `I_UnitOfMeasure` | [0..1] |
| `_PurchaseRequisitionItem` | `C_PurchaseRequisitionItemDEX` | [0..1] |
| `_DocumentCurrency` | `I_Currency` | [1..1] |
| `_OrderPriceUnit` | `I_UnitOfMeasure` | [1..1] |
| `_ProductTypeCode` | `I_ProductTypeCode` | [1..1] |
| `_MaterialType` | `I_ProductType_2` | [0..1] |
| `_StorageLocation` | `I_StorageLocation` | [1..1] |
| `_PurgInfoRecordUpdateCode` | `I_PurgInfoRecordUpdateCode` | [0..1] |
| `_PurchasingInfoRecord` | `C_PurchasingInfoRecordDEX` | [0..1] |
| `_StockType` | `I_InventoryUsabilityCode` | [0..1] |
| `_ShippingInstruction` | `I_ShippingInstruction` | [0..1] |
| `_PurchasingOrganization` | `I_PurchasingOrganization` | [1..1] |
| `_PurchasingGroup` | `I_PurchasingGroup` | [1..1] |
| `_PurchasingDocumentType` | `I_PurchasingDocumentType` | [1..1] |
| `_Supplier` | `I_Supplier` | [1..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'CMMSCHAGMTITMDEX'
@AbapCatalog.compiler.compareFilter: true
@AccessControl:{ authorizationCheck     : #CHECK,
                 personalData.blocking  : #BLOCKED_DATA_EXCLUDED
               }
@EndUserText.label: 'Data Extraction for Purchase Scheduling Agreement Items'
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel :{ usageType.dataClass     : #TRANSACTIONAL,
                usageType.sizeCategory  : #L,
                usageType.serviceQuality: #D,
                supportedCapabilities   : [ #EXTRACTION_DATA_SOURCE ]
              }

@VDM.viewType                           : #CONSUMPTION
@Metadata.ignorePropagatedAnnotations   : true

@Analytics: {
    dataCategory: #FACT,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[ {
                        table           : 'ekpo', role: #MAIN,
                        viewElement     : ['SchedulingAgreement','SchedulingAgreementItem'],
                        tableElement    : ['ebeln','ebelp' ]
                      },
                      {
                        table           : 'ekko', role: #LEFT_OUTER_TO_ONE_JOIN,
                        viewElement     : ['SchedulingAgreement'],
                        tableElement    : ['ebeln']
                      }
                    ]
        }
    }
}
@ObjectModel.sapObjectNodeType.name: 'PurchaseSchedulingAgreementItm'
@ObjectModel.modelingPattern: #ANALYTICAL_FACT
define view C_ScheduleAgreementItemDEX
  as select from I_SchedgAgrmtItmApi01

  association [1..1] to C_ScheduleAgreementHdrDEX    as _ScheduleAgreementHdrDEX    on $projection.SchedulingAgreement = _ScheduleAgreementHdrDEX.SchedulingAgreement

  association [0..*] to C_SchedAgrmtSchedLineDEX     as _SchedAgrmtSchedLineDEX     on  $projection.SchedulingAgreement     = _SchedAgrmtSchedLineDEX.SchedulingAgreement
                                                                                    and $projection.SchedulingAgreementItem = _SchedAgrmtSchedLineDEX.SchedulingAgreementItem

  association [1..1] to I_CompanyCode                as _CompanyCode                on $projection.CompanyCode = _CompanyCode.CompanyCode

  association [1..1] to I_PurchasingDocumentCategory as _PurchasingDocumentCategory on $projection.PurchasingDocumentCategory = _PurchasingDocumentCategory.PurchasingDocumentCategory

  association [1..1] to I_Product                    as _Product                    on $projection.Material = _Product.Product

  association [1..1] to I_Product                    as _ManufacturerMaterial       on $projection.ManufacturerMaterial = _ManufacturerMaterial.Product

  association [1..1] to I_ProductGroup_2             as _ProductGroup               on $projection.MaterialGroup = _ProductGroup.ProductGroup

  association [1..1] to I_Plant                      as _Plant                      on $projection.Plant = _Plant.Plant

  association [0..1] to I_Address_2                  as _ManualDeliveryAddress      on  $projection.ManualDeliveryAddressID              = _ManualDeliveryAddress.AddressID
                                                                                    and _ManualDeliveryAddress.AddressPersonID           = ''
                                                                                    and _ManualDeliveryAddress.AddressRepresentationCode = ''

  association [0..1] to I_Address_2                  as _ReferenceDeliveryAddress   on  $projection.ReferenceDeliveryAddressID              = _ReferenceDeliveryAddress.AddressID
                                                                                    and _ReferenceDeliveryAddress.AddressPersonID           = ''
                                                                                    and _ReferenceDeliveryAddress.AddressRepresentationCode = ''

  association [0..1] to I_IncotermsClassification    as _IncotermsClassification    on $projection.IncotermsClassification = _IncotermsClassification.IncotermsClassification

  association [1..1] to I_UnitOfMeasure              as _OrderQuantityUnit          on $projection.OrderQuantityUnit = _OrderQuantityUnit.UnitOfMeasure

  association [0..1] to I_UnitOfMeasure              as _WeightUnit                 on $projection.WeightUnit = _WeightUnit.UnitOfMeasure

  association [0..1] to C_PurchaseRequisitionItemDEX as _PurchaseRequisitionItem    on  $projection.PurchaseRequisition     = _PurchaseRequisitionItem.PurchaseRequisition
                                                                                    and $projection.PurchaseRequisitionItem = _PurchaseRequisitionItem.PurchaseRequisitionItem

  association [1..1] to I_Currency                   as _DocumentCurrency           on $projection.DocumentCurrency = _DocumentCurrency.Currency

  association [1..1] to I_UnitOfMeasure              as _OrderPriceUnit             on $projection.OrderPriceUnit = _OrderPriceUnit.UnitOfMeasure

  association [1..1] to I_ProductTypeCode            as _ProductTypeCode            on $projection.ProductType = _ProductTypeCode.ProductTypeCode

  association [0..1] to I_ProductType_2              as _MaterialType               on $projection.MaterialType = _MaterialType.ProductType

  association [1..1] to I_StorageLocation            as _StorageLocation            on  $projection.Plant           = _StorageLocation.Plant
                                                                                    and $projection.StorageLocation = _StorageLocation.StorageLocation

  association [0..1] to I_PurgInfoRecordUpdateCode   as _PurgInfoRecordUpdateCode   on $projection.PurchasingInfoRecordUpdateCode = _PurgInfoRecordUpdateCode.PurchasingInfoRecordUpdateCode

  association [0..1] to C_PurchasingInfoRecordDEX    as _PurchasingInfoRecord       on $projection.PurchasingInfoRecord = _PurchasingInfoRecord.PurchasingInfoRecord

  association [0..1] to I_InventoryUsabilityCode     as _StockType                  on $projection.StockType = _StockType.InventoryUsabilityCode

  association [0..1] to I_ShippingInstruction        as _ShippingInstruction        on $projection.ShippingInstruction = _ShippingInstruction.ShippingInstruction

  association [1..1] to I_PurchasingOrganization     as _PurchasingOrganization     on $projection.PurchasingOrganization = _PurchasingOrganization.PurchasingOrganization

  association [1..1] to I_PurchasingGroup            as _PurchasingGroup            on $projection.PurchasingGroup = _PurchasingGroup.PurchasingGroup

  association [1..1] to I_PurchasingDocumentType     as _PurchasingDocumentType     on  $projection.PurchasingDocumentCategory = _PurchasingDocumentType.PurchasingDocumentCategory
                                                                                    and $projection.PurchasingDocumentType     = _PurchasingDocumentType.PurchasingDocumentType

  association [1..1] to I_Supplier                   as _Supplier                   on $projection.Supplier = _Supplier.Supplier
{
  key SchedulingAgreement                                 as SchedulingAgreement,
  key SchedulingAgreementItem                             as SchedulingAgreementItem,

      @ObjectModel.foreignKey.association: '_CompanyCode'
      CompanyCode                                         as CompanyCode,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentCategory'
      PurchasingDocumentCategory                          as PurchasingDocumentCategory,
      
      @Semantics.text: true
      PurchasingDocumentItemText                          as PurchasingDocumentItemText,
      
      @ObjectModel.foreignKey.association: '_Product'
      Material                                            as Material,
      
      @ObjectModel.foreignKey.association: '_ManufacturerMaterial'
      ManufacturerMaterial                                as ManufacturerMaterial,
      
      SupplierMaterialNumber                              as SupplierMaterialNumber,
      
      @ObjectModel.foreignKey.association: '_ProductGroup'
      MaterialGroup                                       as MaterialGroup,
      
      @ObjectModel.foreignKey.association: '_Plant'
      Plant                                               as Plant,
      
      @ObjectModel.foreignKey.association: '_ManualDeliveryAddress'
      ManualDeliveryAddressID                             as ManualDeliveryAddressID,
      
      @ObjectModel.foreignKey.association: '_ReferenceDeliveryAddress'
      ReferenceDeliveryAddressID                          as ReferenceDeliveryAddressID,
      
      @ObjectModel.foreignKey.association: '_IncotermsClassification'
      IncotermsClassification                             as IncotermsClassification,
      
      IncotermsTransferLocation                           as IncotermsTransferLocation,
      
      @ObjectModel.foreignKey.association: '_OrderQuantityUnit'
      OrderQuantityUnit                                   as OrderQuantityUnit,
      
      @ObjectModel.foreignKey.association: '_WeightUnit'
      WeightUnit                                          as WeightUnit,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisition'
      PurchaseRequisition                                 as PurchaseRequisition,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchaseRequisitionItem'
      PurchaseRequisitionItem                             as PurchaseRequisitionItem,
      
      @Semantics.businessDate.at: true
      SchedAgrmtCumQtyReconcileDate                       as SchedAgrmtCumQtyReconcileDate,
      
      @Semantics.businessDate.at: true
      ItemLastTransmissionDate                            as ItemLastTransmissionDate,
      
      NoDaysReminder1                                     as NoDaysReminder1,
      NoDaysReminder2                                     as NoDaysReminder2,
      NoDaysReminder3                                     as NoDaysReminder3,
      SupplierConfirmationControlKey                      as SupplierConfirmationControlKey,
      PurgDocOrderAcknNumber                              as PurgDocOrderAcknNumber,
      RequirementTracking                                 as RequirementTracking,
      IsOrderAcknRqd                                      as IsOrderAcknRqd,
      PurgDocEstimatedPrice                               as PurchasingPriceIsEstimated,
      PriceIsToBePrinted                                  as PriceIsToBePrinted,
      AccountAssignmentCategory                           as AccountAssignmentCategory,
      
      @ObjectModel.foreignKey.association: '_DocumentCurrency'
      DocumentCurrency                                    as DocumentCurrency,
      
      @Semantics.amount.currencyCode: 'DocumentCurrency'
      NetPriceAmount                                      as NetPriceAmount,
      
      @Semantics.quantity.unitOfMeasure: 'OrderPriceUnit'
      NetPriceQuantity                                    as NetPriceQuantity,
      
      @ObjectModel.foreignKey.association: '_OrderPriceUnit'
      OrderPriceUnit                                      as OrderPriceUnit,
      
      @ObjectModel.foreignKey.association: '_ProductTypeCode'
      cast(ProductType as abap.char(4))                   as ProductType,
      
      @ObjectModel.foreignKey.association: '_MaterialType'
      MaterialType                                        as MaterialType,
      
      @ObjectModel.foreignKey.association: '_StorageLocation'
      StorageLocation                                     as StorageLocation,

      @ObjectModel.foreignKey.association: '_PurgInfoRecordUpdateCode'
      @Semantics.booleanIndicator: true
      IsInfoRecordUpdated                                 as PurchasingInfoRecordUpdateCode,
      
      @ObjectModel.sapObjectNodeTypeReference: 'PurchasingInfoRecord'
      PurchasingInfoRecord                                as PurchasingInfoRecord,
      
      OrdPriceUnitToOrderUnitDnmntr                       as OrdPriceUnitToOrderUnitDnmntr,
      OrderPriceUnitToOrderUnitNmrtr                      as OrderPriceUnitToOrderUnitNmrtr,
      // this is item deletion code
      PurchasingDocumentDeletionCode                      as PurgDocumentItemDeletionCode,
      UnderdelivTolrtdLmtRatioInPct                       as UnderdelivTolrtdLmtRatioInPct,
      OverdelivTolrtdLmtRatioInPct                        as OverdelivTolrtdLmtRatioInPct,
      UnlimitedOverdeliveryIsAllowed                      as UnlimitedOverdeliveryIsAllowed,
      
      @ObjectModel.foreignKey.association: '_StockType'
      StockType                                           as StockType,
      
      TaxCode                                             as TaxCode,
      
      @ObjectModel.foreignKey.association: '_ShippingInstruction'
      ShippingInstruction                                 as ShippingInstruction,

      @Semantics.booleanIndicator: true
      IsInfoAtRegistration                                as IsInfoAtRegistration,
      GoodsReceiptIsExpected                              as GoodsReceiptIsExpected,
      GoodsReceiptIsNonValuated                           as GoodsReceiptIsNonValuated,
      InvoiceIsExpected                                   as InvoiceIsExpected,
      InvoiceIsGoodsReceiptBased                          as InvoiceIsGoodsReceiptBased,
      EvaldRcptSettlmtIsAllowed                           as EvaldRcptSettlmtIsAllowed,
      MinRemainingShelfLife                               as MinRemainingShelfLife,
      QualityMgmtCtrlKey                                  as QualityMgmtCtrlKey,
      QualityCertificateType                              as QualityCertificateType,
      SchedAgrmtCumulativeQtyControl                      as SchedAgrmtCumulativeQtyControl,
      CumulativeQuantityIsNotSent                         as CumulativeQuantityIsNotSent,
      SchedgAgrmtRelCreationProfile                       as SchedgAgrmtRelCreationProfile,

      @Semantics.booleanIndicator: true
      IsRelevantForJITDelivSchedule                       as IsRelevantForJITDelivSchedule,

      @Semantics.businessDate.at: true
      NextFcstDelivSchedSendingDate                       as NextFcstDelivSchedSendingDate,

      @Semantics.businessDate.at: true
      NextJITDelivSchedSendingDate                        as NextJITDelivSchedSendingDate,
      
      ScheduleLineFirmOrderInDays                         as ScheduleLineFirmOrderInDays,
      SchedLineSemiFirmOrderInDays                        as SchedLineSemiFirmOrderInDays,
      FirmTradeOffZoneBindMRP                             as FirmTradeOffZoneBindMRP,

      @Semantics.businessDate.at: true
      _SchedgAgrmtHdrAPI01.PurchasingDocumentOrderDate    as PurchasingDocumentOrderDate,
      
      @ObjectModel.foreignKey.association: '_PurchasingOrganization'
      _SchedgAgrmtHdrAPI01.PurchasingOrganization         as PurchasingOrganization,
      
      @ObjectModel.foreignKey.association: '_PurchasingGroup'
      _SchedgAgrmtHdrAPI01.PurchasingGroup                as PurchasingGroup,
      
      @ObjectModel.foreignKey.association: '_PurchasingDocumentType'
      _SchedgAgrmtHdrAPI01.PurchasingDocumentType         as PurchasingDocumentType,
      
      @ObjectModel.foreignKey.association: '_Supplier'
      _SchedgAgrmtHdrAPI01.Supplier                       as Supplier,

      //Jira 1048
      _SchedgAgrmtHdrAPI01.ValidityStartDate              as ValidityStartDate,

      _SchedgAgrmtHdrAPI01.ValidityEndDate                as ValidityEndDate,

      _SchedgAgrmtHdrAPI01.PurchasingDocumentDeletionCode as PurchasingDocumentDeletionCode,

      @Semantics.quantity.unitOfMeasure: 'OrderQuantityUnit'
      TargetQuantity                                      as TargetQuantity,

      @ObjectModel.association.type: [ #TO_COMPOSITION_PARENT,
                                       #TO_COMPOSITION_ROOT]
      _ScheduleAgreementHdrDEX,
      
      @ObjectModel.association.type: [ #TO_COMPOSITION_CHILD ]
      _SchedAgrmtSchedLineDEX,
      
      _PurchasingInfoRecord,
      _CompanyCode,
      _PurchasingDocumentCategory,
      _Product,
      _ManufacturerMaterial,
      _ProductGroup,
      _Plant,
      _ManualDeliveryAddress,
      _ReferenceDeliveryAddress,
      _IncotermsClassification,
      _OrderQuantityUnit,
      _WeightUnit,
      _PurchaseRequisitionItem,
      _DocumentCurrency,
      _OrderPriceUnit,
      _ProductTypeCode,
      _MaterialType,
      _StorageLocation,
      _PurgInfoRecordUpdateCode,
      _StockType,
      _ShippingInstruction,
      _PurchasingOrganization,
      _PurchasingGroup,
      _PurchasingDocumentType,
      _Supplier
}
```
