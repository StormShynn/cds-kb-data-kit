---
name: I_COLLTRLRELANDREGFINDATA
description: "Land Reg Fin Dets for Collateral"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGFINDATA')/$value
semantic_en: "Land Reg Fin Dets for Collateral"
semantic_vi: "Land Reg Fin Dets for Collateral — CDS view giao diện dựa trên cms_lr_de_2."
keywords:
  - "land"
  - "reg"
  - "fin"
  - "dets"
  - "for"
  - "collateral"
  - "colltrl"
  - "financial"
  - "register"
  - "header"
  - "chrg"
  - "serial"
  - "number"
  - "prpty"
  - "list"
tags:
  - FS
  - bo:companycode
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLTRLRELANDREGFINDATA

**Land Reg Fin Dets for Collateral**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGFINDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ColltrlLandRegFinancialUUID` | ✓ | |  | `sec2_guid` | `RAW(16)` | GUID for Table CMS_LR_DE_2 |
| `ColltrlLandRegisterHeaderUUID` |  | |  | `seca_guid` | `RAW(16)` | GUID for Table CMS_LR_DE_A |
| `ColltrlLandRegChrgSerialNumber` |  | |  | `serial_no` | `CHAR(32)` | Serial No |
| `ColltrlLandRegPrptyListNumber` |  | |  | `serial_no_b` | `CHAR(4)` | Serial number of the Property List Number |
| `ColltrlLandRegChrgPrioValue` |  | |  | `priority` | `NUMC(4)` | Priority of the Charge |
| `ColltrlLandRegisterChargeType` |  | |  | `chg_res_typ` | `CHAR(6)` | Section II Charge/Restriction Type |
| `ColltrlLandRegChargeAmount` |  | |  | `value` | `CURR(17)` | Value of the Charge/Restriction |
| `ColltrlLandRegChargeCurrency` |  | |  | `curr` | `CUKY(5)` | Currency of the Charge |
| `ColltrlLandRegChrgDescription` |  | |  | `description` | `CHAR(60)` | Description |
| `_ColltrlRELandRegisterHeader` | | ✓ | | | | |
| `_ColltrlRELandRegPropertyList` | | ✓ | | | | |
| `_ColltrlLandRegChargeCurrency` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ColltrlRELandRegisterHeader` | `I_ColltrlRELandRegisterHeader` | [0..1] |
| `_ColltrlRELandRegPropertyList` | `I_ColltrlRELandRegPropertyList` | [0..*] |
| `_ColltrlLandRegChargeCurrency` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGFINDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLTRLRELANDREGFINDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICRELRFINDATA',
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
    representativeKey: 'ColltrlLandRegFinancialUUID'
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
@EndUserText.label: 'Land Reg Fin Dets for Collateral'
define view I_ColltrlRELandRegFinData
  as select from cms_lr_de_2
  association [0..1] to I_ColltrlRELandRegisterHeader      as _ColltrlRELandRegisterHeader  on  $projection.ColltrlLandRegisterHeaderUUID = _ColltrlRELandRegisterHeader.ColltrlLandRegisterHeaderUUID
 
  association [0..*] to I_ColltrlRELandRegPropertyList     as _ColltrlRELandRegPropertyList on  $projection.ColltrlLandRegisterHeaderUUID    = _ColltrlRELandRegPropertyList.ColltrlLandRegisterHeaderUUID
                                                                                               and $projection.ColltrlLandRegChrgSerialNumber = _ColltrlRELandRegPropertyList.ColltrlLandRegPrptyListNumber
  association [0..1] to I_Currency                         as _ColltrlLandRegChargeCurrency on  $projection.ColltrlLandRegChargeCurrency = _ColltrlLandRegChargeCurrency.Currency

{
  key sec2_guid   as ColltrlLandRegFinancialUUID,
      seca_guid   as ColltrlLandRegisterHeaderUUID,
      serial_no   as ColltrlLandRegChrgSerialNumber,
      serial_no_b as ColltrlLandRegPrptyListNumber,
      priority    as ColltrlLandRegChrgPrioValue,
      chg_res_typ as ColltrlLandRegisterChargeType,
      @Semantics.amount.currencyCode: 'ColltrlLandRegChargeCurrency'
      value       as ColltrlLandRegChargeAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlLandRegChargeCurrency'
      curr        as ColltrlLandRegChargeCurrency,
      description as ColltrlLandRegChrgDescription,

      _ColltrlRELandRegisterHeader,
      _ColltrlRELandRegPropertyList,
      _ColltrlLandRegChargeCurrency 
}
```
