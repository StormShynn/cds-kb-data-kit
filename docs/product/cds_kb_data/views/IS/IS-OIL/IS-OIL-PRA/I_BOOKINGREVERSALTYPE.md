---
name: I_BOOKINGREVERSALTYPE
description: "Booking Reversal Type"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOKINGREVERSALTYPE')/$value
semantic_en: "Booking Reversal Type"
semantic_vi: "Booking Reversal Type — CDS view giao diện dựa trên dd07l."
keywords:
  - "booking"
  - "reversal"
  - "type"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_BOOKINGREVERSALTYPE

**Booking Reversal Type**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOKINGREVERSALTYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BookingReversalType` | ✓ | |  | `cast (domvalue_l as /pra/rd_book_rev_ind )` | `CHAR(1)` | Booking/Reversal Indicator |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_BookingReversalTypeText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOKINGREVERSALTYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOKINGREVERSALTYPE')/$value)*

```abap
@EndUserText.label: 'Booking Reversal Type'
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVBOOKREVTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'BookingReversalType'

@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@ObjectModel.sapObjectNodeType.name: 'PRABookingReversalType'

define view I_BookingReversalType
  as select from dd07l
  association [0..*] to I_BookingReversalTypeText as _Text on $projection.BookingReversalType = _Text.BookingReversalType
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/rd_book_rev_ind ) as BookingReversalType,
      _Text
}
where
      domname  = '/PRA/RD_BOOK_REV_IND'
  and as4local = 'A';
```
