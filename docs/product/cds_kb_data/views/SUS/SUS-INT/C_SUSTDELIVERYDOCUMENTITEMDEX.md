---
name: C_SUSTDELIVERYDOCUMENTITEMDEX
description: "This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document item data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTITEMDEX')/$value
semantic_en: "This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document item data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Document Item Extractor — CDS view tiêu dùng dựa trên I_DeliveryDocumentItem."
keywords:
  - "delivery"
  - "document"
  - "item"
  - "extractor"
  - "category"
  - "material"
  - "batch"
tags:
  - SUS
  - bo:companycode
  - component:SUS-INT
  - consumption-view
  - delivery
  - document
  - product
  - SUS-INT
---
# C_SUSTDELIVERYDOCUMENTITEMDEX

**This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document item data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` | ✓ | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` | ✓ | |  |  | `NUMC(6)` | Delivery Item |
| `DeliveryDocumentItemCategory` |  | |  |  | `CHAR(4)` | Delivery Item Category |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
| `PlantCountry` |  | |  | `Country` | `CHAR(3)` | Country/Region Key |
| `PlantRegion` |  | |  | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `PlantAddressID` |  | |  | `AddressID` | `CHAR(10)` | Address |
| `StorageLocation` |  | |  |  | `CHAR(4)` | Storage Location |
| `StorageLocationAddressID` |  | | `_StorageLocationAddress` | `AddressID` | `CHAR(10)` | Address Number |
| `StorageLocationCountry` |  | | `_StorageLocationAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `StorageLocationRegion` |  | | `_StorageLocationAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ActualDeliveredQtyInBaseUnit` |  | |  |  | `QUAN(13)` | Actual quantity delivered in stockkeeping units |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ActualDeliveryQuantity` |  | |  |  | `QUAN(13)` | Actual quantity delivered (in sales units) |
| `DeliveryQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `SoldToPartyRegion` |  | | `_DeliveryDocument._SoldToParty` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SoldToPartyCountry` |  | | `_DeliveryDocument._SoldToParty` | `Country` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyAddressID` |  | | `_DeliveryDocument._SoldToParty` | `AddressID` | `CHAR(10)` | Address |
| `SoldToParty` |  | | `_DeliveryDocument` | `SoldToParty` | `CHAR(10)` | Sold-to Party |
| `ReferenceSDDocument` |  | |  |  | `CHAR(10)` | Document Number of Reference Document |
| `ReferenceSDDocumentItem` |  | |  |  | `NUMC(6)` | Item Number of the Reference Item |
| `ReferenceSDDocumentCategory` |  | |  |  | `CHAR(4)` | SD Document Category of Reference SD Document |
| `PurchaseOrder` |  | |  |  | `CHAR(10)` | Purchase Order Number |
| `PurchaseOrderItem` |  | |  |  | `NUMC(5)` | Item Number of Purchase Order |
| `OverallGoodsMovementStatus` |  | | `_DeliveryDocument` | `OverallGoodsMovementStatus` | `CHAR(1)` | Goods Movement Status (All Items) |
| `OverallSDProcessStatus` |  | | `_DeliveryDocument` | `OverallSDProcessStatus` | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `DeliveryDocumentType` |  | | `_DeliveryDocument` | `DeliveryDocumentType` | `CHAR(4)` | Delivery Type |
| `SalesOrganization` |  | | `_DeliveryDocument` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `ShippingPoint` |  | | `_DeliveryDocument` | `ShippingPoint` | `CHAR(4)` | Shipping Point / Receiving Point |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `ShipToParty` |  | | `_DeliveryDocument` | `ShipToParty` | `CHAR(10)` | Ship-to Party |
| `ShipToPartyAddressID` |  | | `_SDDocumentCompletePartners` | `AddressID` | `CHAR(10)` | Address Number |
| `ShipToPartyCountry` |  | | `_SDDocumentCompletePartners._DfltAddrRprstn` | `Country` | `CHAR(3)` | Country/Region Key |
| `ShipToPartyRegion` |  | | `_SDDocumentCompletePartners._DfltAddrRprstn` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ActualGoodsMovementDate` |  | | `_DeliveryDocument` | `ActualGoodsMovementDate` | `DATS(8)` | Actual Goods Movement Date |
| `IncotermsClassification` |  | | `_DeliveryDocument` | `IncotermsClassification` | `CHAR(3)` | Incoterms (Part 1) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Entry time |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeliveryDocument` | `I_DeliveryDocument` | [1..1] |
| `_SDDocumentCompletePartners` | `I_SDDocumentPartner` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTITEMDEX')/$value)*

```abap
@EndUserText.label: 'Delivery Document Item Extractor'

@AccessControl: {
     authorizationCheck: #PRIVILEGED_ONLY,
     personalData.blocking: #NOT_REQUIRED
}

@Metadata: {
     ignorePropagatedAnnotations: true
}

