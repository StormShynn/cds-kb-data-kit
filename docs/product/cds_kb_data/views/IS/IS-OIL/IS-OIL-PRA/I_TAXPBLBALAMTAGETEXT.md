---
name: I_TAXPBLBALAMTAGETEXT
description: "Tax Payable Balance Amount Age - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXPBLBALAMTAGETEXT')/$value
semantic_en: "Tax Payable Balance Amount Age - Text"
semantic_vi: "Tax Payable Balance Amount Age - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "tax"
  - "payable"
  - "balance"
  - "amount"
  - "age"
  - "text"
  - "code"
  - "language"
  - "name"
tags:
  - IS
  - component:IS-OIL-PRA
  - interface-view
  - IS-OIL
  - IS-OIL-PRA
---
# I_TAXPBLBALAMTAGETEXT

**Tax Payable Balance Amount Age - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXPBLBALAMTAGETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `BalAmtAgeCode` | ✓ | |  | `cast (domvalue_l as oiux4_age )` | `CHAR(3)` | Taxes Payable Write-off Age |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `BalAmtAgeName` |  | |  | `cast (ddtext as oiu_vdm_tp_bal_amt_age_name )` | `CHAR(60)` | Taxes Payable Age Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXPBLBALAMTAGETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXPBLBALAMTAGETEXT')/$value)*

```abap
@EndUserText.label: 'Tax Payable Balance Amount Age - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTPBALAMTAGET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'BalAmtAgeCode'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_TaxPblBalAmtAgeText
  as select from dd07t
{
  key cast (domvalue_l as oiux4_age )                        as BalAmtAgeCode,
      @Semantics.language
  key cast( ddlanguage as spras )                            as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_tp_bal_amt_age_name )          as BalAmtAgeName
}
where
      domname  = 'OIUX4_AGE'
  and as4local = 'A';
```
