---
name: C_MEASURINGPOINTDEX
description: "Measuring Point"
app_component: PM-EQM-SF-MPC-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: not_released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASURINGPOINTDEX')/$value
semantic_en: "Measuring Point"
semantic_vi: "Measuring Point — CDS view tiêu dùng dựa trên I_MeasuringPoint."
keywords:
  - "measuring"
  - "point"
  - "language"
  - "description"
  - "short"
  - "text"
  - "object"
  - "identifier"
tags:
  - PM
  - bo:purchaseorder
  - component:PM-EQM-SF-MPC-2CL
  - consumption-view
  - lob:plant maintenance
  - lob:quality management
  - PM-EQM
  - PM-EQM-SF
  - PM-EQM-SF-MPC
  - PM-EQM-SF-MPC-2CL
---
# C_MEASURINGPOINTDEX

**Measuring Point**

| Property | Value |
|---|---|
| App Component | `PM-EQM-SF-MPC-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| Release State (Developer Extensibility) | Not Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASURINGPOINTDEX')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MeasuringPoint` | ✓ | |  |  | `CHAR(12)` | Measuring Point |
| `Language` |  | |  |  | `LANG(1)` | Language Key |
| `MeasuringPointDescription` |  | |  |  | `CHAR(40)` | Description of Measuring Point |
| `MeasuringPointShortText` |  | |  |  | `CHAR(40)` | Aditional Short Text for Measuring Point |
| `MeasuringPointObjectIdentifier` |  | |  |  | `CHAR(22)` | Object Number for the Measuring Point Object |
| `MeasuringPointPositionNumber` |  | |  |  | `CHAR(20)` | Position Number of the Object Measuring Point (Sort Field) |
| `MeasuringPointCategory` |  | |  |  | `CHAR(1)` | Measuring Point Category |
| `CreationDate` |  | |  |  | `DATS(8)` | Date on which the object was created |
| `LastChangeDate` |  | |  |  | `DATS(8)` | Date on which the object was last changed |
| `AuthorizationGroup` |  | |  |  | `CHAR(4)` | Technical Object Authorization Group |
| `MeasuringPointIsInactive` |  | |  |  | `CHAR(1)` | Indicator: Measuring Point Inactive |
| `MeasuringPointIsCounter` |  | |  |  | `CHAR(1)` | Indicator to Show that Measuring Point Is a Counter |
| `MultiLevelDeletionLogicStatus` |  | |  |  | `CHAR(1)` | Deletion Flag for 2-Level Deletion Logic |
| `Assembly` |  | |  |  | `CHAR(40)` | Assembly for Localization of Measuring Point |
| `ReferenceMeasuringPoint` |  | |  |  | `CHAR(12)` | Reference Meas.Pt |
| `MsrgPtInternalCharacteristic` |  | |  | `cast( MsrgPtInternalCharacteristic as atinn_no_conv preserving type )` | `NUMC(10)` | Characteristic Internal ID |
| `MeasuringPointExponent` |  | |  |  | `INT2(5)` | Power of Ten Exponent for Floating Point Display |
| `MeasuringPointDecimalPlaces` |  | |  |  | `INT2(5)` | Number of Decimal Places for Number Display |
| `MeasuringPointMinimumThreshold` |  | |  |  | `FLTP(16)` | Lower Measurement Range Limit/Minimum Total Counter Reading |
| `MeasuringPointMaximumThreshold` |  | |  |  | `FLTP(16)` | Upper Measurement Range Limit/Maximum Total Counter Reading |
| `MeasurementRangeUnit` |  | |  |  | `UNIT(3)` | Measurement Range Unit |
| `MeasuringPointSIUnitOfMeasure` |  | |  |  | `UNIT(3)` | SI Unit |
| `MsrgPtIsCountingBackwards` |  | |  |  | `CHAR(1)` | Indicator: Counter Runs Backwards |
| `MsmtRdngSourceMeasuringPoint` |  | |  |  | `CHAR(12)` | Measuring Point from Which Meas. Reading Was Transferred |
| `CounterOverflowRdngThreshold` |  | |  |  | `FLTP(16)` | Counter Overflow Reading in SI Unit |
| `MeasuringPointAnnualEstimate` |  | |  |  | `FLTP(16)` | Annual Estimate in SI Unit |
| `MeasuringPointCatalogType` |  | |  |  | `CHAR(1)` | Catalog Type - Measurement Reading Valuation Code |
| `MeasuringPointCodeGroup` |  | |  |  | `CHAR(8)` | Code Group - Measurement Reading Valuation Code |
| `ValuationCodeIsSufficient` |  | |  |  | `CHAR(1)` | Indicator: Valuation Code Sufficient for Measurmnt. Document |
| `MeasuringPointHasLongText` |  | |  |  | `CHAR(1)` | Long Text Exists |
| `_Language` | | ✓ | | | | |
| `_ControllingObject` | | ✓ | | | | |
| `_MeasuringPointCategory` | | ✓ | | | | |
| `_Product` | | ✓ | | | | |
| `_ReferenceMeasuringPoint` | | ✓ | | | | |
| `_UnitOfMeasure` | | ✓ | | | | |
| `_MsmtRdngSourceMeasuringPoint` | | ✓ | | | | |
| `_MeasuringPointCatalogType` | | ✓ | | | | |
| `_MeasuringPointCodeGroup` | | ✓ | | | | |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASURINGPOINTDEX')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('C_MEASURINGPOINTDEX')/$value)*

