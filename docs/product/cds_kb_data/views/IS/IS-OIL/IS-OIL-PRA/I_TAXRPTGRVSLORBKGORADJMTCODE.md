---
name: I_TAXRPTGRVSLORBKGORADJMTCODE
description: "Tax Rpt Rvsl Or Booking Or Adjm Code"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXRPTGRVSLORBKGORADJMTCODE')/$value
semantic_en: "Tax Rpt Rvsl Or Booking Or Adjm Code"
semantic_vi: "Tax Rpt Rvsl Or Booking Or Adjm Code — CDS view giao diện dựa trên dd07l."
keywords:
  - "tax"
  - "rpt"
  - "rvsl"
  - "booking"
  - "adjm"
  - "code"
  - "rptg"
  - "adjmt"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_TAXRPTGRVSLORBKGORADJMTCODE

**Tax Rpt Rvsl Or Booking Or Adjm Code**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXRPTGRVSLORBKGORADJMTCODE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `cast (domvalue_l as /pra/reverse_booking_adj_ind )` | `CHAR(1)` | Reversal/Booking/Adjustment |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TaxRptgRvslOrBkgOrAdjmtText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXRPTGRVSLORBKGORADJMTCODE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXRPTGRVSLORBKGORADJMTCODE')/$value)*

```abap
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRBADJC'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TaxRptgRvslOrBkgOrAdjmt'
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META
@EndUserText.label: 'Tax Rpt Rvsl Or Booking Or Adjm Code'
@ObjectModel.sapObjectNodeType.name: 'PRATaxReversalBookingIndicator'
define view I_TaxRptgRvslOrBkgOrAdjmtCode
  as select from dd07l
  association [0..*] to I_TaxRptgRvslOrBkgOrAdjmtText as _Text on $projection.TaxRptgRvslOrBkgOrAdjmt = _Text.TaxRptgRvslOrBkgOrAdjmt
{
      @ObjectModel.text.association: '_Text'
  key cast (domvalue_l as /pra/reverse_booking_adj_ind )                         as TaxRptgRvslOrBkgOrAdjmt   ,
      _Text

}
where
      domname  = '/PRA/REVERSE_BOOKING_ADJ_IND'
  and as4local = 'A';
```
