---
name: I_UNITOFMEASURE
description: Unit of Measure
app_component: BC-SRV-ASF-UOM
software_component: SAP_BASIS
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - BC
  - BC-SRV
  - BC-SRV-ASF
  - interface-view
  - unit-of-measure
  - component:BC-SRV-ASF-UOM
  - lob:Basis Components
---
# I_UNITOFMEASURE

**Unit of Measure**

| Property | Value |
|---|---|
| App Component | `BC-SRV-ASF-UOM` |
| Software Component | `SAP_BASIS` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `UnitOfMeasure` | ✓ | |  | `cast ( msehi as msehiunit preserving type )` |
| `UnitOfMeasureSAPCode` |  | |  | `cast ( msehi as meinsint )` |
| `UnitOfMeasureISOCode` |  | |  | `isocode` |
| `IsPrimaryUnitForISOCode` |  | |  | `primary` |
| `UnitOfMeasureNumberOfDecimals` |  | |  | `andec` |
| `UnitOfMeasureIsCommercial` |  | |  | `kzkeh` |
| `UnitOfMeasureDimension` |  | |  | `dimid` |
| `SIUnitCnvrsnRateNumerator` |  | |  | `zaehl` |
| `SIUnitCnvrsnRateDenominator` |  | |  | `nennr` |
| `SIUnitCnvrsnRateExponent` |  | |  | `exp10` |
| `SIUnitCnvrsnAdditiveValue` |  | |  | `addko` |
| `UnitOfMeasureDspExponent` |  | |  | `expon` |
| `UnitOfMeasureDspNmbrOfDcmls` |  | |  | `decan` |
| `UnitOfMeasureTemperature` |  | |  | `temp_value` |
| `UnitOfMeasureTemperatureUnit` |  | |  | `temp_unit` |
| `UnitOfMeasurePressure` |  | |  | `press_val` |
| `UnitOfMeasurePressureUnit` |  | |  | `press_unit` |
| `UnitOfMeasure_E` |  | |  | `_Text[ 1: Language = $session.system_language ].UnitOfMeasure_E` |
| `_Text` | | ✓ | | |
| `_Dimension` | | ✓ | | |
| `_DimensionText` | | ✓ | | |
| `_ISOCode` | | ✓ | | |
| `_ISOCodeText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_UnitOfMeasureText` | [0..*] |
| `_Dimension` | `I_UnitOfMeasureDimension` | [0..1] |
| `_DimensionText` | `I_UnitOfMeasureDimensionText` | [0..*] |
| `_ISOCode` | `I_UnitOfMeasureISOCode` | [0..1] |
| `_ISOCodeText` | `I_UnitOfMeasureISOCodeText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IUNITOFMEASURE'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Unit of Measure'
@Search.searchable: true

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API

@ClientHandling.type: #INHERITED
@ClientHandling.algorithm: #SESSION_VARIABLE
@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.representativeKey: 'UnitOfMeasure'
@ObjectModel.sapObjectNodeType.name: 'UnitOfMeasure'
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE, 
                                     #CDS_MODELING_ASSOCIATION_TARGET]

@Analytics.internalName: #LOCAL
@Analytics : {dataCategory: #DIMENSION, dataExtraction.enabled : true}

define view I_UnitOfMeasure 
  as select from t006
   
    association [0..*] to I_UnitOfMeasureText as _Text 
        on $projection.UnitOfMeasure = _Text.UnitOfMeasure
   
    association [0..1] to I_UnitOfMeasureDimension as _Dimension
        on $projection.UnitOfMeasureDimension = _Dimension.UnitOfMeasureDimension 
    association [0..*] to I_UnitOfMeasureDimensionText as _DimensionText
        on $projection.UnitOfMeasureDimension = _DimensionText.UnitOfMeasureDimension 
   
    association [0..1] to I_UnitOfMeasureISOCode as _ISOCode
        on $projection.UnitOfMeasureISOCode = _ISOCode.UnitOfMeasureISOCode 
    association [0..*] to I_UnitOfMeasureISOCodeText as _ISOCodeText
        on $projection.UnitOfMeasureISOCode = _ISOCodeText.UnitOfMeasureISOCode
{   
    
    @Semantics.unitOfMeasure: true
    @ObjectModel.text.association: '_Text'  
    key cast ( msehi as msehiunit preserving type ) as UnitOfMeasure,   //use DTEL msehiunit for proper label  

    _Text,   
    
    cast ( msehi as meinsint ) as UnitOfMeasureSAPCode, //internal unit without conversion  
    
    @ObjectModel.foreignKey.association: '_ISOCode'    
    isocode    as UnitOfMeasureISOCode,
    _ISOCode,
    _ISOCodeText,   
    primary    as IsPrimaryUnitForISOCode,
                                             
    andec as UnitOfMeasureNumberOfDecimals, // for rounding   
    kzkeh as UnitOfMeasureIsCommercial,
            
    @ObjectModel.foreignKey.association: '_Dimension'
    dimid as UnitOfMeasureDimension,    
    _Dimension,
    _DimensionText,
    
    zaehl as SIUnitCnvrsnRateNumerator,
    nennr as SIUnitCnvrsnRateDenominator,
    exp10 as SIUnitCnvrsnRateExponent,
    addko as SIUnitCnvrsnAdditiveValue,
   
    expon as UnitOfMeasureDspExponent,
    decan as UnitOfMeasureDspNmbrOfDcmls,   // for number display
    
    @Semantics.quantity.unitOfMeasure: 'UnitOfMeasureTemperatureUnit'      
    temp_value as UnitOfMeasureTemperature,
    temp_unit  as UnitOfMeasureTemperatureUnit,
    
    @Semantics.quantity.unitOfMeasure: 'UnitOfMeasurePressureUnit'    
    press_val  as UnitOfMeasurePressure,
    press_unit as UnitOfMeasurePressureUnit,
                                         
    @Search.defaultSearchElement: true
    @Search.fuzzinessThreshold: 0.8
    @Search.ranking: #HIGH
    @Consumption.hidden: true
    _Text[ 1: Language = $session.system_language ].UnitOfMeasure_E as UnitOfMeasure_E
    
}
```
