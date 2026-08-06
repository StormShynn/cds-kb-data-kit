---
name: I_PMRPFLXBLCSTRTTYPETEXT
description: Pmrpflxblcstrttypetext
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
# I_PMRPFLXBLCSTRTTYPETEXT

**Pmrpflxblcstrttypetext**

| Property | Value |
|---|---|
| App Component | `PP-PMR-ENG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast(t.ddlanguage as spras preserving type)` |
| key `PMRPConstraintType` | `t.domvalue_l` |
| `DomainValue` | `t.domvalue_l` |
| `PMRPConstraintTypeText` | `t.ddtext` |
| `_Language` | *Association* |
| `_PMRPFlxblCstrtType` | *Association* |

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
@Analytics.technicalName: 'IPMRPFLEXCONTTXT'
@ObjectModel.modelingPattern: #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #LANGUAGE_DEPENDENT_TEXT,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE]
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}

@ObjectModel.representativeKey: 'PMRPConstraintType'
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'PMRP FlxblCstrt Type - Text'
define view entity I_PMRPFlxblCstrtTypeText 
  as select from dd07t as t
  association to parent I_PMRPFlxblCstrtType as _PMRPFlxblCstrtType on $projection.PMRPConstraintType = _PMRPFlxblCstrtType.PMRPConstraintType
  association [0..1] to I_Language as _Language on $projection.Language = _Language.Language
  {
      @ObjectModel.foreignKey.association: '_Language'      
      @Semantics.language: true
      key cast(t.ddlanguage as spras preserving type)    as Language,
      @ObjectModel.foreignKey.association: '_PMRPFlxblCstrtType'
      @ObjectModel.text.element: [ 'PMRPConstraintTypeText']
      key t.domvalue_l as PMRPConstraintType,
      @Consumption.hidden: true
      t.domvalue_l as DomainValue,
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @Semantics.text: true
      t.ddtext     as PMRPConstraintTypeText,
    
      // Associations
      _Language,
      _PMRPFlxblCstrtType
  }
  where t.domname = 'PMRP_CONSTRAINT_TYPE' and
        t.as4local = 'A';
```
