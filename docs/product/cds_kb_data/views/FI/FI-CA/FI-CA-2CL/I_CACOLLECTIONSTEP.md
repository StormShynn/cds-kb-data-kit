---
name: I_CACOLLECTIONSTEP
description: "Cacollectionstep"
app_component: FI-CA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-CA
  - interface-view
  - collection
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CACOLLECTIONSTEP

**Cacollectionstep**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CACollectionStep` | ✓ | |  | `step` |  |  |
| `CACollectionStepLevel` |  | |  | `steplevel` |  |  |
| `CACollectionStepType` |  | |  | `steptype` |  |  |
| `CAAltvCollectionStep` |  | |  | `altst` |  |  |
| `CADaysToNextDunning` |  | |  | `intrv` |  |  |
| `CAFactoryCalendarIsUsedForDun` |  | |  | `xmfac` |  |  |
| `FactoryCalendar` |  | |  | `cast( mfcid as fabkl preserving type )` |  |  |
| `CAItemGroupIsClosed` |  | |  | `closegroup` |  |  |
| `CADaysToPaymentDeadline` |  | |  | `frist` |  |  |
| `CACreditWorthinessRatingValue` |  | |  | `bonig` |  |  |
| `CAInterestCode` |  | |  | `ikey` |  |  |
| `CAPostingCodeForDunInterest` |  | |  | `ipost` |  |  |
| `CAInterestIsCalculated` |  | |  | `icalc` |  |  |
| `CAIntrstIsCalculatedBfrCharges` |  | |  | `intfirst` |  |  |
| `CADunningChargesSchema` |  | |  | `chgid` |  |  |
| `CAIntrstAndChargeIsAddedToHist` |  | |  | `newdc` |  |  |
| `CADunningSuccessCanBeEvaluated` |  | |  | `xdsuc` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CACollectionStepText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Collection Step'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CACollectionStep',
                sapObjectNodeType.name: 'ContrAcctgCollectionStep',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CACollectionStep
  as select from tfk047u

  association [0..*] to I_CACollectionStepText as _Text on $projection.CACollectionStep = _Text.CACollectionStep

{
      @ObjectModel.text.association: '_Text'
  key step                                   as CACollectionStep,

      steplevel                              as CACollectionStepLevel,
      steptype                               as CACollectionStepType,
      altst                                  as CAAltvCollectionStep,
      intrv                                  as CADaysToNextDunning,
      xmfac                                  as CAFactoryCalendarIsUsedForDun,
      cast( mfcid as fabkl preserving type ) as FactoryCalendar,
      closegroup                             as CAItemGroupIsClosed,
      frist                                  as CADaysToPaymentDeadline,
      bonig                                  as CACreditWorthinessRatingValue,
      ikey                                   as CAInterestCode,
      ipost                                  as CAPostingCodeForDunInterest,
      icalc                                  as CAInterestIsCalculated,
      intfirst                               as CAIntrstIsCalculatedBfrCharges,
      chgid                                  as CADunningChargesSchema,
      newdc                                  as CAIntrstAndChargeIsAddedToHist,
      xdsuc                                  as CADunningSuccessCanBeEvaluated,

      _Text
}
```
