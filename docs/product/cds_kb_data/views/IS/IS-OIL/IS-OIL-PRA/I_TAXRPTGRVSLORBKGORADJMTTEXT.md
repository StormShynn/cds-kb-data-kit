---
name: I_TAXRPTGRVSLORBKGORADJMTTEXT
description: "Tax Rpt Rvsl Or Booking Or Adjm - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXRPTGRVSLORBKGORADJMTTEXT')/$value
semantic_en: "Tax Rpt Rvsl Or Booking Or Adjm - Text"
semantic_vi: "Tax Rpt Rvsl Or Booking Or Adjm - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "tax"
  - "rpt"
  - "rvsl"
  - "booking"
  - "adjm"
  - "text"
  - "rptg"
  - "adjmt"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_TAXRPTGRVSLORBKGORADJMTTEXT

**Tax Rpt Rvsl Or Booking Or Adjm - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXRPTGRVSLORBKGORADJMTTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxRptgRvslOrBkgOrAdjmt` | ✓ | |  | `cast (domvalue_l as /pra/reverse_booking_adj_ind )` | `CHAR(1)` | Reversal/Booking/Adjustment |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `TaxRptgRvslOrBkgOrAdjmtName` |  | |  | `cast (ddtext as oiu_vdm_tax_rptg_rvsl_bkg )` | `CHAR(60)` | Tax Reporting Reversal Or Booking Or Adjustment Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXRPTGRVSLORBKGORADJMTTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXRPTGRVSLORBKGORADJMTTEXT')/$value)*

```abap
@EndUserText.label: 'Tax Rpt Rvsl Or Booking Or Adjm - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXRBADJT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TaxRptgRvslOrBkgOrAdjmt'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_TaxRptgRvslOrBkgOrAdjmtText
  as select from dd07t

{
  key cast (domvalue_l as /pra/reverse_booking_adj_ind )                           as TaxRptgRvslOrBkgOrAdjmt,
      @Semantics.language

  key cast( ddlanguage as spras )                                                  as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_tax_rptg_rvsl_bkg )                                  as TaxRptgRvslOrBkgOrAdjmtName
}
where
      domname  = '/PRA/REVERSE_BOOKING_ADJ_IND'
  and as4local = 'A';
```
