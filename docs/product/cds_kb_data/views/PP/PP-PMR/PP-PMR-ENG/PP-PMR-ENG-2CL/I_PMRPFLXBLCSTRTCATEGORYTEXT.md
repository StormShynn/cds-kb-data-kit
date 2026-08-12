---
name: I_PMRPFLXBLCSTRTCATEGORYTEXT
description: "Pmrpflxblcstrtcategorytext"
app_component: PP-PMR-ENG-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
key_user_ext_status: released
extensible_key_user: no
extensible_dev_ext: no
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PMR
  - PP-PMR-ENG
  - interface-view
  - text-view
  - text
  - component:PP-PMR-ENG-2CL
  - lob:Manufacturing
---
# I_PMRPFLXBLCSTRTCATEGORYTEXT

**Pmrpflxblcstrtcategorytext**

| Property | Value |
|---|---|
| App Component | `PP-PMR-ENG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| Release State (Developer Extensibility) | Released — separate from "Release State" above; see [dev-ext check procedure](https://github.com/StormShynn/cds-kb-data-kit/blob/main/docs/product/cds_kb_data/hook/quy-trinh-check-cds-released-developer-extensibility.md) before `association to`/`select from` this entity in custom ABAP Developer Extensibility CDS views |
| Release State (Key User Extensibility) | Released — can this entity be used as a data source when building a new custom CDS view via the no-code/low-code "Custom CDS Views" app; independent from the Developer Extensibility row above |
| Extensible (Key User Extensibility) | No — can custom fields be added directly to THIS entity itself via Key User Extensibility (a different question from "used as a data source" above) |
| Extensible (Developer Extensibility) | No — can custom fields be added directly to THIS entity itself via ABAP Developer Extensibility |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |  |  |
| `PMRPConstraintCategory` | ✓ | |  | `domvalue_l` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `PMRPConstraintCategoryText` |  | |  | `ddtext` |  |  |
| `_Language` | | ✓ | | | | |
| `_PMRPFlxblCstrtCategory` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IPMRPFLEXCONCATT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@ObjectModel.representativeKey: 'PMRPConstraintCategory'

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Category for PMRP FlxblCstrt - Text'
define view entity I_PMRPFlxblCstrtCategoryText 
  as select from dd07t as t
  association to parent I_PMRPFlxblCstrtCategory as _PMRPFlxblCstrtCategory on $projection.PMRPConstraintCategory = _PMRPFlxblCstrtCategory.PMRPConstraintCategory
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  {
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
      key cast(t.ddlanguage as spras preserving type) as Language,
      @ObjectModel.foreignKey.association: '_PMRPFlxblCstrtCategory'
      @ObjectModel.text.element: [ 'PMRPConstraintCategoryText']
      key t.domvalue_l                                as PMRPConstraintCategory,
      @Consumption.hidden: true
      t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      t.ddtext                                        as PMRPConstraintCategoryText,
    
      // Associations
      _Language,
      _PMRPFlxblCstrtCategory
  }
  where t.domname = 'PMRP_CONSTRAINT_CATEGORY' and
        t.as4local = 'A';
```
