---
name: I_RERELEVANTVALNPROCESSSTEP
description: "Rerelevantvalnprocessstep"
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
# I_RERELEVANTVALNPROCESSSTEP

**Rerelevantvalnprocessstep**

| Property | Value |
|---|---|
| App Component | `RE-FX-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `InternalRealEstateNumber` | ✓ | | `_ValuationProcessStep` | `intreno` |  |  |
| `REValuationRuleUUID` | ✓ | | `_ValuationProcessStep` | `ruleguid` |  |  |
| `REValuationProcessUUID` | ✓ | | `_ValuationProcessStep` | `processguid` |  |  |
| `RETermNumber` |  | | `_ValuationProcessStep` | `termno` |  |  |
| `REValuationProcessReason` |  | | `_ValuationProcessStep` | `processreason` |  |  |
| `REValuationBehavior` |  | | `_ValuationProcessStep` | `processbehavior` |  |  |
| `REConsiderationStartDate` |  | |  | `cast(_ValuationProcessStep.cefrom as recevdmconsbeg preserving type )` |  |  |
| `REInfoText` |  | | `_ValuationProcessStep` | `processnote` |  |  |
| `REContractValueAmount` |  | | `_ValuationProcessStep` | `cnvalue` |  |  |
| `RENetPresentValueAmount` |  | | `_ValuationProcessStep` | `npv` |  |  |
| `RERemainingCapitalAmount` |  | | `_ValuationProcessStep` | `remainingcapital` |  |  |
| `Currency` |  | | `_ValuationProcessStep` | `curr` |  |  |
| `CreatedByUser` |  | | `_ValuationProcessStep` | `rerf` |  |  |
| `CreationDate` |  | | `_ValuationProcessStep` | `derf` |  |  |
| `CreationTime` |  | | `_ValuationProcessStep` | `terf` |  |  |
| `RESourceOfCreation` |  | | `_ValuationProcessStep` | `reher` |  |  |
| `LastChangedByUser` |  | | `_ValuationProcessStep` | `rbear` |  |  |
| `LastChangeDate` |  | | `_ValuationProcessStep` | `dbear` |  |  |
| `LastChangeTime` |  | | `_ValuationProcessStep` | `tbear` |  |  |
| `RESourceOfChange` |  | | `_ValuationProcessStep` | `rbher` |  |  |
| `REValuationProcessIsInitial` |  | | `_ValuationProcessStep` | `isinitialprocess` |  |  |
| `RELinearizationStartDate` |  | |  | `cast(_ValuationProcessStep.slbegin as recevdmslbegin preserving type )` |  |  |
| `REProbableEndDate` |  | |  | `cast( _ValuationProcessStep.probableend as recevdmprobableend preserving type )` |  |  |
| `REAbsoluteEndDate` |  | |  | `cast( _ValuationProcessStep.absoluteend as recevdmabsoluteend preserving type )` |  |  |
| `REValuationEngine` |  | | `_ValuationProcessStep` | `valuationengine` |  |  |
| `_ValuationBehavior` | | ✓ | | | | |
| `_REValuation` | | ✓ | | | | |
| `_REContract` | | ✓ | | | | |
| `_ValuationProcessReason` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_ValuationBehavior` | `I_REValuationBehavior` | [0..1] |
| `_REValuation` | `I_REValuationTerm` | [0..1] |
| `_REContract` | `I_REContract` | [0..1] |
| `_ValuationProcessReason` | `I_REValuationProcessReason` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #MANDATORY
@AccessControl.personalData.blocking: #NOT_REQUIRED
//@ClientHandling.algorithm: #SESSION_VARIABLE
//@EndUserText.label: 'Valuation Process Step'
@Metadata.ignorePropagatedAnnotations:true 
@ObjectModel.representativeKey: 'REValuationProcessUUID'
@ObjectModel.usageType.dataClass: #MIXED
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #M
@EndUserText.label: 'Valuation Process Step'
@VDM.viewType: #BASIC
@ObjectModel: {
            supportedCapabilities: [ #CDS_MODELING_DATA_SOURCE,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #SQL_DATA_SOURCE ],
            modelingPattern: #NONE
}
define view entity I_RERelevantValnProcessStep
  as select from viceprocess as _ValuationProcessStep
  left outer to one join viceprocess as _SuccessorValuation      on  _ValuationProcessStep.intreno = _SuccessorValuation.intreno
                                                                and _ValuationProcessStep.processguid = _SuccessorValuation.processguidprevious
                                                                // and _ValuationProcessStep.ruleguid = _SuccessorValuation.ruleguid
                                                                and _ValuationProcessStep.termno = _SuccessorValuation.termno
  
  association [0..1] to I_REValuationBehavior      as _ValuationBehavior      on $projection.REValuationBehavior = _ValuationBehavior.REValuationBehavior
  association [0..1] to I_REValuationTerm          as _REValuation            on $projection.REValuationRuleUUID = _REValuation.REValuationRuleUUID
                                                                                 and $projection.InternalRealEstateNumber = _REValuation.InternalRealEstateNumber
  association [0..1] to I_REContract               as _REContract             on $projection.InternalRealEstateNumber = _REContract.InternalRealEstateNumber

  association [0..1] to I_REValuationProcessReason as _ValuationProcessReason on $projection.REValuationProcessReason = _ValuationProcessReason.REValuationProcessReason

      
{     @ObjectModel.foreignKey.association: '_REContract'  
  key _ValuationProcessStep.intreno                                                       as InternalRealEstateNumber,
      @ObjectModel.foreignKey.association: '_REValuation'
  key _ValuationProcessStep.ruleguid                                                      as REValuationRuleUUID,
  key _ValuationProcessStep.processguid                                                   as REValuationProcessUUID,
      //processguidprevious,
      _ValuationProcessStep.termno                                                        as RETermNumber,
      

      _ValuationProcessStep.processreason                                                 as REValuationProcessReason,
      //processreason                                                 as REValuationProcessReason,

      _ValuationProcessStep.processbehavior                                               as REValuationBehavior,
      cast(_ValuationProcessStep.cefrom          as recevdmconsbeg   preserving type )    as REConsiderationStartDate,
      _ValuationProcessStep.processnote                                                   as REInfoText,
      @Semantics.amount.currencyCode : 'Currency'
      _ValuationProcessStep.cnvalue                                                       as REContractValueAmount,
      @Semantics.amount.currencyCode : 'Currency'
      _ValuationProcessStep.npv                                                           as RENetPresentValueAmount,
      @Semantics.amount.currencyCode : 'Currency'
      _ValuationProcessStep.remainingcapital                                              as RERemainingCapitalAmount,
      _ValuationProcessStep.curr                                                          as Currency,
      _ValuationProcessStep.rerf                                                          as CreatedByUser,
      _ValuationProcessStep.derf                                                          as CreationDate,
      _ValuationProcessStep.terf                                                          as CreationTime,
      _ValuationProcessStep.reher                                                         as RESourceOfCreation,
      _ValuationProcessStep.rbear                                                         as LastChangedByUser,
      _ValuationProcessStep.dbear                                                         as LastChangeDate,
      _ValuationProcessStep.tbear                                                         as LastChangeTime,
      _ValuationProcessStep.rbher                                                         as RESourceOfChange,
      _ValuationProcessStep.isinitialprocess                                              as REValuationProcessIsInitial,
      cast(_ValuationProcessStep.slbegin  as recevdmslbegin preserving type )             as RELinearizationStartDate,
      //@Semantics.amount.currencyCode : 'Currency'
      //slpayment                                                     as REValuationProcessAmount,
      cast( _ValuationProcessStep.probableend   as recevdmprobableend   preserving type ) as REProbableEndDate,
      cast( _ValuationProcessStep.absoluteend   as recevdmabsoluteend preserving type )   as REAbsoluteEndDate,
      _ValuationProcessStep.valuationengine                                               as REValuationEngine,

      _ValuationBehavior,
      _ValuationProcessReason,
      _REValuation,
      _REContract
}     where _SuccessorValuation.processguid is null
```
