---
name: I_PMRPFLXBLCSTRTPERIODTYPETEXT
description: Pmrpflxblcstrtperiodtypetext
app_component: PP-PMR-ENG-2CL
software_component: SAPSCORE
release_state: released
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
# I_PMRPFLXBLCSTRTPERIODTYPETEXT

**Pmrpflxblcstrtperiodtypetext**

| Property | Value |
|---|---|
| App Component | `PP-PMR-ENG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source |
|---|---|---|---|---|
| `Language` | ✓ | |  | `cast(t.ddlanguage as spras preserving type)` |
| `PMRPConstraintPeriodType` | ✓ | |  | `domvalue_l` |
| `DomainValue` |  | |  | `domvalue_l` |
| `PMRPConstraintPeriodTypeText` |  | |  | `ddtext` |
| `_Language` | | ✓ | | |
| `_PMRPFlxblCstrtPeriodType` | | ✓ | | |

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
@Analytics.technicalName: 'IPMRPFLEXCONPERT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}

@ObjectModel.representativeKey: 'PMRPConstraintPeriodType'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'PMRP Period Type - Text'
define view entity I_PMRPFlxblCstrtPeriodTypeText 
  as select from dd07t as t
  association to parent I_PMRPFlxblCstrtPeriodType as _PMRPFlxblCstrtPeriodType on $projection.PMRPConstraintPeriodType = _PMRPFlxblCstrtPeriodType.PMRPConstraintPeriodType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  {
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
      key cast(t.ddlanguage as spras preserving type) as Language,
      @ObjectModel.foreignKey.association: '_PMRPFlxblCstrtPeriodType'
      @ObjectModel.text.element: [ 'PMRPConstraintPeriodTypeText']
      key t.domvalue_l                                as PMRPConstraintPeriodType,
      @Consumption.hidden: true
      t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      t.ddtext                                        as PMRPConstraintPeriodTypeText,
    
      // Associations
      _Language,
      _PMRPFlxblCstrtPeriodType
  }
  where t.domname = 'PMRP_PERIOD_TYPE' and
        t.as4local = 'A';
```
