---
name: I_FINSGLERRITMPROCSTSVH
description: Finsglerritmprocstsvh
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
# I_FINSGLERRITMPROCSTSVH

**Finsglerritmprocstsvh**

| Property | Value |
|---|---|
| App Component | `AC-INT-ECS-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `FinSGLErrorItemStatus` | ✓ | |  | `cast( domvalue_l as char1 )` | `CHAR(1)` | Single-Character Flag |
| `FinSGLErrorItemStatusText` |  | |  | `cast( ddtext as char10 )` | `CHAR(10)` | Character Field with Length 10 |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Serach Help for Error Item Status'

@Metadata.ignorePropagatedAnnotations: true
@VDM: {
  viewType:#BASIC,
  lifecycle.contract.type:#PUBLIC_LOCAL_API
}

@ObjectModel: {
  representativeKey: 'FinSGLErrorItemStatus',
  dataCategory: #VALUE_HELP,
  resultSet: {
    sizeCategory: #XS
  },
  usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
  }
}
@UI.presentationVariant: [{ sortOrder: [{ by: 'FinSGLErrorItemStatus', direction: #ASC }] }]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION,
                                     #CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #VALUE_HELP_PROVIDER,
                                     #SQL_DATA_SOURCE]
define view entity I_FinSGLErrItmProcStsVH
  as select from dd07t
{
         @UI: { hidden   : true }
         @ObjectModel.text.element: ['FinSGLErrorItemStatusText']
         @UI.textArrangement: #TEXT_ONLY
  key    cast( domvalue_l as char1 ) as FinSGLErrorItemStatus,
         @Semantics.text: true
         cast( ddtext as char10 )    as FinSGLErrorItemStatusText
}
where
       domname    = 'GLE_DOM_ERROR_STATUS'
  and  as4local   = 'A'
  and  ddlanguage = $session.system_language
  and(
       domvalue_l = '0'
    or domvalue_l = '1'
    or domvalue_l = '2'
    or domvalue_l = '3'
    or domvalue_l = '4'
  )
```
