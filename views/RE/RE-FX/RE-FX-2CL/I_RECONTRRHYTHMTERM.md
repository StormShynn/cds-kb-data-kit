---
name: I_RECONTRRHYTHMTERM
description: Recontrrhythmterm
app_component: RE-FX-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - RE
  - RE-FX
  - interface-view
  - component:RE-FX-2CL
  - lob:Other
---
# I_RECONTRRHYTHMTERM

**Recontrrhythmterm**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `InternalRealEstateNumber` | `intreno` |
| key `RETermType` | `termtype` |
| key `RETermNumber` | `termno` |
| key `ValidityStartDate` | `cast(validfrom as rebdvdmvalidfrom preserving type)` |
| `ValidityEndDate` | `cast(validto as rebdvdmvalidto preserving type)` |
| `RENumberOfFrequencyUnits` | `cast( frequency as recdvdmfrequency preserving type )` |
| `REFrequencyUnit` | `cast(frequencyunit as recdvdmfrequencyunit)` |
| `REStartFrequencyWeek` | `cast(weekfrom as recdvdmweekfrom)` |
| `REFrequencyStart` | `cast(monthfrom as recdvdmmonthfrom)` |
| `REConditionAmountReference` | `cast(condvaluerefer as recdvdmcondvaluerefer )` |
| `REConditionAmountDiff` | `cast(condvaluerefdif as retmvdmcondvaluerefdif)` |
| `REProRataMethod` | `cast(prorate as recdvdmprorate)` |
| `REProRataMethodCalc` | `cast(calcmethper as recdvdmcalcmethper)` |
| `REPaymentForm` | `cast(paymentformrh as recdvdmpaymentformrh)` |
| `REFrequencyStartDate` | `rhythmbegin` |
| `REDueDateCorrectionRule` | `duedatecorrrule` |
| `REDueDateNumberOfCrrtnDays` | `duedatecorrday` |
| `REDueDateNumberOfCrrtnMonths` | `duedatecorrmonth` |
| `REDueDateNumberOfCrrtnYears` | `duedatecorryear` |
| `REDueDateNumberOfCrrtnCalendar` | `duedatecorrcal` |
| `REDueDateCrrtnCalendarUnit` | `cast(duedatecorrcalun as recdvdmduedatecorrcalunit )` |
| `FactoryCalendar` | `duedatecalender` |
| `REDueDateIsAtBeginning` | `duedatemovebegin` |
| `REDueDateIsAtEnd` | `duedatemoveend` |
| `REFixedPeriod` | `fixper` |
| `RealEstateObjectType` | `_REKeyAssgmt.RealEstateObjectType` |
| `_REKeyAssgmt` | *Association* |
| `_REContract` | *Association* |
| `_RETermType` | *Association* |
| `_RETerm` | *Association* |
| `_REFrequencyUnit` | *Association* |
| `_REStartFrequencyWeek` | *Association* |
| `_REFrequencyStart` | *Association* |
| `_REConditionAmtRef` | *Association* |
| `_REConditionAmtDiff` | *Association* |
| `_REProRataMethod` | *Association* |
| `_REProRataMethodCalc` | *Association* |
| `_REPaymentForm` | *Association* |
| `_REDueDateCrrtnRule` | *Association* |
| `_REDueDateCrrtnCalendarUnit` | *Association* |
| `_FactoryCalendar` | *Association* |
| `_REFixedPeriod` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_REKeyAssgmt` | `I_REKeyAssgmt` | [1..1] |
| `_REContract` | `I_REContract` | [1..1] |
| `_RETermType` | `I_RETermType` | [1..1] |
| `_RETerm` | `I_RETerm` | [1..1] |
| `_REFrequencyUnit` | `I_REFrequencyUnit` | [0..1] |
| `_REStartFrequencyWeek` | `I_REStartFrequencyWeek` | [0..1] |
| `_REFrequencyStart` | `I_REFrequencyStart` | [0..1] |
| `_REConditionAmtRef` | `I_REConditionAmtRef` | [0..1] |
| `_REConditionAmtDiff` | `I_REConditionAmtDiff` | [0..1] |
| `_REProRataMethod` | `I_REProRataMethod` | [0..1] |
| `_REProRataMethodCalc` | `I_REProRataMethodCalc` | [0..1] |
| `_REPaymentForm` | `I_REPaymentForm` | [0..1] |
| `_REDueDateCrrtnRule` | `I_REDueDateCrrtnRule` | [0..1] |
| `_REDueDateCrrtnCalendarUnit` | `I_REDueDateCrrtnCalUnit` | [0..1] |
| `_FactoryCalendar` | `I_FactoryCalendar` | [0..1] |
| `_REFixedPeriod` | `I_REFixedPeriod` | [0..1] |

## Source Code

```abap
//@AbapCatalog.sqlViewName: 'IRERHYTHMTERM'
@AccessControl.authorizationCheck: #MANDATORY
@EndUserText.label: 'Real Estate Rhythm Term'
@Analytics: {
  dataCategory: #DIMENSION,
  internalName: #LOCAL,
  dataExtraction.enabled: true
}
@ObjectModel: {
  representativeKey: 'RETermNumber',
  semanticKey: ['InternalRealEstateNumber', 'RETermType', 'RETermNumber', 'ValidityStartDate'],
  usageType: {
    dataClass: #MASTER,
    serviceQuality: #A,
    sizeCategory: #M
  },
  modelingPattern: #ANALYTICAL_DIMENSION,
  supportedCapabilities: [
    #ANALYTICAL_DIMENSION, 
    #CDS_MODELING_ASSOCIATION_TARGET,
    #EXTRACTION_DATA_SOURCE
  ],
  sapObjectNodeType.name: 'RealEstateContractRhythmTerm'
}
@Metadata.ignorePropagatedAnnotations: true
@VDM.viewType: #BASIC
@Metadata.allowExtensions:true

