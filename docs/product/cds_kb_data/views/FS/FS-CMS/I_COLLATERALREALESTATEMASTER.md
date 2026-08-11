---
name: I_COLLATERALREALESTATEMASTER
description: "Collateral Real Estate Object Details"
app_component: FS-CMS
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEMASTER')/$value
semantic_en: "Collateral Real Estate Object Details"
semantic_vi: "Collateral Real Estate Object Details — CDS view giao diện dựa trên cms_re_obj."
keywords:
  - "collateral"
  - "real"
  - "estate"
  - "object"
  - "details"
  - "identifier"
  - "type"
  - "address"
  - "colltrl"
  - "description"
tags:
  - FS
  - component:FS-CMS
  - FS-CMS
  - interface-view
---
# I_COLLATERALREALESTATEMASTER

**Collateral Real Estate Object Details**

| Property | Value |
|---|---|
| App Component | `FS-CMS` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEMASTER')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollateralRealEstateUUID` | ✓ | |  | `obj_guid` | `RAW(16)` | GUID for Real Estate Object |
| `CollateralRealEstateIdentifier` |  | |  | `object_id` | `CHAR(20)` | Object ID |
| `CollateralRealEstateType` |  | |  | `object_type` | `CHAR(6)` | Real Estate Object Type ID |
| `CollateralRealEstateAddressID` |  | |  | `addr_id` | `CHAR(10)` | Address ID |
| `ColltrlRealEstateDescription` |  | |  | `object_desc` | `CHAR(30)` | Description of the Real Estate Object |
| `CollateralRealEstateParentUUID` |  | |  | `obj_parent_id` | `RAW(16)` | GUID for Real Estate Object |
| `ColltrlREExtReferenceNumber` |  | |  | `obj_old_ref_no` | `CHAR(32)` | External reference Number of an External System |
| `ColltrlREFixtureFittingType` |  | |  | `fix_fitting_typ` | `CHAR(6)` | Fixtures and Fittings Type ID |
| `CollateralRealEstateAreaUnit` |  | |  | `object_area_uom` | `UNIT(3)` | Unit of Measure for Area |
| `CollateralRealEstateVolumeUnit` |  | |  | `object_vol_uom` | `UNIT(3)` | Unit of Measure for Volume of Real Estate |
| `ColltrlREObjectCurrency` |  | |  | `object_curr` | `CUKY(5)` | Object Currency |
| `ColltrlRealEstateMacroLocation` |  | |  | `macro_loc_type` | `CHAR(6)` | Macro Location |
| `ColltrlRealEstateMicroLocation` |  | |  | `micro_loc_type` | `CHAR(6)` | Micro Location |
| `ColltrlRETransptConncn` |  | |  | `tran_conn_type` | `CHAR(6)` | Transport Connection |
| `ColltrlREEnvironmentalStatus` |  | |  | `environ_status` | `CHAR(6)` | Enviromental Status |
| `ColltrlRealEstateIsFloodZone` |  | |  | `flood_zone_flg` | `CHAR(1)` | Indicator for Flood Zone |
| `ColltrlREIsEarthquakeZone` |  | |  | `earthquake_flg` | `CHAR(1)` | Indicator : Eathquake Zone |
| `ColltrlREIsArchlConsvnArea` |  | |  | `arct_conv_flg` | `CHAR(1)` | Indicator for Architectural Conservation Area |
| `ColltrlREIsHistoricalSite` |  | |  | `hist_site_flg` | `CHAR(1)` | Indicator for Historical Site |
| `ColltrlREHasFctrsImprngVal` |  | |  | `is_val_imp_facs` | `CHAR(1)` | Indicates existence of Factors Impairing Real Estate Value |
| `ColltrlREFctrsImprngValDesc` |  | |  | `value_imp_desc` | `CHAR(30)` | Description of the value imparing factor |
| `CollateralAdminOrgUnit` |  | |  | `admin_org_unit` | `CHAR(12)` | Administration Organizational Unit |
| `CollateralBankArea` |  | |  | `bankarea` | `CHAR(4)` | Bank Area in Collateral Management |
| `CollateralRealEstateEnteredBy` |  | |  | `created_by` | `CHAR(12)` | Real Estate Add-On User |
| `ColltrlRealEstateEnteredDate` |  | |  | `created_date` | `DATS(8)` | Created On |
| `ColltrlRealEstateEnteredTime` |  | |  | `created_time` | `TIMS(6)` | Created At |
| `ColltrlRealEstateEnteredSource` |  | |  | `entry_src` | `CHAR(32)` | Sorce of Initial entry |
| `ColltrlRealEstateLastChangedBy` |  | |  | `last_chg_by` | `CHAR(12)` | Last Changed By |
| `ColltrlRELastChangedDate` |  | |  | `last_chg_date` | `DATS(8)` | Last Changed On |
| `ColltrlRELastChangedTime` |  | |  | `last_chg_time` | `TIMS(6)` | Last Changed At |
| `ColltrlRELastChangedSource` |  | |  | `processing_src` | `CHAR(32)` | Processing Source |
| `_CollateralRealEstateMaster` | | ✓ | | | | |
| `_CollateralRealEstatePart` | | ✓ | | | | |
| `_ColltrlREPartMaster` | | ✓ | | | | |
| `_ObjectInsuranceLinkData` | | ✓ | | | | |
| `_LiquidationData` | | ✓ | | | | |
| `_CollateralRealEstateType` | | ✓ | | | | |
| `_CollateralAdminOrgUnitAttrib` | | ✓ | | | | |
| `_ColltrlREFixtureFittingType` | | ✓ | | | | |
| `_ColltrlREMacroLocation` | | ✓ | | | | |
| `_ColltrlREMicroLocation` | | ✓ | | | | |
| `_ColltrlRETransptConncn` | | ✓ | | | | |
| `_ColltrlREEnvironmentalStatus` | | ✓ | | | | |
| `_ColltrlREObjectCurrency` | | ✓ | | | | |
| `_CollateralRealEstateAreaUnit` | | ✓ | | | | |
| `_CollateralRealEstateVolUnit` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_CollateralRealEstateMaster` | `I_CollateralRealEstateMaster` | [0..1] |
| `_CollateralRealEstatePart` | `I_CollateralRealEstatePart` | [0..*] |
| `_ColltrlREPartMaster` | `I_ColltrlREPartMaster` | [0..*] |
| `_ObjectInsuranceLinkData` | `I_ObjectInsuranceLinkData` | [0..*] |
| `_LiquidationData` | `I_LiquidationData` | [0..*] |
| `_CollateralRealEstateType` | `I_CollateralRealEstateType` | [0..1] |
| `_CollateralAdminOrgUnitAttrib` | `I_CollateralAdminOrgUnitAttrib` | [0..1] |
| `_ColltrlREFixtureFittingType` | `I_ColltrlREFixtureFittingType` | [0..1] |
| `_ColltrlREMacroLocation` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREMicroLocation` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlRETransptConncn` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREEnvironmentalStatus` | `I_CollateralAttributeIndType` | [0..1] |
| `_ColltrlREObjectCurrency` | `I_Currency` | [0..1] |
| `_CollateralRealEstateAreaUnit` | `I_UnitOfMeasure` | [0..1] |
| `_CollateralRealEstateVolUnit` | `I_UnitOfMeasure` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEMASTER')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_COLLATERALREALESTATEMASTER')/$value)*

