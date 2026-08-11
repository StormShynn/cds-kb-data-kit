---
name: I_PERFORMANCEOBLIGATIONROLETXT
description: "Performance Obligation Role - Text"
app_component: FI-RA-2CL
software_component: SAPSCORE
release_state: released
system_type: S/4HANA Cloud Public Edition
source_available: true
source_url: https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEOBLIGATIONROLETXT')/$value
semantic_en: "Performance Obligation Role - Text"
semantic_vi: "Performance Obligation Role - Text — CDS view giao diện dựa trên dd07t."
keywords:
  - "performance"
  - "obligation"
  - "role"
  - "text"
  - "language"
  - "domain"
  - "value"
  - "name"
tags:
  - FI
  - component:FI-RA-2CL
  - FI-RA
  - FI-RA-2CL
  - interface-view
  - lob:finance
---
# I_PERFORMANCEOBLIGATIONROLETXT

**Performance Obligation Role - Text**

| Property | Value |
|---|---|
| App Component | `FI-RA-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released |
| System Type | S/4HANA Cloud Public Edition |
| Source | [View source file](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEOBLIGATIONROLETXT')/$value) |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(dd07t.ddlanguage as spras preserving type)` | `LANG(1)` | Language Key |
| `PerformanceObligationRole` | ✓ | |  | `cast(dd07t.domvalue_l as farr_cds_pob_role)` | `CHAR(1)` | Performance Obligation Role |
| `DomainValue` |  | |  | `domvalue_l` | `CHAR(10)` | Values for Domains: Single Value/Lower Limit |
| `PerformanceObligationRoleName` |  | |  | `cast(dd07t.ddtext as val_text preserving type)` | `CHAR(60)` | Short Text for Fixed Values |
| `_Language` | | ✓ | | | | |
| `_PerfOblgnRole` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

*Source: [https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEOBLIGATIONROLETXT')/$value](https://api.sap.com/odata/1.0/catalog.svc/CdsViewsContent.CdsViews('I_PERFORMANCEOBLIGATIONROLETXT')/$value)*

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED

@Analytics.technicalName: 'IRAPOBROLETXT'

@EndUserText.label: 'Performance Obligation Role - Text'

@Metadata.ignorePropagatedAnnotations: true

@ObjectModel.dataCategory: #TEXT
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'PerformanceObligationRole'

@ObjectModel.supportedCapabilities: [ #CDS_MODELING_ASSOCIATION_TARGET,
                                      #CDS_MODELING_DATA_SOURCE,
                                      #LANGUAGE_DEPENDENT_TEXT,
                                      #SEARCHABLE_ENTITY,
                                      #SQL_DATA_SOURCE ]

@ObjectModel.usageType: { serviceQuality: #A, sizeCategory: #S, dataClass: #META }

@Search.searchable: true

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_PerformanceObligationRoleTxt
  as select from dd07t

  association        to parent I_PerformanceObligationRole as _PerfOblgnRole
    on $projection.PerformanceObligationRole = _PerfOblgnRole.PerformanceObligationRole

  association [0..1] to I_Language                         as _Language
    on $projection.Language = _Language.Language

{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(dd07t.ddlanguage as spras preserving type) as Language,

      @ObjectModel.foreignKey.association: '_PerfOblgnRole'
      @ObjectModel.text.element: [ 'PerformanceObligationRoleName' ]
  key cast(dd07t.domvalue_l as farr_cds_pob_role)     as PerformanceObligationRole,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                as DomainValue,

      @Search: { defaultSearchElement: true, fuzzinessThreshold: 0.8, ranking: #LOW }
      @Semantics.text: true
      cast(dd07t.ddtext as val_text preserving type)  as PerformanceObligationRoleName,

      _PerfOblgnRole,
      _Language

}
where dd07t.domname  = 'FARR_POB_ROLE'
  and dd07t.as4local = 'A'
  and dd07t.as4vers  = '0000'
```
