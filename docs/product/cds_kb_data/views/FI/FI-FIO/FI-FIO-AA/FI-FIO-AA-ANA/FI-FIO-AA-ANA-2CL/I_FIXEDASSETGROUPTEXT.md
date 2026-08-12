---
name: I_FIXEDASSETGROUPTEXT
description: "This CDS view provides the prerequisites for answering the following business question: How many fixed asset groups are defined?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETGROUPTEXT')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many fixed asset groups are defined?"
semantic_vi: "Fixed Asset Group - Text — CDS view giao diện dựa trên t087v."
keywords:
  - "fixed"
  - "asset"
  - "group"
  - "text"
  - "language"
  - "name"
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
# I_FIXEDASSETGROUPTEXT

**This CDS view provides the prerequisites for answering the following business question: How many fixed asset groups are defined?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETGROUPTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FixedAssetGroup` | ✓ | |  | `anlue` | `CHAR(12)` | Asset Super Number |
| `Language` | ✓ | |  | `spras` | `LANG(1)` | Language Key |
| `FixedAssetGroupName` |  | |  | `anlue_txt` | `CHAR(50)` | Text for asset group number / asset group |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETGROUPTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETGROUPTEXT')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIASSETGROUPTXT'
@EndUserText.label: 'Fixed Asset Group - Text'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'FixedAssetGroup',
                dataCategory: #TEXT,
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
                supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_FixedAssetGroupText
  as select from t087v
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  key t087v.anlue     as FixedAssetGroup,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language
  key t087v.spras     as Language,
      @Semantics.text: true
      t087v.anlue_txt as FixedAssetGroupName,
      _Language

}
```