```abap
@AbapCatalog: {
    sqlViewName: 'ICOLREALESTMSTR',
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
    representativeKey: 'CollateralRealEstateUUID'
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
@EndUserText.label: 'Collateral Real Estate Object Details'
define view I_CollateralRealEstateMaster
  as select from cms_re_obj
  association [0..1] to I_CollateralRealEstateMaster   as _CollateralRealEstateMaster   on  $projection.CollateralRealEstateUUID = _CollateralRealEstateMaster.CollateralRealEstateUUID
  association [0..*] to I_CollateralRealEstatePart     as _CollateralRealEstatePart     on  $projection.CollateralRealEstateUUID = _CollateralRealEstatePart.CollateralRealEstateUUID
  association [0..*] to I_ColltrlREPartMaster          as _ColltrlREPartMaster          on  $projection.CollateralRealEstateUUID = _ColltrlREPartMaster.CollateralRealEstateUUID
  association [0..*] to I_ObjectInsuranceLinkData      as _ObjectInsuranceLinkData      on  $projection.CollateralRealEstateUUID = _ObjectInsuranceLinkData.ObjectReferenceUUID
  association [0..*] to I_LiquidationData              as _LiquidationData              on  $projection.CollateralRealEstateUUID = _LiquidationData.ObjectReferenceUUID
  association [0..1] to I_CollateralRealEstateType     as _CollateralRealEstateType     on  $projection.CollateralRealEstateType = _CollateralRealEstateType.CollateralRealEstateType
  association [0..1] to I_CollateralAdminOrgUnitAttrib as _CollateralAdminOrgUnitAttrib on  $projection.CollateralAdminOrgUnit = _CollateralAdminOrgUnitAttrib.CollateralAdminOrgUnit
  association [0..1] to I_ColltrlREFixtureFittingType  as _ColltrlREFixtureFittingType  on  $projection.ColltrlREFixtureFittingType = _ColltrlREFixtureFittingType.ColltrlREFixtureFittingType
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREMacroLocation       on  $projection.ColltrlRealEstateMacroLocation        = _ColltrlREMacroLocation.CollateralAttributeIndType
                                                                                        and _ColltrlREMacroLocation.CollateralAttributeIndCat = 'REO002'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREMicroLocation       on  $projection.ColltrlRealEstateMicroLocation        = _ColltrlREMicroLocation.CollateralAttributeIndType
                                                                                        and _ColltrlREMicroLocation.CollateralAttributeIndCat = 'REO003'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlRETransptConncn       on  $projection.ColltrlRETransptConncn                = _ColltrlRETransptConncn.CollateralAttributeIndType
                                                                                        and _ColltrlRETransptConncn.CollateralAttributeIndCat = 'REO004'
  association [0..1] to I_CollateralAttributeIndType   as _ColltrlREEnvironmentalStatus on  $projection.ColltrlREEnvironmentalStatus                = _ColltrlREEnvironmentalStatus.CollateralAttributeIndType
                                                                                        and _ColltrlREEnvironmentalStatus.CollateralAttributeIndCat = 'REO005'
  association [0..1] to I_Currency                     as _ColltrlREObjectCurrency      on  $projection.ColltrlREObjectCurrency = _ColltrlREObjectCurrency.Currency
  association [0..1] to I_UnitOfMeasure                as _CollateralRealEstateAreaUnit on  $projection.CollateralRealEstateAreaUnit = _CollateralRealEstateAreaUnit.UnitOfMeasure
  association [0..1] to I_UnitOfMeasure                as _CollateralRealEstateVolUnit  on  $projection.CollateralRealEstateVolumeUnit = _CollateralRealEstateVolUnit.UnitOfMeasure
{
  key obj_guid        as CollateralRealEstateUUID,
      object_id       as CollateralRealEstateIdentifier,
      @ObjectModel.foreignKey.association: '_CollateralRealEstateType'
      object_type     as CollateralRealEstateType,
      addr_id         as CollateralRealEstateAddressID,
      object_desc     as ColltrlRealEstateDescription,
      obj_parent_id   as CollateralRealEstateParentUUID,
      obj_old_ref_no  as ColltrlREExtReferenceNumber,
      @ObjectModel.foreignKey.association: '_ColltrlREFixtureFittingType'
      fix_fitting_typ as ColltrlREFixtureFittingType,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_CollateralRealEstateAreaUnit'
      object_area_uom as CollateralRealEstateAreaUnit,
      @Semantics.unitOfMeasure: true
      @ObjectModel.foreignKey.association: '_CollateralRealEstateVolUnit'
      object_vol_uom  as CollateralRealEstateVolumeUnit,
      @Semantics.currencyCode: true
      @ObjectModel.foreignKey.association: '_ColltrlREObjectCurrency'
      object_curr     as ColltrlREObjectCurrency,
      @ObjectModel.foreignKey.association: '_ColltrlREMacroLocation'
      macro_loc_type  as ColltrlRealEstateMacroLocation,
      @ObjectModel.foreignKey.association: '_ColltrlREMicroLocation'
      micro_loc_type  as ColltrlRealEstateMicroLocation,
      @ObjectModel.foreignKey.association: '_ColltrlRETransptConncn'
      tran_conn_type  as ColltrlRETransptConncn,
      @ObjectModel.foreignKey.association: '_ColltrlREEnvironmentalStatus'
      environ_status  as ColltrlREEnvironmentalStatus,
      @Semantics.booleanIndicator: true
      flood_zone_flg  as ColltrlRealEstateIsFloodZone,
      @Semantics.booleanIndicator: true
      earthquake_flg  as ColltrlREIsEarthquakeZone,
      @Semantics.booleanIndicator: true
      arct_conv_flg   as ColltrlREIsArchlConsvnArea,
      @Semantics.booleanIndicator: true
      hist_site_flg   as ColltrlREIsHistoricalSite,
      @Semantics.booleanIndicator: true
      is_val_imp_facs as ColltrlREHasFctrsImprngVal,
      value_imp_desc  as ColltrlREFctrsImprngValDesc,
      admin_org_unit  as CollateralAdminOrgUnit,
      bankarea        as CollateralBankArea,
      created_by      as CollateralRealEstateEnteredBy,
      created_date    as ColltrlRealEstateEnteredDate,
      created_time    as ColltrlRealEstateEnteredTime,
      entry_src       as ColltrlRealEstateEnteredSource,
      last_chg_by     as ColltrlRealEstateLastChangedBy,
      last_chg_date   as ColltrlRELastChangedDate,
      last_chg_time   as ColltrlRELastChangedTime,
      processing_src  as ColltrlRELastChangedSource,

      _CollateralRealEstateMaster,
      _CollateralRealEstatePart,
      _ColltrlREPartMaster,
      _ObjectInsuranceLinkData,
      _LiquidationData,
      _CollateralRealEstateType,
      _CollateralAdminOrgUnitAttrib,
      _ColltrlREFixtureFittingType,
      _ColltrlREMacroLocation,
      _ColltrlREMicroLocation,
      _ColltrlRETransptConncn,
      _ColltrlREEnvironmentalStatus,
      _ColltrlREObjectCurrency,
      _CollateralRealEstateAreaUnit,
      _CollateralRealEstateVolUnit

}
```
