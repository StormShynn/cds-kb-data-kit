---
name: I_FIXEDASSETGROUP
description: "This CDS view provides the prerequisites for answering the following business question: How many fixed asset groups are defined?"
app_component: FI-FIO-AA-ANA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETGROUP')/$value
semantic_en: "This CDS view provides the prerequisites for answering the following business question: How many fixed asset groups are defined?"
semantic_vi: "Fixed Asset Group — CDS view giao diện dựa trên t087u."
keywords:
  - "fixed"
  - "asset"
  - "group"
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
# I_FIXEDASSETGROUP

**This CDS view provides the prerequisites for answering the following business question: How many fixed asset groups are defined?**

| Property | Value |
|---|---|
| App Component | `FI-FIO-AA-ANA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETGROUP')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FixedAssetGroup` | ✓ | |  | `anlue` | `CHAR(12)` | Asset Super Number |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_FixedAssetGroupText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETGROUP')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_FIXEDASSETGROUP')/$value)*

```abap
@AbapCatalog.sqlViewName: 'IFIASSETGROUP'
@Analytics: { dataCategory: #DIMENSION }
@EndUserText.label: 'Fixed Asset Group'
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel: { representativeKey: 'FixedAssetGroup',
                usageType.serviceQuality: #A,
                usageType.sizeCategory: #S,
                usageType.dataClass: #CUSTOMIZING,
                modelingPattern: #ANALYTICAL_DIMENSION,
                supportedCapabilities: [#ANALYTICAL_DIMENSION]
              }
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

define view I_FixedAssetGroup
  as select from t087u
  association [0..*] to I_FixedAssetGroupText as _Text on $projection.FixedAssetGroup = _Text.FixedAssetGroup

{
      @ObjectModel.text.association: '_Text'
  key t087u.anlue as FixedAssetGroup,
      _Text

}
```
