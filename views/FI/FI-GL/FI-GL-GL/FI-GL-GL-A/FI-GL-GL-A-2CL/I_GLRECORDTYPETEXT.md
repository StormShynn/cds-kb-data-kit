---
name: I_GLRECORDTYPETEXT
description: Glrecordtypetext
app_component: FI-GL-GL-A-2CL
software_component: SAPSCORE
release_state: released
clean_core_level: A
system_type: public_cloud
source_available: true
tags:
  - FI
  - FI-GL
  - FI-GL-GL
  - interface-view
  - text-view
  - text
  - component:FI-GL-GL-A-2CL
  - lob:Finance
---
# I_GLRECORDTYPETEXT

**Glrecordtypetext**

| Property | Value |
|---|---|
| App Component | `FI-GL-GL-A-2CL` |
| Software Component | `SAPSCORE` |
| Release State | Released (Level A) |
| System Type | S/4HANA Cloud Public Edition |

## Fields

| Field | Data Source |
|---|---|
| key `Language` | `cast( ddlanguage as spras )` |
| key `GLRecordType` | `cast( substring(domvalue_l, 1, 1) as rrcty )` |
| `GLRecordTypeName` | `cast( ddtext as fis_glrecordtypename preserving type )` |
| `_Language` | *Association* |

## Associations

| Alias | Target View | Cardinality |
|---|---|---|
| `_Language` | `I_Language` | [0..1] |

## Source Code

```abap
@VDM.lifecycle.contract.type: #PUBLIC_LOCAL_API
@EndUserText.label: 'General Ledger Record Type - Text'
//@Analytics: { dataExtraction.enabled: true  }
@VDM.viewType: #BASIC
@ObjectModel.dataCategory: #TEXT
@Analytics.technicalName: 'IFIGLRECORDTYPET'
@AccessControl.authorizationCheck: #NOT_REQUIRED
@ObjectModel.representativeKey: 'GLRecordType'
@ObjectModel.usageType.sizeCategory: #S
@ObjectModel.usageType.dataClass:  #MASTER
@ObjectModel.usageType.serviceQuality: #A
@Metadata.ignorePropagatedAnnotations: true 
//@Search.searchable: true // not possible if field is cast to the correct data element. View is not CONTAINS compatible

@ObjectModel.modelingPattern:        #LANGUAGE_DEPENDENT_TEXT
@ObjectModel.supportedCapabilities: [#LANGUAGE_DEPENDENT_TEXT, 
                                     #CDS_MODELING_ASSOCIATION_TARGET, 
                                     #SQL_DATA_SOURCE, 
                                     #CDS_MODELING_DATA_SOURCE]

define view entity I_GLRecordTypeText 
  as select from dd07t
  association[0..1] to I_Language as _Language on $projection.Language = _Language.Language
{
  @Semantics.language
  key cast( ddlanguage as spras ) as Language,
  key cast( substring(domvalue_l, 1, 1) as rrcty ) as GLRecordType,
  @Semantics.text
//  @Search.defaultSearchElement: true
//  @Search.fuzzinessThreshold: 0.8    
  cast( ddtext as fis_glrecordtypename preserving type ) as GLRecordTypeName,
  _Language
  
}
where dd07t.domname = 'RRCTY' and dd07t.as4local = 'A';
```
