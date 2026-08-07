---
name: I_RAPERFOBLGNDEFERRALMETHOD
description: Raperfoblgndeferralmethod
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
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
# I_RAPERFOBLGNDEFERRALMETHOD

**Raperfoblgndeferralmethod**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `PerfObligationDeferralMethod` | ✓ | | `_BADIFilterCondition` | `value1` |
| `_DeferralMethodText` | | ✓ | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_DeferralMethodText` | `I_RAPerfOblgnDeferralMethodTxt` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRADEFERRALMTHD'

@EndUserText.label: 'Revenue Accounting Deferral Method'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.representativeKey: 'PerfObligationDeferralMethod'
@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #SQL_DATA_SOURCE,
                                      #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #CUSTOMIZING }

@VDM.viewType: #BASIC

define view entity I_RAPerfOblgnDeferralMethod
  as select from badi_char_cond as _BADIFilterCondition

    inner join   badiimpl_enh   as _BADIImplementation
      on  _BADIImplementation.enhname   = _BADIFilterCondition.enhname
      and _BADIImplementation.badi_impl = _BADIFilterCondition.badi_impl

  association [0..*] to I_RAPerfOblgnDeferralMethodTxt as _DeferralMethodText
    on $projection.PerfObligationDeferralMethod = _DeferralMethodText.PerfObligationDeferralMethod

{
      @ObjectModel.text.association: '_DeferralMethodText'
  key _BADIFilterCondition.value1 as PerfObligationDeferralMethod,

      _DeferralMethodText

}
where _BADIImplementation.spotname = 'FARR_DEFERRAL_METHOD_V2'
  and _BADIImplementation.active   = 'X'
```
