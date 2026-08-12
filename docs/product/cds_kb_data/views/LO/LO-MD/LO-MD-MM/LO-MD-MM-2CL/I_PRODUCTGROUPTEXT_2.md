---
name: I_PRODUCTGROUPTEXT_2
description: "Productgrouptext 2"
app_component: LO-MD-MM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-MM
  - interface-view
  - product
  - text
  - component:LO-MD-MM-2CL
  - lob:Logistics General
---
# I_PRODUCTGROUPTEXT_2

**Productgrouptext 2**

| Property | Value |
|---|---|
| App Component | `LO-MD-MM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ProductGroup` | ✓ | |  | `cast(t023t.matkl as productgroup preserving type )` |  |  |
| `Language` | ✓ | |  | `spras` |  |  |
| `ProductGroupName` |  | |  | `cast(t023t.wgbez as productgroupname preserving type )` |  |  |
| `ProductGroupText` |  | |  | `wgbez60` |  |  |
| `_ProductGroup` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ProductGroup` | `I_ProductGroup_2` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPRODGRPTXT2'

@VDM:{
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API
}

@ObjectModel.dataCategory: #TEXT
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Product Group - Text'

@ObjectModel: {
  sapObjectNodeType.name:'ProductGroupText',
  representativeKey: 'ProductGroup',
  supportedCapabilities: [ #SQL_DATA_SOURCE,
                           #CDS_MODELING_DATA_SOURCE,
                           #CDS_MODELING_ASSOCIATION_TARGET,
                           #LANGUAGE_DEPENDENT_TEXT,
                           #EXTRACTION_DATA_SOURCE,
                           #SEARCHABLE_ENTITY
  ],
  usageType: {
    serviceQuality: #A,
    sizeCategory : #M,
    dataClass: #CUSTOMIZING
    }
    
}

@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics:{
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture.automatic: true
    }
}
define view I_ProductGroupText_2
  as select from t023t
  association [0..1] to I_ProductGroup_2 as _ProductGroup on $projection.ProductGroup = _ProductGroup.ProductGroup
  association [0..1] to I_Language       as _Language     on $projection.Language = _Language.Language
{
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @ObjectModel.foreignKey.association: '_ProductGroup'
  key cast(t023t.matkl as productgroup preserving type )     as ProductGroup,
      @Semantics.language: true
  key t023t.spras                                            as Language,
      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @EndUserText.label: 'Product Group Description'
      cast(t023t.wgbez as productgroupname preserving type ) as ProductGroupName,
      @Semantics.text: true
      t023t.wgbez60                                          as ProductGroupText,
      _ProductGroup,
      _Language
}
```
