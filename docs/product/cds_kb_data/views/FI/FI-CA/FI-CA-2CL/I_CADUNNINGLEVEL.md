---
name: I_CADUNNINGLEVEL
description: "Cadunninglevel"
app_component: FI-CA-2CL
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
  - FI
  - FI-CA
  - interface-view
  - component:FI-CA-2CL
  - lob:Finance
---
# I_CADUNNINGLEVEL

**Cadunninglevel**

| Property | Value |
|---|---|
| App Component | `FI-CA-2CL` |
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
| `CADunningProcedure` | ✓ | |  | `mahnv` |  |  |
| `CADunningLevel` | ✓ | |  | `mahns` |  |  |
| `CANumberOfDaysInArrears` |  | |  | `vertg` |  |  |
| `CADunningFrequencyInDays` |  | |  | `rhyth` |  |  |
| `CADaysToPaymentDeadline` |  | |  | `frist` |  |  |
| `CAAllItemsArePrinted` |  | |  | `xpost` |  |  |
| `CADunningNoticeIsAlwaysCreated` |  | |  | `xaend` |  |  |
| `CACreditWorthinessRatingValue` |  | |  | `bonig` |  |  |
| `CADunningLevelIsOptional` |  | |  | `xmfak` |  |  |
| `CADunningLevelIsOnlyForIntRsn` |  | |  | `xmsus` |  |  |
| `CAInterestCode` |  | |  | `ikey` |  |  |
| `CAPostingCodeForDunInterest` |  | |  | `ipost` |  |  |
| `CAInterestIsCalculated` |  | |  | `icalc` |  |  |
| `CADunningChargesSchema` |  | |  | `chgid` |  |  |
| `CADunningLevelCategory` |  | |  | `mstyp` |  |  |
| `CADunningLevelSettingCode` |  | |  | `xextm` |  |  |
| `CANumberOfDaysInArrearsExt` |  | |  | `avert` |  |  |
| `CADunningFrequencyInDaysExt` |  | |  | `arhyt` |  |  |
| `CAOnlyItmsOfLastDunLvlAreAllwd` |  | |  | `xnbgm` |  |  |
| `CADunningRecipientDetnCode` |  | |  | `mempf` |  |  |
| `CAIntrstIsCalculatedBfrCharges` |  | |  | `intfirst` |  |  |
| `CADaysBeforeDueDateForReminder` |  | |  | `eritg` |  |  |
| `CAMinimalPctOfAmountStillOpen` |  | |  | `minpz` |  |  |
| `CAIntrstAndChargeIsAddedToHist` |  | |  | `newdc` |  |  |
| `CADunningSuccessCanBeEvaluated` |  | |  | `xdsuc` |  |  |
| `_Text` | | ✓ | | | | |
| `_DunningProcedure` | | ✓ | | | | |
| `_DunningLevelCat` | | ✓ | | | | |
| `_InterestCode` | | ✓ | | | | |
| `_ChargesSchema` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CADunningLevelText` | [0..*] |
| `_DunningProcedure` | `I_CADunningProcedure` | [1..1] |
| `_DunningLevelCat` | `I_CADunningLevelCategory` | [1..1] |
| `_InterestCode` | `I_CAInterestCode` | [0..1] |
| `_ChargesSchema` | `I_CAChargesSchema` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@EndUserText.label: 'Dunning Level'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel: { modelingPattern: #NONE,
                representativeKey: 'CADunningLevel',
                sapObjectNodeType.name: 'ContrAcctgDunningLevel',
                supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                         #CDS_MODELING_DATA_SOURCE,
                                         #SQL_DATA_SOURCE ],
                usageType: { dataClass: #CUSTOMIZING,
                             serviceQuality: #A,
                             sizeCategory: #S } }

@VDM.viewType: #BASIC

define view entity I_CADunningLevel
  as select from tfk047b

  association [0..*] to I_CADunningLevelText     as _Text             on  $projection.CADunningProcedure = _Text.CADunningProcedure
                                                                      and $projection.CADunningLevel     = _Text.CADunningLevel
  association [1..1] to I_CADunningProcedure     as _DunningProcedure on  $projection.CADunningProcedure = _DunningProcedure.CADunningProcedure
  association [1..1] to I_CADunningLevelCategory as _DunningLevelCat  on  $projection.CADunningLevelCategory = _DunningLevelCat.CADunningLevelCategory
  association [0..1] to I_CAInterestCode         as _InterestCode     on  $projection.CAInterestCode = _InterestCode.CAInterestCode
  association [0..1] to I_CAChargesSchema        as _ChargesSchema    on  $projection.CADunningChargesSchema = _ChargesSchema.CAChargesSchema

{
      @ObjectModel.foreignKey.association: '_DunningProcedure'
  key mahnv    as CADunningProcedure,
      @ObjectModel.text.association: '_Text'
  key mahns    as CADunningLevel,

      vertg    as CANumberOfDaysInArrears,
      rhyth    as CADunningFrequencyInDays,
      frist    as CADaysToPaymentDeadline,
      xpost    as CAAllItemsArePrinted,
      xaend    as CADunningNoticeIsAlwaysCreated,
      bonig    as CACreditWorthinessRatingValue,
      xmfak    as CADunningLevelIsOptional,
      xmsus    as CADunningLevelIsOnlyForIntRsn,
      @ObjectModel.foreignKey.association: '_InterestCode'
      ikey     as CAInterestCode,
      ipost    as CAPostingCodeForDunInterest,
      icalc    as CAInterestIsCalculated,
      @ObjectModel.foreignKey.association: '_ChargesSchema'
      chgid    as CADunningChargesSchema,
      @ObjectModel.foreignKey.association: '_DunningLevelCat'
      mstyp    as CADunningLevelCategory,
      xextm    as CADunningLevelSettingCode,
      avert    as CANumberOfDaysInArrearsExt,
      arhyt    as CADunningFrequencyInDaysExt,
      xnbgm    as CAOnlyItmsOfLastDunLvlAreAllwd,
      mempf    as CADunningRecipientDetnCode,
      intfirst as CAIntrstIsCalculatedBfrCharges,
      eritg    as CADaysBeforeDueDateForReminder,
      minpz    as CAMinimalPctOfAmountStillOpen,
      newdc    as CAIntrstAndChargeIsAddedToHist,
      xdsuc    as CADunningSuccessCanBeEvaluated,

      /* associations */
      _Text,
      _DunningProcedure,
      _DunningLevelCat,
      _InterestCode,
      _ChargesSchema

}
```
