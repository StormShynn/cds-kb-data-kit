---
name: I_LOUISIANATAXRPTGKINDTEXT
description: "Louisiana Tax Reporting Kind Name - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOUISIANATAXRPTGKINDTEXT')/$value
semantic_en: "Louisiana Tax Reporting Kind Name - Text"
semantic_vi: "Louisiana Tax Reporting Kind Name - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "louisiana"
  - "tax"
  - "reporting"
  - "kind"
  - "name"
  - "text"
  - "rptg"
  - "language"
tags:
  - IS
  - bo:purchaseorder
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_LOUISIANATAXRPTGKINDTEXT

**Louisiana Tax Reporting Kind Name - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOUISIANATAXRPTGKINDTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `LouisianaTaxRptgKind` | ✓ | |  | `cast (domvalue_l as /pra/t9_kind_cd )` | `NUMC(1)` | Tax 2.0 LA - Kind Code |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `LouisianaTaxRptgKindName` |  | |  | `cast (ddtext as oiu_vdm_louisiana_tax_rptg_knd )` | `CHAR(60)` | Louisiana Tax Reporting Kind Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOUISIANATAXRPTGKINDTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_LOUISIANATAXRPTGKINDTEXT')/$value)*

```abap
@EndUserText.label: 'Louisiana Tax Reporting Kind Name - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVLOUITAXREPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'LouisianaTaxRptgKind'

@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT , #SQL_DATA_SOURCE , #CDS_MODELING_DATA_SOURCE , #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_LouisianaTaxRptgKindText
  as select from dd07t
{
  key cast (domvalue_l as /pra/t9_kind_cd )                                           as LouisianaTaxRptgKind,
      @Semantics.language
  key cast( ddlanguage as spras )                                                     as Language,
      @Semantics.text
      cast (ddtext as  oiu_vdm_louisiana_tax_rptg_knd )                               as LouisianaTaxRptgKindName
}
where
      domname  = '/PRA/T9_KIND_CD'
  and as4local = 'A';
```
