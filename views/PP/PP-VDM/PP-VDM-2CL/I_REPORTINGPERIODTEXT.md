---
name: I_REPORTINGPERIODTEXT
description: Reportingperiodtext
app_component: PP-VDM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-VDM
  - interface-view
  - text-view
  - text
  - component:PP-VDM-2CL
  - lob:Manufacturing
---
# I_REPORTINGPERIODTEXT

**Reportingperiodtext**

| Property | Value |
|---|---|
| App Component | `PP-VDM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ReportingPeriod` | ✓ | |  | `cast( cast(substring(t.domvalue_l, 1, 2) as abap.numc(2) ) as pph_reportingperiod preserving type)` |  |  |
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `ReportingPeriodName` |  | |  | `cast(t.ddtext as pph_reportingperiodname preserving type)` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Language` | | ✓ | | | | |
| `_ReportingPeriod` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |
| `_ReportingPeriod` | `I_ReportingPeriod` | [1..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true 
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IREPPERIODTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, #SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #SEARCHABLE_ENTITY]
@ObjectModel.representativeKey: 'ReportingPeriod'
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #L, dataClass: #META}
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Reporting Period - Text'

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_ReportingPeriodText
  as select from dd07t as t
  association [0..1] to I_Language        as _Language        on $projection.Language = _Language.Language
  association [1..1] to I_ReportingPeriod as _ReportingPeriod on $projection.ReportingPeriod = _ReportingPeriod.ReportingPeriod
{
      @ObjectModel.foreignKey.association: '_ReportingPeriod'
      @ObjectModel.text.element: ['ReportingPeriodName']
  key cast( cast(substring(t.domvalue_l, 1, 2) as abap.numc(2) ) as pph_reportingperiod preserving type) as ReportingPeriod,
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(t.ddlanguage as spras preserving type)                                                        as Language,
      @Search: {defaultSearchElement: true, ranking: #LOW, fuzzinessThreshold: 0.8}
      @Semantics.text: true
      cast(t.ddtext as pph_reportingperiodname preserving type)                                          as ReportingPeriodName,
      @Consumption.hidden: true
      t.domvalue_l                                                                                       as DomainValue,
 
      // Associations
      @ObjectModel.association.type: [#TO_COMPOSITION_PARENT, #TO_COMPOSITION_ROOT]
      _ReportingPeriod,
      _Language
}
where
      t.domname  = 'PPH_PERIOD'
  and t.as4local = 'A'
  and t.as4vers  = '0000';
```
