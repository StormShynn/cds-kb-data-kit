---
name: I_COLLTRLRELANDREGPROPERTYLIST
description: "Land Reg Property List for Collateral"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGPROPERTYLIST')/$value
semantic_en: "Land Reg Property List for Collateral"
semantic_vi: "Land Reg Property List for Collateral — CDS view giao diện dựa trên cms_lr_de_b."
keywords:
  - "land"
  - "reg"
  - "property"
  - "list"
  - "for"
  - "collateral"
  - "colltrl"
  - "register"
  - "header"
  - "prpty"
  - "number"
  - "area"
  - "size"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLRELANDREGPROPERTYLIST

**Land Reg Property List for Collateral**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGPROPERTYLIST')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlLandRegPropertyListUUID` | ✓ | |  | `secb_guid` | `RAW(16)` | GUID for Table CMS_LR_DE_B |
| `ColltrlLandRegisterHeaderUUID` |  | |  | `seca_guid` | `RAW(16)` | GUID for Table CMS_LR_DE_A |
| `ColltrlLandRegPrptyListNumber` |  | |  | `serial_no` | `CHAR(4)` | Serial number of the Property List Number |
| `ColltrlLandRegPrptyListLoc` |  | |  | `location` | `CHAR(60)` | Location / Parish |
| `CollateralLandRegisterAreaSize` |  | |  | `area` | `QUAN(13)` | Area |
| `ColltrlLandRegUnitOfMeasure` |  | |  | `area_uom` | `UNIT(3)` | Unit of Measure |
| `CollateralLandRegisterPlot` |  | |  | `flur` | `CHAR(10)` | Flur |
| `ColltrlLandRegisterLandParcel` |  | |  | `flurstueck` | `CHAR(60)` | Parcel of the land. Flurstueck in German |
| `_ColltrlRELandRegister` | | ✓ | | | | |
| `_ColltrlRELandRegisterHeader` | | ✓ | | | | |
| `_ColltrlRELandRegFinData` | | ✓ | | | | |
| `_ColltrlLandRegUnitOfMeasure` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ColltrlRELandRegister` | `I_ColltrlRELandRegister` | [0..*] |
| `_ColltrlRELandRegisterHeader` | `I_ColltrlRELandRegisterHeader` | [0..1] |
| `_ColltrlRELandRegFinData` | `I_ColltrlRELandRegFinData` | [0..*] |
| `_ColltrlLandRegUnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGPROPERTYLIST')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGPROPERTYLIST')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICRELRPRPTYLIST',
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
    representativeKey: 'ColltrlLandRegPropertyListUUID'
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
@EndUserText.label: 'Land Reg Property List for Collateral'
define view I_ColltrlRELandRegPropertyList
  as select from cms_lr_de_b
  association [0..*] to I_ColltrlRELandRegister           as _ColltrlRELandRegister         on  $projection.ColltrlLandRegPropertyListUUID = _ColltrlRELandRegister.ColltrlRELandRegisterLinkUUID
  association [0..1] to I_ColltrlRELandRegisterHeader     as _ColltrlRELandRegisterHeader   on  $projection.ColltrlLandRegisterHeaderUUID = _ColltrlRELandRegisterHeader.ColltrlLandRegisterHeaderUUID
  association [0..*] to I_ColltrlRELandRegFinData         as _ColltrlRELandRegFinData       on  $projection.ColltrlLandRegisterHeaderUUID = _ColltrlRELandRegFinData.ColltrlLandRegisterHeaderUUID
                                                                                            and $projection.ColltrlLandRegPrptyListNumber = _ColltrlRELandRegFinData.ColltrlLandRegChrgSerialNumber
  association [0..1] to I_UnitOfMeasure                   as _ColltrlLandRegUnitOfMeasure   on  $projection.ColltrlLandRegUnitOfMeasure = _ColltrlLandRegUnitOfMeasure.UnitOfMeasure

{
  key secb_guid  as ColltrlLandRegPropertyListUUID,
      seca_guid  as ColltrlLandRegisterHeaderUUID,
      serial_no  as ColltrlLandRegPrptyListNumber,
      location   as ColltrlLandRegPrptyListLoc,
      @Semantics.quantity.unitOfMeasure: 'ColltrlLandRegUnitOfMeasure'
      area       as CollateralLandRegisterAreaSize,
      @Semantics.unitOfMeasure: true
     @ObjectModel.foreignKey.association: '_ColltrlLandRegUnitOfMeasure'
      area_uom   as ColltrlLandRegUnitOfMeasure,
      flur       as CollateralLandRegisterPlot,
      flurstueck as ColltrlLandRegisterLandParcel,

     _ColltrlRELandRegister,
     _ColltrlRELandRegisterHeader,
     _ColltrlRELandRegFinData ,
     _ColltrlLandRegUnitOfMeasure 
}
```
