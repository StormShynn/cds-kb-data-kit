---
name: C_SUSTGOODSMOVEMENTDOCUMENTDEX
description: "This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the data extraction of goods movement data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTGOODSMOVEMENTDOCUMENTDEX')/$value
semantic_en: "This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the data extraction of goods movement data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Goods Movement data extractor — CDS view tiêu dùng dựa trên I_MaterialDocumentRecord."
keywords:
  - "goods"
  - "movement"
  - "data"
  - "extractor"
  - "material"
  - "document"
  - "key1"
  - "key2"
  - "key3"
  - "key4"
  - "key5"
tags:
  - SUS
  - bo:companycode
  - component:SUS-INT
  - consumption-view
  - product
  - SUS-INT
---
# C_SUSTGOODSMOVEMENTDOCUMENTDEX

**This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the data extraction of goods movement data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTGOODSMOVEMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` | ✓ | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` | ✓ | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` | ✓ | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` | ✓ | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` | ✓ | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` | ✓ | |  |  | `RAW(1)` | Key field 6 |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Material Document Item |
| `MaterialDocumentLine` |  | |  |  | `NUMC(6)` | Unique Identification of Document Line |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `GoodsMovementRefDocType` |  | |  |  | `CHAR(1)` | Goods Movement Reference Document Type |
| `GoodsMovementIsCancelled` |  | |  |  | `CHAR(1)` | Item has been Canceled |
| `IsReversalMovementType` |  | |  |  | `CHAR(1)` | Has Reversal Movement Type |
| `StockIdentifyingMaterial` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationPlant` |  | | `_StorageLocationAddress` | `Plant` | `CHAR(4)` | Plant |
| `StorageLocationAddressID` |  | | `_StorageLocationAddress` | `AddressID` | `CHAR(10)` | Address Number |
| `StorageLocationCountry` |  | | `_StorageLocationAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `StorageLocationRegion` |  | | `_StorageLocationAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `InventoryStockType` |  | |  |  | `CHAR(2)` | Stock Type of Goods Movement (Stock Identifier) |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `CompanyCodeCurrency` |  | |  |  | `CUKY(5)` | Company Code Currency |
| `ControllingArea` |  | |  |  | `CHAR(4)` | Controlling Area |
| `CostCenter` |  | |  |  | `CHAR(10)` | Cost Center |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `DocumentDate` |  | |  |  | `DATS(8)` | Document Date in Document |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `CalendarDayOfYear` |  | |  | `CalendarDay` | `NUMC(3)` | Day of Year (1 - 366) |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week (1 - 53) |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `SalesOrderItem` |  | |  |  | `NUMC(6)` | Sales Order Item |
| `SalesOrderScheduleLine` |  | |  |  | `NUMC(4)` | Sales Order Schedule |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchasing Document |
| `InvtryMgmtReferenceDocument` |  | |  |  | `CHAR(10)` | Document No. of a Reference Document |
| `ManufacturingOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `AccountingDocExternalReference` |  | |  | `ReferenceDocument` | `CHAR(16)` | Reference Document Number |
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` |  | |  |  | `NUMC(6)` | Delivery Document Item |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Account Number of Customer |
| `GoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `IssgOrRcvgMaterial` |  | |  |  | `CHAR(40)` | Transfer Material |
| `IssgOrRcvgBatch` |  | |  |  | `CHAR(10)` | Transfer Batch |
| `IssuingOrReceivingPlant` |  | |  |  | `CHAR(4)` | Transfer Plant |
| `InventoryTransactionType` |  | |  |  | `CHAR(2)` | Transaction/Event Type |
| `StockOwner` |  | |  |  | `CHAR(10)` | Additional Supplier for Special Stock |
| `IssuingOrReceivingStorageLoc` |  | |  |  | `CHAR(4)` | Receiving/Issuing Storage Location |
| `IssgOrRcvgStorLocAddressID` |  | | `_IssuingOrReceivingStorLocAddr` | `AddressID` | `CHAR(10)` | Address Number |
| `IssgOrRcvgStorLocCountry` |  | | `_IssuingOrReceivingStorLocAddr` | `Country` | `CHAR(3)` | Country/Region Key |
| `IssgOrRcvgStorLocRegion` |  | | `_IssuingOrReceivingStorLocAddr` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `MainProduct` |  | |  | `cast(MaterialDocumentRecord._ManufacturingOrder.Material as pph_matko preserving type)` | `CHAR(40)` | Main Product |
| `PurchasingGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `PurchasingOrganization` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `ProjectNetwork` |  | |  |  | `CHAR(12)` | Network Number for Account Assignment |
| `WBSElementInternalID` |  | |  | `cast(MaterialDocumentRecord.WBSElementInternalID as ps_s4_pspnr preserving type)` | `NUMC(8)` | WBS Element |
| `WBSElementExternalID` |  | |  |  | `CHAR(24)` | Work Breakdown Structure Element (WBS Element) Edited |
| `ProjectExternalID` |  | |  |  | `CHAR(24)` | Project Number (External) Edited |
| `ProjectInternalID` |  | |  | `cast(MaterialDocumentRecord._WBSElementBasicData.ProjectInternalID as ps_pspnr preserving type)` | `NUMC(8)` | Project definition |
| `MaterialType` |  | |  |  | `CHAR(4)` | Material Type |
| `MaterialCategory` |  | |  | `ProductCategory` | `CHAR(2)` | Material Category |
| `MaterialGroup` |  | |  |  | `CHAR(9)` | Material Group |
| `OrderID` |  | | `_Order` | `OrderID` | `CHAR(12)` | Order Number |
| `OrderCategory` |  | | `_Order` | `OrderCategory` | `NUMC(2)` | Order Category |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `ManufacturingOrderCategory` |  | |  |  | `NUMC(2)` | Order Category |
| `PlantAddressID` |  | |  | `AddressID` | `CHAR(10)` | Address |
| `IssgOrRcvgPlantAddressID` |  | |  | `AddressID` | `CHAR(10)` | Address |
| `PlantCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `IssuingOrReceivingPlantCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `IssuingOrReceivingPlantRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SupplierCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `SupplierRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `CustomerCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `CustomerRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  | `Customer` | `CHAR(10)` | Customer Number |
| `SoldToPartyAddressID` |  | |  | `AddressID` | `CHAR(10)` | Address |
| `SoldToPartyCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ShipToParty` |  | |  | `Customer` | `CHAR(10)` | Customer Number |
| `ShipToPartyAddressID` |  | |  | `AddressID` | `CHAR(10)` | Address |
| `ShipToPartyCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `ShipToPartyRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SupplyingPlant` |  | |  |  | `CHAR(4)` | Supplying (issuing) plant in case of stock transport order |
| `SupplyingPlantCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `SupplyingPlantRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SupplyingSupplier` |  | |  |  | `CHAR(10)` | Goods Supplier |
| `SupplyingSupplierCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `SupplyingSupplierRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `IssuingStorageLocation` |  | |  |  | `CHAR(4)` | Issuing Storage Location for Stock Transport Order |
| `IssuingStorageLocationCountry` |  | | `_PurchOrdIssuingStorLoc` | `Country` | `CHAR(3)` | Country/Region Key |
| `IssuingStorageLocationRegion` |  | | `_PurchOrdIssuingStorLoc` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ManualDeliveryAddressID` |  | |  |  | `CHAR(10)` | Manual address number in purchasing document item |
| `ManualDeliveryAddressCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `ManualDeliveryAddressRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `Subcontractor` |  | |  |  | `CHAR(10)` | Supplier to be Supplied/Who is to Receive Delivery |
| `SubcontractorCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `SubcontractorRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `PurchaseOrderReceivingCustomer` |  | |  | `Customer` | `CHAR(10)` | Customer |
| `PurOrdReceivingCustomerCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `PurOrdReceivingCustomerRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `StockChangeCategory` |  | |  | `cast(case when MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit > 0 and MaterialDocumentRecord.IsReversalMovementType = '' or MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit < 0 and MaterialDocumentRecord.IsReversalMovementType = 'X' then 'GR' else case when MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit < 0 and MaterialDocumentRecord.IsReversalMovementType = '' or MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit > 0 and MaterialDocumentRecord.IsReversalMovementType = 'X' then 'GI' else '' end end as nsdm_stock_change_category preserving type)` | `CHAR(2)` | Stock Change Category |
| `IsCrossPlantTransfer` |  | |  | `cast(case when MaterialDocumentRecord.IssuingOrReceivingPlant <> '' and MaterialDocumentRecord.IssuingOrReceivingPlant <> MaterialDocumentRecord.Plant then 'X' else '' end as nsdm_cross_plant_transfer preserving type)` | `CHAR(1)` | Is Cross Plant Transfer |
| `IncotermsClassification` |  | |  | `case when MaterialDocumentRecord._PurchaseOrderItem.IncotermsClassification <> '' then MaterialDocumentRecord._PurchaseOrderItem.IncotermsClassification else MaterialDocumentRecord._PurchaseOrder.IncotermsClassification end` | `CHAR(3)` | Incoterms (Part 1) |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `EntryUnit` |  | |  |  | `UNIT(3)` | Unit of Entry |
| `TotalGoodsMvtAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency |
| `GoodsMovementStkAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Stock Quantity |
| `GoodsMvtCnsmpnAmtInCCCrcy` |  | |  |  | `CURR(13)` | Amount in Local Currency with Sign of Consumption Quantity |
| `MatlStkChangeQtyInBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `MatlCnsmpnQtyInMatlBaseUnit` |  | |  |  | `QUAN(31)` | Consumption Quantity |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(13)` | Quantity in Unit of Entry |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Order` | `I_Order` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTGOODSMOVEMENTDOCUMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTGOODSMOVEMENTDOCUMENTDEX')/$value)*

```abap
@EndUserText.label: 'Goods Movement data extractor'

