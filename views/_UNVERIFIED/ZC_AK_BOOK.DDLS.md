---
name: ZC_AK_BOOK.DDLS
description: Booking  Consumption View
software_component: SAPSCORE
release_state: unverified
clean_core_level: A
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://github.com/Akankshakoti20/Rap_code/blob/4a76deb05c1086f0cf8bd3221465427d880249e0/src/zc_ak_book.ddls.asddls
semantic_en: Booking  Consumption View — CDS view.
semantic_vi: Booking  Consumption View — CDS view dựa trên Booking  Consumption View.
keywords:
  - booking
  - consumption
  - travel
  - date
  - customer
tags:
  - CO
  - component:CO
  - lob:controlling
---
# ZC_AK_BOOK.DDLS

**Booking  Consumption View**

| Property | Value |
|---|---|
| Software Component | `SAPSCORE` |
| Release State | Unverified (auto-discovered, needs review) (Level A) |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://github.com/Akankshakoti20/Rap_code/blob/4a76deb05c1086f0cf8bd3221465427d880249e0/src/zc_ak_book.ddls.asddls) |

## Fields

| Field | Data Source |
|---|---|
| key `BookingUUID` | `BookingUUID` |
| `TravelUUID` | `TravelUUID` |
| `BookingID` | `BookingID` |
| `BookingDate` | `BookingDate` |
| `CustomerID` | `CustomerID` |
| `CustomerName` | `_Customer.LastName` |
| `CarrierID` | `CarrierID` |
| `CarrierName` | `_Carrier.Name` |
| `ConnectionID` | `} ] ConnectionID` |
| `FlightDate` | `FlightDate` |
| `FlightPrice` | `FlightPrice` |
| `CurrencyCode` | `CurrencyCode` |
| `LocalLastChangedAt` | `LocalLastChangedAt` |
| `_Travel` | *Association* |
| `_Customer` | *Association* |
| `_Carrier` | *Association* |
| `_Connection` | *Association* |
| `_Flight` | *Association* |

## Source Code

*Source: [https://github.com/Akankshakoti20/Rap_code/blob/4a76deb05c1086f0cf8bd3221465427d880249e0/src/zc_ak_book.ddls.asddls](https://github.com/Akankshakoti20/Rap_code/blob/4a76deb05c1086f0cf8bd3221465427d880249e0/src/zc_ak_book.ddls.asddls)*

```abap
//@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Booking  Consumption View'
@AccessControl.authorizationCheck: #CHECK
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Metadata.allowExtensions: true


define view entity ZC_AK_BOOK
  as projection on ZI_AK_BOOK as Booking
{
  key BookingUUID,
      TravelUUID,
      @Search.defaultSearchElement: true
      BookingID,
      BookingDate,
      @Consumption.valueHelpDefinition: [{ entity : {name: '/DMO/I_Customer', element: 'CustomerID'  } }]
      @ObjectModel.text.element: ['CustomerName']
      @Search.defaultSearchElement: true
      CustomerID,
      _Customer.LastName as CustomerName,
      @Consumption.valueHelpDefinition: [{entity: {name: '/DMO/I_Carrier', element: 'AirlineID' }}]
      @ObjectModel.text.element: ['CarrierName']
      CarrierID,
      _Carrier.Name      as CarrierName,
      @Consumption.valueHelpDefinition: [ {entity: {name: '/DMO/I_Flight', element: 'ConnectionID'},
                                           additionalBinding: [ { localElement: 'CarrierID',    element: 'AirlineID' },
                                                                { localElement: 'FlightDate',   element: 'FlightDate',   usage: #RESULT},
                                                                { localElement: 'FlightPrice',  element: 'Price',        usage: #RESULT },
                                                                { localElement: 'CurrencyCode', element: 'CurrencyCode', usage: #RESULT } ] } ]
      ConnectionID,
      FlightDate,
      @Semantics.amount.currencyCode: 'CurrencyCode'
      FlightPrice,
      @Consumption.valueHelpDefinition: [{entity: {name: 'I_Currency', element: 'Currency' }}]
      CurrencyCode,
      LocalLastChangedAt,

      /* associations */
      _Travel : redirected to parent ZC_AK_TRAVEL,
      _Customer,
      _Carrier,
      _Connection,
      _Flight
}
```