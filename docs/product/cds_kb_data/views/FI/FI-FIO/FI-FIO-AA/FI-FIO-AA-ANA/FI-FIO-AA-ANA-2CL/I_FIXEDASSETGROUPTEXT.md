---
name: I_FIXEDASSETGROUPTEXT
description: "This CDS view provides the prerequisites for answering the following business question: How many fixed asset groups are defined?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
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
