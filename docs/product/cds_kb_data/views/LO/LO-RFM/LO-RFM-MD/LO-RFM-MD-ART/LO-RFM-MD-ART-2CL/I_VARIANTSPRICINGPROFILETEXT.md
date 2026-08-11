---
name: I_VARIANTSPRICINGPROFILETEXT
description: "Variants Pricing Profile - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VARIANTSPRICINGPROFILETEXT')/$value
semantic_en: "Variants Pricing Profile - Text"
semantic_vi: "Variants Pricing Profile - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "variants"
  - "pricing"
  - "profile"
  - "text"
  - "language"
  - "desc"
tags:
  - LO
  - bo:companycode
  - component:LO-RFM-MD-ART-2CL
  - interface-view
  - LO-RFM
  - LO-RFM-MD
  - LO-RFM-MD-ART
  - LO-RFM-MD-ART-2CL
  - lob:logistics general
  - pricing
---
# I_VARIANTSPRICINGPROFILETEXT

**Variants Pricing Profile - Text**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VARIANTSPRICINGPROFILETEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast( dd07t.ddlanguage as spras preserving type )` | `LANG(1)` | Language Key |
| `VariantsPricingProfile` | ✓ | |  | `cast( dd07t.domvalue_l as variantspricingprofile )` | `CHAR(1)` | Pricing profile for variants |
| `VariantsPricingProfileDesc` |  | |  | `ddtext` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_VariantsPricingProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VARIANTSPRICINGPROFILETEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VARIANTSPRICINGPROFILETEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IVARIANTPRIPROFT'
@EndUserText.label: 'Variants Pricing Profile - Text'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataExtraction.enabled: true
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    dataCategory: #TEXT,
    representativeKey: 'VariantsPricingProfile',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #META
}
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define view I_VariantsPricingProfileText
  as select from dd07t
  association [0..1] to I_Language               as _Language               on $projection.Language = _Language.Language
  association to parent I_VariantsPricingProfile as _VariantsPricingProfile on $projection.VariantsPricingProfile = _VariantsPricingProfile.VariantsPricingProfile
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_VariantsPricingProfile'
      @ObjectModel.text.element: ['VariantsPricingProfileDesc']
  key cast( dd07t.domvalue_l as variantspricingprofile ) as VariantsPricingProfile,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      ddtext     as VariantsPricingProfileDesc,

      _VariantsPricingProfile,
      _Language

}
where
      domname  = 'SPROF'
  and as4local = 'A'
  and as4vers  = '0000';
```
