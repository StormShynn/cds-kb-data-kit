---
name: I_COLLATERALPROCESSCTRLOBJTEXT
description: "Collateral Process Control Object - Text"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLOBJTEXT')/$value
semantic_en: "Collateral Process Control Object - Text"
semantic_vi: "Collateral Process Control Object - Text — CDS view giao diện dựa trên tcms_pcn_obj_t."
keywords:
  - "collateral"
  - "process"
  - "control"
  - "object"
  - "text"
  - "ctrl"
  - "language"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALPROCESSCTRLOBJTEXT

**Collateral Process Control Object - Text**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLOBJTEXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralProcessCtrlObj` | ✓ | |  | `proc_obj` | `CHAR(6)` | Process Object |
| `Language` | ✓ | |  | `language` | `LANG(1)` | Language in which Description is Required |
| `CollateralProcessCtrlObjText` |  | |  | `name` | `CHAR(40)` | Process Object Name in specified Language |
| `_Language` | | ✓ | | | | |
| `_CollateralProcessCtrlObj` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_CollateralProcessCtrlObj` | `I_CollateralProcessCtrlObj` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLOBJTEXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLOBJTEXT')/$value)*

```abap
@AbapCatalog:{
    sqlViewName: 'ICOLPCNOBJTEXT',
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
    representativeKey: 'CollateralProcessCtrlObj'
}
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations:true
@Analytics.dataExtraction.enabled: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Process Control Object - Text'
define view I_CollateralProcessCtrlObjText
  as select from tcms_pcn_obj_t
  association [0..1] to I_Language                 as _Language                 on $projection.Language = _Language.Language
  association [0..1] to I_CollateralProcessCtrlObj as _CollateralProcessCtrlObj on $projection.CollateralProcessCtrlObj = _CollateralProcessCtrlObj.CollateralProcessCtrlObj
{
      @ObjectModel.foreignKey.association: '_CollateralProcessCtrlObj'
  key proc_obj as CollateralProcessCtrlObj,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key language as Language,
      @Semantics.text: true
      name     as CollateralProcessCtrlObjText,

      _Language,
      _CollateralProcessCtrlObj
}
```
