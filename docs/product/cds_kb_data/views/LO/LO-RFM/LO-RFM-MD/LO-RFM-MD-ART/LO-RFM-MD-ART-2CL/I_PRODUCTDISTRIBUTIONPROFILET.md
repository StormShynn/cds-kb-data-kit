---
name: I_PRODUCTDISTRIBUTIONPROFILET
description: "Product Distribution Profile - Text"
app_component: LO-RFM-MD-ART-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTDISTRIBUTIONPROFILET')/$value
semantic_en: "Product Distribution Profile - Text"
semantic_vi: "Product Distribution Profile - Text — CDS view giao diện dựa trên tmfpft."
keywords:
  - "product"
  - "distribution"
  - "profile"
  - "text"
  - "language"
  - "name"
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
  - product
---
# I_PRODUCTDISTRIBUTIONPROFILET

**Product Distribution Profile - Text**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTDISTRIBUTIONPROFILET')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `ProductDistributionProfile` | ✓ | |  | `cast( fprfm as productdistributionprofile preserving type )` | `CHAR(3)` | Product Distribution Profile |
| `ProductDistributionProfileName` |  | |  | `fprtx` | `CHAR(40)` | Description |
| `_Language` | | ✓ | | | | |
| `_ProductDistributionProfile` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTDISTRIBUTIONPROFILET')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PRODUCTDISTRIBUTIONPROFILET')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IPRODDISTRPROFT'
@EndUserText.label: 'Product Distribution Profile - Text'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations:true 
@Search.searchable: true
@ObjectModel: {
    supportedCapabilities: #VALUE_HELP_PROVIDER,
    dataCategory: #TEXT,
    representativeKey: 'ProductDistributionProfile',
    usageType.serviceQuality: #A,
    usageType.sizeCategory: #S,
    usageType.dataClass: #CUSTOMIZING
}
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
define view I_ProductDistributionProfileT
  as select from tmfpft
  association [0..1] to I_Language                   as _Language                   on $projection.Language = _Language.Language
  association to parent I_ProductDistributionProfile as _ProductDistributionProfile on $projection.ProductDistributionProfile = _ProductDistributionProfile.ProductDistributionProfile
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key spras as Language,
      @ObjectModel.foreignKey.association: '_ProductDistributionProfile'
      @ObjectModel.text.element: ['ProductDistributionProfileName']
  key cast( fprfm as productdistributionprofile preserving type ) as ProductDistributionProfile,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      fprtx as ProductDistributionProfileName,

      _ProductDistributionProfile,
      _Language
}
```