```abap
@EndUserText.label: 'Measuring Point'
@AccessControl: {
    authorizationCheck:      #MANDATORY,
    personalData.blocking:   #REQUIRED
    }
@ObjectModel: {
    modelingPattern: #ANALYTICAL_DIMENSION,
    supportedCapabilities: [ #EXTRACTION_DATA_SOURCE,
                             #ANALYTICAL_DIMENSION,
                             #CDS_MODELING_ASSOCIATION_TARGET,
                             #SQL_DATA_SOURCE,
                             #CDS_MODELING_DATA_SOURCE ],
    representativeKey: 'MeasuringPoint',
    sapObjectNodeType.name: 'MeasuringPoint',
    usageType: {
       dataClass: #MASTER,
       serviceQuality: #C,
       sizeCategory: #M
       }
    }
@Analytics: {
    internalName:#LOCAL,
    dataCategory: #DIMENSION,
    dataExtraction: {
        enabled: true,
        delta.changeDataCapture: {
            mapping:[
                {
                  table: 'imptt', role: #MAIN,
                  viewElement: ['MeasuringPoint'],
                  tableElement: ['point']
                }
                ]
            }
        }
    }
@VDM.viewType: #CONSUMPTION
@Metadata: {
    ignorePropagatedAnnotations: true,
    allowExtensions: true }
define view entity C_MeasuringPointDEX
  as select from I_MeasuringPoint
{
  key MeasuringPoint,

      @ObjectModel.foreignKey.association: '_Language'
      Language,

      MeasuringPointDescription,

      MeasuringPointShortText,

      @ObjectModel.foreignKey.association: '_ControllingObject'
      MeasuringPointObjectIdentifier,

      MeasuringPointPositionNumber,

      @ObjectModel.foreignKey.association: '_MeasuringPointCategory'
      MeasuringPointCategory,

      @Semantics.systemDate.createdAt: true
      CreationDate,

      @Semantics.systemDate.lastChangedAt: true
      LastChangeDate,

      AuthorizationGroup,

      MeasuringPointIsInactive,

      MeasuringPointIsCounter,

      MultiLevelDeletionLogicStatus,

      @ObjectModel.foreignKey.association: '_Product'
      Assembly,

      @ObjectModel.foreignKey.association: '_ReferenceMeasuringPoint'
      ReferenceMeasuringPoint,

      cast( MsrgPtInternalCharacteristic as atinn_no_conv preserving type ) as MsrgPtInternalCharacteristic,

      MeasuringPointExponent,

      MeasuringPointDecimalPlaces,

      MeasuringPointMinimumThreshold,

      MeasuringPointMaximumThreshold,

      @ObjectModel.foreignKey.association: '_UnitOfMeasure'
      MeasurementRangeUnit,

      MeasuringPointSIUnitOfMeasure,

      MsrgPtIsCountingBackwards,

      @ObjectModel.foreignKey.association: '_MsmtRdngSourceMeasuringPoint'
      MsmtRdngSourceMeasuringPoint,

      CounterOverflowRdngThreshold,

      MeasuringPointAnnualEstimate,

      @ObjectModel.foreignKey.association: '_MeasuringPointCatalogType'
      MeasuringPointCatalogType,

      @ObjectModel.foreignKey.association: '_MeasuringPointCodeGroup'
      MeasuringPointCodeGroup,

      ValuationCodeIsSufficient,

      MeasuringPointHasLongText,

      // Propagate association(s)
      _Language,
      _ControllingObject,
      _MeasuringPointCategory,
      _Product,
      _ReferenceMeasuringPoint,
      _UnitOfMeasure,
      _MsmtRdngSourceMeasuringPoint,
      _MeasuringPointCatalogType,
      _MeasuringPointCodeGroup
}
where
     MeasuringPointObjectType = 'IE'
  or MeasuringPointObjectType = 'IF'
```
