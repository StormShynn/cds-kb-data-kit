---
name: I_PRATAXOKEXEMPTCODEST
description: "Okaloma Tax Exempt Code Descriptions - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXOKEXEMPTCODEST')/$value
semantic_en: "Okaloma Tax Exempt Code Descriptions - Text"
semantic_vi: "Okaloma Tax Exempt Code Descriptions - Text — CDS view giao diện dựa trên oiut5_excd_tx."
keywords:
  - "okaloma"
  - "tax"
  - "exempt"
  - "code"
  - "descriptions"
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
# I_PRATAXOKEXEMPTCODEST

**Okaloma Tax Exempt Code Descriptions - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXOKEXEMPTCODEST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxExemptCode` | ✓ | |  | `exempt_code` | `NUMC(2)` | Tax 2.0 OKGP - Exempt Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `TaxExemptCodeName` |  | |  | `cast(description as oiu_vdm_tax_exempt_name)` | `CHAR(30)` | Exempt Code Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXOKEXEMPTCODEST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATAXOKEXEMPTCODEST')/$value)*

```abap
@EndUserText.label: 'Okaloma Tax Exempt Code Descriptions - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXOKEXMPCDT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'TaxExemptCode'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #CUSTOMIZING

define view I_PRATaxOKExemptCodesT
  as select from oiut5_excd_tx

{
  key exempt_code                                   as  TaxExemptCode,
      @Semantics.language: true
  key spras                                         as  Language,
      @Semantics.text: true
      cast(description as oiu_vdm_tax_exempt_name)  as  TaxExemptCodeName
}
```
