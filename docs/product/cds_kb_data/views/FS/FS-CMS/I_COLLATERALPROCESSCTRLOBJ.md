---
name: I_COLLATERALPROCESSCTRLOBJ
description: "Collateral Process Control Object"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLOBJ')/$value
semantic_en: "Collateral Process Control Object"
semantic_vi: "Collateral Process Control Object — CDS view giao diện dựa trên tcms_pcn_obj."
keywords:
  - "collateral"
  - "process"
  - "control"
  - "object"
  - "ctrl"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALPROCESSCTRLOBJ

**Collateral Process Control Object**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLOBJ')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralProcessCtrlObj` | ✓ | |  | `proc_obj` | `CHAR(6)` | Process Object |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollateralProcessCtrlObjText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLOBJ')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALPROCESSCTRLOBJ')/$value)*

```abap
@AbapCatalog: {
sqlViewName: 'ICOLPCNOBJ',
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
    representativeKey: 'CollateralProcessCtrlObj'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Collateral Process Control Object'
define view I_CollateralProcessCtrlObj
  as select from tcms_pcn_obj
  association [0..*] to I_CollateralProcessCtrlObjText as _Text on $projection.CollateralProcessCtrlObj = _Text.CollateralProcessCtrlObj
{
      @ObjectModel.text.association: '_Text'
  key proc_obj as CollateralProcessCtrlObj,

      _Text
}
```
