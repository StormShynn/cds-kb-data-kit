---
name: I_AVAILYCHGLOGCATTEXT
description: Availychglogcattext
app_component: CA-ATP-ACL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-ACL
  - interface-view
  - text-view
  - text
  - component:CA-ATP-ACL-2CL
  - lob:Cross-Application Components
---
# I_AVAILYCHGLOGCATTEXT

**Availychglogcattext**

| Property | Value |
|---|---|
| App Component | `CA-ATP-ACL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(ddlanguage as spras preserving type )` |
| key `AvailabilityChangeLogCategory` | `cast ( domvalue_l as atpnetchgcategory )` |
| `DomainValue` | `domvalue_l` |
| `AvailyChgLogCategoryDesc` | `cast( ddtext as atp_acl_category_text preserving type )` |
| `_Language` | *Association* |
| `_ACLCat` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl: {
  authorizationCheck: #NOT_REQUIRED
}
@Analytics: {
  dataExtraction.enabled: true,
  internalName: #LOCAL
}
@EndUserText.label: 'Availability Change Log Cat - Text'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel: {
  dataCategory: #TEXT,
  representativeKey: 'AvailabilityChangeLogCategory',
  modelingPattern: #LANGUAGE_DEPENDENT_TEXT,
  supportedCapabilities: [
    #CDS_MODELING_ASSOCIATION_TARGET,
    #CDS_MODELING_DATA_SOURCE,
    #EXTRACTION_DATA_SOURCE,
    #LANGUAGE_DEPENDENT_TEXT,
    #SEARCHABLE_ENTITY,
    #SQL_DATA_SOURCE
  ],
  usageType: {
    dataClass: #META,
    serviceQuality: #A,
    sizeCategory: #S
  }
}
@Search.searchable: true
@VDM: {
  viewType: #BASIC
}

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define view entity I_AvailyChgLogCatText as select from dd07t
  association        to parent I_AvailyChgLogCat as _ACLCat     on $projection.AvailabilityChangeLogCategory = _ACLCat.AvailabilityChangeLogCategory
  association [0..1] to I_Language               as _Language   on $projection.Language = _Language.Language
{
      @ObjectModel.foreignKey.association: '_Language'
      @Semantics.language: true
  key cast(ddlanguage  as spras preserving type )                  as Language,

      @ObjectModel.foreignKey.association: '_ACLCat'
      @ObjectModel.text.element: ['AvailyChgLogCategoryDesc']

  key cast ( domvalue_l as atpnetchgcategory )                     as AvailabilityChangeLogCategory,

      @Consumption.hidden: true
      domvalue_l                                                   as DomainValue,

      @Search: {
        defaultSearchElement: true,
        fuzzinessThreshold: 0.8,
        ranking: #LOW
      }
      @Semantics.text: true
      cast( ddtext as atp_acl_category_text  preserving type ) as AvailyChgLogCategoryDesc,

      /* Associations */
      _Language,
      _ACLCat
}
where
      domname  = 'ATPNETCHGCATEGORY'
  and as4local = 'A'
  and as4vers  = '0000'
```
