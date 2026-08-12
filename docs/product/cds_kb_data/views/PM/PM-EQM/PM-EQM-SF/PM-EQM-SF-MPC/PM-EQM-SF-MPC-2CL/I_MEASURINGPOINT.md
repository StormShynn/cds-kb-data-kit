---
name: I_MEASURINGPOINT
description: "Measuringpoint"
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: yes
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-SF
  - interface-view
  - component:PM-EQM-SF-MPC-2CL
  - lob:Plant Maintenance
---
# I_MEASURINGPOINT

**Measuringpoint**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | Yes — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasuringPoint` | ✓ | |  | `point` |  |  |
| `MeasuringPointObjectIdentifier` |  | |  | `mpobj` |  |  |
| `MeasuringPointPositionNumber` |  | |  | `psort` |  |  |
| `MeasuringPointCategory` |  | |  | `mptyp` |  |  |
| `CreationDate` |  | |  | `erdat` |  |  |
| `LastChangeDate` |  | |  | `aedat` |  |  |
| `AuthorizationGroup` |  | |  | `begru` |  |  |
| `MeasuringPointIsInactive` |  | |  | `inact` |  |  |
| `MeasuringPointIsCounter` |  | |  | `indct` |  |  |
| `MultiLevelDeletionLogicStatus` |  | |  | `lvorm` |  |  |
| `Assembly` |  | |  | `locas` |  |  |
| `ReferenceMeasuringPoint` |  | |  | `refmp` |  |  |
| `MsrgPtInternalCharacteristic` |  | |  | `atinn` |  |  |
| `MeasuringPointExponent` |  | |  | `expon` |  |  |
| `MeasuringPointDecimalPlaces` |  | |  | `decim` |  |  |
| `MeasuringPointMinimumThreshold` |  | |  | `mrmin` |  |  |
| `MinimumThresholdIsEntered` |  | |  | `mrmini` |  |  |
| `MeasuringPointMaximumThreshold` |  | |  | `mrmax` |  |  |
| `MaximumThresholdIsEntered` |  | |  | `mrmaxi` |  |  |
| `MeasurementRangeUnit` |  | |  | `mrngu` |  |  |
| `MeasuringPointSIUnitOfMeasure` |  | | `_UnitOfMeasure._Dimension` | `UnitOFMeasureSiUnit` |  |  |
| `MsrgPtIsCountingBackwards` |  | |  | `indrv` |  |  |
| `MsmtRdngSourceMeasuringPoint` |  | |  | `trans` |  |  |
| `CounterOverflowRdngThreshold` |  | |  | `cjump` |  |  |
| `OverflowReadingIsEntered` |  | |  | `cjumpi` |  |  |
| `MeasuringPointAnnualEstimate` |  | |  | `pyear` |  |  |
| `MsrgPtAnnualEstimateIsEntered` |  | |  | `pyeari` |  |  |
| `MeasuringPointCatalogType` |  | |  | `codct` |  |  |
| `MeasuringPointCodeGroup` |  | |  | `codgr` |  |  |
| `ValuationCodeIsSufficient` |  | |  | `cdsuf` |  |  |
| `Language` |  | |  | `mlang` |  |  |
| `MeasuringPointDescription` |  | |  | `pttxt` |  |  |
| `MeasuringPointShortText` |  | |  | `dstxt` |  |  |
| `MeasuringPointIsReference` |  | |  | `irfmp` |  |  |
| `MeasurementTransferIsSupported` |  | |  | `indtr` |  |  |
| `CreatedByUser` |  | |  | `ernam` |  |  |
| `LastChangedByUser` |  | |  | `aenam` |  |  |
| `MeasuringPointHasLongText` |  | |  | `kzltx` |  |  |
| `MeasuringPointObjectType` |  | |  | `cast(substring(mpobj,1,2) as j_obart)` |  |  |
| `MeasuringPointTargetValue` |  | |  | `desir` |  |  |
| `TargetValueIsEntered` |  | |  | `desiri` |  |  |
| `MsmtRdngTransferMode` |  | |  | `modtr` |  |  |
| `MsrgPtMaximumToleranceQuantity` |  | |  | `upr_tolerance` |  |  |
| `MsrgPtMaxTolUnitOfMeasure` |  | |  | `upr_dsp_unit` |  |  |
| `MsrgPtMinimumToleranceQuantity` |  | |  | `lowr_tolerance` |  |  |
| `MsrgPtMinTolUnitOfMeasure` |  | |  | `lowr_dsp_unit` |  |  |
| `FunctionalLocation` |  | | `_FunctionalLocation` | `FunctionalLocation` |  |  |
| `_ControllingObject` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ReferenceMeasuringPoint` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_MsmtRdngSourceMeasuringPoint` | | ✓ | | | | |
| `_MeasuringPointCatalogType` | | ✓ | | | | |
| `_MeasuringPointCodeGroup` | | ✓ | | | | |
| `_Characteristic` | | ✓ | | | | |
| `_MeasuringPointCategory` | | ✓ | | | | |
| `_Equipment` | | ✓ | | | | |
| `_FunctionalLocation` | | ✓ | | | | |
| `_FunctionalLocationLabel` | | ✓ | | | | |
| `_AuthorizationGroup` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ControllingObject` | `I_ControllingObject` | [1..1] |
| `_Language` | `I_Language` | [0..1] |
| `_Product` | `I_Product` | [0..1] |
| `_ReferenceMeasuringPoint` | `I_MeasuringPoint` | [0..1] |
| `_UnitOfMeasure` | `I_UnitOfMeasure` | [0..1] |
| `_MsmtRdngSourceMeasuringPoint` | `I_MeasuringPoint` | [0..1] |
| `_MeasuringPointCatalogType` | `I_Inspectioncatalog` | [0..1] |
| `_MeasuringPointCodeGroup` | `I_InspectionCodeGroup` | [0..1] |
| `_Characteristic` | `I_ClfnCharacteristicForKeyDate` | [0..1] |
| `_MeasuringPointCategory` | `I_MeasuringPointCategory` | [0..1] |
| `_Equipment` | `I_Equipment` | [0..1] |
| `_FunctionalLocation` | `I_FunctionalLocation` | [0..1] |
| `_FunctionalLocationLabel` | `I_FunctionalLocationLabel` | [0..1] |
| `_AuthorizationGroup` | `I_TechObjAuthznGrp` | [0..1] |
| `_MeasuringPointExtension` | `E_MeasuringPoint` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IMEASPOINT'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #CHECK
@EndUserText.label: 'Measuring Point'
@ObjectModel.representativeKey: 'MeasuringPoint'

