---
name: I_OBJECTPRTLINKDATA
description: "Object Part Link Data"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTPRTLINKDATA')/$value
semantic_en: "Object Part Link Data"
semantic_vi: "Object Part Link Data — CDS view giao diện dựa trên cms_oms_prt_lnk."
keywords:
  - "object"
  - "part"
  - "link"
  - "data"
  - "reference"
  - "system"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTPRTLINKDATA

**Object Part Link Data**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTPRTLINKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectPrtLinkUUID` | ✓ | |  | `prt_lnk_guid` | `RAW(16)` | Part Link GUID |
| `ObjectReferenceUUID` |  | |  | `obj_ref_guid` | `RAW(16)` | Object reference GUID |
| `ObjectPrtRefUUID` |  | |  | `prt_ref_guid` | `RAW(16)` | Part Reference GUID |
| `ObjectPrtID` |  | |  | `obj_prt_id` | `NUMC(4)` | Object Part Link - Part ID |
| `ObjectPrtReferenceSystem` |  | |  | `prt_objsysid` | `CHAR(6)` | Object System Reference ID |
| `_MovableObjectData` | | ✓ | | | | |
| `_MovableObjectMasterData` | | ✓ | | | | |
| `_ObjectPrtReferenceSystem` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MovableObjectData` | `I_MovableObjectData` | [0..*] |
| `_MovableObjectMasterData` | `I_MovableObjectMasterData` | [0..*] |
| `_ObjectPrtReferenceSystem` | `I_ObjectReferenceSystem` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTPRTLINKDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTPRTLINKDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJPRTLINKD',
    compiler.compareFilter: true,
    preserveKey: true
}
@AccessControl:{
    authorizationCheck: #CHECK,
    personalData:{
        blocking: #BLOCKED_DATA_EXCLUDED
    }
}
@ObjectModel:{
    usageType:{
        serviceQuality: 'A',
        sizeCategory: 'L',
        dataClass: 'MASTER'
    },
    supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    representativeKey: 'ObjectPrtLinkUUID'
}
@Metadata:{
    ignorePropagatedAnnotations: true,
    allowExtensions: true
}
@Analytics:{
    dataCategory: #DIMENSION,
    internalName: #LOCAL,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            automatic: true
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Part Link Data'
define view I_ObjectPrtLinkData
  as select from cms_oms_prt_lnk
  association [0..*] to I_MovableObjectData       as _MovableObjectData        on $projection.ObjectReferenceUUID = _MovableObjectData.MovableObjectUUID
                                                                               or $projection.ObjectPrtRefUUID    = _MovableObjectData.MovableObjectUUID
  association [0..*] to I_MovableObjectMasterData as _MovableObjectMasterData  on $projection.ObjectReferenceUUID = _MovableObjectMasterData.MovableObjectUUID
                                                                               or $projection.ObjectPrtRefUUID    = _MovableObjectMasterData.MovableObjectUUID
  association [0..1] to I_ObjectReferenceSystem   as _ObjectPrtReferenceSystem on $projection.ObjectPrtReferenceSystem = _ObjectPrtReferenceSystem.ObjectReferenceSystem
{
  key prt_lnk_guid as ObjectPrtLinkUUID,
      obj_ref_guid as ObjectReferenceUUID,
      prt_ref_guid as ObjectPrtRefUUID,
      obj_prt_id   as ObjectPrtID,
      @ObjectModel.foreignKey.association: '_ObjectPrtReferenceSystem'
      prt_objsysid as ObjectPrtReferenceSystem,

      _MovableObjectData,
      _MovableObjectMasterData,
      _ObjectPrtReferenceSystem

}
```
