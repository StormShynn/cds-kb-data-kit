---
name: I_MAINTORDPLNGDEGREECODETEXT
description: Maintordplngdegreecodetext
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
# I_MAINTORDPLNGDEGREECODETEXT

**Maintordplngdegreecodetext**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `MaintenanceOrderPlanningCode` | ✓ | |  | `cast(dd07t.domvalue_l as auf_plknz)` |  |  |
| `Language` | ✓ | |  | `ddlanguage` |  |  |
| `MaintOrderPlanningCodeName` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Maintenance Order Planning Code - Text'

@VDM: {
  viewType: #BASIC,
  lifecycle.contract.type: #PUBLIC_LOCAL_API }

@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'MaintenanceOrderPlanningCode',
  resultSet.sizeCategory: #XS,
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S } }
@Analytics.technicalName: 'IMNTORDEGREETXT'
@ObjectModel.supportedCapabilities: [ #LANGUAGE_DEPENDENT_TEXT, #CDS_MODELING_ASSOCIATION_TARGET, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE ]
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT     

@Metadata.ignorePropagatedAnnotations

define view entity I_MaintOrdPlngDegreeCodeText
  as select from dd07t as dd07t

  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
      @ObjectModel.text.element: [ 'MaintOrderPlanningCodeName']
  key cast(dd07t.domvalue_l as auf_plknz) as MaintenanceOrderPlanningCode,

      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key dd07t.ddlanguage                    as Language,

      @Semantics.text: true
      dd07t.ddtext                        as MaintOrderPlanningCodeName,

      // Associations
      _Language
}
where
      dd07t.domname  = 'AUF_PLKNZ'
  and dd07t.as4local = 'A';
```
