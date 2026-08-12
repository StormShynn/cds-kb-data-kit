---
name: C_RDPDELIVERYDOCUMENTITEMDEX
description: "This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery document items. The view provides the necessary data based upon delivery document items. See also CDS view I_DeliveryDocumentItem. See Delivery Document Item. Note: The view does support delta extraction."
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTITEMDEX')/$value
semantic_en: "This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery document items. The view provides the necessary data based upon delivery document items. See also CDS view I_DeliveryDocumentItem. See Delivery Document Item. Note: The view does support delta extraction."
semantic_vi: "Delivery Document Item Extractor for RDP — CDS view tiêu dùng (transactional data) dựa trên I_DeliveryDocumentItem."
keywords:
  - "delivery"
  - "document"
  - "item"
  - "extractor"
  - "for"
  - "rdp"
  - "category"
  - "material"
  - "batch"
tags:
  - SUS
  - bo:material
  - component:SUS-RDP-INT
  - consumption-view
  - delivery
  - document
  - product
  - SUS-RDP
  - SUS-RDP-INT
---
# C_RDPDELIVERYDOCUMENTITEMDEX

**This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery document items. The view provides the necessary data based upon delivery document items. See also CDS view I_DeliveryDocumentItem. See Delivery Document Item. Note: The view does support delta extraction.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTITEMDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` | ✓ | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentItem` | ✓ | |  |  | `NUMC(6)` | Delivery Item |
| `DeliveryDocumentItemCategory` |  | |  |  | `CHAR(4)` | Delivery Item Category |
| `Material` |  | |  |  | `CHAR(40)` | Material Number |
| `Batch` |  | |  |  | `CHAR(10)` | Batch Number |
| `ActualDeliveredQtyInBaseUnit` |  | |  |  | `QUAN(13)` | Actual quantity delivered in stockkeeping units |
| `BaseUnit` |  | |  |  | `UNIT(3)` | Base Unit of Measure |
| `ActualDeliveryQuantity` |  | |  |  | `QUAN(13)` | Actual quantity delivered (in sales units) |
| `DeliveryQuantityUnit` |  | |  |  | `UNIT(3)` | Sales Unit |
| `OverallGoodsMovementStatus` |  | | `_DeliveryDocument` | `OverallGoodsMovementStatus` | `CHAR(1)` | Goods Movement Status (All Items) |
| `OverallSDProcessStatus` |  | | `_DeliveryDocument` | `OverallSDProcessStatus` | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `DeliveryDocumentType` |  | | `_DeliveryDocument` | `DeliveryDocumentType` | `CHAR(4)` | Delivery Type |
| `SalesOrganization` |  | | `_DeliveryDocument` | `SalesOrganization` | `CHAR(4)` | Sales Organization |
| `DistributionChannel` |  | |  |  | `CHAR(2)` | Distribution Channel |
| `Division` |  | |  |  | `CHAR(2)` | Division |
| `Plant` |  | |  |  | `CHAR(4)` | Plant |
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
| `_SDDocumentCompletePartners` | `I_SDDocumentCompletePartners` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTITEMDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTITEMDEX')/$value)*

```abap
@AbapCatalog:{
      sqlViewName: 'CRDPDLVYDCITMDEX',
      compiler.compareFilter: true
      }
@AccessControl: {
     authorizationCheck: #PRIVILEGED_ONLY,
     personalData.blocking: #NOT_REQUIRED
      }
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel: {
      usageType: {
         sizeCategory: #XL,
         serviceQuality: #C,
         dataClass: #TRANSACTIONAL
      },
      sapObjectNodeType.name: 'SalesDocumentItem',
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
        dataExtraction: { enabled: true,
                          delta.changeDataCapture:
                            { mapping:
                             [
                              {role: #MAIN, table: 'lips', tableElement: ['vbeln','posnr'], viewElement: ['DeliveryDocument', 'DeliveryDocumentItem'] },
                              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'likp', tableElement: ['vbeln'], viewElement: ['DeliveryDocument'] },
                              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'vbpa', tableElement: ['vbeln'], viewElement: ['DeliveryDocument'] },
                              {role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['ShipToPartyAddressID'] }
                             ]
                            }
                         }
      }
@Metadata: {
        ignorePropagatedAnnotations: true,
        allowExtensions: true
      }
@EndUserText.label: 'Delivery Document Item Extractor for RDP'

@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'C_SustDeliveryDocumentItemDEX'

define view C_RDPDeliveryDocumentItemDEX
  as select from I_DeliveryDocumentItem
  
  //Associations 
  association [1..1] to I_DeliveryDocument as _DeliveryDocument on $projection.DeliveryDocument = _DeliveryDocument.DeliveryDocument
  association [0..1] to I_SDDocumentCompletePartners as _SDDocumentCompletePartners on  $projection.DeliveryDocument                             = _SDDocumentCompletePartners.SDDocument
                                                                                    and _SDDocumentCompletePartners.SDDocumentItem               = '000000'
                                                                                    and _SDDocumentCompletePartners.PartnerFunction              = 'WE'
                                                                                    and (
                                                                                       _SDDocumentCompletePartners.SDDocPartnerAddressRefType    = 'D'
                                                                                       or _SDDocumentCompletePartners.SDDocPartnerAddressRefType = 'E'
                                                                                       or _SDDocumentCompletePartners.SDDocPartnerAddressRefType = 'F'
                                                                                     )
  
{
  key DeliveryDocument,
  key DeliveryDocumentItem,
      DeliveryDocumentItemCategory,
      Material,
      Batch,
     
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'BaseUnit'
      ActualDeliveredQtyInBaseUnit,
      BaseUnit,
      @DefaultAggregation: #SUM
      @Semantics.quantity.unitOfMeasure: 'DeliveryQuantityUnit'
      ActualDeliveryQuantity,
      DeliveryQuantityUnit,
      
      //Status
      _DeliveryDocument.OverallGoodsMovementStatus as OverallGoodsMovementStatus,
      _DeliveryDocument.OverallSDProcessStatus     as OverallSDProcessStatus,
      _DeliveryDocument.DeliveryDocumentType       as DeliveryDocumentType,
      _DeliveryDocument.SalesOrganization          as SalesOrganization,
      DistributionChannel,
      Division,
      Plant,
      
      //Ship to party
      _DeliveryDocument.ShipToParty                as ShipToParty,            
      _SDDocumentCompletePartners.AddressID        as ShipToPartyAddressID, //necessary for delta CDC only
      _SDDocumentCompletePartners._DfltAddrRprstn.Country as ShipToPartyCountry,
      _SDDocumentCompletePartners._DfltAddrRprstn.Region  as ShipToPartyRegion,
      
      //Good Movement
      _DeliveryDocument.ActualGoodsMovementDate    as ActualGoodsMovementDate,
      _DeliveryDocument.IncotermsClassification    as IncotermsClassification,
      
      //admin
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangeDate

}
```
