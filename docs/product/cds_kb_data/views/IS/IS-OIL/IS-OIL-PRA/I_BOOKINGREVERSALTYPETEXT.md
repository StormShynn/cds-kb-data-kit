---
name: I_BOOKINGREVERSALTYPETEXT
description: "Booking Reversal Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOKINGREVERSALTYPETEXT')/$value
semantic_en: "Booking Reversal Type - Text"
semantic_vi: "Booking Reversal Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "booking"
  - "reversal"
  - "type"
  - "text"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_BOOKINGREVERSALTYPETEXT

**Booking Reversal Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOKINGREVERSALTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BookingReversalType` | ✓ | |  | `cast (domvalue_l as /pra/rd_book_rev_ind )` | `CHAR(1)` | Booking/Reversal Indicator |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `BookingReversalTypeName` |  | |  | `cast (ddtext as oiu_vdm_vl_book_rev_name )` | `CHAR(60)` | Booking Reversal Indicator Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOKINGREVERSALTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_BOOKINGREVERSALTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Booking Reversal Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVBOOKREVTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'BookingReversalType'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_BookingReversalTypeText
  as select from dd07t
{
  key cast (domvalue_l as /pra/rd_book_rev_ind )          as BookingReversalType,
      @Semantics.language
  key cast( ddlanguage as spras )                         as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_vl_book_rev_name )          as BookingReversalTypeName
}
where
      domname  = '/PRA/RD_BOOK_REV_IND'
  and as4local = 'A';
```
