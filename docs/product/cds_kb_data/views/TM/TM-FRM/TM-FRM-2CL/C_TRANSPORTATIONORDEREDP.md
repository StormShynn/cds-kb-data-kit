---
name: C_TRANSPORTATIONORDEREDP
description: "Transportation Order Email Data Provider"
app_component: TM-FRM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRANSPORTATIONORDEREDP')/$value
semantic_en: "Transportation Order Email Data Provider"
semantic_vi: "Transportation Order Email Data Provider — CDS view tiêu dùng (transactional data) dựa trên I_TransportationOrder_2."
keywords:
  - "Transportation Order Email Data Provider"
  - "transportation"
  - "order"
  - "email"
  - "data"
  - "provider"
  - "transp"
  - "shipper"
  - "full"
  - "name"
  - "city"
  - "postal"
  - "code"
tags:
  - TM
  - bo:purchaseorder
  - component:TM-FRM-2CL
  - consumption-view
  - order
  - TM-FRM
  - TM-FRM-2CL
---
# C_TRANSPORTATIONORDEREDP

**Transportation Order Email Data Provider**

| Property | Value |
|---|---|
| App Component | `TM-FRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRANSPORTATIONORDEREDP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TransportationOrderUUID` | ✓ | |  |  | `RAW(16)` | Transportation Order UUID |
| `TransportationOrder` |  | |  |  | `CHAR(20)` | Transportation Order |
| `TranspShipperFullName` |  | | `_ShipperAddress` | `AddresseeFullName` | `CHAR(80)` | Full Name of Person |
| `TranspShipperCityName` |  | | `_ShipperAddress` | `CityName` | `CHAR(40)` | City |
| `TranspShipperPostalCode` |  | | `_ShipperAddress` | `PostalCode` | `CHAR(10)` | City Postal Code |
| `TranspShipperStreetName` |  | | `_ShipperAddress` | `StreetName` | `CHAR(60)` | Street |
| `TranspShipperHouseNumber` |  | | `_ShipperAddress` | `HouseNumber` | `CHAR(10)` | House Number |
| `ShipperCountry` |  | | `_ShipperAddress` | `Country` | `CHAR(3)` | Country/Region Key |
| `ShipperRegion` |  | | `_ShipperAddress` | `Region` | `CHAR(3)` | Region (State, Province, County) |
| `ShipperNormalizedAddressID` |  | |  | `AddressID` | `CHAR(10)` | Address Number |
| `TransportationOrderCategory` |  | |  |  | `CHAR(2)` | Transportation Order Category |
| `TransportationOrderType` |  | |  |  | `CHAR(4)` | Transportation Order Type |
| `TranspPurgOrg` |  | |  |  | `CHAR(4)` | Purchasing Organization |
| `TranspPurgGroup` |  | |  |  | `CHAR(3)` | Purchasing Group |
| `TranspOrdResponsiblePerson` |  | |  |  | `CHAR(12)` | Person Responsible |
| `TransportationMode` |  | |  |  | `CHAR(2)` | Transportation Mode |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ShipperAddress` | `I_Address_2` | [0..1] |
| `_Extension` | `E_TransportationOrder` | [1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRANSPORTATIONORDEREDP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_TRANSPORTATIONORDEREDP')/$value)*

```abap
@AbapCatalog.viewEnhancementCategory: [#PROJECTION_LIST]
@AccessControl: {
                  authorizationCheck: #MANDATORY,
                  personalData.blocking: #('TRANSACTIONAL_DATA')
                 }

@EndUserText.label: 'Transportation Order Email Data Provider'
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #CONSUMPTION
@ObjectModel:{
                modelingPattern: #OUTPUT_EMAIL_DATA_PROVIDER,
                usageType:{
                  serviceQuality: #C,
                  sizeCategory: #XL,
                  dataClass: #TRANSACTIONAL
                },
                supportedCapabilities: [ #OUTPUT_EMAIL_DATA_PROVIDER ]
              }

define view entity C_TransportationOrderEDP
  as select from           I_TransportationOrder_2 as TransportationOrder
    left outer to one join I_TranspOrdMainBPAddr   as ShipperAddressID on  TransportationOrder.TransportationOrderUUID  = ShipperAddressID.TransportationOrderUUID
                                                                       and ShipperAddressID.TranspOrdBizPartnerFunction = 'U6'
  // Shipper Address
  association [0..1] to I_Address_2           as _ShipperAddress on  $projection.ShipperNormalizedAddressID    = _ShipperAddress.AddressID
                                                                 and _ShipperAddress.AddressPersonID           = ' '
                                                                 and _ShipperAddress.AddressRepresentationCode = ' '

  association [1]    to E_TransportationOrder as _Extension      on  $projection.TransportationOrderUUID = _Extension.TransportationOrderUUID

{
  key TransportationOrder.TransportationOrderUUID,
      TransportationOrder.TransportationOrder,

      TransportationOrder._TransportationOrderCategory._Text[1: Language=$session.system_language ].TransportationOrderCatDesc,

      // Shipper Address
      _ShipperAddress.AddresseeFullName as TranspShipperFullName,
      _ShipperAddress.CityName          as TranspShipperCityName,
      _ShipperAddress.PostalCode        as TranspShipperPostalCode,
      _ShipperAddress.StreetName        as TranspShipperStreetName,
      _ShipperAddress.HouseNumber       as TranspShipperHouseNumber,
      _ShipperAddress.Country           as ShipperCountry,
      _ShipperAddress.Region            as ShipperRegion,

      // Technical Fields
      ShipperAddressID.AddressID        as ShipperNormalizedAddressID,

      // Needed for Authorization Check
      TransportationOrder.TransportationOrderCategory,
      TransportationOrder.TransportationOrderType,
      TransportationOrder.TranspPurgOrg,
      TransportationOrder.TranspPurgGroup,
      TransportationOrder.TranspOrdResponsiblePerson,
      TransportationOrder.TransportationMode
}
```
