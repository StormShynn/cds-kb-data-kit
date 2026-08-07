---
name: I_MAINTORDERPROCESSINGCONTEXT
description: Maintorderprocessingcontext
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-WOC
  - PM-WOC-MO
  - interface-view
  - text-view
  - text
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDERPROCESSINGCONTEXT

**Maintorderprocessingcontext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintOrderProcessingContext` | ✓ | |  | `cast( dd07l.domvalue_l as maintorderprocessingcontext )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintOrdProcessingContextT` | [0..*] |

## Source Code

```abap
@ObjectModel.usageType: {
  serviceQuality: #A,
  sizeCategory: #S,
  dataClass: #MIXED
}
@Analytics.technicalName: 'IMORDPROCCTX'
@ObjectModel.representativeKey: 'MaintOrderProcessingContext'
@VDM.viewType: #BASIC
@ObjectModel.resultSet.sizeCategory: #XS
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Processing Context'

@Metadata.ignorePropagatedAnnotations: true
@VDM.lifecycle.contract.type:#PUBLIC_LOCAL_API
@ObjectModel.supportedCapabilities:[ #VALUE_HELP_PROVIDER ]
@ObjectModel.modelingPattern: #VALUE_HELP_PROVIDER

define view entity I_MaintOrderProcessingContext
  as select from dd07l
  association [0..*] to I_MaintOrdProcessingContextT as _Text on $projection.MaintOrderProcessingContext = _Text.MaintOrderProcessingContext
{
  @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as maintorderprocessingcontext ) as MaintOrderProcessingContext,
      _Text
}
where
      dd07l.domname  = 'MAINTORDERPROCESSINGCONTEXT'
  and dd07l.as4local = 'A'
```
