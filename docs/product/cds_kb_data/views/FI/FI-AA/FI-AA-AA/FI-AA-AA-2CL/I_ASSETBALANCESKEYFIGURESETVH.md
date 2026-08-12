---
name: I_ASSETBALANCESKEYFIGURESETVH
description: "Asset Balances Key Figure Group"
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETBALANCESKEYFIGURESETVH')/$value
semantic_en: "Asset Balances Key Figure Group"
semantic_vi: "Asset Balances Key Figure Group — CDS view giao diện dựa trên I_AssetKeyFigureSet."
keywords:
  - "asset"
  - "balances"
  - "key"
  - "figure"
  - "group"
  - "accounting"
tags:
  - FI
  - bo:companycode
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
---
# I_ASSETBALANCESKEYFIGURESETVH

**Asset Balances Key Figure Group**

| Property | Value |
|---|---|
| App Component | `FI-AA-AA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETBALANCESKEYFIGURESETVH')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountingKeyFigureSet` | ✓ | |  |  | `CHAR(10)` | Key Figure Group |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_AssetKeyFigureSetText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETBALANCESKEYFIGURESETVH')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETBALANCESKEYFIGURESETVH')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IFIASTBALKFGVH', preserveKey: true}
@AbapCatalog.compiler.compareFilter: true
@EndUserText.label: 'Asset Balances Key Figure Group'
@VDM.viewType: #COMPOSITE
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                dataCategory: #VALUE_HELP,
                modelingPattern: #VALUE_HELP_PROVIDER,
                supportedCapabilities: [#VALUE_HELP_PROVIDER] }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetBalancesKeyFigureSetVH
  as select from I_AssetKeyFigureSet

  association [0..*] to I_AssetKeyFigureSetText as _Text on $projection.AssetAccountingKeyFigureSet = _Text.AssetAccountingKeyFigureSet

{
      @ObjectModel.text.association: '_Text'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
  key AssetAccountingKeyFigureSet,

      _Text
}
where
  AssetAcctgKeyFigSetAnlytlCntxt = '02'
```