@ObjectModel: {
      usageType: {
         sizeCategory: #XL,
         serviceQuality: #D,
         dataClass: #MIXED
      },
      sapObjectNodeType.name: 'DeliveryDocumentItem',
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
        technicalName: 'CSUSTDLVRYDOCITEMDEX',
        dataExtraction: {
          enabled: true,
          delta.changeDataCapture:
            { mapping:
             [
              {role: #MAIN, table: 'lips', tableElement: ['vbeln','posnr'], viewElement: ['DeliveryDocument', 'DeliveryDocumentItem'] },
              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'likp', tableElement: ['vbeln'], viewElement: ['DeliveryDocument'] },
              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'vbpa', tableElement: ['vbeln'], viewElement: ['DeliveryDocument'] },
              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['ShipToPartyAddressID'] },
              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'kna1', tableElement: ['kunnr'], viewElement: ['SoldToParty'] },
              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['PlantAddressID'] },
              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['SoldToPartyAddressID'] },
              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['StorageLocationAddressID'] }
             ]
            }
         }
}

define view entity C_SustDeliveryDocumentItemDEX
  as select from           I_DeliveryDocumentItem   as DeliveryDocumentItem

    left outer to one join P_SustStorLocAddrMinSqnc as _StorageLocationAddress on  DeliveryDocumentItem.StorageLocation = _StorageLocationAddress.StorageLocation
                                                                               and DeliveryDocumentItem.Plant           = _StorageLocationAddress.Plant

  //Associations
  association [1..1] to I_DeliveryDocument           as _DeliveryDocument           on  $projection.DeliveryDocument = _DeliveryDocument.DeliveryDocument
  association [0..1] to I_SDDocumentPartner as _SDDocumentCompletePartners on  $projection.DeliveryDocument                             = _SDDocumentCompletePartners.SDDocument
                                                                                    and _SDDocumentCompletePartners.PartnerFunction              = 'WE'
                                                                                    and (
                                                                                       _SDDocumentCompletePartners.SDDocPartnerAddressRefType    = 'D'
                                                                                       or _SDDocumentCompletePartners.SDDocPartnerAddressRefType = 'E'
                                                                                       or _SDDocumentCompletePartners.SDDocPartnerAddressRefType = 'F'
                                                                                     )



{
  key DeliveryDocumentItem.DeliveryDocument,
  key DeliveryDocumentItem.DeliveryDocumentItem,
      DeliveryDocumentItem.DeliveryDocumentItemCategory,
      DeliveryDocumentItem.Material,
      DeliveryDocumentItem.Batch,
      DeliveryDocumentItem.Plant,
      DeliveryDocumentItem._Plant._StandardOrganizationAddress.Country as PlantCountry,
      DeliveryDocumentItem._Plant._StandardOrganizationAddress.Region  as PlantRegion,
      DeliveryDocumentItem._Plant.AddressID                            as PlantAddressID,
      DeliveryDocumentItem.StorageLocation,
      _StorageLocationAddress.AddressID                   as StorageLocationAddressID,
      _StorageLocationAddress.Country                     as StorageLocationCountry,
      _StorageLocationAddress.Region                      as StorageLocationRegion,

      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      DeliveryDocumentItem.ActualDeliveredQtyInBaseUnit,
      DeliveryDocumentItem.BaseUnit,
      @Aggregation.default: #SUM
      @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
      DeliveryDocumentItem.ActualDeliveryQuantity,
      DeliveryDocumentItem.DeliveryQuantityUnit,

      _DeliveryDocument._SoldToParty.Region as SoldToPartyRegion,
      _DeliveryDocument._SoldToParty.Country as SoldToPartyCountry,
      _DeliveryDocument._SoldToParty.AddressID as SoldToPartyAddressID,
      _DeliveryDocument.SoldToParty,

      DeliveryDocumentItem.ReferenceSDDocument,
      DeliveryDocumentItem.ReferenceSDDocumentItem,
      DeliveryDocumentItem.ReferenceSDDocumentCategory,

      DeliveryDocumentItem.PurchaseOrder,
      DeliveryDocumentItem.PurchaseOrderItem,


      //Status
      _DeliveryDocument.OverallGoodsMovementStatus        as OverallGoodsMovementStatus,
      _DeliveryDocument.OverallSDProcessStatus            as OverallSDProcessStatus,
      _DeliveryDocument.DeliveryDocumentType              as DeliveryDocumentType,
      _DeliveryDocument.SalesOrganization                 as SalesOrganization,
      _DeliveryDocument.ShippingPoint,
      DeliveryDocumentItem.DistributionChannel,
      DeliveryDocumentItem.Division,

      //Ship to party
      _DeliveryDocument.ShipToParty                       as ShipToParty,
      _SDDocumentCompletePartners.AddressID               as ShipToPartyAddressID, //necessary for delta CDC only
      _SDDocumentCompletePartners._DfltAddrRprstn.Country as ShipToPartyCountry,
      _SDDocumentCompletePartners._DfltAddrRprstn.Region  as ShipToPartyRegion,

      //Goods Movement
      _DeliveryDocument.ActualGoodsMovementDate           as ActualGoodsMovementDate,
      _DeliveryDocument.IncotermsClassification           as IncotermsClassification,

      //admin
      DeliveryDocumentItem.CreatedByUser,
      DeliveryDocumentItem.CreationDate,
      DeliveryDocumentItem.CreationTime,
      DeliveryDocumentItem.LastChangeDate

}
```
