---
name: I_VARIANTSPRICINGPROFILE
description: "Variants Pricing Profile"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VARIANTSPRICINGPROFILE')/$value
semantic_en: "Variants Pricing Profile"
semantic_vi: "Variants Pricing Profile — CDS view giao diện dựa trên dd07l."
keywords:
  - "variants"
  - "pricing"
  - "profile"
  - "domain"
  - "value"
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
# I_VARIANTSPRICINGPROFILE

**Variants Pricing Profile**

| Property | Value |
|---|---|
| App Component | `LO-RFM-MD-ART-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VARIANTSPRICINGPROFILE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `VariantsPricingProfile` | ✓ | |  | `cast( dd07l.domvalue_l as variantspricingprofile )` | `CHAR(1)` | Pricing profile for variants |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `_Text` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VARIANTSPRICINGPROFILE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_VARIANTSPRICINGPROFILE')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IVARIANTSPRIPROF'
@EndUserText.label: 'Variants Pricing Profile'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.sapObjectNodeType.name: 'VariantsPricingProfile'
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    compositionRoot: true,
    representativeKey: 'VariantsPricingProfile',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    resultSet.sizeCategory: #XS,
    usageType.dataClass: #META,
    dataCategory: #VALUE_HELP
}
@Search.searchable: true
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define root view I_VariantsPricingProfile
  as select from dd07l
  composition [0..*] of I_VariantsPricingProfileText as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as variantspricingprofile ) as VariantsPricingProfile,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      dd07l.domvalue_l                  as DomainValue,
      _Text

}
where
      domname  = 'SPROF'
  and as4local = 'A'
  and as4vers  = '0000';
```
