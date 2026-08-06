---
name: I_PROJECTBILLINGCATEGORYTEXT
description: Projectbillingcategorytext
app_component: PPM-SCL-BIL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PPM
  - PPM-SCL
  - PPM-SCL-BIL
  - interface-view
  - text-view
  - billing
  - project
  - text
  - component:PPM-SCL-BIL
  - lob:Other
  - bo:Project
---
# I_PROJECTBILLINGCATEGORYTEXT

**Projectbillingcategorytext**

| Property | Value |
|---|---|
| App Component | `PPM-SCL-BIL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( dd07t.ddlanguage as spras preserving type )` |
| key `ProjectBillingCategory` | `cast( substring( domvalue_l, 1, 4 ) as prflcat preserving type )` |
| `DomainValue` | `dd07t.domvalue_l` |
| `ProjectBillingCategoryText` | `ddtext` |
| `_Language` | *Association* |
| `_ProjectBillingCategory` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@Analytics.technicalName: 'IPBRBILLGCATTXT'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@EndUserText.label: 'Project Billing Category - Text'
@Metadata.ignorePropagatedAnnotations: true
@Search.searchable: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.sapObjectNodeType.name: 'ProjectBillingCategoryText'
@ObjectModel.dataCategory: #TEXT
@ObjectModel.usageType: {
    serviceQuality: #A,
    sizeCategory: #S,
    dataClass: #META
}

@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.representativeKey: 'ProjectBillingCategory'
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET,
                                     #CDS_MODELING_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE]

@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API


define view entity I_ProjectBillingCategoryText
  as select from dd07t
  association        to parent I_ProjectBillingCategory as _ProjectBillingCategory on $projection.ProjectBillingCategory = _ProjectBillingCategory.ProjectBillingCategory
  association [0..1] to I_Language                      as _Language               on $projection.Language = _Language.Language
{
      @Semantics.language: true
      @ObjectModel.foreignKey.association: '_Language'
  key cast( dd07t.ddlanguage as spras preserving type )                as Language,

      @ObjectModel.foreignKey.association: '_ProjectBillingCategory'
      @ObjectModel.text.element: ['ProjectBillingCategoryText']
  key cast( substring( domvalue_l, 1, 4 ) as prflcat preserving type ) as ProjectBillingCategory,

      @Analytics.hidden: true
      @Consumption.hidden: true
      dd07t.domvalue_l                                                 as DomainValue,

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #LOW
      @Semantics.text: true
      ddtext                                                           as ProjectBillingCategoryText,

      _ProjectBillingCategory,
      _Language

}
where
      domname  = 'PRFLCAT'
  and as4local = 'A'
```