define view entity I_REContrRhythmTerm
  as select from vitmrh
  association [1..1] to I_REKeyAssgmt           as _REKeyAssgmt                on  $projection.InternalRealEstateNumber = _REKeyAssgmt.InternalRealEstateNumber
  association [1..1] to I_REContract            as _REContract                 on  $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber
  association [1..1] to I_RETermType            as _RETermType                 on  $projection.RETermType           = _RETermType.RETermType
                                                                               and $projection.RealEstateObjectType = _RETermType.RealEstateObjectType
  association [1..1] to I_RETerm                as _RETerm                     on  $projection.InternalRealEstateNumber = _RETerm.InternalRealEstateNumber
                                                                               and $projection.RETermType               = _RETerm.RETermType
                                                                               and $projection.RETermNumber             = _RETerm.RETermNumber
  association [0..1] to I_REFrequencyUnit       as _REFrequencyUnit            on  $projection.REFrequencyUnit = _REFrequencyUnit.REFrequencyUnit
  association [0..1] to I_REStartFrequencyWeek  as _REStartFrequencyWeek       on  $projection.REStartFrequencyWeek = _REStartFrequencyWeek.REStartFrequencyWeek
  association [0..1] to I_REFrequencyStart      as _REFrequencyStart           on  $projection.REFrequencyStart = _REFrequencyStart.REFrequencyStart
  association [0..1] to I_REConditionAmtRef     as _REConditionAmtRef          on  $projection.REConditionAmountReference = _REConditionAmtRef.REConditionAmountReference
  association [0..1] to I_REConditionAmtDiff    as _REConditionAmtDiff         on  $projection.REConditionAmountDiff = _REConditionAmtDiff.REConditionAmountDiff
  association [0..1] to I_REProRataMethod       as _REProRataMethod            on  $projection.REProRataMethod = _REProRataMethod.REProRataMethod
  association [0..1] to I_REProRataMethodCalc   as _REProRataMethodCalc        on  $projection.REProRataMethodCalc = _REProRataMethodCalc.REProRataMethodCalc
  association [0..1] to I_REPaymentForm         as _REPaymentForm              on  $projection.REPaymentForm = _REPaymentForm.REPaymentForm
  association [0..1] to I_REDueDateCrrtnRule    as _REDueDateCrrtnRule         on  $projection.REDueDateCorrectionRule = _REDueDateCrrtnRule.REDueDateCorrectionRule
  association [0..1] to I_REDueDateCrrtnCalUnit as _REDueDateCrrtnCalendarUnit on  $projection.REDueDateCrrtnCalendarUnit = _REDueDateCrrtnCalendarUnit.REDueDateCrrtnCalendarUnit
  association [0..1] to I_FactoryCalendar       as _FactoryCalendar            on  $projection.FactoryCalendar = _FactoryCalendar.FactoryCalendar
  association [0..1] to I_REFixedPeriod         as _REFixedPeriod              on  $projection.REFixedPeriod = _REFixedPeriod.REFixedPeriod                                                                             
{
          @ObjectModel.foreignKey.association: '_REKeyAssgmt'
  key     intreno                                               as InternalRealEstateNumber,
          @ObjectModel.foreignKey.association: '_RETermType'
  key     termtype                                              as RETermType,
  key     termno                                                as RETermNumber,
          @Semantics.businessDate.from: true
  key     cast(validfrom as rebdvdmvalidfrom preserving type)   as ValidityStartDate,
          @Semantics.businessDate.to: true
          cast(validto as rebdvdmvalidto preserving type)       as ValidityEndDate,
          cast( frequency as recdvdmfrequency preserving type ) as RENumberOfFrequencyUnits,
          @ObjectModel.foreignKey.association:  '_REFrequencyUnit'
          cast(frequencyunit as recdvdmfrequencyunit)           as REFrequencyUnit,
          @ObjectModel.foreignKey.association:  '_REStartFrequencyWeek'
          cast(weekfrom as recdvdmweekfrom)                     as REStartFrequencyWeek,
          @ObjectModel.foreignKey.association:  '_REFrequencyStart'
          cast(monthfrom as recdvdmmonthfrom)                   as REFrequencyStart,
          @ObjectModel.foreignKey.association:  '_REConditionAmtRef'
          cast(condvaluerefer as recdvdmcondvaluerefer )        as REConditionAmountReference,
          @ObjectModel.foreignKey.association:  '_REConditionAmtDiff'
          cast(condvaluerefdif as retmvdmcondvaluerefdif)       as REConditionAmountDiff,
          @ObjectModel.foreignKey.association:  '_REProRataMethod'
          cast(prorate as recdvdmprorate)                       as REProRataMethod,
          @ObjectModel.foreignKey.association:  '_REProRataMethodCalc'
          cast(calcmethper as recdvdmcalcmethper)               as REProRataMethodCalc,
          @ObjectModel.foreignKey.association:  '_REPaymentForm'
          cast(paymentformrh as recdvdmpaymentformrh)           as REPaymentForm,
          rhythmbegin                                           as REFrequencyStartDate,
          @ObjectModel.foreignKey.association:  '_REDueDateCrrtnRule'
          duedatecorrrule                                       as REDueDateCorrectionRule,
          duedatecorrday                                        as REDueDateNumberOfCrrtnDays,
          duedatecorrmonth                                      as REDueDateNumberOfCrrtnMonths,
          duedatecorryear                                       as REDueDateNumberOfCrrtnYears,
          duedatecorrcal                                        as REDueDateNumberOfCrrtnCalendar,
          @ObjectModel.foreignKey.association:  '_REDueDateCrrtnCalendarUnit'
          cast(duedatecorrcalun as recdvdmduedatecorrcalunit )  as REDueDateCrrtnCalendarUnit,
          @ObjectModel.foreignKey.association:  '_FactoryCalendar'
          duedatecalender                                       as FactoryCalendar,
          duedatemovebegin                                      as REDueDateIsAtBeginning,
          duedatemoveend                                        as REDueDateIsAtEnd,
          @ObjectModel.foreignKey.association:  '_REFixedPeriod'
          fixper                                                as REFixedPeriod,
          @ObjectModel.foreignKey.association: '_REObjectType'
          _REKeyAssgmt.RealEstateObjectType                     as RealEstateObjectType,

          _REKeyAssgmt,
          _REKeyAssgmt._REObjectType,
          _RETermType,
          _RETerm,
          _REFrequencyUnit,
          _REStartFrequencyWeek,
          _REFrequencyStart,
          _REConditionAmtRef,
          _REConditionAmtDiff,
          _REProRataMethod,
          _REProRataMethodCalc,
          _REPaymentForm,
          _REDueDateCrrtnRule,
          _REDueDateCrrtnCalendarUnit,
          _FactoryCalendar,
          _REFixedPeriod,
          _REContract
          
} where intreno like 'IS%'
```
