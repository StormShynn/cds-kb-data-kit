---
name: I_MAINTORDPLNGDEGREECODE
description: "Maintordplngdegreecode"
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
  - component:PM-WOC-MO-2CL
  - lob:Plant Maintenance
---
# I_MAINTORDPLNGDEGREECODE

**Maintordplngdegreecode**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrderPlanningCode` | ✓ | |  | `cast(dd07l.domvalue_l as auf_plknz)` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_MaintOrdPlngDegreeCodeText` | [0..*] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Planning Code'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@ObjectModel: {
  representativeKey: 'MaintenanceOrderPlanningCode',
  resultSet.sizeCategory: #XS,
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S } }
@Analytics.technicalName: 'IMNTORDPLNGCODE'
@ObjectModel.supportedCapabilities: [ #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE,#CDS_MODELING_ASSOCIATION_TARGET ]    

@Metadata.ignorePropagatedAnnotations

define view entity I_MaintOrdPlngDegreeCode
  as select from dd07l
  association [0..*] to I_MaintOrdPlngDegreeCodeText as _Text on $projection.MaintenanceOrderPlanningCode = _Text.MaintenanceOrderPlanningCode
{
      @ObjectModel.text.association: '_Text'
  key cast(dd07l.domvalue_l as auf_plknz) as MaintenanceOrderPlanningCode,

      // Associations
      _Text
}
where
      dd07l.domname  = 'AUF_PLKNZ'
  and dd07l.as4local = 'A';
```
