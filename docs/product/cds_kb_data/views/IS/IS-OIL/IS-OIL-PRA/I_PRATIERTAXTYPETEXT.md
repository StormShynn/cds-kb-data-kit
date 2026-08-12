---
name: I_PRATIERTAXTYPETEXT
description: "PRA Tier Tax Type - Text"
app_component: IS-OIL-PRA
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATIERTAXTYPETEXT')/$value
semantic_en: "PRA Tier Tax Type - Text"
semantic_vi: "PRA Tier Tax Type - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "pra"
  - "tier"
  - "tax"
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
# I_PRATIERTAXTYPETEXT

**PRA Tier Tax Type - Text**

| Property | Value |
|---|---|
| App Component | `IS-OIL-PRA` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATIERTAXTYPETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TierTaxType` | ✓ | |  | `cast( domvalue_l as oiux3_tier_tax_indicator )` | `CHAR(1)` | Tier Tax |
| `Language` | ✓ | |  | `cast( ddlanguage as spras )` | `LANG(1)` | Language Key |
| `TierTaxTypeName` |  | |  | `cast( ddtext as oiu_vdm_tier_tax_ind_text )` | `CHAR(60)` | Tier Tax Type Name |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATIERTAXTYPETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRATIERTAXTYPETEXT')/$value)*

```abap
@EndUserText.label: 'PRA Tier Tax Type - Text'
@ObjectModel.dataCategory: #TEXT
@Analytics.dataExtraction.enabled: true
@VDM.viewType: #BASIC
@AbapCatalog.sqlViewName: 'IPVTIERTAXTYPT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations:true
@ObjectModel.representativeKey: 'TierTaxType'
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.dataClass: #META

define view I_PRATierTaxTypeText
  as select from dd07t
{
  key cast( domvalue_l as oiux3_tier_tax_indicator )       as TierTaxType,
      @Semantics.language
  key cast( ddlanguage as spras )                          as Language,
      @Semantics.text
      cast( ddtext as oiu_vdm_tier_tax_ind_text )          as TierTaxTypeName
}
where
      domname  = 'OIUX3_TIER_TAX_INDICATOR'
  and as4local = 'A';
```
