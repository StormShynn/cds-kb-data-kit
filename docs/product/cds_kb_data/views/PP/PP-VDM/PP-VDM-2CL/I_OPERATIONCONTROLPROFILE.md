---
name: I_OPERATIONCONTROLPROFILE
description: "Operationcontrolprofile"
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_OPERATIONCONTROLPROFILE

**Operationcontrolprofile**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OperationControlProfile` | ✓ | |  | `cast(prof.steus as pph_steus preserving type)` |  |  |
| `OperationExternalProcessing` |  | |  | `cast(prof.lief as pph_lief preserving type)` |  |  |
| `OperationIsProcessedExternally` |  | |  | `cast( case prof.lief when '+' then 'X' when 'X' then 'X' else '' end as flg_frd preserving type)` |  |  |
| `OperationIsProcessedInternally` |  | |  | `cast( case prof.lief when ' ' then 'X' when 'X' then 'X' else '' end as ps_workact preserving type)` |  |  |
| `OperationIsMilestone` |  | |  | `cast( case prof.ruek when '1' then 'X' else '' end as flg_mst preserving type)` |  |  |
| `ConfirmationIsRequired` |  | |  | `cast( case prof.ruek when '2' then 'X' else '' end as pph_confisrequired preserving type)` |  |  |
| `ConfirmationIsNotPossible` |  | |  | `cast( case prof.ruek when '3' then 'X' else '' end as pph_confisnotpossible preserving type)` |  |  |
| `ConfirmationIsOptional` |  | |  | `cast( case prof.ruek when '' then 'X' else '' end as pph_confisoptional preserving type)` |  |  |
| `OperationIsScheduled` |  | |  | `term` |  |  |
| `OperationIsPrinted` |  | |  | `vrgd` |  |  |
| `OperationIsIncludedInCosting` |  | |  | `kalkz` |  |  |
| `OperationIsReworkOperation` |  | |  | `rework` |  |  |
| `GRIsPostedAutomatically` |  | |  | `autwe` |  |  |
| `CapacityRequirementsAreDtmnd` |  | |  | `kapa` |  |  |
| `InspCharacteristicIsRequired` |  | |  | `mrkkz` |  |  |
| `OperationIsNotMESRelevant` |  | |  | `not_mes_rel` |  |  |
| `_Text` | | ✓ | | | | |
| `_OperationExternalProcessing` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_OperationControlProfileText` | [0..*] |
| `_OperationExternalProcessing` | `I_OperationExternalProcessing` | [0..1] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IPPOPCONTPROF'
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.buffering: {status: #ACTIVE, type: #GENERIC, numberOfKeyFields: 001}
@AccessControl.authorizationCheck: #NOT_REQUIRED
@AccessControl.personalData.blocking: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.internalName: #LOCAL
@ClientHandling.algorithm: #SESSION_VARIABLE
@Consumption.ranked: true
@Metadata.allowExtensions: true
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.compositionRoot: true
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'OperationControlProfile'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Operation Control Profile'

/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK" ]  } */
define view I_OperationControlProfile
  as select from t430 as prof 
  
  association [0..*] to I_OperationControlProfileText as _Text                        on  $projection.OperationControlProfile     = _Text.OperationControlProfile
  association [0..1] to I_OperationExternalProcessing as _OperationExternalProcessing on  $projection.OperationExternalProcessing = _OperationExternalProcessing.OperationExternalProcessing
{
      @Search: {defaultSearchElement: true, ranking: #HIGH, fuzzinessThreshold: 0.8}
      @ObjectModel.text.association: '_Text'
  key cast(prof.steus as pph_steus preserving type) as OperationControlProfile,

      @ObjectModel.foreignKey.association: '_OperationExternalProcessing'
      cast(prof.lief as pph_lief preserving type)   as OperationExternalProcessing,
      cast( case prof.lief
        when '+' then 'X'
        when 'X' then 'X'
        else ''
      end as flg_frd preserving type)               as OperationIsProcessedExternally,
      cast( case prof.lief
        when ' ' then 'X'
        when 'X' then 'X'
        else ''
      end as ps_workact preserving type)            as OperationIsProcessedInternally,
      cast( case prof.ruek
        when '1' then 'X'
        else ''
      end as flg_mst preserving type)               as OperationIsMilestone,
      cast( case prof.ruek
        when '2' then 'X'
        else ''
      end as pph_confisrequired preserving type)    as ConfirmationIsRequired,
      cast( case prof.ruek
        when '3' then 'X'
        else ''
      end as pph_confisnotpossible preserving type) as ConfirmationIsNotPossible,
      cast( case prof.ruek
        when '' then 'X'
        else ''
      end as pph_confisoptional preserving type)    as ConfirmationIsOptional,
      prof.term                                     as OperationIsScheduled,
      prof.vrgd                                     as OperationIsPrinted,
      prof.kalkz                                    as OperationIsIncludedInCosting,
      prof.rework                                   as OperationIsReworkOperation,
      prof.autwe                                    as GRIsPostedAutomatically,
      prof.kapa                                     as CapacityRequirementsAreDtmnd,
      prof.mrkkz                                    as InspCharacteristicIsRequired,
      prof.not_mes_rel                              as OperationIsNotMESRelevant,

      // Associations
      _OperationExternalProcessing,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD]
      _Text
}
where
  prof.plnaw = '*';
```
