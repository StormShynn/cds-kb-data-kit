---
name: I_OBJECTVALUATIONLINKDATA
description: "Object Value Link Data"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONLINKDATA')/$value
semantic_en: "Object Value Link Data"
semantic_vi: "Object Value Link Data — CDS view giao diện dựa trên cms_oms_val_lnk."
keywords:
  - "object"
  - "value"
  - "link"
  - "data"
  - "valuation"
  - "type"
  - "calculated"
  - "crcy"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_OBJECTVALUATIONLINKDATA

**Object Value Link Data**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONLINKDATA')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ObjectValuationUUID` | ✓ | |  | `val_guid` | `RAW(16)` | GUID for Value service |
| `ObjectValuationLinkUUID` |  | |  | `val_link_guid` | `RAW(16)` | GUID for OMS Links - Values |
| `ObjectValuationType` |  | |  | `val_type` | `CHAR(6)` | Value Type |
| `ObjectValuationCalculatedAmt` |  | |  | `calc_amount` | `CURR(17)` | Calculated Value |
| `ObjectValuationCalculatedCrcy` |  | |  | `calc_amt_curr` | `CUKY(5)` | Currency for Calculated Value |
| `ObjectValuationEnteredAmount` |  | |  | `entered_amount` | `CURR(17)` | Entered Value |
| `ObjectValuationEnteredCurrency` |  | |  | `ent_amt_curr` | `CUKY(5)` | Currency for Entered Value |
| `ObjectValuationValidFromDate` |  | |  | `val_valid_from` | `DATS(8)` | Date from which Value Stands Valid |
| `ObjectValuationValidToDate` |  | |  | `val_valid_to` | `DATS(8)` | Date until which Value Stands Valid |
| `ObjectFirstValuationDate` |  | |  | `val_date` | `DATS(8)` | Date of First Valuation |
| `ObjectValuationOrigin` |  | |  | `val_origin` | `CHAR(6)` | Origin of Value |
| `ObjectValuationEnteredDateTime` |  | |  | `created_at` | `DEC(15)` | Creation Timestamp |
| `ObjectValuationLastChgdDteTme` |  | |  | `changed_at` | `DEC(15)` | Change Timestamp |
| `MovableObjectUUID` |  | | `_MovableObjectData` | `MovableObjectUUID` | `RAW(16)` | GUID for  CMS_MOVABLES |
| `ShipObjectUUID` |  | | `_ShipObjectData` | `ShipObjectUUID` | `RAW(16)` | Globally Unique Identifier |
| `RightsObjectUUID` |  | | `_RightsObjectData` | `RightsObjectUUID` | `RAW(16)` | Rights GUID |
| `InsuranceObjectCategory` |  | | `_InsuranceObjectData` | `InsuranceObjectCategory` | `CHAR(6)` | Object Category |
| `CollateralObjectCategory` |  | | `_CollateralInsurance` | `CollateralObjectCategory` | `CHAR(6)` | Object Category |
| `_MovableObjectData` | | ✓ | | | | |
| `_ShipObjectData` | | ✓ | | | | |
| `_RightsObjectData` | | ✓ | | | | |
| `_InsuranceObjectData` | | ✓ | | | | |
| `_MovableObjectMasterData` | | ✓ | | | | |
| `_RightsObjectMasterData` | | ✓ | | | | |
| `_InsuranceObjectMasterData` | | ✓ | | | | |
| `_CollateralInsurance` | | ✓ | | | | |
| `_ObjectValuationType` | | ✓ | | | | |
| `_ObjectValuationCalculatedCrcy` | | ✓ | | | | |
| `_ObjectValuationEnteredCrcy` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_MovableObjectData` | `I_MovableObjectData` | [0..1] |
| `_ShipObjectData` | `I_ShipObjectData` | [0..1] |
| `_RightsObjectData` | `I_RightsObjectData` | [0..1] |
| `_InsuranceObjectData` | `I_InsuranceObjectData` | [0..1] |
| `_MovableObjectMasterData` | `I_MovableObjectMasterData` | [0..1] |
| `_RightsObjectMasterData` | `I_RightsObjectMasterData` | [0..1] |
| `_InsuranceObjectMasterData` | `I_InsuranceObjectMasterData` | [0..1] |
| `_CollateralInsurance` | `I_CollateralInsurance` | [0..1] |
| `_ObjectValuationType` | `I_ObjectValuationType` | [0..1] |
| `_ObjectValuationCalculatedCrcy` | `I_Currency` | [0..1] |
| `_ObjectValuationEnteredCrcy` | `I_Currency` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONLINKDATA')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_OBJECTVALUATIONLINKDATA')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'IOBJVALLNKDATA',
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
    representativeKey: 'ObjectValuationUUID'
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
        mapping: [ {
           table : 'CMS_OMS_VAL_LNK',
           role : #MAIN,
           viewElement : ['ObjectValuationUUID'],
           tableElement : ['VAL_GUID']
        } ]
    }
  }
}
@VDM.viewType: #BASIC
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'Object Value Link Data'
define view I_ObjectValuationLinkData
  as select from cms_oms_val_lnk
  association [0..1] to I_MovableObjectData         as _MovableObjectData             on $projection.ObjectValuationLinkUUID = _MovableObjectData.MovableObjectUUID
  association [0..1] to I_ShipObjectData            as _ShipObjectData                on $projection.ObjectValuationLinkUUID = _ShipObjectData.ShipObjectUUID
  association [0..1] to I_RightsObjectData          as _RightsObjectData              on $projection.ObjectValuationLinkUUID = _RightsObjectData.RightsObjectUUID
  association [0..1] to I_InsuranceObjectData       as _InsuranceObjectData           on $projection.ObjectValuationLinkUUID = _InsuranceObjectData.InsuranceObjectUUID
  association [0..1] to I_MovableObjectMasterData   as _MovableObjectMasterData       on $projection.ObjectValuationLinkUUID = _MovableObjectMasterData.MovableObjectUUID
  association [0..1] to I_RightsObjectMasterData    as _RightsObjectMasterData        on $projection.ObjectValuationLinkUUID = _RightsObjectMasterData.RightsObjectUUID
  association [0..1] to I_InsuranceObjectMasterData as _InsuranceObjectMasterData     on $projection.ObjectValuationLinkUUID = _InsuranceObjectMasterData.InsuranceObjectUUID
  association [0..1] to I_CollateralInsurance       as _CollateralInsurance           on $projection.ObjectValuationLinkUUID = _CollateralInsurance.CollateralInsuranceUUID
  association [0..1] to I_ObjectValuationType       as _ObjectValuationType           on $projection.ObjectValuationType = _ObjectValuationType.ObjectValuationType
  association [0..1] to I_Currency                  as _ObjectValuationCalculatedCrcy on $projection.ObjectValuationCalculatedCrcy = _ObjectValuationCalculatedCrcy.Currency
  association [0..1] to I_Currency                  as _ObjectValuationEnteredCrcy    on $projection.ObjectValuationEnteredCurrency = _ObjectValuationEnteredCrcy.Currency
{
  key val_guid                                     as ObjectValuationUUID,
      val_link_guid                                as ObjectValuationLinkUUID,
      @ObjectModel.foreignKey.association: '_ObjectValuationType'
      val_type                                     as ObjectValuationType,
      @Semantics.amount.currencyCode: 'ObjectValuationCalculatedCrcy'
      calc_amount                                  as ObjectValuationCalculatedAmt,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ObjectValuationCalculatedCrcy'
      calc_amt_curr                                as ObjectValuationCalculatedCrcy,
      @Semantics.amount.currencyCode: 'ObjectValuationEnteredCurrency'
      entered_amount                               as ObjectValuationEnteredAmount,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ObjectValuationEnteredCrcy'
      ent_amt_curr                                 as ObjectValuationEnteredCurrency,
      val_valid_from                               as ObjectValuationValidFromDate,
      val_valid_to                                 as ObjectValuationValidToDate,
      val_date                                     as ObjectFirstValuationDate,
      val_origin                                   as ObjectValuationOrigin,
      created_at                                   as ObjectValuationEnteredDateTime,
      changed_at                                   as ObjectValuationLastChgdDteTme,

      _MovableObjectData.MovableObjectUUID         as MovableObjectUUID,
      _ShipObjectData.ShipObjectUUID               as ShipObjectUUID,
      _RightsObjectData.RightsObjectUUID           as RightsObjectUUID,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: 'CollateralObjectCategory'
      _InsuranceObjectData.InsuranceObjectCategory as InsuranceObjectCategory,
      _CollateralInsurance.CollateralObjectCategory as CollateralObjectCategory,

      _MovableObjectData,
      _ShipObjectData,
      _RightsObjectData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'
      _InsuranceObjectData,
      _MovableObjectMasterData,
      _RightsObjectMasterData,
      @API.element.releaseState: #DEPRECATED
      @API.element.successor: '_CollateralInsurance'
      _InsuranceObjectMasterData,
      _CollateralInsurance,
      _ObjectValuationType,
      _ObjectValuationCalculatedCrcy,
      _ObjectValuationEnteredCrcy

}
```
