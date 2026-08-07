---
name: I_ABCINDICATOR
description: Abcindicator
app_component: PM-EQM-EQ-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - PM
  - PM-EQM
  - PM-EQM-EQ
  - interface-view
  - component:PM-EQM-EQ-2CL
  - lob:Plant Maintenance
---
# I_ABCINDICATOR

**Abcindicator**

| Property | Value |
|---|---|
| App Component | `PM-EQM-EQ-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `ABCIndicator` | ✓ | |  | `abckz` |  |  |
| `ABCIndicatorCodeOID` |  | |  | `cast( t370c.abckz as abcindicator_oid )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_ABCIndicatorText` | [0..*] |

## Source Code

```abap
@AbapCatalog.sqlViewName: 'IABCINDICATOR'
@AbapCatalog.compiler.compareFilter: true
@AccessControl.authorizationCheck: #NOT_REQUIRED
@Analytics.dataCategory: #DIMENSION
@ClientHandling.algorithm: #SESSION_VARIABLE
@EndUserText.label: 'ABC Indicator'
@ObjectModel.representativeKey: 'ABCIndicator'
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.semanticKey:  [ 'ABCIndicator' ]
@ObjectModel.usageType.dataClass: #CUSTOMIZING
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@VDM.viewType: #BASIC

@Metadata.ignorePropagatedAnnotations
@Search.searchable: true
@ObjectModel.supportedCapabilities: [#SQL_DATA_SOURCE, #CDS_MODELING_DATA_SOURCE, #CDS_MODELING_ASSOCIATION_TARGET]
@ObjectModel.alternativeKey:[{id:'OID',element:['ABCIndicatorCodeOID']}] 
//@ObjectModel.sapObjectNodeType.name:'ABCIndicatorCode' 
@ObjectModel.objectIdentifier.oidElement:'ABCIndicatorCodeOID' 
define view I_ABCIndicator
  as select from           t370c
  association [0..*] to I_ABCIndicatorText as _Text on $projection.ABCIndicator = _Text.ABCIndicator
{

      @Search.defaultSearchElement: true
      @Search.fuzzinessThreshold: 0.8
      @Search.ranking: #HIGH
      @ObjectModel.text.association: '_Text'
  key t370c.abckz as ABCIndicator,
      @ObjectModel.filter.enabled:false
      @ObjectModel.sort.enabled:false
      
      cast( t370c.abckz as abcindicator_oid ) as ABCIndicatorCodeOID, //use your own OID field name


      _Text
}
```
