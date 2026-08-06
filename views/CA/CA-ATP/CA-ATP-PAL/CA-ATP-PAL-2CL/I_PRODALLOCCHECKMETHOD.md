---
name: I_PRODALLOCCHECKMETHOD
description: Prodalloccheckmethod
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
# I_PRODALLOCCHECKMETHOD

**Prodalloccheckmethod**

| Property | Value |
|---|---|
| App Component | `CA-ATP-PAL-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `ProdAllocCheckMethod` | `cast ( substring( domvalue_l, 1, 2 ) as prodalloccheckmethod preserving type )` |
| `DomainValue` | `domvalue_l` |
| `_Text` | *Association* |

## Source Code

```abap
@EndUserText.label: 'Product Allocation Check Method' //same as DDL description
@VDM.viewType: #BASIC
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@Analytics.dataCategory: #DIMENSION
@Analytics.technicalName: 'IPACHKMETHOD'
@Analytics.dataExtraction.enabled: true
@Analytics.internalName: #LOCAL
@ObjectModel.sapObjectNodeType.name: 'ProductAllocationCheckMethod'
@ObjectModel.representativeKey: 'ProdAllocCheckMethod'
@AccessControl.authorizationCheck: #NOT_REQUIRED 
@ObjectModel.dataCategory: #VALUE_HELP
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
@Search.searchable: true
/*+[hideWarning] { "IDS" : [ "KEY_CHECK" ] }*/
define root view entity I_ProdAllocCheckMethod 
   as select from dd07l
   
   composition [0..*] of I_ProdAllocCheckMethodT as _Text 
{
    @ObjectModel.text.association: '_Text'
key cast ( substring( domvalue_l, 1, 2 ) as prodalloccheckmethod preserving type ) as ProdAllocCheckMethod,
    @Analytics.hidden: true
    @Consumption.hidden: true
    @Search.defaultSearchElement: true
    @Search.ranking: #HIGH
    domvalue_l as DomainValue,
    _Text
}
where domname  = 'PRODALLOCCHECKMETHOD' 
  and as4local = 'A'
  and as4vers  = '0000'
```
