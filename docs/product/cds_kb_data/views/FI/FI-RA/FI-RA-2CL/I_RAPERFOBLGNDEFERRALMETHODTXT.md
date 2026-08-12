---
name: I_RAPERFOBLGNDEFERRALMETHODTXT
description: "Raperfoblgndeferralmethodtxt"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-RA
  - interface-view
  - component:FI-RA-2CL
  - lob:Finance
---
# I_RAPERFOBLGNDEFERRALMETHODTXT

**Raperfoblgndeferralmethodtxt**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | | `_DeferralMethodText` | `langu` |  |  |
| `PerfObligationDeferralMethod` | ✓ | | `_BADIFilterCondition` | `value1` |  |  |
| `PerfOblgnDeferralMethodText` |  | | `_DeferralMethodText` | `text` |  |  |
| `_DeferralMethod` | | ✓ | | | | |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeferralMethod` | `I_RAPerfOblgnDeferralMethod` | [0..1] |
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRADEFMETHODTXT'

@EndUserText.label: 'RA Deferral Method - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.representativeKey: 'PerfObligationDeferralMethod'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@VDM.viewType: #BASIC

define view entity I_RAPerfOblgnDeferralMethodTxt
  as select from sotr_text      as _DeferralMethodText

    inner join   badiimpl_enh   as _BADIImplementation
      on _BADIImplementation.shorttext_obj = _DeferralMethodText.concept

    inner join   badi_char_cond as _BADIFilterCondition
      on  _BADIImplementation.enhname   = _BADIFilterCondition.enhname
      and _BADIImplementation.badi_impl = _BADIFilterCondition.badi_impl

  association [0..1] to I_RAPerfOblgnDeferralMethod as _DeferralMethod
    on $projection.PerfObligationDeferralMethod = _DeferralMethod.PerfObligationDeferralMethod

  association [0..1] to I_Language                  as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key _DeferralMethodText.langu   as Language,

      @ObjectModel.foreignKey.association: '_DeferralMethod'
  key _BADIFilterCondition.value1 as PerfObligationDeferralMethod,

      @Semantics.text: true
      _DeferralMethodText.text    as PerfOblgnDeferralMethodText,

      _DeferralMethod,
      _Language

}
where _BADIImplementation.spotname = 'FARR_DEFERRAL_METHOD_V2'
  and _BADIImplementation.active   = 'X'
```
