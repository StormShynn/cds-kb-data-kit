---
name: C_SUSTDELIVERYDOCUMENTDEX
description: "This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: SUS-INT
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTDEX')/$value
semantic_en: "This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "Delivery Documents Extractor — CDS view tiêu dùng (transactional data) dựa trên I_DeliveryDocument."
keywords:
  - "delivery"
  - "documents"
  - "extractor"
  - "document"
  - "type"
  - "sales"
  - "organization"
  - "shipping"
  - "point"
  - "ship"
  - "party"
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
# C_SUSTDELIVERYDOCUMENTDEX

**This CDS view is used by SAP sustainability applications (such as SAP Responsible Design and Production) for the extraction of delivery document data. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `SUS-INT` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `DeliveryDocument` | ✓ | |  |  | `CHAR(10)` | Delivery |
| `DeliveryDocumentType` |  | |  |  | `CHAR(4)` | Delivery Type |
| `SalesOrganization` |  | |  |  | `CHAR(4)` | Sales Organization |
| `ShippingPoint` |  | |  |  | `CHAR(4)` | Shipping Point / Receiving Point |
| `ShipToParty` |  | |  |  | `CHAR(10)` | Ship-to Party |
| `ShipToPartyAddressID` |  | | `_SDDocumentCompletePartners` | `AddressID` | `CHAR(10)` | Address Number |
| `ShipToPartyCountry` |  | | `_SDDocumentCompletePartners._DfltAddrRprstn` | `Country` | `CHAR(3)` | Country/Region Key |
| `ShipToPartyRegion` |  | | `_SDDocumentCompletePartners._DfltAddrRprstn` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `SoldToParty` |  | |  |  | `CHAR(10)` | Sold-to Party |
| `SoldToPartyAddressID` |  | | `_SoldToParty` | `AddressID` | `CHAR(10)` | Address |
| `SoldToPartyCountry` |  | | `_SoldToParty` | `Country` | `CHAR(3)` | Country/Region Key |
| `SoldToPartyRegion` |  | | `_SoldToParty` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ActualGoodsMovementDate` |  | |  |  | `DATS(8)` | Actual Goods Movement Date |
| `IncotermsClassification` |  | |  |  | `CHAR(3)` | Incoterms (Part 1) |
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
| `_SDDocumentCompletePartners` | `I_SDDocumentPartner` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_SUSTDELIVERYDOCUMENTDEX')/$value)*

```abap
@EndUserText.label: 'Delivery Documents Extractor'

@AccessControl: {
  authorizationCheck: #PRIVILEGED_ONLY,
  personalData.blocking: #NOT_REQUIRED
}

@Metadata: {
  ignorePropagatedAnnotations: true
}

@ObjectModel: {
  usageType: {
    dataClass: #TRANSACTIONAL,
    serviceQuality: #C,
    sizeCategory: #XL
  },
  sapObjectNodeType.name: 'DeliveryDocument',
  supportedCapabilities: [#EXTRACTION_DATA_SOURCE],
  modelingPattern: #NONE
}

@VDM: {
      viewType: #CONSUMPTION,
      lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@Analytics: {
  dataCategory: #FACT,
  internalName:#LOCAL,
  technicalName: 'CSUSTDLVRYDOCDEX',
  dataExtraction: {
      enabled: true,
      delta.changeDataCapture:
        { mapping:
        [
          { role: #MAIN, table: 'likp', tableElement: ['vbeln'], viewElement: ['DeliveryDocument'] },
          { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'vbpa', tableElement: ['vbeln'], viewElement: ['DeliveryDocument'] },
          { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['ShipToPartyAddressID'] },
          { role: #LEFT_OUTER_TO_ONE_JOIN, table: 'adrc', tableElement: ['addrnumber'], viewElement: ['SoldToPartyAddressID'] }
        ]
      }
    }
}

define view entity C_SustDeliveryDocumentDEX
  as select from I_DeliveryDocument

  //Associations
  association [0..1] to I_SDDocumentPartner as _SDDocumentCompletePartners on  $projection.DeliveryDocument                             = _SDDocumentCompletePartners.SDDocument
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
      ShippingPoint,

      //Ship to party
      ShipToParty,
      _SDDocumentCompletePartners.AddressID               as ShipToPartyAddressID, //necessary for delta CDC only
      _SDDocumentCompletePartners._DfltAddrRprstn.Country as ShipToPartyCountry,
      _SDDocumentCompletePartners._DfltAddrRprstn.Region  as ShipToPartyRegion,

      //Sold to party
      SoldToParty,
      _SoldToParty.AddressID as SoldToPartyAddressID, //necessary for delta CDC only
      _SoldToParty.Country   as SoldToPartyCountry,
      _SoldToParty.Region    as SoldToPartyRegion,

      //Goods movement
      ActualGoodsMovementDate,
      IncotermsClassification,
      

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
