---
name: I_COLLECTIVEALLOCATIONTYPE
description: Collectiveallocationtype
app_component: CA-ATP-PAL-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - CA
  - CA-ATP
  - CA-ATP-PAL
  - interface-view
  - component:CA-ATP-PAL-2CL
  - lob:Cross-Application Components
---
# I_COLLECTIVEALLOCATIONTYPE

**Collectiveallocationtype**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Key | Association | Via | Source | Type | Description |
|---|---|---|---|---|---|---|
| `CollectiveAllocationType` | ✓ | |  | `cast ( substring( domvalue_l, 1, 2 ) as collectiveallocationtype preserving type )` |  |  |
| `_Text` | | ✓ | | | | |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Text` | `I_CollectiveAllocationTypeT` | [0..*] |

## Source Code

```abap
@EndUserText.label: 'Collective Allocation Type' //same as DDL description
@ObjectModel.representativeKey: 'CollectiveAllocationType'
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.dataExtraction.enabled: true
@AccessControl.authorizationCheck: #NOT_REQUIRED //or #CHECK 
@AbapCatalog.sqlViewName: 'ICOLLALLOC'
@ClientHandling.algorithm: #SESSION_VARIABLE 
@ObjectModel.sapObjectNodeType.name: 'ProdCollectiveAllocationType'
@ObjectModel.usageType.serviceQuality: #C
@ObjectModel.usageType.sizeCategory: #L
@ObjectModel.resultSet.sizeCategory: #XS
@ObjectModel.usageType.dataClass: #META
@ObjectModel.modelingPattern:           #ANALYTICAL_DIMENSION
@ObjectModel.supportedCapabilities:  [  #ANALYTICAL_DIMENSION,
                                        #CDS_MODELING_DATA_SOURCE,
                                        #CDS_MODELING_ASSOCIATION_TARGET,
                                        #SQL_DATA_SOURCE,
                                        #EXTRACTION_DATA_SOURCE,
                                        #VALUE_HELP_PROVIDER,
                                        #SEARCHABLE_ENTITY                   ]
@Metadata.ignorePropagatedAnnotations: true
define view I_CollectiveAllocationType //must start with "I_"; same as DDL source name in upper-camelcase notation 
   as select from dd07l
   association [0..*] to I_CollectiveAllocationTypeT as _Text 
      on $projection.CollectiveAllocationType = _Text.CollectiveAllocationType 
{
 @ObjectModel.text.association: '_Text'
    key cast ( substring( domvalue_l, 1, 2 ) as collectiveallocationtype preserving type ) as CollectiveAllocationType
   , _Text
}
where domname  = 'COLLECTIVEALLOCATIONTYPE' 
  and as4local = 'A'
```
