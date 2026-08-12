---
name: I_TAXBASISTEXT
description: "Tax Basis - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXBASISTEXT')/$value
semantic_en: "Tax Basis - Text"
semantic_vi: "Tax Basis - Text — CDS view giao diện dựa trên oiu_cm_tfc_tx."
keywords:
  - "tax"
  - "basis"
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
# I_TAXBASISTEXT

**Tax Basis - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXBASISTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TaxBasis` | ✓ | |  | `tax_free_cd` | `CHAR(2)` | Tax Free Code |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `TaxBasisName` |  | |  | `tax_free_de` | `CHAR(50)` | Tax Free Code Description |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXBASISTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TAXBASISTEXT')/$value)*

```abap
@EndUserText.label: 'Tax Basis - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTAXBASIST'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TaxBasis'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_TaxBasisText
  as select from oiu_cm_tfc_tx
{
  key tax_free_cd   as TaxBasis,
      @Semantics.language
  key spras         as Language,
      @Semantics.text
      tax_free_de   as TaxBasisName
}
```
