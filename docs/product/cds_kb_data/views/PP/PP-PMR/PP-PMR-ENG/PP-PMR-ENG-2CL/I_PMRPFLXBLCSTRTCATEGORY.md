---
name: I_PMRPFLXBLCSTRTCATEGORY
description: "Pmrpflxblcstrtcategory"
app_component: PP-PMR-ENG-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
atc_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PP
  - PP-PMR
  - PP-PMR-ENG
  - interface-view
  - component:PP-PMR-ENG-2CL
  - lob:Manufacturing
---
# I_PMRPFLXBLCSTRTCATEGORY

**Pmrpflxblcstrtcategory**

| Property | Value |
|---|---|
| App Component | `PP-PMR-ENG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PMRPConstraintCategory` | ✓ | |  | `domvalue_l` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true 
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPMRPFLEXCONCAT'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType: {serviceQuality: #A, sizeCategory: #S, dataClass: #META}
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@Search.searchable: true

@ObjectModel.sapObjectNodeType.name: 'PMRPFlexibleConstraintCategory'
@ObjectModel.representativeKey: 'PMRPConstraintCategory'

@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Category for PMRP FlxblCstrt'
define root view entity I_PMRPFlxblCstrtCategory 
  as select from dd07l as l 
  composition [0..*] of I_PMRPFlxblCstrtCategoryText as _Text 
  {
      @ObjectModel.text.association: '_Text'
      key l.domvalue_l  as PMRPConstraintCategory,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      l.domvalue_l      as DomainValue,
      // Associations 
      _Text
  }
  where l.domname = 'PMRP_CONSTRAINT_CATEGORY' and
        l.as4local = 'A';
```
