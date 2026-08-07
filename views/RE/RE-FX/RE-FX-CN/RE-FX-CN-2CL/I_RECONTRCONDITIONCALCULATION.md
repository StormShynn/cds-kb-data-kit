---
name: I_RECONTRCONDITIONCALCULATION
description: Recontrconditioncalculation
app_component: RE-FX-CN-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - RE-FX-CN
  - interface-view
  - pricing-condition
  - component:RE-FX-CN-2CL
  - lob:Other
---
# I_RECONTRCONDITIONCALCULATION

**Recontrconditioncalculation**

| Property | Value |
|---|---|
| App Component | `RE-FX-CN-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `RECndnCalculationUUID` | ✓ | |  | `calcguid` |
| `REConditionUUID` |  | |  | `condguid` |
| `InternalRealEstateNumber` |  | |  | `intreno` |
| `REStatusObjectCalculation` |  | |  | `objnr` |
| `REConditionType` |  | |  | `condtype` |
| `REConditionValidityStartDate` |  | |  | `condvalidfrom` |
| `ValidityStartDate` |  | |  | `cast(valuevalidfrom as rebdvdmvalidfrom preserving type)` |
| `ValidityEndDate` |  | |  | `cast(valuevalidto as rebdvdmvalidto preserving type)` |
| `REConditionCalculationFactor` |  | |  | `calcvalue` |
| `REConditionItemAmount` |  | |  | `condvalue` |
| `REConditionItemTaxAmount` |  | |  | `taxvalue` |
| `REConditionNetAmount` |  | |  | `condvaluenet` |
| `REConditionGrossAmount` |  | |  | `condvaluegross` |
| `REConditionCurrency` |  | |  | `condcurr` |
| `RENumberOfCalculation` |  | |  | `calcnumber` |
| `BusinessPartner` |  | |  | `partner` |
| `REPartnerStatusObject` |  | |  | `partnerobjnr` |
| `REConditionDueDate` |  | |  | `duedate` |
| `_REContract` | | ✓ | | |
| `_Currency` | | ✓ | | |
| `_REConditionType` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REContract` | `I_REContract` | [1..1] |
| `_Currency` | `I_Currency` | [0..1] |
| `_REConditionType` | `I_REConditionType` | [1..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRECNDNCALC'
@AccessControl: {
  authorizationCheck: #MANDATORY,
  personalData.blocking: #BLOCKED_DATA_EXCLUDED
}
@VDM.viewType: #BASIC
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true,
  technicalName: 'IRECNDNCALC'
}
@ObjectModel: {
  representativeKey: 'RECndnCalculationUUID',
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #L
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'REContractConditionCalculation'
}
@Metadata: {
  allowExtensions: true,
  ignorePropagatedAnnotations: true
}
@EndUserText.label: 'RE Condition Calculation Factors'

define view entity I_REContrConditionCalculation
  as select from vicdcondcalc
  association [1..1] to I_REContract      as _REContract      on $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber
  association [0..1] to I_Currency        as _Currency        on $projection.REConditionCurrency = _Currency.Currency
  association [1..1] to I_REConditionType as _REConditionType on $projection.REConditionType = _REConditionType.REConditionType
{
  key calcguid                                                 as RECndnCalculationUUID,
      condguid                                                 as REConditionUUID,
      intreno                                                  as InternalRealEstateNumber,
      objnr                                                    as REStatusObjectCalculation,
      @ObjectModel.foreignKey.association: '_REConditionType'
      condtype                                                 as REConditionType,
      condvalidfrom                                            as REConditionValidityStartDate,
      @Semantics.businessDate.from: true
      cast(valuevalidfrom as rebdvdmvalidfrom preserving type) as ValidityStartDate,
      @Semantics.businessDate.to: true
      cast(valuevalidto as rebdvdmvalidto preserving type)     as ValidityEndDate,
      calcvalue                                                as REConditionCalculationFactor,
      @Semantics.amount.currencyCode: 'REConditionCurrency'
      condvalue                                                as REConditionItemAmount,
      @Semantics.amount.currencyCode: 'REConditionCurrency'
      taxvalue                                                 as REConditionItemTaxAmount,
      @Semantics.amount.currencyCode: 'REConditionCurrency'
      condvaluenet                                             as REConditionNetAmount,
      @Semantics.amount.currencyCode: 'REConditionCurrency'
      condvaluegross                                           as REConditionGrossAmount,
      condcurr                                                 as REConditionCurrency,
      calcnumber                                               as RENumberOfCalculation,
      partner                                                  as BusinessPartner,
      partnerobjnr                                             as REPartnerStatusObject,
      duedate                                                  as REConditionDueDate,

      _REContract,
      _REConditionType,
      _Currency
} where intreno like 'IS%'
```
