---
name: I_COLLTRLRELANDREGISTERHEADER
description: "Land Reg Header Dets for Collateral"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTERHEADER')/$value
semantic_en: "Land Reg Header Dets for Collateral"
semantic_vi: "Land Reg Header Dets for Collateral — CDS view giao diện dựa trên cms_lr_de_a."
keywords:
  - "land"
  - "reg"
  - "header"
  - "dets"
  - "for"
  - "collateral"
  - "colltrl"
  - "register"
  - "district"
  - "court"
  - "volume"
  - "number"
  - "page"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLRELANDREGISTERHEADER

**Land Reg Header Dets for Collateral**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTERHEADER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlLandRegisterHeaderUUID` | ✓ | |  | `seca_guid` | `RAW(16)` | GUID for Table CMS_LR_DE_A |
| `ColltrlLandRegDistrictCourt` |  | |  | `district` | `CHAR(25)` | District Court |
| `ColltrlLandRegDistrictSubCourt` |  | |  | `sub_district` | `CHAR(25)` | Land Register District |
| `ColltrlLandRegVolumeNumber` |  | |  | `volume_no` | `CHAR(15)` | Volume Number |
| `ColltrlLandRegisterPageNumber` |  | |  | `page_no` | `CHAR(15)` | Page Number |
| `CollateralLandRegisterType` |  | |  | `reg_type` | `CHAR(6)` | Register Type |
| `ColltrlLandRegExtRefNumber` |  | |  | `old_ref_id` | `CHAR(32)` | Reference of Old Land Register, in case data was migrated |
| `_ColltrlRELandRegPropertyList` | | ✓ | | | | |
| `_ColltrlRELandRegFinData` | | ✓ | | | | |
| `_CollateralLandRegisterType` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ColltrlRELandRegPropertyList` | `I_ColltrlRELandRegPropertyList` | [0..*] |
| `_ColltrlRELandRegFinData` | `I_ColltrlRELandRegFinData` | [0..*] |
| `_CollateralLandRegisterType` | `I_CollateralLandRegisterType` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTERHEADER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGISTERHEADER')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICRELRHEADER',
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
    representativeKey: 'ColltrlLandRegisterHeaderUUID'
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
@EndUserText.label: 'Land Reg Header Dets for Collateral'
define view I_ColltrlRELandRegisterHeader
  as select from cms_lr_de_a
  association [0..*] to I_ColltrlRELandRegPropertyList as _ColltrlRELandRegPropertyList on $projection.ColltrlLandRegisterHeaderUUID = _ColltrlRELandRegPropertyList.ColltrlLandRegisterHeaderUUID
  association [0..*] to I_ColltrlRELandRegFinData      as _ColltrlRELandRegFinData      on $projection.ColltrlLandRegisterHeaderUUID = _ColltrlRELandRegFinData.ColltrlLandRegisterHeaderUUID
  association [0..1] to I_CollateralLandRegisterType   as _CollateralLandRegisterType   on $projection.CollateralLandRegisterType = _CollateralLandRegisterType.CollateralLandRegisterType
{
  key seca_guid    as ColltrlLandRegisterHeaderUUID,
      district     as ColltrlLandRegDistrictCourt,
      sub_district as ColltrlLandRegDistrictSubCourt,
      volume_no    as ColltrlLandRegVolumeNumber,
      page_no      as ColltrlLandRegisterPageNumber,
      @ObjectModel.foreignKey.association: '_CollateralLandRegisterType'
      reg_type     as CollateralLandRegisterType,
      old_ref_id   as ColltrlLandRegExtRefNumber,

      _ColltrlRELandRegPropertyList,
      _ColltrlRELandRegFinData,
      _CollateralLandRegisterType
}
```
