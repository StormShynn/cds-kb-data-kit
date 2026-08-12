---
name: C_RDPDELIVERYDOCUMENTDEX
description: "This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery documents. The view provides the necessary data based upon delivery documents. See also CDS view I_DeliveryDocument. See Delivery Document. Note: This CDS view supports delta extraction."
app_component: SUS-RDP-INT
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTDEX')/$value
semantic_en: "This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery documents. The view provides the necessary data based upon delivery documents. See also CDS view I_DeliveryDocument. See Delivery Document. Note: This CDS view supports delta extraction."
semantic_vi: "Delivery Documents Extractor for RDP — CDS view tiêu dùng (transactional data) dựa trên I_DeliveryDocument."
keywords:
  - "delivery"
  - "documents"
  - "extractor"
  - "for"
  - "rdp"
  - "document"
  - "type"
  - "sales"
  - "organization"
  - "ship"
  - "party"
  - "address"
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
# C_RDPDELIVERYDOCUMENTDEX

**This CDS view is used by SAP Responsible Design and Production for the data extraction of relevant delivery documents. The view provides the necessary data based upon delivery documents. See also CDS view I_DeliveryDocument. See Delivery Document. Note: This CDS view supports delta extraction.**

| Property | Value |
|---|---|
| App Component | `SUS-RDP-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` | ✓ | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ShipToPartyAddressID` |  | | `_SDDocumentCompletePartners` | `AddressID` | `CHAR(10)` | Address Number |
| `ShipToPartyCountry` |  | | `_SDDocumentCompletePartners._DfltAddrRprstn` | `Country` | `CHAR(3)` | Country/Region Key |
| `ShipToPartyRegion` |  | | `_SDDocumentCompletePartners._DfltAddrRprstn` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ActualGoodsMovementDate` |  | |  |  | `DATS(8)` | Actual Goods Movement Date |
| `OverallSDProcessStatus` |  | |  |  | `CHAR(1)` | Overall Processing Status (Header/All Items) |
| `OverallGoodsMovementStatus` |  | |  |  | `CHAR(1)` | Goods Movement Status (All Items) |
| `CreatedByUser` |  | |  |  | `CHAR(12)` | Name of Person Responsible for Creating the Object |
| `CreationDate` |  | |  |  | `DATS(8)` | Record Creation Date |
| `CreationTime` |  | |  |  | `TIMS(6)` | Entry time |
| `LastChangedByUser` |  | |  |  | `CHAR(12)` | Name of Person Who Changed Object |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Last Changed On |
| `DeletionIndicator` |  | |  |  | `CHAR(1)` | Document deletion indicator |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_SDDocumentCompletePartners` | `I_SDDocumentCompletePartners` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_RDPDELIVERYDOCUMENTDEX')/$value)*

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE

@AbapCatalog: {
  sqlViewName: 'CRDPDELIVDOCDEX',
  compiler.compareFilter: true
}

@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  sapObjectNodeType.name: 'SalesDocument',
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
  modelingPattern: #NONE
}

@Consumption.semanticObject: 'SalesDocument'

@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #NOT_REQUIRED
}

@VDM: {
      viewType: #CONSUMPTION,
      lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Metadata: {
  ignorePropagatedAnnotations: true,
  allowExtensions: true
}

@EndUserText.label: 'Delivery Documents Extractor for RDP'

@Analytics: {
  dataCategory: #FACT,
  dataExtraction: {
      enabled: true,
      delta.changeDataCapture:
        { mapping:
        [
          { role: #MAIN, table: 'likp', tableElement: ['vbeln'], viewElement: ['DeliveryDocument'] },
          { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'vbpa', tableElement: ['vbeln'], viewElement: ['DeliveryDocument'] },
          { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['ShipToPartyAddressID'] }
        ]
      }
    },
  internalName:#LOCAL
}

@VDM.lifecycle.status: #DEPRECATED
@VDM.lifecycle.successor: 'C_SustDeliveryDocumentDEX'

define view C_RDPDeliveryDocumentDEX
  as select from I_DeliveryDocument

  //Associations
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
      DeliveryDocumentType,
      SalesOrganization,

      //Ship to party
      ShipToParty,
      _SDDocumentCompletePartners.AddressID        as ShipToPartyAddressID, //necessary for delta CDC only
      _SDDocumentCompletePartners._DfltAddrRprstn.Country as ShipToPartyCountry,
      _SDDocumentCompletePartners._DfltAddrRprstn.Region  as ShipToPartyRegion,

      //Goods movement
      ActualGoodsMovementDate,

      //Status
      OverallSDProcessStatus,
      OverallGoodsMovementStatus,

      //Admin
      CreatedByUser,
      CreationDate,
      CreationTime,
      LastChangedByUser,
      LastChangeDate,
      DeletionIndicator
};
```
