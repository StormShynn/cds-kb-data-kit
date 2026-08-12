---
name: I_COLLATERALPROCESSCONTROLKEY
description: "Collateral Process Control Key"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCONTROLKEY')/$value
semantic_en: "Collateral Process Control Key"
semantic_vi: "Collateral Process Control Key — CDS view giao diện dựa trên tcms_pcn_cky."
keywords:
  - "collateral"
  - "process"
  - "control"
  - "key"
  - "ctrl"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALPROCESSCONTROLKEY

**Collateral Process Control Key**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCONTROLKEY')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralProcessCtrlObj` | ✓ | |  | `proc_obj` | `CHAR(6)` | Process Object |
| `CollateralProcessControlKey` | ✓ | |  | `proc_cky` | `CHAR(10)` | Process Control Key |
| `_CollateralProcessCtrlObj` | | ✓ | | | | |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralProcessCtrlObj` | `I_CollateralProcessCtrlObj` | [0..1] |
| `_Text` | `I_CollateralProcessCtrlKeyTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCONTROLKEY')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCONTROLKEY')/$value)*

```abap
@AbapCatalog: {
sqlViewName: 'ICOLPCNKEY',
compiler.compareFilter: true,
preserveKey: true
}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'S',
        dataClass: 'CUSTOMIZING'
    },
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'CollateralProcessControlKey'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Process Control Key'
define view I_CollateralProcessControlKey
  as select from tcms_pcn_cky
  association [0..1] to I_CollateralProcessCtrlObj    as _CollateralProcessCtrlObj on  $projection.CollateralProcessCtrlObj = _CollateralProcessCtrlObj.CollateralProcessCtrlObj
  association [0..*] to I_CollateralProcessCtrlKeyTxt as _Text                     on  $projection.CollateralProcessCtrlObj    = _Text.CollateralProcessCtrlObj
                                                                                   and $projection.CollateralProcessControlKey = _Text.CollateralProcessControlKey
{
      @ObjectModel.foreignKey.association: '_CollateralProcessCtrlObj'
  key proc_obj as CollateralProcessCtrlObj,
      @ObjectModel.text.association: '_Text'
  key proc_cky as CollateralProcessControlKey,

      _CollateralProcessCtrlObj,
      _Text
}
```
