---
name: I_TRANSPCHARGETYPE
description: "This CDS view is a basic view used to retrieve charge types of charge lines in freight documents. A charge type is the classification of a charge line that the system can use to calculate transportation charges for a charge line, for example base rate, surcharge, or a discount. A charge type can result in a positive or negative for a charge line. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
app_component: TM-MD-CM-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPE')/$value
semantic_en: "This CDS view is a basic view used to retrieve charge types of charge lines in freight documents. A charge type is the classification of a charge line that the system can use to calculate transportation charges for a charge line, for example base rate, surcharge, or a discount. A charge type can result in a positive or negative for a charge line. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views."
semantic_vi: "I_TRANSPCHARGETYPE — CDS view cơ bản dựa trên I_TRANSPCHARGETYPE."
keywords:
  - "transpchargetype"
  - "transp"
  - "charge"
  - "type"
  - "dependent"
  - "rate"
  - "sign"
  - "transportation"
  - "value"
  - "inactive"
tags:
  - TM
  - bo:companycode
  - component:TM-MD-CM-2CL
  - document
  - interface-view
  - TM-MD
  - TM-MD-CM
  - TM-MD-CM-2CL
---
# I_TRANSPCHARGETYPE

**This CDS view is a basic view used to retrieve charge types of charge lines in freight documents. A charge type is the classification of a charge line that the system can use to calculate transportation charges for a charge line, for example base rate, surcharge, or a discount. A charge type can result in a positive or negative for a charge line. To help you decide which CDS view to use for your purposes, SAP has introduced the annotation ObjectModel.supportedCapabilities that indicates the most appropriate use cases for each CDS view. To find out what use cases are best supported by this CDS view, access the entry of the CDS view in the View Browser app and find the values for this annotation under the Annotation tab. For more information, see Supported Capabilities for CDS Views.**

| Property | Value |
|---|---|
| App Component | `TM-MD-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPE')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `TranspChargeType` | ✓ | |  | `tcet084` | `CHAR(15)` | Charge Type |
| `TranspChargeIsDependent` |  | |  | `dependent_chrge` | `CHAR(1)` | Dependent Charge Type |
| `TranspRateSignType` |  | |  | `sign_indicator` | `CHAR(1)` | Positive/Negative |
| `TransportationRateValueType` |  | |  | `value_indicator` | `CHAR(1)` | Value Type |
| `TranspChargeTypeIsInactive` |  | |  | `inact_tcet_ind` | `CHAR(1)` | Inactive Charge Type |
| `TransportationCalculationBase` |  | |  | `calc_base` | `CHAR(15)` | Calculation Base |
| `_Text` | | ✓ | | | | |
| `_TranspShipgTypeMOTAssgToChrg` | | ✓ | | | | |
| `_CalcBaseText` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_TranspChargeTypeText` | [0..*] |
| `_TranspShipgTypeMOTAssgToChrg` | `I_TranspShipgTypeMOTAssgToChrg` | [0..*] |
| `_CalcBaseText` | `I_TranspCalculationBaseTxt` | [0..*] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPE')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_TRANSPCHARGETYPE')/$value)*

```abap
@EndUserText:   {label:                    'Transportation Charges Charge Element Type'}
@Analytics:     {dataCategory:             #DIMENSION,
                 dataExtraction:           {enabled: true},
                 internalName:             #LOCAL }
@ObjectModel:   {representativeKey:        'TranspChargeType',
                 sapObjectNodeType.name:   'TransportationChargeType',
                 usageType:                {serviceQuality: #A,
                                           sizeCategory:   #M,
                                           dataClass:      #CUSTOMIZING},
                 modelingPattern:          #ANALYTICAL_DIMENSION,
                 supportedCapabilities:  [ #ANALYTICAL_DIMENSION,
                                           #CDS_MODELING_DATA_SOURCE,
                                           #CDS_MODELING_ASSOCIATION_TARGET,
                                           #SQL_DATA_SOURCE,
                                           #EXTRACTION_DATA_SOURCE,
                                           #VALUE_HELP_PROVIDER,
                                           #SEARCHABLE_ENTITY] }
@VDM:           {viewType:                 #BASIC}
//                  lifecycle.contract.type: #NONE }
@AbapCatalog:   {sqlViewName:              'ICHARGEELEMTYPE',
                 buffering:                {status: #ACTIVE,
                                           type:   #FULL},
                 compiler:                 {compareFilter: true},
                 preserveKey:               true}
@AccessControl: {authorizationCheck:       #NOT_REQUIRED}
@ClientHandling.algorithm:                 #SESSION_VARIABLE
@Metadata:      {allowExtensions:          true,
                 ignorePropagatedAnnotations: true}
    
define view I_TranspChargeType
  as select from /scmtms/c_tcet
  association [0..*] to I_TranspChargeTypeText        as _Text                        on $projection.TranspChargeType = _Text.TranspChargeType
  association [0..*] to I_TranspShipgTypeMOTAssgToChrg as _TranspShipgTypeMOTAssgToChrg on $projection.TranspChargeType = _TranspShipgTypeMOTAssgToChrg.TranspChargeType
  association [0..*] to I_TranspCalculationBaseTxt as _CalcBaseText on $projection.TransportationCalculationBase = _CalcBaseText.TransportationCalculationBase
{
      @ObjectModel.text.association: '_Text'
  key tcet084         as TranspChargeType,

      dependent_chrge as TranspChargeIsDependent,
      sign_indicator  as TranspRateSignType,
      value_indicator as TransportationRateValueType,
      inact_tcet_ind  as TranspChargeTypeIsInactive,
      @ObjectModel.text.association: '_CalcBaseText'
      calc_base       as TransportationCalculationBase,

      /* Associations */
      _TranspShipgTypeMOTAssgToChrg,
      _Text,
      _CalcBaseText
}
```
