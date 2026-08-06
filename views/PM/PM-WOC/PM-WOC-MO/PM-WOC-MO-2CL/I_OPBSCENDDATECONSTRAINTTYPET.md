---
name: I_OPBSCENDDATECONSTRAINTTYPET
description: Opbscenddateconstrainttypet
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
# I_OPBSCENDDATECONSTRAINTTYPET

**Opbscenddateconstrainttypet**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `OpBscEndDateConstraintType` | `cast( dd07t.domvalue_l as einschra )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `FinishConstraintTypeText` | `cast( dd07t.ddtext as val_text preserving type )` |
| `_Language` | *Association* |
| `_OpBscEndDateConstraintType` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@EndUserText.label: 'Op Basic End Date Constraint Type - Txt'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IOPEDATCONSTTYT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'OpBscEndDateConstraintType'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@Analytics.dataExtraction.enabled:true
/*+[hideWarning] { "IDS" : [ "CALCULATED_FIELD_CHECK", "KEY_CHECK" ]  } */
define view entity I_OpBscEndDateConstraintTypeT
  as select from dd07t
  association        to parent I_OpBscEndDateConstraintType as _OpBscEndDateConstraintType on $projection.OpBscEndDateConstraintType = _OpBscEndDateConstraintType.OpBscEndDateConstraintType
  association [0..1] to I_Language                          as _Language                   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast( dd07t.ddlanguage as spras preserving type ) as Language,
      @ObjectModel.foreignKey.association: '_OpBscEndDateConstraintType'
      @ObjectModel.text.element: ['FinishConstraintTypeText']
  key cast( dd07t.domvalue_l as einschra )              as OpBscEndDateConstraintType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement:true
      dd07t.domvalue_l                                  as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      cast( dd07t.ddtext as val_text preserving type )  as FinishConstraintTypeText,
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT,
                                      #TO_COMPOSITION_ROOT]
      _OpBscEndDateConstraintType,
      _Language
}
where
      dd07t.domname  = 'RESTRIKEND'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
