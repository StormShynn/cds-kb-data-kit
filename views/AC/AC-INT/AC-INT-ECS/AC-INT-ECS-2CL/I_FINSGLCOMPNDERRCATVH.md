---
name: I_FINSGLCOMPNDERRCATVH
description: Finsglcompnderrcatvh
app_component: AC-INT-ECS-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - AC
  - AC-INT
  - AC-INT-ECS
  - interface-view
  - value-help
  - component:AC-INT-ECS-2CL
  - lob:Other
---
# I_FINSGLCOMPNDERRCATVH

**Finsglcompnderrcatvh**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `FinSGLCompoundErrorCategory` | `_CompoundErrorCategory.cmp_err_cat` |
| `FinSGLCompndErrCatDesc` | `_text.kbez` |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Compound Error Category'

@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}

@ObjectModel: {
  representativeKey: 'FinSGLCompoundErrorCategory',
  dataCategory: #VALUE_HELP,
  resultSet: {
    sizeCategory: #XS
  },
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #CUSTOMIZING
  }
}
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER,
                                     #SQL_DATA_SOURCE]
define view entity I_FinSGLCompndErrCatVH
  as select from gle_cmp_err  as _CompoundErrorCategory
    inner join   gle_cmp_errt as _text on _CompoundErrorCategory.cmp_err_cat = _text.cmp_err_cat
{

      @ObjectModel.text.element: ['FinSGLCompndErrCatDesc']
      @UI.textArrangement: #TEXT_LAST
  key _CompoundErrorCategory.cmp_err_cat as FinSGLCompoundErrorCategory,
      @Semantics.text:true
      _text.kbez                         as FinSGLCompndErrCatDesc

}
```