@Search.searchable: true
@VDM.viewType: #BASIC

@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.usageType.dataClass: #MASTER
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #M
@ObjectModel.supportedCapabilities: #CDS_MODELING_DATA_SOURCE
@Metadata.ignorePropagatedAnnotations:true

define view I_MeasuringPoint
  as select from imptt
  association [1..1] to I_ControllingObject            as _ControllingObject            on  $projection.MeasuringPointObjectIdentifier = _ControllingObject.ControllingObject
  association [0..1] to I_Language                     as _Language                     on  $projection.Language = _Language.Language
  association [0..1] to I_Product                      as _Product                      on  $projection.Assembly = _Product.Product
  association [0..1] to I_MeasuringPoint               as _ReferenceMeasuringPoint      on  $projection.ReferenceMeasuringPoint = _ReferenceMeasuringPoint.MeasuringPoint
  association [0..1] to I_UnitOfMeasure                as _UnitOfMeasure                on  $projection.MeasurementRangeUnit = _UnitOfMeasure.UnitOfMeasure
  association [0..1] to I_MeasuringPoint               as _MsmtRdngSourceMeasuringPoint on  $projection.MsmtRdngSourceMeasuringPoint = _MsmtRdngSourceMeasuringPoint.MeasuringPoint
  association [0..1] to I_Inspectioncatalog            as _MeasuringPointCatalogType    on  $projection.MeasuringPointCatalogType = _MeasuringPointCatalogType.InspectionCatalog
  association [0..1] to I_InspectionCodeGroup          as _MeasuringPointCodeGroup      on  $projection.MeasuringPointCatalogType = _MeasuringPointCodeGroup.InspectionCatalog
                                                                                        and $projection.MeasuringPointCodeGroup   = _MeasuringPointCodeGroup.InspectionCodeGroup
  association [0..1] to I_ClfnCharacteristicForKeyDate as _Characteristic               on  $projection.MsrgPtInternalCharacteristic = _Characteristic.CharcInternalID
  association [0..1] to I_MeasuringPointCategory       as _MeasuringPointCategory       on  $projection.MeasuringPointCategory = _MeasuringPointCategory.MeasuringPointCategory
  association [0..1] to I_Equipment                    as _Equipment                    on  $projection.MeasuringPointObjectIdentifier = _Equipment.MaintObjectInternalID
  association [0..1] to I_FunctionalLocation           as _FunctionalLocation           on  $projection.MeasuringPointObjectIdentifier = _FunctionalLocation.MaintObjectInternalID
  association [0..1] to I_FunctionalLocationLabel      as _FunctionalLocationLabel      on  $projection.FunctionalLocation = _FunctionalLocationLabel.FunctionalLocation
  association [0..1] to I_TechObjAuthznGrp             as _AuthorizationGroup           on  $projection.AuthorizationGroup = _AuthorizationGroup.TechObjAuthorizationGroup
  //  association [0..1] to P_Building                     as _Building                     on  $projection.MeasuringPointObjectIdentifier = _Building.ObjectNumberOfBuilding
  //  association [0..1] to P_SettlementUnit               as _SettlementUnit               on  $projection.MeasuringPointObjectIdentifier = _SettlementUnit.ObjectNumberOfSettlementUnit
  //  association [0..1] to P_RentalObject                 as _RentalObject                 on  $projection.MeasuringPointObjectIdentifier = _RentalObject.ObjectNumberOfRentalObject

  -- Extensions, do not expose as association:
  association [0..1] to E_MeasuringPoint               as _MeasuringPointExtension      on  $projection.MeasuringPoint = _MeasuringPointExtension.MeasuringPoint

