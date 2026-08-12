---
name: I_ASSETKEYFIGURESETTEXT
description: "This CDS view provides the prerequisites for answering the following business questions: Sorted Asset Accounting Key Figure Sorting Sequence"
app_component: FI-AA-AA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESETTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business questions: Sorted Asset Accounting Key Figure Sorting Sequence"
semantic_vi: "Asset Key Figure Set - Text — CDS view giao diện dựa trên faac_kfcsett."
keywords:
  - "asset"
  - "key"
  - "figure"
  - "set"
  - "text"
  - "accounting"
  - "language"
  - "acctg"
  - "name"
tags:
  - FI
  - account
  - bo:companycode
  - component:FI-AA-AA-2CL
  - FI-AA
  - FI-AA-AA
  - FI-AA-AA-2CL
  - interface-view
  - lob:finance
---
# I_ASSETKEYFIGURESETTEXT

**This CDS view provides the prerequisites for answering the following business questions: Sorted Asset Accounting Key Figure Sorting Sequence**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESETTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `AssetAccountingKeyFigureSet` | ✓ | |  | `kkey_figure_set` | `CHAR(10)` | Key Figure Group |
| `Language` | ✓ | |  | `langu` | `LANG(1)` | Language Key |
| `AssetAcctgKeyFigureSetName` |  | |  | `description` | `CHAR(50)` | Text Field |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESETTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_ASSETKEYFIGURESETTEXT')/$value)*

```abap
@AbapCatalog: {sqlViewName: 'IASSETKEYFIGSETT', preserveKey: true}
@EndUserText.label: 'Asset Key Figure Set - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'AssetAccountingKeyFigureSet',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Search.searchable: true
@Metadata.ignorePropagatedAnnotations: true

define view I_AssetKeyFigureSetText
  as select from faac_kfcsett
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language

{
  key faac_kfcsett.kkey_figure_set as AssetAccountingKeyFigureSet,
      @Semantics.language
      @ObjectModel.foreignKey.association: '_Language'
  key faac_kfcsett.langu           as Language,

      @Semantics.text: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      faac_kfcsett.description     as AssetAcctgKeyFigureSetName,

      _Language
}
```
