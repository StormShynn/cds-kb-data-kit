---
name: I_FIXEDASSETSTDVH
description: "Fixed Asset"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETSTDVH')/$value
semantic_en: "Fixed Asset"
semantic_vi: "Fixed Asset — CDS view giao diện dựa trên I_FixedAsset."
keywords:
  - "fixed"
  - "asset"
  - "company"
  - "code"
  - "master"
  - "description"
  - "class"
tags:
  - FI
  - bo:asset
  - component:FI-FIO-AA-ANA-2CL
  - FI-FIO
  - FI-FIO-AA
  - FI-FIO-AA-ANA
  - FI-FIO-AA-ANA-2CL
  - interface-view
  - lob:finance
---
# I_FIXEDASSETSTDVH

**Fixed Asset**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETSTDVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CompanyCode` | ✓ | |  |  | `CHAR(4)` | Company Code |
| `MasterFixedAsset` | ✓ | |  |  | `CHAR(12)` | Main Asset Number |
| `FixedAsset` | ✓ | |  |  | `CHAR(4)` | Asset Subnumber |
| `FixedAssetDescription` |  | |  |  | `CHAR(50)` | Asset Description |
| `AssetClass` |  | |  |  | `CHAR(8)` | Asset Class |
| `AssetAuthorizationContext` |  | |  |  | `CHAR(10)` | Asset Authorization Context |
| `_CompanyCode` | | ✓ | | | | |
| `_MasterFixedAsset` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETSTDVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETSTDVH')/$value)*

```abap
//GENERATED:003:GlBfhyJl7kU{r2gdLKRDsG
@VDM.viewType: #COMPOSITE

@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.representativeKey: 'FixedAsset'

@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #XXL
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#VALUE_HELP_PROVIDER, #SEARCHABLE_ENTITY, #SQL_DATA_SOURCE]

@AccessControl.authorizationCheck: #CHECK

@Search.searchable: true
@Consumption.ranked: true
@Metadata.ignorePropagatedAnnotations: true

@EndUserText.label: 'Fixed Asset'
define view entity I_FixedAssetStdVH
  as select from I_FixedAsset
{
      @ObjectModel.foreignKey.association: '_CompanyCode'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1.0
      @Search.ranking: #LOW
  key CompanyCode,
      @ObjectModel.foreignKey.association: '_MasterFixedAsset'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key MasterFixedAsset,
      @ObjectModel.text.element: ['FixedAssetDescription']
  key FixedAsset,

      @Semantics.text:true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      FixedAssetDescription,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 1.0
      @Search.ranking: #LOW
      AssetClass,
      @Consumption.hidden: true
      AssetAuthorizationContext, //Needed for DCL

      @Consumption.hidden: true
      _CompanyCode,
      @Consumption.hidden: true
      _MasterFixedAsset
}
```
