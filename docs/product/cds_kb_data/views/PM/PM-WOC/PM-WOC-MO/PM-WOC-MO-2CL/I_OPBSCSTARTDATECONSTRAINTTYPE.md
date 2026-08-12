---
name: I_OPBSCSTARTDATECONSTRAINTTYPE
description: "Opbscstartdateconstrainttype"
app_component: PM-WOC-MO-2CL
software_component: SAPSCORE
release_state: released
dev_ext_status: released
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
# I_OPBSCSTARTDATECONSTRAINTTYPE

**Opbscstartdateconstrainttype**

| Property | Value |
|---|---|
| App Component | `PM-WOC-MO-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `OpBscStartDateConstraintType` | ✓ | |  | `cast( dd07l.domvalue_l as einschra )` |  |  |
| `DomainValue` |  | |  | `domvalue_l` |  |  |
| `_Text` | | ✓ | | | | |

## Source Code

```abap
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IOPSDATCONSTTY'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@Consumption.ranked: true
@EndUserText.label: 'Op Basic Start Date Constraint Type'
@Metadata.ignorePropagatedAnnotations: true
@ObjectModel.dataCategory: #VALUE_HELP
@ObjectModel.modelingPattern: #ANALYTICAL_DIMENSION
@ObjectModel.representativeKey: 'OpBscStartDateConstraintType'
@ObjectModel.sapObjectNodeType.name: 'OpBscStartDateConstraintType'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.supportedCapabilities: [#ANALYTICAL_DIMENSION, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #CDS_MODELING_DATA_SOURCE,
                                     #EXTRACTION_DATA_SOURCE,
                                     #SEARCHABLE_ENTITY,
                                     #SQL_DATA_SOURCE, 
                                     #VALUE_HELP_PROVIDER]
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.dataClass: #META
@ObjectModel.usageType.sizeCategory: #S
@Search.searchable: true
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@VDM.viewType: #BASIC
@ObjectModel.compositionRoot: true

/*+[hideWarning] { "IDS" : [ "KEY_CHECK", "CALCULATED_FIELD_CHECK" ]  } */
define root view entity I_OpBscStartDateConstraintType
  as select from dd07l 
  composition [0..*] of I_OpBscStrtDateConstraintTypeT as _Text
{
      @ObjectModel.text.association: '_Text'
  key cast( dd07l.domvalue_l as einschra ) as OpBscStartDateConstraintType,
      @Analytics.hidden: true
      @Consumption.hidden: true
      @Search.defaultSearchElement: true
      @Search.ranking: #HIGH
      dd07l.domvalue_l as DomainValue,
      @ObjectModel.association.type: [#TO_COMPOSITION_CHILD] 
      _Text
} 
where dd07l.domname  = 'RESTRIKSTR'
  and dd07l.as4local = 'A'
  and dd07l.as4vers  = '0000'
```
