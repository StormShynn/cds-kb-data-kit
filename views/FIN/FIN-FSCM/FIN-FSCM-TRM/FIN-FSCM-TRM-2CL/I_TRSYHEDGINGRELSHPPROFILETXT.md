---
name: I_TRSYHEDGINGRELSHPPROFILETXT
description: Trsyhedgingrelshpprofiletxt
app_component: FIN-FSCM-TRM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FIN
  - FIN-FSCM
  - FIN-FSCM-TRM
  - interface-view
  - component:FIN-FSCM-TRM-2CL
  - lob:Other
---
# I_TRSYHEDGINGRELSHPPROFILETXT

**Trsyhedgingrelshpprofiletxt**

| Property | Value |
|---|---|
| App Component | `FIN-FSCM-TRM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `HedgingProfile` | ✓ | |  | `cast(TrsyHedgingRelshpProfileTxt.hrel_profl as ftr_gen_hdgg_profile preserving type)` |
| `Language` | ✓ | |  | `spras` |
| `TrsyHedgingRelshpProfileName` |  | |  | `cast(TrsyHedgingRelshpProfileTxt.hrel_profl_descr as ftr_gen_hdgg_profile_name preserving type)` |
| `_TrsyHedgingRelshpProfile` | | ✓ | | |
| `_Language` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_TrsyHedgingRelshpProfile` | `I_TrsyHedgingRelshpProfile` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AbapCatalog.entityBuffer.definitionAllowed: false
 @AbapCatalog.dataMaintenance: #NOT_ALLOWED
@AccessControl.authorizationCheck: #NOT_REQUIRED // according to XLS / DCL
@EndUserText.label: 'Hedging Relationship Profile - Text'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'ITHXCHRPROFLT'
@ObjectModel.representativeKey: 'HedgingProfile'
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #B
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC
@Metadata.ignorePropagatedAnnotations: true // For C1-Release
define view entity I_TrsyHedgingRelshpProfileTxt as select from thxc_hr_profl_t as TrsyHedgingRelshpProfileTxt

association [0..1] to I_TrsyHedgingRelshpProfile as _TrsyHedgingRelshpProfile on $projection.HedgingProfile           = _TrsyHedgingRelshpProfile.HedgingProfile
association [0..1] to I_Language                 as _Language                 on $projection.Language                 = _Language.Language
{
      @ObjectModel.foreignKey.association: '_TrsyHedgingRelshpProfile'
  key cast(TrsyHedgingRelshpProfileTxt.hrel_profl                        as ftr_gen_hdgg_profile      preserving type) as HedgingProfile,
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key TrsyHedgingRelshpProfileTxt.spras                                                                                as Language,
      @Semantics.text: true
      cast(TrsyHedgingRelshpProfileTxt.hrel_profl_descr                  as ftr_gen_hdgg_profile_name preserving type) as TrsyHedgingRelshpProfileName,
  _TrsyHedgingRelshpProfile,
  _Language
}
```
