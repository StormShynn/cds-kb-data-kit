---
name: C_RDPGOODSMOVEMENTDOCUMENTDEX
description: "This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents."
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPGOODSMOVEMENTDOCUMENTDEX')/$value
semantic_en: "This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents."
semantic_vi: "Goods Movement Extractor for RDP — CDS view tiêu dùng dựa trên I_MaterialDocumentRecord."
keywords:
  - "goods"
  - "movement"
  - "extractor"
  - "for"
  - "rdp"
  - "material"
  - "document"
  - "key1"
  - "key2"
  - "key3"
  - "key4"
  - "key5"
tags:
  - SUS
  - bo:material
  - component:SUS-RDP-INT
  - consumption-view
  - document
  - material
  - product
  - SUS-RDP
  - SUS-RDP-INT
---
# C_RDPGOODSMOVEMENTDOCUMENTDEX

**This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant material flows. The view provides the necessary data based upon posted material documents.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPGOODSMOVEMENTDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaterialDocumentKey1` | ✓ | |  |  | `RAW(4)` | Key field 1 |
| `MaterialDocumentKey2` | ✓ | |  |  | `RAW(4)` | Key field 2 |
| `MaterialDocumentKey3` | ✓ | |  |  | `RAW(5)` | Key field 3 |
| `MaterialDocumentKey4` | ✓ | |  |  | `RAW(1)` | Key field 4 |
| `MaterialDocumentKey5` | ✓ | |  |  | `RAW(1)` | Key field 5 |
| `MaterialDocumentKey6` | ✓ | |  |  | `RAW(1)` | Key field 6 |
| `StockIdentifyingMaterial` |  | |  |  | `CHAR(40)` | Material for Stock Mamangement |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `InventorySpecialStockType` |  | |  |  | `CHAR(1)` | Special Stock Type |
| `CompanyCode` |  | |  |  | `CHAR(4)` | Company Code |
| `MaterialBaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `QuantityInBaseUnit` |  | |  |  | `QUAN(13)` | Quantity |
| `MatlStkChangeQtyInBaseUnit` |  | |  |  | `QUAN(31)` | Stock Quantity |
| `EntryUnit` |  | |  |  | `UNIT(3)` | Unit of Entry |
| `QuantityInEntryUnit` |  | |  |  | `QUAN(13)` | Quantity in Unit of Entry |
| `PostingDate` |  | |  |  | `DATS(8)` | Posting Date in the Document |
| `CreationDate` |  | |  |  | `DATS(8)` | Day On Which Accounting Document Was Entered |
| `CreationTime` |  | |  |  | `TIMS(6)` | Time of Entry |
| `CalendarQuarter` |  | |  |  | `NUMC(1)` | Quarter (1 - 4) |
| `CalendarMonth` |  | |  |  | `NUMC(2)` | Month (1 - 12) |
| `CalendarWeek` |  | |  |  | `NUMC(2)` | Calendar Week (1 - 53) |
| `CalendarDayOfYear` |  | |  | `CalendarDay` | `NUMC(3)` | Day of Year (1 - 366) |
| `ManufactureDate` |  | |  |  | `DATS(8)` | Date of Manufacture |
| `MaterialDocument` |  | |  |  | `CHAR(10)` | Number of Material Document |
| `MaterialDocumentYear` |  | |  |  | `NUMC(4)` | Material Document Year |
| `MaterialDocumentItem` |  | |  |  | `NUMC(4)` | Material Document Item |
| `MaterialDocumentLine` |  | |  |  | `NUMC(6)` | Unique Identification of Document Line |
| `SalesOrder` |  | |  |  | `CHAR(10)` | Sales Order Number |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `InvtryMgmtReferenceDocument` |  | |  |  | `CHAR(10)` | Document No. of a Reference Document |
| `ManufacturingOrder` |  | |  |  | `CHAR(12)` | Manufacturing Order |
| `AccountingDocExternalReference` |  | |  | `ReferenceDocument` | `CHAR(16)` | Reference Document Number |
| `DeliveryDocument` |  | |  |  | `CHAR(10)` | Delivery |
| `GoodsMovementIsCancelled` |  | |  |  | `CHAR(1)` | Item has been Canceled |
| `IsReversalMovementType` |  | |  |  | `CHAR(1)` | Has Reversal Movement Type |
| `GoodsMovementType` |  | |  |  | `CHAR(3)` | Movement Type (Inventory Management) |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Supplier` |  | |  |  | `CHAR(10)` | Account Number of Supplier |
| `Customer` |  | |  |  | `CHAR(10)` | Account Number of Customer |
| `GoodsRecipientName` |  | |  |  | `CHAR(12)` | Goods Recipient |
| `IssgOrRcvgMaterial` |  | |  |  | `CHAR(40)` | Transfer Material |
| `IssgOrRcvgBatch` |  | |  |  | `CHAR(10)` | Transfer Batch |
| `GoodsMovementRefDocType` |  | |  |  | `CHAR(1)` | Goods Movement Reference Document Type |
| `IssuingOrReceivingPlant` |  | |  |  | `CHAR(4)` | Transfer Plant |
| `AccountingDocumentType` |  | |  |  | `CHAR(2)` | Document Type |
| `InventoryTransactionType` |  | |  |  | `CHAR(2)` | Transaction/Event Type |
| `PlantAddressID` |  | | `_Plant` | `AddressID` | `CHAR(10)` | Address |
| `IssgOrRcvgPlantAddressID` |  | | `_IssuingOrReceivingPlant` | `AddressID` | `CHAR(10)` | Address |
| `PlantCountry` |  | | `_Plant._StandardOrganizationAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `IssuingOrReceivingPlantCountry` |  | | `_IssuingOrReceivingPlant._StandardOrganizationAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `SupplierCountry` |  | | `_Supplier` | `Country` | `CHAR(3)` | Country/Region Key |
| `CustomerCountry` |  | | `_Customer` | `Country` | `CHAR(3)` | Country/Region Key |
| `MaterialType` |  | | `_Product` | `ProductType` | `CHAR(4)` | Product Type |
| `MaterialCategory` |  | | `_Product` | `ProductCategory` | `CHAR(2)` | Product Category |
| `StockChangeCategory` |  | |  | `cast(case when MatlStkChangeQtyInBaseUnit > 0 and IsReversalMovementType = '' or MatlStkChangeQtyInBaseUnit < 0 and IsReversalMovementType = 'X' then 'GR' else case when MatlStkChangeQtyInBaseUnit < 0 and IsReversalMovementType = '' or MatlStkChangeQtyInBaseUnit > 0 and IsReversalMovementType = 'X' then 'GI' else '' end end as nsdm_stock_change_category preserving type)` | `CHAR(2)` | Stock Change Category |
| `IsCrossPlantTransfer` |  | |  | `cast(case when IssuingOrReceivingPlant <> '' and IssuingOrReceivingPlant <> Plant then 'X' else '' end as nsdm_cross_plant_transfer preserving type)` | `CHAR(1)` | Is Cross Plant Transfer |
| `IncotermsClassification` |  | |  | `case when _PurchaseOrderItem.IncotermsClassification <> '' then _PurchaseOrderItem.IncotermsClassification else _PurchaseOrder.IncotermsClassification end` | `CHAR(3)` | Incoterms (Part 1) |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Plant` | `I_Plant` | [0..1] |
| `_IssuingOrReceivingPlant` | `I_Plant` | [0..1] |
| `_Supplier` | `I_Supplier` | [0..1] |
| `_Customer` | `I_Customer` | [0..1] |
| `_Product` | `I_Product` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPGOODSMOVEMENTDOCUMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPGOODSMOVEMENTDOCUMENTDEX')/$value)*