{

      @ObjectModel.text.element: 'MeasuringPointDescription'
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
  key point                                         as MeasuringPoint,

      @ObjectModel.foreignKey.association: '_ControllingObject'
      mpobj                                         as MeasuringPointObjectIdentifier,

      psort                                         as MeasuringPointPositionNumber,

      @ObjectModel.foreignKey.association: '_MeasuringPointCategory'
      mptyp                                         as MeasuringPointCategory,

      @Semantics.systemDate.createdAt: true
      erdat                                         as CreationDate,

      @Semantics.systemDate.lastChangedAt: true
      aedat                                         as LastChangeDate,

      @ObjectModel.foreignKey.association: '_AuthorizationGroup'
      begru                                         as AuthorizationGroup,

      inact                                         as MeasuringPointIsInactive,

      indct                                         as MeasuringPointIsCounter,

      lvorm                                         as MultiLevelDeletionLogicStatus,

      //      @Consumption.valueHelpDefinition: [{
      //        entity: {
      //            name:    'I_MaterialStdVH',
      //            element: 'Material'
      //        }
      //      }]
      @ObjectModel.foreignKey.association: '_Product'
      locas                                         as Assembly,

      @ObjectModel.foreignKey.association: '_ReferenceMeasuringPoint'
      refmp                                         as ReferenceMeasuringPoint,

      @ObjectModel.foreignKey.association: '_Characteristic'
      atinn                                         as MsrgPtInternalCharacteristic,

      expon                                         as MeasuringPointExponent,

      decim                                         as MeasuringPointDecimalPlaces,

      mrmin                                         as MeasuringPointMinimumThreshold,

      mrmini                                        as MinimumThresholdIsEntered,

      mrmax                                         as MeasuringPointMaximumThreshold,

      mrmaxi                                        as MaximumThresholdIsEntered,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      @Semantics.unitOfMeasure: true
      mrngu                                         as MeasurementRangeUnit,

      _UnitOfMeasure._Dimension.UnitOFMeasureSiUnit as MeasuringPointSIUnitOfMeasure,

      indrv                                         as MsrgPtIsCountingBackwards,

      @ObjectModel.foreignKey.association: '_MsmtRdngSourceMeasuringPoint'
      trans                                         as MsmtRdngSourceMeasuringPoint,

      cjump                                         as CounterOverflowRdngThreshold,

      cjumpi                                        as OverflowReadingIsEntered,

      pyear                                         as MeasuringPointAnnualEstimate,

      pyeari                                        as MsrgPtAnnualEstimateIsEntered,

      @ObjectModel.foreignKey.association: '_MeasuringPointCatalogType'
      codct                                         as MeasuringPointCatalogType,

      @ObjectModel.foreignKey.association: '_MeasuringPointCodeGroup'
      codgr                                         as MeasuringPointCodeGroup,

      cdsuf                                         as ValuationCodeIsSufficient,

      @ObjectModel.foreignKey.association: '_Language'
      mlang                                         as Language,

      @Semantics.text: true
      pttxt                                         as MeasuringPointDescription,

      dstxt                                         as MeasuringPointShortText,

      irfmp                                         as MeasuringPointIsReference,

      indtr                                         as MeasurementTransferIsSupported,

      @Semantics.user.createdBy: true
      ernam                                         as CreatedByUser,

      @Semantics.user.lastChangedBy: true
      aenam                                         as LastChangedByUser,

      kzltx                                         as MeasuringPointHasLongText,

      cast(substring(mpobj,1,2) as j_obart)         as MeasuringPointObjectType,

      desir                                         as MeasuringPointTargetValue,

      desiri                                        as TargetValueIsEntered,

      modtr                                         as MsmtRdngTransferMode,
      @Semantics.quantity.unitOfMeasure: 'MsrgPtMaxTolUnitOfMeasure'
      upr_tolerance                                 as MsrgPtMaximumToleranceQuantity,
      @Semantics.unitOfMeasure: true
      upr_dsp_unit                                  as MsrgPtMaxTolUnitOfMeasure,
      @Semantics.quantity.unitOfMeasure: 'MsrgPtMinTolUnitOfMeasure'
      lowr_tolerance                                as MsrgPtMinimumToleranceQuantity,
      @Semantics.unitOfMeasure: true
      lowr_dsp_unit                                 as MsrgPtMinTolUnitOfMeasure,

      _FunctionalLocation.FunctionalLocation        as FunctionalLocation,

      // Propagate association(s)
      _ControllingObject,
      _Language,
      _Product,
      _ReferenceMeasuringPoint,
      _UnitOfMeasure,
      _MsmtRdngSourceMeasuringPoint,
      _MeasuringPointCatalogType,
      _MeasuringPointCodeGroup,
      _Characteristic,
      _MeasuringPointCategory,
      _Equipment,
      _FunctionalLocation,
      _FunctionalLocationLabel,
      _AuthorizationGroup
      //      _Building,
      //      _SettlementUnit,
      //      _RentalObject

}
```