@AccessControl: {
     authorizationCheck:    #PRIVILEGED_ONLY,
     personalData.blocking: #NOT_REQUIRED
}

@Metadata: {
     ignorePropagatedAnnotations: true
}

@ObjectModel: {
      usageType: {
         sizeCategory:   #XXL,
         serviceQuality: #D,
         dataClass:      #MIXED
      },
      sapObjectNodeType.name: 'MaterialDocument',
      supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
      modelingPattern: #NONE
}

@VDM: {
      viewType: #CONSUMPTION,
      lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
        dataCategory: #FACT,
        internalName: #LOCAL,
        technicalName: 'CSUSTGDSMVTDOCDEX',
        dataExtraction: {
          enabled: true,
          delta.changeDataCapture:
            { mapping:
              [
                { role: #MAIN, table: 'MATDOC', tableElement: ['key1', 'key2', 'key3', 'key4', 'key5', 'key6'], viewElement: ['MaterialDocumentKey1', 'MaterialDocumentKey2', 'MaterialDocumentKey3', 'MaterialDocumentKey4', 'MaterialDocumentKey5', 'MaterialDocumentKey6'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'lfa1',   tableElement: ['lifnr'],      viewElement: ['Supplier'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'kna1',   tableElement: ['kunnr'],      viewElement: ['Customer'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'mara',   tableElement: ['matnr'],      viewElement: ['Material'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',   tableElement: ['addrnumber'], viewElement: ['PlantAddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',   tableElement: ['addrnumber'], viewElement: ['IssgOrRcvgPlantAddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'kna1',   tableElement: ['kunnr'],      viewElement: ['SoldToParty'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',   tableElement: ['addrnumber'], viewElement: ['SoldToPartyAddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'kna1',   tableElement: ['kunnr'],      viewElement: ['ShipToParty'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',   tableElement: ['addrnumber'], viewElement: ['ShipToPartyAddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'lfa1',   tableElement: ['lifnr'],      viewElement: ['SupplyingSupplier'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',   tableElement: ['addrnumber'], viewElement: ['StorageLocationAddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',   tableElement: ['addrnumber'], viewElement: ['ManualDeliveryAddressID'] },
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',   tableElement: ['addrnumber'], viewElement: ['IssgOrRcvgStorLocAddressID'] }
              ]
            }
        }
}

define view entity C_SustGoodsMovementDocumentDEX
  as select from           I_MaterialDocumentRecord       as MaterialDocumentRecord

    left outer to one join P_SustPurchaseOrderItemStorLoc as _PurchOrdIssuingStorLoc on  MaterialDocumentRecord.PurchaseOrderItem = _PurchOrdIssuingStorLoc.PurchaseOrderItem
                                                                                     and MaterialDocumentRecord.PurchaseOrder     = _PurchOrdIssuingStorLoc.PurchaseOrder

    left outer to one join P_SustStorLocAddrMinSqnc       as _StorageLocationAddress on  MaterialDocumentRecord.StorageLocation = _StorageLocationAddress.StorageLocation
                                                                                     and MaterialDocumentRecord.Plant           = _StorageLocationAddress.Plant

    left outer to one join P_SustStorLocAddrMinSqnc       as _IssuingOrReceivingStorLocAddr on MaterialDocumentRecord.IssuingOrReceivingStorageLoc  = _IssuingOrReceivingStorLocAddr.StorageLocation
                                                                                           and MaterialDocumentRecord.IssuingOrReceivingPlant       = _IssuingOrReceivingStorLocAddr.Plant
    
    association [0..1] to I_Order as _Order on MaterialDocumentRecord.OrderID = _Order.OrderID
{

  key MaterialDocumentRecord.MaterialDocumentKey1,
  key MaterialDocumentRecord.MaterialDocumentKey2,
  key MaterialDocumentRecord.MaterialDocumentKey3,
  key MaterialDocumentRecord.MaterialDocumentKey4,
  key MaterialDocumentRecord.MaterialDocumentKey5,
  key MaterialDocumentRecord.MaterialDocumentKey6,

      @Semantics.calendar.year: true
      MaterialDocumentRecord.MaterialDocumentYear,

      MaterialDocumentRecord.MaterialDocument,
      MaterialDocumentRecord.MaterialDocumentItem,
      MaterialDocumentRecord.MaterialDocumentLine,

      MaterialDocumentRecord.GoodsMovementType,
      MaterialDocumentRecord.GoodsMovementRefDocType,
      MaterialDocumentRecord.GoodsMovementIsCancelled,
      MaterialDocumentRecord.IsReversalMovementType,

      MaterialDocumentRecord.StockIdentifyingMaterial,
      MaterialDocumentRecord.Plant,
      MaterialDocumentRecord.StorageLocation,
      _StorageLocationAddress.Plant                                                                   as StorageLocationPlant,
      _StorageLocationAddress.AddressID                                                               as StorageLocationAddressID,
      _StorageLocationAddress.Country                                                                 as StorageLocationCountry,      
      _StorageLocationAddress.Region                                                                  as StorageLocationRegion,      

      MaterialDocumentRecord.InventorySpecialStockType,
      MaterialDocumentRecord.InventoryStockType,
      MaterialDocumentRecord.CompanyCode,
      MaterialDocumentRecord.CompanyCodeCurrency,
      MaterialDocumentRecord.ControllingArea,
      MaterialDocumentRecord.CostCenter,

      @Semantics.businessDate.at: true
      MaterialDocumentRecord.PostingDate,
      MaterialDocumentRecord.DocumentDate,
      MaterialDocumentRecord.ManufactureDate,

      MaterialDocumentRecord.CreationDate,
      MaterialDocumentRecord.CreationTime,

      @Semantics.calendar.dayOfYear: true
      MaterialDocumentRecord.CalendarDay                                                              as CalendarDayOfYear, // The GFN used by the underlying basic view is wrong, and this would raise Prio 2 ATC issues on consumption-level due to a type-mismatch to the default data element

      @Semantics.calendar.quarter: true
      MaterialDocumentRecord.CalendarQuarter,

      @Semantics.calendar.month: true
      MaterialDocumentRecord.CalendarMonth,

      @Semantics.calendar.week: true
      MaterialDocumentRecord.CalendarWeek,

      //References
      MaterialDocumentRecord.SalesOrder,
      MaterialDocumentRecord.SalesOrderItem,
      MaterialDocumentRecord.SalesOrderScheduleLine,
      MaterialDocumentRecord.PurchaseOrder,
      MaterialDocumentRecord.PurchaseOrderItem,      
      MaterialDocumentRecord.InvtryMgmtReferenceDocument,
      MaterialDocumentRecord.ManufacturingOrder,
      MaterialDocumentRecord.ReferenceDocument                                                        as AccountingDocExternalReference, // This is a FIN-specific field, and the GFN used by the underlying basic view does not reflect that. Hence changing the GFN to comply to the VDM, and avoid Prio 2 ATC issues.
      MaterialDocumentRecord.DeliveryDocument,
      MaterialDocumentRecord.DeliveryDocumentItem,
      MaterialDocumentRecord.Material,
      MaterialDocumentRecord.Batch,
      MaterialDocumentRecord.Supplier,
      MaterialDocumentRecord.Customer,
      MaterialDocumentRecord.GoodsRecipientName,
      MaterialDocumentRecord.IssgOrRcvgMaterial,
      MaterialDocumentRecord.IssgOrRcvgBatch,
      MaterialDocumentRecord.IssuingOrReceivingPlant,
      MaterialDocumentRecord.InventoryTransactionType,
      MaterialDocumentRecord.StockOwner,
      MaterialDocumentRecord.IssuingOrReceivingStorageLoc,
      _IssuingOrReceivingStorLocAddr.AddressID                                                        as IssgOrRcvgStorLocAddressID,
      _IssuingOrReceivingStorLocAddr.Country                                                          as IssgOrRcvgStorLocCountry,
      _IssuingOrReceivingStorLocAddr.Region                                                           as IssgOrRcvgStorLocRegion,
      cast(MaterialDocumentRecord._ManufacturingOrder.Material as pph_matko preserving type)          as MainProduct,
      MaterialDocumentRecord._PurchaseOrder.PurchasingGroup,
      MaterialDocumentRecord._PurchaseOrder.PurchasingOrganization,
      MaterialDocumentRecord.ProjectNetwork,
      cast(MaterialDocumentRecord.WBSElementInternalID as ps_s4_pspnr preserving type)                as WBSElementInternalID,
      MaterialDocumentRecord._WBSElementBasicData.WBSElementExternalID                                as WBSElementExternalID,
      MaterialDocumentRecord._WBSElementBasicData._Project.ProjectExternalID                          as ProjectExternalID,
      cast(MaterialDocumentRecord._WBSElementBasicData.ProjectInternalID as ps_pspnr preserving type) as ProjectInternalID,

      //Reference types
      MaterialDocumentRecord._Material.MaterialType,
      MaterialDocumentRecord._Material.ProductCategory                                                as MaterialCategory,
      MaterialDocumentRecord._Material.MaterialGroup,
      
      _Order.OrderID,
      _Order.OrderCategory,
      
      MaterialDocumentRecord.AccountingDocumentType,
      MaterialDocumentRecord._ManufacturingOrder.ManufacturingOrderCategory,

      //Address and Countries
      // Note: To be consistent with the extractors C_SustPlantAddressDEX, I_Supplier and I_Customer, the "Country" information are either retrieved via the
      // associated Address (for Plant), or the direct field at the entity (for Supplier and Customer), even though both would be available for each entity.
      MaterialDocumentRecord._Plant.AddressID                                                         as PlantAddressID,

      @Analytics.hidden: true
      MaterialDocumentRecord._IssuingOrReceivingPlant.AddressID                                       as IssgOrRcvgPlantAddressID, // needed for CDC-based delta

      MaterialDocumentRecord._Plant._StandardOrganizationAddress.Country                              as PlantCountry,
      MaterialDocumentRecord._Plant._StandardOrganizationAddress.Region                               as PlantRegion,
      MaterialDocumentRecord._IssuingOrReceivingPlant._StandardOrganizationAddress.Country            as IssuingOrReceivingPlantCountry,
      MaterialDocumentRecord._IssuingOrReceivingPlant._StandardOrganizationAddress.Region             as IssuingOrReceivingPlantRegion,
      MaterialDocumentRecord._Supplier.Country                                                        as SupplierCountry,
      MaterialDocumentRecord._Supplier.Region                                                         as SupplierRegion,
      MaterialDocumentRecord._Customer.Country                                                        as CustomerCountry,
      MaterialDocumentRecord._Customer.Region                                                         as CustomerRegion,

      MaterialDocumentRecord._DeliveryDocument._SoldToParty.Customer                                  as SoldToParty,
      MaterialDocumentRecord._DeliveryDocument._SoldToParty.AddressID                                 as SoldToPartyAddressID,
      MaterialDocumentRecord._DeliveryDocument._SoldToParty._AddressDefaultRepresentation.Country     as SoldToPartyCountry,
      MaterialDocumentRecord._DeliveryDocument._SoldToParty._AddressDefaultRepresentation.Region      as SoldToPartyRegion,
      
      MaterialDocumentRecord._DeliveryDocument._ShipToParty.Customer                                  as ShipToParty,
      MaterialDocumentRecord._DeliveryDocument._ShipToParty.AddressID                                 as ShipToPartyAddressID,
      MaterialDocumentRecord._DeliveryDocument._ShipToParty._AddressDefaultRepresentation.Country     as ShipToPartyCountry,
      MaterialDocumentRecord._DeliveryDocument._ShipToParty._AddressDefaultRepresentation.Region      as ShipToPartyRegion,
      
      MaterialDocumentRecord._PurchaseOrder.SupplyingPlant,
      MaterialDocumentRecord._PurchaseOrder._SupplyingPlant._StandardOrganizationAddress.Country      as SupplyingPlantCountry,
      MaterialDocumentRecord._PurchaseOrder._SupplyingPlant._StandardOrganizationAddress.Region       as SupplyingPlantRegion,
      MaterialDocumentRecord._PurchaseOrder.SupplyingSupplier,
      MaterialDocumentRecord._PurchaseOrder._SupplyingSupplier.Country                                as SupplyingSupplierCountry,
      MaterialDocumentRecord._PurchaseOrder._SupplyingSupplier.Region                                 as SupplyingSupplierRegion,
      MaterialDocumentRecord._PurchaseOrderItem.IssuingStorageLocation,
      _PurchOrdIssuingStorLoc.Country                                                                 as IssuingStorageLocationCountry,
      _PurchOrdIssuingStorLoc.Region                                                                  as IssuingStorageLocationRegion,
      MaterialDocumentRecord._PurchaseOrderItem.ManualDeliveryAddressID,
      MaterialDocumentRecord._PurchaseOrderItem._ManualDeliveryAddress_2.Country                      as ManualDeliveryAddressCountry,
      MaterialDocumentRecord._PurchaseOrderItem._ManualDeliveryAddress_2.Region                       as ManualDeliveryAddressRegion,
      MaterialDocumentRecord._PurchaseOrderItem.Subcontractor,
      MaterialDocumentRecord._PurchaseOrderItem._Subcontractor._AddressDefaultRepresentation.Country  as SubcontractorCountry,
      MaterialDocumentRecord._PurchaseOrderItem._Subcontractor._AddressDefaultRepresentation.Region   as SubcontractorRegion,
      MaterialDocumentRecord._PurchaseOrderItem.Customer                                              as PurchaseOrderReceivingCustomer,
      MaterialDocumentRecord._PurchaseOrderItem._Customer._AddressDefaultRepresentation.Country       as PurOrdReceivingCustomerCountry,
      MaterialDocumentRecord._PurchaseOrderItem._Customer._AddressDefaultRepresentation.Region        as PurOrdReceivingCustomerRegion,

      // Calculated Fields
      cast(case when MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit > 0 and MaterialDocumentRecord.IsReversalMovementType = '' or MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit < 0 and MaterialDocumentRecord.IsReversalMovementType = 'X'
            then 'GR'
        else case
           when MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit < 0 and MaterialDocumentRecord.IsReversalMovementType = '' or MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit > 0 and MaterialDocumentRecord.IsReversalMovementType = 'X'
             then 'GI'
           else '' end
      end as nsdm_stock_change_category preserving type)                                              as StockChangeCategory,

      cast(case when MaterialDocumentRecord.IssuingOrReceivingPlant <> '' and MaterialDocumentRecord.IssuingOrReceivingPlant <> MaterialDocumentRecord.Plant
        then 'X'
        else ''
      end as nsdm_cross_plant_transfer preserving type)                                               as IsCrossPlantTransfer,

      case when MaterialDocumentRecord._PurchaseOrderItem.IncotermsClassification <> '' then MaterialDocumentRecord._PurchaseOrderItem.IncotermsClassification
        else MaterialDocumentRecord._PurchaseOrder.IncotermsClassification end                        as IncotermsClassification,

      // Units
      MaterialDocumentRecord.MaterialBaseUnit,
      MaterialDocumentRecord.EntryUnit,

      // Amounts
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      MaterialDocumentRecord.TotalGoodsMvtAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      MaterialDocumentRecord.GoodsMovementStkAmtInCCCrcy,
      @Semantics.amount.currencyCode: 'CompanyCodeCurrency'
      @Aggregation.default: #SUM
      MaterialDocumentRecord.GoodsMvtCnsmpnAmtInCCCrcy,

      // Quantities
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @Aggregation.default: #SUM
      MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @Aggregation.default: #SUM
      MaterialDocumentRecord.MatlCnsmpnQtyInMatlBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      @Aggregation.default: #SUM
      MaterialDocumentRecord.QuantityInBaseUnit,
      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      MaterialDocumentRecord.QuantityInEntryUnit

}
// the following where-condition is a copy of I_GoodsMovementDocumentDEX (PO decision)
where
     MaterialDocumentRecord.MaterialDocumentRecordType = 'MDOC'
  or MaterialDocumentRecord.MaterialDocumentRecordType = 'MDOC_CP'
  or MaterialDocumentRecord.MaterialDocumentRecordType = 'MDOC340'
  or MaterialDocumentRecord.MaterialDocumentRecordType = 'CORR'
```
