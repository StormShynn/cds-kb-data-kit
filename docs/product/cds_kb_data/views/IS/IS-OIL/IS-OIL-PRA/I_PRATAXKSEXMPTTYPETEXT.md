---
name: I_PRATAXKSEXMPTTYPETEXT
description: "Tax Kansas Exemption Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXKSEXMPTTYPETEXT')/$value
semantic_en: "Tax Kansas Exemption Type - Text"
semantic_vi: "Tax Kansas Exemption Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "tax"
  - "kansas"
  - "exemption"
  - "type"
  - "text"
  - "exempt"
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
# I_PRATAXKSEXMPTTYPETEXT

**Tax Kansas Exemption Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXKSEXMPTTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxExemptCode` | ✓ | |  | `cast (domvalue_l as /pra/ks_exm_flag )` | `CHAR(1)` | Tax Reporting - Kansas Exemption |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `TaxExemptCodeName` |  | |  | `cast (ddtext as oiu_vdm_kansas_exmpt_type_text )` | `CHAR(60)` | Tax Reporting - Kansas Exempt Type Text |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXKSEXMPTTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXKSEXMPTTYPETEXT')/$value)*

```abap
@EndUserText.label: 'Tax Kansas Exemption Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVKSEXMPTTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TaxExemptCode'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATaxKSExmptTypeText
  as select from dd07t
{
  key cast (domvalue_l as /pra/ks_exm_flag )           as TaxExemptCode,
      @Semantics.language
  key cast( ddlanguage as spras )                      as Language,
      @Semantics.text
      cast (ddtext as oiu_vdm_kansas_exmpt_type_text ) as TaxExemptCodeName
}
where
      domname  = '/PRA/KS_EXM_FLAG'
  and as4local = 'A';
```
