---
name: I_OBJECTREFERENCESYSTEM
description: "Object Reference System"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTREFERENCESYSTEM')/$value
semantic_en: "Object Reference System"
semantic_vi: "Object Reference System — CDS view giao diện dựa trên tcms_obj_sys."
keywords:
  - "object"
  - "reference"
  - "system"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTREFERENCESYSTEM

**Object Reference System**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTREFERENCESYSTEM')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectReferenceSystem` | ✓ | |  | `objsystemid` | `CHAR(6)` | Object System Reference ID |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ObjectReferenceSystemText` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTREFERENCESYSTEM')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTREFERENCESYSTEM')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJREFSYS',
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
    representativeKey: 'ObjectReferenceSystem'
}
@VDM.viewType: #BASIC
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction.enabled: true
}
@Metadata.ignorePropagatedAnnotations: true
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Reference System'
define view I_ObjectReferenceSystem
  as select from tcms_obj_sys
  association [0..*] to I_ObjectReferenceSystemText as _Text on $projection.ObjectReferenceSystem = _Text.ObjectReferenceSystem
{
      @ObjectModel.text.association: '_Text'
  key objsystemid as ObjectReferenceSystem,

      _Text
}
```