```abap
@EndUserText.label: 'Goods Movement Extractor for RDP'

@AbapCatalog: {
    sqlViewName: 'CRDPGDSMVTDDEX',
    compiler.compareFilter: true
}
@AccessControl: {
     authorizationCheck:    #PRIVILEGED_ONLY,
     personalData.blocking: #NOT_REQUIRED
}
@ClientHandling.algorithm: #SESSION_VARIABLE
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
                { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc',   tableElement: ['addrnumber'], viewElement: ['IssgOrRcvgPlantAddressID'] }
              ]
            }
        }
}
@Metadata: {
        ignorePropagatedAnnotations: true
}

@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'C_SustGoodsMovementDocumentDEX'

define view C_RDPGoodsMovementDocumentDEX
  as select from I_MaterialDocumentRecord as MaterialDocumentRecord

  association [0..1] to I_Plant    as _Plant                   on $projection.Plant = _Plant.Plant
  association [0..1] to I_Plant    as _IssuingOrReceivingPlant on $projection.IssuingOrReceivingPlant = _IssuingOrReceivingPlant.Plant
  association [0..1] to I_Supplier as _Supplier                on $projection.Supplier = _Supplier.Supplier
  association [0..1] to I_Customer as _Customer                on $projection.Customer = _Customer.Customer
  association [0..1] to I_Product  as _Product                 on $projection.Material = _Product.Product

{
  key MaterialDocumentRecord.MaterialDocumentKey1,
  key MaterialDocumentRecord.MaterialDocumentKey2,
  key MaterialDocumentRecord.MaterialDocumentKey3,
  key MaterialDocumentRecord.MaterialDocumentKey4,
  key MaterialDocumentRecord.MaterialDocumentKey5,
  key MaterialDocumentRecord.MaterialDocumentKey6,

      MaterialDocumentRecord.StockIdentifyingMaterial,
      MaterialDocumentRecord.Plant,
      MaterialDocumentRecord.InventorySpecialStockType,
      MaterialDocumentRecord.CompanyCode,

      @Semantics.unitOfMeasure: true
      MaterialDocumentRecord.MaterialBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      MaterialDocumentRecord.QuantityInBaseUnit,

      @Semantics.quantity.unitOfMeasure: 'MaterialBaseUnit'
      MaterialDocumentRecord.MatlStkChangeQtyInBaseUnit,

      @Semantics.unitOfMeasure: true
      MaterialDocumentRecord.EntryUnit,

      @Semantics.quantity.unitOfMeasure: 'EntryUnit'
      MaterialDocumentRecord.QuantityInEntryUnit,

      @Semantics.businessDate.at: true
      MaterialDocumentRecord.PostingDate,

      MaterialDocumentRecord.CreationDate,
      MaterialDocumentRecord.CreationTime,

      @Semantics.calendar.quarter: true
      MaterialDocumentRecord.CalendarQuarter,

      @Semantics.calendar.month: true
      MaterialDocumentRecord.CalendarMonth,

      @Semantics.calendar.week: true
      MaterialDocumentRecord.CalendarWeek,

      @Semantics.calendar.dayOfYear: true
      MaterialDocumentRecord.CalendarDay                 as CalendarDayOfYear, // The GFN used by the underlying basic view is wrong, and this would raise Prio 2 ATC issues on consumption-level due to a type-mismatch to the default data element

      MaterialDocumentRecord.ManufactureDate,
      MaterialDocumentRecord.MaterialDocument,

      @Semantics.calendar.year: true
      MaterialDocumentRecord.MaterialDocumentYear,

      MaterialDocumentRecord.MaterialDocumentItem,
      MaterialDocumentRecord.MaterialDocumentLine,
      MaterialDocumentRecord.SalesOrder,
      MaterialDocumentRecord.PurchaseOrder,
      MaterialDocumentRecord.InvtryMgmtReferenceDocument,
      MaterialDocumentRecord.ManufacturingOrder,
      MaterialDocumentRecord.ReferenceDocument           as AccountingDocExternalReference, // This is a FIN-specific field, and the GFN used by the underlying basic view does not reflect that. Hence changing the GFN to comply to the VDM, and avoid Prio 2 ATC issues.
      MaterialDocumentRecord.DeliveryDocument,
      MaterialDocumentRecord.GoodsMovementIsCancelled,
      MaterialDocumentRecord.IsReversalMovementType,
      MaterialDocumentRecord.GoodsMovementType,
      MaterialDocumentRecord.Material,
      MaterialDocumentRecord.Batch,
      MaterialDocumentRecord.Supplier,
      MaterialDocumentRecord.Customer,
      MaterialDocumentRecord.GoodsRecipientName,
      MaterialDocumentRecord.IssgOrRcvgMaterial,
      MaterialDocumentRecord.IssgOrRcvgBatch,
      MaterialDocumentRecord.GoodsMovementRefDocType,
      MaterialDocumentRecord.IssuingOrReceivingPlant,
      MaterialDocumentRecord.AccountingDocumentType,
      MaterialDocumentRecord.InventoryTransactionType,

      // Note: To be consistent with the extractors C_SustPlantAddressDEX, I_Supplier and I_Customer, the "Country" information are either retrieved via the
      // associated Address (for Plant), or the direct field at the entity (for Supplier and Customer), even though both would be available for each entity.
      @Analytics.hidden: true
      _Plant.AddressID                                   as PlantAddressID, // needed for CDC-based delta

      @Analytics.hidden: true
      _IssuingOrReceivingPlant.AddressID                 as IssgOrRcvgPlantAddressID, // needed for CDC-based delta

      _Plant._StandardOrganizationAddress.Country                            as PlantCountry,
      _IssuingOrReceivingPlant._StandardOrganizationAddress.Country          as IssuingOrReceivingPlantCountry,
      _Supplier.Country                                  as SupplierCountry,
      _Customer.Country                                  as CustomerCountry,

      _Product.ProductType                               as MaterialType,
      _Product.ProductCategory                           as MaterialCategory,
      
      // Calculated Fields
      cast(case when MatlStkChangeQtyInBaseUnit > 0 and IsReversalMovementType = '' or MatlStkChangeQtyInBaseUnit < 0 and IsReversalMovementType = 'X'
            then 'GR'
        else case
           when MatlStkChangeQtyInBaseUnit < 0 and IsReversalMovementType = '' or MatlStkChangeQtyInBaseUnit > 0 and IsReversalMovementType = 'X'
             then 'GI'
           else '' end
      end as nsdm_stock_change_category preserving type) as StockChangeCategory,

      cast(case when IssuingOrReceivingPlant <> '' and IssuingOrReceivingPlant <> Plant
        then 'X'
        else ''
      end as nsdm_cross_plant_transfer preserving type)  as IsCrossPlantTransfer,
      
      case when _PurchaseOrderItem.IncotermsClassification <> '' then _PurchaseOrderItem.IncotermsClassification
        else _PurchaseOrder.IncotermsClassification end  as IncotermsClassification

}
// the following where-condition is a copy of I_GoodsMovementDocumentDEX (PO decision)
where
     MaterialDocumentRecordType = 'MDOC'
  or MaterialDocumentRecordType = 'MDOC_CP'
  or MaterialDocumentRecordType = 'MDOC340'
  or MaterialDocumentRecordType = 'CORR'
```
