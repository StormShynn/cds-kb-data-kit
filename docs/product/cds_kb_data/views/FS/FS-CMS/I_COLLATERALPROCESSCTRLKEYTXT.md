---
name: I_COLLATERALPROCESSCTRLKEYTXT
description: "Collateral Process Control Key - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLKEYTXT')/$value
semantic_en: "Collateral Process Control Key - Text"
semantic_vi: "Collateral Process Control Key - Text — CDS view giao diện dựa trên tcms_pcn_cky_t."
keywords:
  - "collateral"
  - "process"
  - "control"
  - "key"
  - "text"
  - "ctrl"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALPROCESSCTRLKEYTXT

**Collateral Process Control Key - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLKEYTXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralProcessCtrlObj` | ✓ | |  | `proc_obj` | `CHAR(6)` | Process Object |
| `CollateralProcessControlKey` | ✓ | |  | `proc_cky` | `CHAR(10)` | Process Control Key |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralProcessCtrlKeyTxt` |  | |  | `name` | `CHAR(40)` | Process Control Key Name |
| `_Language` | | ✓ | | | | |
| `_CollateralProcessCtrlObj` | | ✓ | | | | |
| `_CollateralProcessControlKey` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralProcessCtrlObj` | `I_CollateralProcessCtrlObj` | [0..1] |
| `_CollateralProcessControlKey` | `I_CollateralProcessControlKey` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLKEYTXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLKEYTXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLPCNKEYTEXT',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    dataCategory: #TEXT,
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralProcessControlKey'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Process Control Key - Text'
define view I_CollateralProcessCtrlKeyTxt
  as select from tcms_pcn_cky_t
  association [0..1] to I_Language                    as _Language                    on  $projection.Language = _Language.Language
  association [0..1] to I_CollateralProcessCtrlObj    as _CollateralProcessCtrlObj    on  $projection.CollateralProcessCtrlObj = _CollateralProcessCtrlObj.CollateralProcessCtrlObj
  association [0..1] to I_CollateralProcessControlKey as _CollateralProcessControlKey on  $projection.CollateralProcessCtrlObj    = _CollateralProcessControlKey.CollateralProcessCtrlObj
                                                                                      and $projection.CollateralProcessControlKey = _CollateralProcessControlKey.CollateralProcessControlKey
{
      @ObjectModel.foreignKey.association: '_CollateralProcessCtrlObj'
  key proc_obj as CollateralProcessCtrlObj,
      @ObjectModel.foreignKey.association: '_CollateralProcessControlKey'
  key proc_cky as CollateralProcessControlKey,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as CollateralProcessCtrlKeyTxt,

      _Language,
      _CollateralProcessCtrlObj,
      _CollateralProcessControlKey
}
```
