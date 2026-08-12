---
name: I_PMRPFLXBLCSTRTTYPE
description: "Pmrpflxblcstrttype"
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
# I_PMRPFLXBLCSTRTTYPE

**Pmrpflxblcstrttype**

| Property | Value |
|---|---|
| App Component | `PP-PMR-ENG-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `PMRPConstraintType` | ✓ | |  | `domvalue_l` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPMRPFLEXCONTYP'
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
@ObjectModel.sapObjectNodeType.name: 'PMRPFlexibleConstraintType'
@ObjectModel.representativeKey: 'PMRPConstraintType'

@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@EndUserText.label: 'Type of PMRP Flexible Constraint'
define root view entity I_PMRPFlxblCstrtType
  as select from dd07l as l
  composition [0..*] of I_PMRPFlxblCstrtTypeText as _Text
  {
      @ObjectModel.text.association: '_Text'
      key l.domvalue_l as PMRPConstraintType,
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      l.domvalue_l     as DomainValue,
      // Associations 
      _Text
  }
  where l.domname = 'PMRP_CONSTRAINT_TYPE' and
        l.as4local = 'A';
```
