---
name: I_COLLTRLRELANDREGISTER
description: "Land Register Dets for Collateral"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTER')/$value
semantic_en: "Land Register Dets for Collateral"
semantic_vi: "Land Register Dets for Collateral — CDS view giao diện dựa trên cms_re_prt_lr."
keywords:
  - "land"
  - "register"
  - "dets"
  - "for"
  - "collateral"
  - "colltrl"
  - "real"
  - "estate"
  - "part"
  - "link"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLRELANDREGISTER

**Land Register Dets for Collateral**

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
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlREPrtLandRegisterUUID` | ✓ | |  | `prt_lr_guid` | `RAW(16)` | GUID for part LR |
| `CollateralRealEstatePartUUID` |  | |  | `obj_prt_guid` | `RAW(16)` | GUID for Object part |
| `CollateralRealEstatePartID` |  | |  | `part_id` | `NUMC(10)` | Part ID for the Object |
| `ColltrlRELandRegisterLinkUUID` |  | |  | `lr_id` | `RAW(16)` | Link Key between RE and LR systems |
| `_CollateralRealEstatePart` | | ✓ | | | | |
| `_ColltrlREPartMaster` | | ✓ | | | | |
| `_ColltrlREPartAccessory` | | ✓ | | | | |
| `_ColltrlREPartAccessoryMaster` | | ✓ | | | | |
| `_ColltrlREPartPartner` | | ✓ | | | | |
| `_CollateralRealEstatePartCost` | | ✓ | | | | |
| `_ColltrlREPartValue` | | ✓ | | | | |
| `_ColltrlRELandRegPropertyList` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralRealEstatePart` | `I_CollateralRealEstatePart` | [0..1] |
| `_ColltrlREPartMaster` | `I_ColltrlREPartMaster` | [0..1] |
| `_ColltrlREPartAccessory` | `I_ColltrlREPartAccessory` | [0..*] |
| `_ColltrlREPartAccessoryMaster` | `I_ColltrlREPartAccessoryMaster` | [0..*] |
| `_ColltrlREPartPartner` | `I_ColltrlREPartPartner` | [0..*] |
| `_CollateralRealEstatePartCost` | `I_CollateralRealEstatePartCost` | [0..*] |
| `_ColltrlREPartValue` | `I_ColltrlREPartValue` | [0..*] |
| `_ColltrlRELandRegPropertyList` | `I_ColltrlRELandRegPropertyList` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTER')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICRELANDREG',
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
    supportedCapabilities: [ #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE,
                             #EXTRACTION_DATA_SOURCE ],
    modelingPattern: #ANALYTICAL_DIMENSION,
    representativeKey: 'ColltrlREPrtLandRegisterUUID'
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
@EndUserText.label: 'Land Register Dets for Collateral'
define view I_ColltrlRELandRegister
  as select from cms_re_prt_lr
  association [0..1] to I_CollateralRealEstatePart     as _CollateralRealEstatePart     on $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePart.CollateralRealEstatePartUUID
  association [0..1] to I_ColltrlREPartMaster          as _ColltrlREPartMaster          on $projection.CollateralRealEstatePartUUID = _ColltrlREPartMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessory       as _ColltrlREPartAccessory       on $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessory.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartAccessoryMaster as _ColltrlREPartAccessoryMaster on $projection.CollateralRealEstatePartUUID = _ColltrlREPartAccessoryMaster.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartPartner         as _ColltrlREPartPartner         on $projection.CollateralRealEstatePartUUID = _ColltrlREPartPartner.CollateralRealEstatePartUUID
  association [0..*] to I_CollateralRealEstatePartCost as _CollateralRealEstatePartCost on $projection.CollateralRealEstatePartUUID = _CollateralRealEstatePartCost.CollateralRealEstatePartUUID
  association [0..*] to I_ColltrlREPartValue           as _ColltrlREPartValue           on $projection.CollateralRealEstatePartUUID = _ColltrlREPartValue.CollateralRealEstatePartUUID
  association [0..1] to I_ColltrlRELandRegPropertyList as _ColltrlRELandRegPropertyList on $projection.ColltrlRELandRegisterLinkUUID = _ColltrlRELandRegPropertyList.ColltrlLandRegPropertyListUUID
{
  key prt_lr_guid  as ColltrlREPrtLandRegisterUUID,
      obj_prt_guid as CollateralRealEstatePartUUID,
      part_id      as CollateralRealEstatePartID,
      lr_id        as ColltrlRELandRegisterLinkUUID,

      _CollateralRealEstatePart,
      _ColltrlREPartMaster,
      _ColltrlREPartAccessory,
      _ColltrlREPartAccessoryMaster,
      _ColltrlREPartPartner,
      _CollateralRealEstatePartCost,
      _ColltrlREPartValue,
      _ColltrlRELandRegPropertyList
}
```
