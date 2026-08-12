---
name: I_REMEASUREMENTTYPE
description: "Remeasurementtype"
app_component: RE-FX-BD-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-BD
  - interface-view
  - component:RE-FX-BD-2CL
  - lob:Other
---
# I_REMEASUREMENTTYPE

**Remeasurementtype**

| Property | Value |
|---|---|
| App Component | `RE-FX-BD-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `REMeasurementType` | ✓ | |  | `meas` |  |  |
| `REMeasurementIsTotal` |  | |  | `issummeas` |  |  |
| `RESettlmtBasicComponent` |  | |  | `baserate` |  |  |
| `REMeasurementIsZeroForVacancy` |  | |  | `setzeroifvacant` |  |  |
| `REValueIsPresentedAsPercentage` |  | |  | `ispercent` |  |  |
| `REMsmtHasEqualApportionment` |  | |  | `ispropapport` |  |  |
| `REMsmtIsDeterminedByCndnType` |  | |  | `getbycondtype` |  |  |
| `REMsmtTypeIsUsedForConsumption` |  | |  | `isconsumption` |  |  |
| `REMeterIsResettable` |  | |  | `isresetable` |  |  |
| `REDefaultMeasurementUnit` |  | |  | `measunitdef` |  |  |
| `REMsmtUsageForArchitecturalObj` |  | |  | `usageforao` |  |  |
| `REMsmtUsageForRentalObject` |  | |  | `usageforro` |  |  |
| `REMsmtUsageForBusinessEntity` |  | |  | `usageforbe` |  |  |
| `REMsmtUsageForLand` |  | |  | `usageforpr` |  |  |
| `REMsmtUsageForBuilding` |  | |  | `usageforbu` |  |  |
| `REMsmtUsageForContract` |  | |  | `usageforcn` |  |  |
| `REMsmtUsageForParcels` |  | |  | `usageforpl` |  |  |
| `REMsmtUsageForGenericObject` |  | |  | `usageforgo` |  |  |
| `REMsmtTypeIsAreaMeasurement` |  | |  | `isspcfactor` |  |  |
| `REMsmtTypeIsUsedForApprtmt` |  | |  | `usedforapport` |  |  |
| `REExcptnRntlObjIsNotPossible` |  | |  | `disableexceptro` |  |  |
| `REExcptnArchlObjIsNotPossible` |  | |  | `disableexceptao` |  |  |
| `REExcptnContrTypeIsNotPossible` |  | |  | `disableexceptcn` |  |  |
| `REDifferingMeasurement` |  | |  | `objrelprop` |  |  |
| `RETypeIsRprstvForOwnrShipShare` |  | |  | `iscoshare` |  |  |
| `RERefFactorIsRelatedToKeyDate` |  | |  | `sckeydaterel` |  |  |
| `RENoCompressionIsActive` |  | |  | `nocompression` |  |  |
| `REIsExclForNewAssgmt` |  | |  | `cuexcludeassign` |  |  |
| `_Text` | | ✓ | | | | |
| `_RESettlmtBasicComponent` | | ✓ | | | | |
| `_REMsmtUsageForArchlObj` | | ✓ | | | | |
| `_REMsmtUsageForRentalObj` | | ✓ | | | | |
| `_REMsmtUsageForBusinessEntity` | | ✓ | | | | |
| `_REMsmtUsageForLand` | | ✓ | | | | |
| `_REMsmtUsageForBuilding` | | ✓ | | | | |
| `_REMsmtUsageForContract` | | ✓ | | | | |
| `_REMsmtUsageForParcels` | | ✓ | | | | |
| `_REDifferingMeasurement` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_REMeasurementTypeText` | [0..*] |
| `_RESettlmtBasicComponent` | `I_RESettlmtBasicComponent` | [0..1] |
| `_REMsmtUsageForArchlObj` | `I_REMsmtAllowedUsages` | [0..1] |
| `_REMsmtUsageForRentalObj` | `I_REMsmtAllowedUsages` | [0..1] |
| `_REMsmtUsageForBusinessEntity` | `I_REMsmtAllowedUsages` | [0..1] |
| `_REMsmtUsageForLand` | `I_REMsmtAllowedUsages` | [0..1] |
| `_REMsmtUsageForBuilding` | `I_REMsmtAllowedUsages` | [0..1] |
| `_REMsmtUsageForContract` | `I_REMsmtAllowedUsages` | [0..1] |
| `_REMsmtUsageForParcels` | `I_REMsmtAllowedUsages` | [0..1] |
| `_REDifferingMeasurement` | `I_REDifferingMeasurement` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IREMSMTTYPE'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics: {
  dataCategory: #DIMENSION,
  internalName:#LOCAL,
  dataExtraction.enabled: true
}
@EndUserText.label: 'Real Estate Measurement Type'
@ObjectModel: {
  representativeKey: 'REMeasurementType',
  semanticKey: ['REMeasurementType'],
  usageType: {
    dataClass: #CUSTOMIZING,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateMeasurementType'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
define view entity I_REMeasurementType
  as select from tivbdmeas
  association [0..*] to I_REMeasurementTypeText   as _Text                         on $projection.REMeasurementType = _Text.REMeasurementType
  association [0..1] to I_RESettlmtBasicComponent as _RESettlmtBasicComponent      on $projection.RESettlmtBasicComponent = _RESettlmtBasicComponent.RESettlmtBasicComponent
  association [0..1] to I_REMsmtAllowedUsages     as _REMsmtUsageForArchlObj       on $projection.REMsmtUsageForArchitecturalObj = _REMsmtUsageForArchlObj.REMsmtAllowedUsages
  association [0..1] to I_REMsmtAllowedUsages     as _REMsmtUsageForRentalObj      on $projection.REMsmtUsageForRentalObject = _REMsmtUsageForRentalObj.REMsmtAllowedUsages
  association [0..1] to I_REMsmtAllowedUsages     as _REMsmtUsageForBusinessEntity on $projection.REMsmtUsageForBusinessEntity = _REMsmtUsageForBusinessEntity.REMsmtAllowedUsages
  association [0..1] to I_REMsmtAllowedUsages     as _REMsmtUsageForLand           on $projection.REMsmtUsageForLand = _REMsmtUsageForLand.REMsmtAllowedUsages
  association [0..1] to I_REMsmtAllowedUsages     as _REMsmtUsageForBuilding       on $projection.REMsmtUsageForBuilding = _REMsmtUsageForBuilding.REMsmtAllowedUsages
  association [0..1] to I_REMsmtAllowedUsages     as _REMsmtUsageForContract       on $projection.REMsmtUsageForContract = _REMsmtUsageForContract.REMsmtAllowedUsages
  association [0..1] to I_REMsmtAllowedUsages     as _REMsmtUsageForParcels        on $projection.REMsmtUsageForParcels = _REMsmtUsageForParcels.REMsmtAllowedUsages
  //  association [0..1] to I_REMsmtAllowedUsages     as _REMsmtUsageForIntegObject    on $projection.REMsmtUsageForIntegrationObj = _REMsmtUsageForIntegObject.REMsmtAllowedUsages
  association [0..1] to I_REDifferingMeasurement  as _REDifferingMeasurement       on $projection.REDifferingMeasurement = _REDifferingMeasurement.REDifferingMeasurement
{
  key meas            as REMeasurementType,
      issummeas       as REMeasurementIsTotal,
      @ObjectModel.foreignKey.association: '_RESettlmtBasicComponent'
      baserate        as RESettlmtBasicComponent,
      setzeroifvacant as REMeasurementIsZeroForVacancy,
      ispercent       as REValueIsPresentedAsPercentage,
      ispropapport    as REMsmtHasEqualApportionment,
      getbycondtype   as REMsmtIsDeterminedByCndnType,
      isconsumption   as REMsmtTypeIsUsedForConsumption,
      isresetable     as REMeterIsResettable,
      measunitdef     as REDefaultMeasurementUnit,
      @ObjectModel.foreignKey.association: '_REMsmtUsageForArchlObj'
      usageforao      as REMsmtUsageForArchitecturalObj,
      @ObjectModel.foreignKey.association: '_REMsmtUsageForRentalObj'
      usageforro      as REMsmtUsageForRentalObject,
      @ObjectModel.foreignKey.association: '_REMsmtUsageForBusinessEntity'
      usageforbe      as REMsmtUsageForBusinessEntity,
      @ObjectModel.foreignKey.association: '_REMsmtUsageForLand'
      usageforpr      as REMsmtUsageForLand,
      @ObjectModel.foreignKey.association: '_REMsmtUsageForBuilding'
      usageforbu      as REMsmtUsageForBuilding,
      @ObjectModel.foreignKey.association: '_REMsmtUsageForContract'
      usageforcn      as REMsmtUsageForContract,
      @ObjectModel.foreignKey.association: '_REMsmtUsageForParcels'
      usageforpl      as REMsmtUsageForParcels,
      usageforgo      as REMsmtUsageForGenericObject,
      
      //      @ObjectModel.foreignKey.association: '_REMsmtUsageForIntegObject'
      //      usageforio      as REMsmtUsageForIntegrationObj,
      isspcfactor     as REMsmtTypeIsAreaMeasurement,
      usedforapport   as REMsmtTypeIsUsedForApprtmt,
      disableexceptro as REExcptnRntlObjIsNotPossible,
      disableexceptao as REExcptnArchlObjIsNotPossible,
      disableexceptcn as REExcptnContrTypeIsNotPossible,
      @ObjectModel.foreignKey.association: '_REDifferingMeasurement'
      objrelprop      as REDifferingMeasurement,
      iscoshare       as RETypeIsRprstvForOwnrShipShare,
      sckeydaterel    as RERefFactorIsRelatedToKeyDate,
      nocompression   as RENoCompressionIsActive,
      cuexcludeassign as REIsExclForNewAssgmt,

      _Text,
      _RESettlmtBasicComponent,
      _REMsmtUsageForArchlObj,
      _REMsmtUsageForRentalObj,
      _REMsmtUsageForBusinessEntity,
      _REMsmtUsageForLand,
      _REMsmtUsageForBuilding,
      _REMsmtUsageForContract,
      _REMsmtUsageForParcels,
      //      _REMsmtUsageForIntegObject,
      _REDifferingMeasurement
}
```
