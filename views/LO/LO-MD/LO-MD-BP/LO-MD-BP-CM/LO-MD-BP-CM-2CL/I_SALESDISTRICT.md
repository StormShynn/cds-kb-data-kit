---
name: I_SALESDISTRICT
description: "Salesdistrict"
app_component: LO-MD-BP-CM-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - LO
  - LO-MD
  - LO-MD-BP
  - interface-view
  - component:LO-MD-BP-CM-2CL
  - lob:Logistics General
---
# I_SALESDISTRICT

**Salesdistrict**

| Property | Value |
|---|---|
| App Component | `LO-MD-BP-CM-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `SalesDistrict` | ✓ | |  | `bzirk` |  |  |
| `_Text` | | ✓ | | | | |
| `_SalesDistrictHierarchyNode` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_SalesDistrictText` | [0..*] |
| `_SalesDistrictHierarchyNode` | `I_SalesDistrictHierarchyNode` | [0..*] |

## Source Code

```abap
@ClientHandling.algorithm: #SESSION_VARIABLE
@ObjectModel.representativeKey: 'SalesDistrict'
@ObjectModel.usageType.dataClass: #ORGANIZATIONAL
@ObjectModel.usageType.serviceQuality: #A
@ObjectModel.usageType.sizeCategory: #S
@EndUserText.label: 'Sales District'
@Analytics.dataCategory: #DIMENSION
@VDM.viewType: #BASIC
@AccessControl.authorizationCheck:#NOT_REQUIRED
@AbapCatalog.sqlViewName: 'ISDSLSDISTRICT'
@AbapCatalog.buffering.status: #ACTIVE
@AbapCatalog.buffering.type: #FULL
@AbapCatalog.compiler.compareFilter: true
@AbapCatalog.preserveKey: true
@Metadata.ignorePropagatedAnnotations: true
@Analytics.dataExtraction.enabled: true

@Search.searchable: true
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #SQL_DATA_SOURCE,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #ANALYTICAL_DIMENSION,
                                        #SEARCHABLE_ENTITY,
                                        #EXTRACTION_DATA_SOURCE  ]
@ObjectModel.sapObjectNodeType.name: 'SalesDistrict'
define view I_SalesDistrict
  as select from t171

  association [0..*] to I_SalesDistrictText          as _Text                       on $projection.SalesDistrict = _Text.SalesDistrict
  association [0..*] to I_SalesDistrictHierarchyNode as _SalesDistrictHierarchyNode on $projection.SalesDistrict = _SalesDistrictHierarchyNode.SalesDistrict
{
      @Search.defaultSearchElement: true
      @ObjectModel.text.association: '_Text'
      @Search.ranking: #HIGH
      @Search.fuzzinessThreshold: 0.8
      @ObjectModel.hierarchy.association: '_SalesDistrictHierarchyNode'
  key bzirk as SalesDistrict,
      _SalesDistrictHierarchyNode,
      _Text
};
```
